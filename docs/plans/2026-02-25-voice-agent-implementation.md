# Phase 5: Voice Agent Component — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a floating voice agent component that connects to ElevenLabs Conversational AI, displays a 3D Orb animation, and wires up the 4 existing client-side property tools.

**Architecture:** A single `VoiceAgent.tsx` client component manages the full lifecycle: idle (floating mic button) → connecting → live conversation (responsive panel/overlay with Orb) → disconnected. Uses `useConversation` hook from `@elevenlabs/react` with signed URL auth via the existing `/api/signed-url` route. Client tools from `agent-tools.ts` are wired directly into the hook.

**Tech Stack:** Next.js 16 (App Router), `@elevenlabs/react` (useConversation), ElevenLabs UI Orb (Three.js/React Three Fiber), Tailwind v4, lucide-react.

**Design doc:** `docs/plans/2026-02-25-voice-agent-design.md`

---

### Task 1: Install ElevenLabs Orb Component + Dependencies

**Files:**
- Modify: `components.json` (add ElevenLabs registry)
- Create: `src/components/ui/orb.tsx` (installed by CLI)
- Modify: `package.json` (new deps: three, @react-three/fiber, @react-three/drei)

**Step 1: Add ElevenLabs registry to components.json**

Add the ElevenLabs UI registry so the shadcn CLI can fetch their components:

```json
"registries": {
  "@elevenlabs": "https://ui.elevenlabs.io/r"
}
```

**Step 2: Install the Orb component via CLI**

Run:
```bash
npx shadcn@latest add @elevenlabs/orb
```

This will install `three`, `@react-three/fiber`, `@react-three/drei`, `@types/three` and create `src/components/ui/orb.tsx`.

**Step 3: Verify the install**

Run:
```bash
ls src/components/ui/orb.tsx && cat package.json | grep -E "three|react-three"
```

Expected: File exists and dependencies are in `package.json`.

**Step 4: Verify build passes**

Run:
```bash
npm run build 2>&1 | tail -20
```

Expected: Build succeeds. If there are Three.js SSR issues, we may need to wrap the Orb in a dynamic import with `ssr: false` — handle in Task 2 if needed.

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: install ElevenLabs Orb component and Three.js dependencies"
```

---

### Task 2: Build VoiceAgent Component — Core Hook Wiring

**Files:**
- Create: `src/components/VoiceAgent.tsx`

This task builds the component skeleton with `useConversation` hook, tool wiring, and state management. No UI yet — just the logic.

**Step 1: Create VoiceAgent.tsx with hook + tools + state**

Create `src/components/VoiceAgent.tsx`:

```tsx
"use client";

import { useState, useCallback } from "react";
import { useConversation } from "@elevenlabs/react";
import {
  lookupProperty,
  searchProperties,
  calculateRoi,
  getRenovationStatus,
} from "@/lib/agent-tools";

type AgentState = "idle" | "connecting" | "connected" | "error";
type Mode = "listening" | "speaking" | "thinking" | null;

