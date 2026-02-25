# Phase 5: Voice Agent Component — Design

## Decisions

- **Desktop UX**: Bottom-right floating panel. Dashboard stays visible alongside the agent.
- **Mobile UX**: Full-screen overlay (standard mobile voice pattern).
- **Tech approach**: ElevenLabs Orb (3D, Three.js) for visual feedback + `useConversation` hook for SDK wiring.
- **Interaction model**: Tap mic to start → live two-way conversation → tap End Call to stop.
- **Scope**: Voice-only for now. Text chat deferred (component structured to support it later via `textOnly` mode).

## Component Structure

```
VoiceAgent.tsx (client component, added to layout.tsx)
├── Floating Mic Button (fixed bottom-right, visible when idle)
├── Desktop Panel (fixed bottom-right card, ≥768px, visible when connected)
│   ├── ElevenLabs Orb (3D, audio-reactive, SmartCrowd blue)
│   ├── Status text (Listening / Speaking / Thinking / Connecting)
│   └── End Call button (red)
└── Mobile Overlay (full-screen fixed, <768px, visible when connected)
    ├── ElevenLabs Orb
    ├── Status text
    └── End Call button
```

## Connection Flow

1. User taps floating mic button
2. Component fetches signed URL from `/api/signed-url` (existing route)
3. Calls `conversation.startSession({ signedUrl })` via `useConversation` hook
4. Agent greets user, live conversation begins
5. User taps "End Call" → `conversation.endSession()` → back to idle

## Tool Wiring

Client-side tools (all existing in `agent-tools.ts`):
- `lookup_property` → `lookupProperty()`
- `search_properties` → `searchProperties()`
- `calculate_roi` → `calculateRoi()`
- `get_renovation_status` → `getRenovationStatus()`

Tools query in-memory property data. No API routes needed.

## Visual Design

### Floating Mic Button
- Fixed `bottom-6 right-6`, circular, SmartCrowd blue (#2563EB), white mic icon
- Subtle pulse animation, scale on hover

### Desktop Panel (≥768px)
- Fixed bottom-right, ~320px wide, ~400px tall
- White card, rounded corners, shadow
- Orb centered, status text below, red End Call button at bottom
- Slide-up animation on connect

### Mobile Overlay (<768px)
- Full-screen fixed, dark semi-transparent background
- Orb centered vertically, status text below, End Call at bottom
- Fade-in animation

### Orb Configuration
- ElevenLabs Orb component (Three.js)
- Colors: `["#2563EB", "#3B82F6"]` (SmartCrowd blue)
- States mapped from SDK: listening, talking, thinking

### State Mapping
| SDK State | Status Text | Orb State |
|-----------|------------|-----------|
| Connecting | "Connecting..." | null |
| Connected + listening | "Listening..." | listening |
| Connected + speaking | "Speaking..." | talking |
| Processing tool call | "Thinking..." | thinking |
| Error | "Connection lost" | null |

## Dependencies to Add

- `three` (via ElevenLabs Orb)
- `@react-three/fiber` (via ElevenLabs Orb)
- `@react-three/drei` (via ElevenLabs Orb)

## Files to Create/Modify

- **Create**: `src/components/VoiceAgent.tsx` — main voice agent component
- **Create**: `src/components/ui/orb.tsx` (+ supporting files) — installed via ElevenLabs CLI
- **Modify**: `src/app/layout.tsx` — add `<VoiceAgent />` to the layout