export default function VoiceAgent() {
  const [agentState, setAgentState] = useState<AgentState>("idle");
  const [mode, setMode] = useState<Mode>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const conversation = useConversation({
    clientTools: {
      lookup_property: (params: { property_id: string }) => {
        setMode("thinking");
        const result = lookupProperty(params);
        return result;
      },
      search_properties: (params: {
        area?: string;
        type?: string;
        status?: string;
        min_yield?: number;
      }) => {
        setMode("thinking");
        const result = searchProperties(params);
        return result;
      },
      calculate_roi: (params: {
        property_id: string;
        investment_amount: number;
        holding_years?: number;
      }) => {
        setMode("thinking");
        const result = calculateRoi(params);
        return result;
      },
      get_renovation_status: (params: { property_id: string }) => {
        setMode("thinking");
        const result = getRenovationStatus(params);
        return result;
      },
    },
    onConnect: () => {
      setAgentState("connected");
      setMode("listening");
      setErrorMsg(null);
    },
    onDisconnect: () => {
      setAgentState("idle");
      setMode(null);
    },
    onModeChange: (newMode: { mode: string }) => {
      if (newMode.mode === "speaking") setMode("speaking");
      else if (newMode.mode === "listening") setMode("listening");
    },
    onError: (error: unknown) => {
      console.error("ElevenLabs error:", error);
      setAgentState("error");
      setErrorMsg("Connection lost. Tap to try again.");
    },
  });

  const startConversation = useCallback(async () => {
    setAgentState("connecting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/signed-url");
      if (!res.ok) throw new Error("Failed to get signed URL");
      const { signedUrl } = await res.json();
      await conversation.startSession({ signedUrl });
    } catch (err) {
      console.error("Failed to start conversation:", err);
      setAgentState("error");
      setErrorMsg("Could not connect. Check your internet and try again.");
    }
  }, [conversation]);

  const endConversation = useCallback(async () => {
    await conversation.endSession();
    setAgentState("idle");
    setMode(null);
  }, [conversation]);

  // Placeholder UI — replaced in Task 3
  return (
    <div>
      <p>Agent: {agentState}</p>
      <p>Mode: {mode}</p>
      {errorMsg && <p>{errorMsg}</p>}
      {agentState === "idle" || agentState === "error" ? (
        <button onClick={startConversation}>Start</button>
      ) : (
        <button onClick={endConversation}>End</button>
      )}
    </div>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run:
```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: No errors related to VoiceAgent.tsx. If `useConversation` types differ from what we expected, adjust the callback signatures.

**Step 3: Commit**

```bash
git add src/components/VoiceAgent.tsx && git commit -m "feat: add VoiceAgent component with useConversation hook and tool wiring"
```

---

### Task 3: Build VoiceAgent UI — Floating Button + Responsive Panel/Overlay

**Files:**
- Modify: `src/components/VoiceAgent.tsx` (replace placeholder UI)

This task adds the full visual UI: floating mic button (idle), desktop panel (≥md), mobile overlay (<md), Orb integration, status text, End Call button.

**Step 1: Add the Orb import with dynamic loading**

Three.js requires browser APIs, so we need to dynamically import the Orb to avoid SSR issues:

At the top of `VoiceAgent.tsx`, add:

```tsx
import dynamic from "next/dynamic";
import { Mic, PhoneOff } from "lucide-react";

const Orb = dynamic(
  () => import("@/components/ui/orb").then((mod) => ({ default: mod.Orb })),
  { ssr: false }
);
```

**Step 2: Replace the placeholder return with full UI**

Replace the return statement in VoiceAgent with the full responsive UI. The component renders:
- When `idle` or `error`: A floating circular mic button (fixed bottom-6 right-6)
- When `connecting` or `connected`: A responsive container that is a bottom-right panel on desktop (md+) and a full-screen overlay on mobile (<md)

```tsx
  // Map our state to Orb's agentState prop
  const orbState =
    mode === "speaking"
      ? "talking"
      : mode === "listening"
        ? "listening"
        : mode === "thinking"
          ? "thinking"
          : null;

  const statusText =
    agentState === "connecting"
      ? "Connecting..."
      : mode === "speaking"
        ? "Speaking..."
        : mode === "listening"
          ? "Listening..."
          : mode === "thinking"
            ? "Thinking..."
            : "";

  const isActive = agentState === "connecting" || agentState === "connected";

  return (
    <>
      {/* Floating Mic Button — visible when idle or error */}
      {!isActive && (
        <button
          onClick={startConversation}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sc-blue text-white shadow-lg transition-transform hover:scale-110 active:scale-95 animate-pulse"
          aria-label="Start voice assistant"
        >
          <Mic className="h-6 w-6" />
        </button>
      )}

      {/* Active conversation UI */}
      {isActive && (
        <>
          {/* Mobile: full-screen overlay (below md breakpoint) */}
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 md:hidden">
            <div className="flex flex-col items-center gap-6">
              <div className="h-48 w-48">
                <Orb
                  colors={["#2563EB", "#3B82F6"]}
                  agentState={orbState}
                />
              </div>
              <p className="text-lg font-medium text-white">{statusText}</p>
              {errorMsg && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}
              <button
                onClick={endConversation}
                className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
              >
                <PhoneOff className="h-4 w-4" />
                End Call
              </button>
            </div>
          </div>

          {/* Desktop: bottom-right panel (md and above) */}
          <div className="fixed bottom-6 right-6 z-50 hidden w-80 rounded-2xl bg-white p-6 shadow-2xl md:block animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex flex-col items-center gap-4">
              <div className="h-40 w-40">
                <Orb
                  colors={["#2563EB", "#3B82F6"]}
                  agentState={orbState}
                />
              </div>
              <p className="text-sm font-medium text-sc-text-dark">
                {statusText}
              </p>
              {errorMsg && (
                <p className="text-xs text-red-500">{errorMsg}</p>
              )}
              <button
                onClick={endConversation}
                className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
              >
                <PhoneOff className="h-4 w-4" />
                End Call
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
```

**Step 3: Verify build**

Run:
```bash
npm run build 2>&1 | tail -20
```

Expected: Build succeeds. Watch for SSR/dynamic import issues with Three.js.

**Step 4: Commit**

```bash
git add src/components/VoiceAgent.tsx && git commit -m "feat: add responsive voice agent UI with Orb, floating button, and panel/overlay"
```

---

### Task 4: Wire VoiceAgent into Layout

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Add VoiceAgent to the layout**

The layout is a server component, so we import VoiceAgent (a client component) with dynamic import to avoid SSR issues with Three.js.

In `src/app/layout.tsx`, add the import:

```tsx
import dynamic from "next/dynamic";

const VoiceAgent = dynamic(() => import("@/components/VoiceAgent"), {
  ssr: false,
});
```

Then add `<VoiceAgent />` inside `<body>`, after the flex container:

```tsx
<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-1 overflow-y-auto bg-sc-gray-bg p-6">
      {children}
    </main>
  </div>
  <VoiceAgent />
</body>
```

**Step 2: Verify build**

Run:
```bash
npm run build 2>&1 | tail -20
```

Expected: Build succeeds with no SSR errors.

**Step 3: Commit**

```bash
git add src/app/layout.tsx && git commit -m "feat: add VoiceAgent to root layout"
```

---

### Task 5: Manual Testing + Fixes

**Files:**
- Possibly modify: `src/components/VoiceAgent.tsx`, `src/app/layout.tsx`

**Step 1: Start dev server and visually verify**

Run:
```bash
npm run dev
```

Open `http://localhost:3000` in Chrome. Check:

1. Floating mic button visible — bottom-right, blue circle with mic icon, pulsing
2. Click mic button — should attempt to connect (browser mic permission prompt if first time)
3. Orb displays — the 3D orb should render in the panel/overlay
4. Responsive — resize browser below 768px to verify full-screen overlay vs panel

**Step 2: Verify tool calls work with live agent**

With the real Agent ID now in `.env.local`:
- Click mic, wait for greeting
- Say "What's the yield on the IMPZ property?"
- Agent should call `lookup_property` → return 6.25% yield
- Say "How far along is the Sidra villa renovation?"
- Agent should call `get_renovation_status` → return 80%
- Click End Call

**Step 3: Fix any issues found**

Common issues to watch for:
- Three.js canvas sizing: may need explicit `style={{ width: '100%', height: '100%' }}` on the Orb wrapper
- `onModeChange` callback shape may differ from documented — check console for the actual event object
- Mic permission denied: should show error state, not crash

**Step 4: Commit any fixes**

```bash
git add -A && git commit -m "fix: address voice agent testing issues"
```

---

### Task 6: Update PLAN.md — Mark Phase 5 Complete

**Files:**
- Modify: `PLAN.md`

**Step 1: Update Phase 5 status**

Change Phase 5 header to show COMPLETED and mark sub-items as done.

**Step 2: Add VoiceAgent to the file structure section**

Update the file tree to show the new files with checkmarks.

**Step 3: Commit**

```bash
git add PLAN.md && git commit -m "docs: mark Phase 5 complete in PLAN.md"
```
