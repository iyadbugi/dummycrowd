"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useConversation } from "@elevenlabs/react";
import { Phone, PhoneOff, Send, MessageSquare, X, Minus } from "lucide-react";
import { wordsToDigits } from "@/lib/text-format";
import {
  calculateRoi,
  getRenovationStatus,
  navigateToProperty,
  startInvestment,
} from "@/lib/agent-tools";
import {
  getCurrentTab,
  getTimeOfDay,
  getLivePropertyCount,
} from "@/lib/dashboard-context";
import type { AgentState as OrbAgentState } from "@/components/ui/orb";

/* ------------------------------------------------------------------ */
/*  iOS Safari audio unlock                                            */
/* ------------------------------------------------------------------ */

/**
 * Unlock the Web Audio API on iOS Safari. Must be called synchronously
 * inside a user-gesture (tap/click) handler, before any async work.
 * After this, subsequent AudioContext instances created by the SDK
 * will start in the "running" state instead of "suspended".
 */
function unlockAudioForIOS(): void {
  try {
    const AudioCtx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const buf = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
    // Keep the context alive briefly so the unlock persists through
    // the SDK's async session setup, then clean up.
    setTimeout(() => ctx.close().catch(() => {}), 5000);
  } catch {
    // Best-effort — ignore errors on non-Safari browsers
  }
}

/* ------------------------------------------------------------------ */
/*  Orb (lazy-loaded, no SSR)                                         */
/* ------------------------------------------------------------------ */

// Slice forest-green orb palette (matches breathing gradient in Slice prototype)
const ORB_COLORS: [string, string] = ["#A8C5AE", "#5A8566"];

function OrbFallback() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-3/5 w-3/5 rounded-full bg-[radial-gradient(circle_at_30%_30%,#B8D0BD,#8AAE92_60%,#4F7A5C)] animate-pulse opacity-80" />
    </div>
  );
}

const Orb = dynamic(
  () => import("@/components/ui/orb").then((mod) => ({ default: mod.Orb })),
  { ssr: false, loading: () => <OrbFallback /> }
);

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ConnectionState = "idle" | "connecting" | "connected" | "error";
type AgentMode = "listening" | "speaking" | "thinking" | null;
type View = "minimized" | "idle" | "voice" | "chat";

interface ChatMessage {
  role: "user" | "agent";
  text: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VoiceAgent() {
  const [view, setView] = useState<View>("minimized");
  const [connectionState, setConnectionState] =
    useState<ConnectionState>("idle");
  const [agentMode, setAgentMode] = useState<AgentMode>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [viewBeforeMinimize, setViewBeforeMinimize] = useState<View>("idle");
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suppressFirstMessageRef = useRef(false);
  const signedUrlRef = useRef<string | null>(null);
  const isTextOnlySessionRef = useRef(false);

  const isChat = view === "chat";

  const conversation = useConversation({
    micMuted: isChat || view === "idle" || (view === "minimized" && viewBeforeMinimize !== "voice"),
    clientTools: {
      calculate_roi: (params: {
        property_id: string;
        investment_amount: number;
        holding_years?: number;
      }) => {
        setAgentMode("thinking");
        return calculateRoi(params);
      },
      get_renovation_status: (params: { property_id: string }) => {
        setAgentMode("thinking");
        return getRenovationStatus(params);
      },
      navigate_to_property: (params: { property_code: string }) => {
        return navigateToProperty(params);
      },
      start_investment: (params: {
        property_code: string;
        suggested_amount?: number;
      }) => {
        return startInvestment(params);
      },
    },
    onConnect: () => {
      setConnectionState("connected");
      setAgentMode("listening");
      setErrorMsg(null);
    },
    onDisconnect: () => {
      setConnectionState("idle");
      setAgentMode(null);
    },
    onModeChange: (m: { mode: string }) => {
      if (m.mode === "speaking") setAgentMode("speaking");
      else if (m.mode === "listening") setAgentMode("listening");
    },
    onMessage: (props: { message: string; source: string; role: string }) => {
      const clean = props.message
        .replace(/<\/?[a-zA-Z][a-zA-Z0-9]*>/gi, "")
        .replace(/\[[a-z]+(?:ing)?\]\s*/gi, "")
        .replace(/([a-zA-Z])(\d)/g, "$1 $2")
        .replace(/(\d)([a-zA-Z])/g, "$1 $2")
        .trim();
      if (!clean) return;
      if (props.role === "agent") {
        if (suppressFirstMessageRef.current) {
          suppressFirstMessageRef.current = false;
          return;
        }
        setWaitingForResponse(false);
        setMessages((prev) => [...prev, { role: "agent", text: wordsToDigits(clean) }]);
      } else if (props.role === "user") {
        setMessages((prev) => [...prev, { role: "user", text: clean }]);
      }
    },
    onError: (error: unknown) => {
      console.error("ElevenLabs error:", error);
      setConnectionState("error");
      setWaitingForResponse(false);
      setErrorMsg("Connection lost. Tap to try again.");
    },
  });

  // Pre-fetch signed URL when panel opens so startSession can use it immediately
  const prefetchSignedUrl = useCallback(async () => {
    try {
      const res = await fetch("/api/signed-url");
      if (!res.ok) return;
      const { signedUrl } = await res.json();
      signedUrlRef.current = signedUrl;
    } catch {
      // Silently fail — startSession will fetch if needed
    }
  }, []);

  // Pre-fetch when panel opens to idle
  useEffect(() => {
    if (view === "idle") {
      prefetchSignedUrl();
    }
  }, [view, prefetchSignedUrl]);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, waitingForResponse]);

  // Scroll to bottom when restoring chat from minimized
  useEffect(() => {
    if (view === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
    }
  }, [view]);

  // Auto-minimize when navigating to a property (panel covers cards on mobile)
  useEffect(() => {
    function handleNavigate() {
      if (view !== "minimized") {
        setViewBeforeMinimize(view);
        setView("minimized");
      }
    }
    window.addEventListener("navigate-to-property", handleNavigate);
    return () => window.removeEventListener("navigate-to-property", handleNavigate);
  }, [view, conversation]);

  // Tab context updates
  useEffect(() => {
    function handleTabChange(e: Event) {
      const { tab } = (e as CustomEvent).detail;
      if (connectionState === "connected") {
        conversation.sendContextualUpdate(
          `The user just switched to the ${tab} properties tab.`
        );
      }
    }
    window.addEventListener("dashboard-tab-change", handleTabChange);
    return () =>
      window.removeEventListener("dashboard-tab-change", handleTabChange);
  }, [connectionState, conversation]);

  /* ---- Actions ---- */

  const startSession = useCallback(async (options?: { textOnly?: boolean }): Promise<boolean> => {
    const textOnly = options?.textOnly ?? false;
    setConnectionState("connecting");
    setErrorMsg(null);
    setMessages([]);
    isTextOnlySessionRef.current = textOnly;
    try {
      // Use pre-fetched URL if available, otherwise fetch now
      let signedUrl = signedUrlRef.current;
      if (!signedUrl) {
        const res = await fetch("/api/signed-url");
        if (!res.ok) throw new Error("Failed to get signed URL");
        const data = await res.json();
        signedUrl = data.signedUrl;
      }
      // Clear the cached URL (single use)
      signedUrlRef.current = null;

      await conversation.startSession({
        signedUrl: signedUrl!,
        textOnly,
        dynamicVariables: {
          time_of_day: getTimeOfDay(),
          current_tab: getCurrentTab(),
          live_property_count: getLivePropertyCount(),
        },
        workletPaths: {
          rawAudioProcessor: "/elevenlabs/rawAudioProcessor.js",
          audioConcatProcessor: "/elevenlabs/audioConcatProcessor.js",
        },
        libsampleratePath: "/elevenlabs/libsamplerate.worklet.js",
      } as Parameters<typeof conversation.startSession>[0]);
      return true;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("cancelled") || msg.includes("canceled")) {
        setConnectionState("idle");
        setAgentMode(null);
        return false;
      }
      console.error("Failed to start:", err);
      setConnectionState("error");
      setErrorMsg(msg || "Could not connect. Try again.");
      return false;
    }
  }, [conversation]);

  const endSession = useCallback(async () => {
    await conversation.endSession();
    setConnectionState("idle");
    setAgentMode(null);
    setMessages([]);
    setWaitingForResponse(false);
    isTextOnlySessionRef.current = false;
    setView("minimized");
  }, [conversation]);

  const handleCallStart = useCallback(async () => {
    unlockAudioForIOS(); // Must be synchronous, before any await
    setView("voice");
    if (connectionState !== "connected") {
      await startSession();
    }
    conversation.setVolume({ volume: 1 });
  }, [connectionState, startSession, conversation]);

  const handleSendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;
      setView("chat");
      conversation.setVolume({ volume: 0 });
      if (connectionState !== "connected") {
        suppressFirstMessageRef.current = true;
        const ok = await startSession({ textOnly: true });
        if (!ok) return;
        conversation.setVolume({ volume: 0 });
      }
      setMessages((prev) => [...prev, { role: "user", text: text.trim() }]);
      setWaitingForResponse(true);
      conversation.sendUserMessage(text.trim());
      setTextInput("");
    },
    [connectionState, startSession, conversation]
  );

  const minimize = useCallback(() => {
    setViewBeforeMinimize(view === "minimized" ? "idle" : view);
    setView("minimized");
  }, [view]);

  const expand = useCallback(() => {
    const restoreTo = connectionState === "connected" ? viewBeforeMinimize : "idle";
    setView(restoreTo);
    if (restoreTo === "voice") {
      conversation.setVolume({ volume: 1 });
    }
  }, [connectionState, viewBeforeMinimize, conversation]);

  const switchToChat = useCallback(() => {
    setView("chat");
    conversation.setVolume({ volume: 0 });
  }, [conversation]);

  const switchToVoice = useCallback(async () => {
    unlockAudioForIOS(); // Must be synchronous, before any await
    // If current session is text-only, restart with audio
    if (isTextOnlySessionRef.current && connectionState === "connected") {
      await conversation.endSession();
      setConnectionState("idle");
      setAgentMode(null);
      isTextOnlySessionRef.current = false;
      handleCallStart();
      return;
    }
    setView("voice");
    conversation.setVolume({ volume: 1 });
  }, [conversation, connectionState, handleCallStart]);

  /* ---- Derived state ---- */

  const orbState: OrbAgentState =
    agentMode === "speaking"
      ? "talking"
      : agentMode === "listening"
        ? "listening"
        : agentMode === "thinking"
          ? "thinking"
          : null;

  const statusText =
    connectionState === "connecting"
      ? "Connecting..."
      : agentMode === "speaking"
        ? "Sara is speaking"
        : agentMode === "listening"
          ? "Listening..."
          : agentMode === "thinking"
            ? "Thinking..."
            : "";

  /* ---- Render ---- */

  // State: Minimized FAB pill (Slice style — dark ink-900, forest orb)
  const isActive = connectionState === "connected" || connectionState === "connecting";
  if (view === "minimized") {
    return (
      <button
        onClick={expand}
        className="fixed bottom-[84px] md:bottom-5 right-4 md:right-5 z-50 flex items-center gap-2.5 rounded-full bg-ink-900 pl-2 pr-4 py-2 text-[12.5px] font-medium text-paper shadow-pop transition-all duration-200 ease-slice hover:brightness-110 active:scale-[0.98] cursor-pointer"
        aria-label={isActive ? "Expand Sara" : "Talk to Sara"}
      >
        <div className="h-[26px] w-[26px] shrink-0 overflow-hidden rounded-full">
          <Orb colors={ORB_COLORS} agentState={isActive ? orbState : null} />
        </div>
        <span className="whitespace-nowrap">
          {isActive ? "Sara is active" : "Talk to Sara"}
        </span>
        {isActive && (
          <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#7FB08C]" />
        )}
      </button>
    );
  }

  // Panel container (shared across idle, voice, chat)
  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-paper md:inset-auto md:bottom-5 md:right-5 md:h-[540px] md:w-[380px] md:rounded-md md:border md:border-hairline md:shadow-pop">
      {/* ---- Header ---- */}
      <div className="flex shrink-0 items-center justify-between border-b border-hairline-2 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-forest-500 sl-breathe" />
          <span className="text-[13px] font-medium tracking-[0.04em] text-ink-900 uppercase">
            Sara
          </span>
        </div>
        <div className="flex items-center gap-1">
          {connectionState === "connected" && view === "voice" && (
            <button
              onClick={switchToChat}
              className="flex h-7 w-7 items-center justify-center rounded-sm text-ink-600 transition-colors hover:bg-sand-100 hover:text-ink-900"
              title="Switch to chat"
            >
              <MessageSquare className="h-3.5 w-3.5" strokeWidth={1.6} />
            </button>
          )}
          {connectionState === "connected" && view === "chat" && (
            <button
              onClick={switchToVoice}
              className="flex h-7 w-7 items-center justify-center rounded-sm text-ink-600 transition-colors hover:bg-sand-100 hover:text-ink-900"
              title="Switch to voice"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
            </button>
          )}
          <button
            onClick={minimize}
            className="flex h-7 w-7 items-center justify-center rounded-sm text-ink-600 transition-colors hover:bg-sand-100 hover:text-ink-900"
            title="Minimize"
          >
            <Minus className="h-4 w-4" strokeWidth={1.6} />
          </button>
          <button
            onClick={
              connectionState === "connected"
                ? endSession
                : () => setView("minimized")
            }
            className="flex h-7 w-7 items-center justify-center rounded-sm text-ink-600 transition-colors hover:bg-sand-100 hover:text-terra-700"
            title={connectionState === "connected" ? "End session" : "Close"}
          >
            <X className="h-4 w-4" strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* ---- IDLE: Orb invitation ---- */}
      {view === "idle" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-5">
          <button
            onClick={handleCallStart}
            className="group h-40 w-40 cursor-pointer rounded-full transition-transform hover:scale-105 active:scale-95"
            aria-label="Start voice call"
          >
            <Orb colors={ORB_COLORS} agentState={null} />
          </button>
          <p className="font-mono text-[11px] text-ink-500">
            Tap the orb to speak, or type below
          </p>
        </div>
      )}

      {/* ---- VOICE: Active orb ---- */}
      {view === "voice" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5">
          <div className="h-44 w-44">
            <Orb colors={ORB_COLORS} agentState={orbState} />
          </div>
          <p className="font-mono text-[11px] font-medium tracking-[0.02em] text-ink-600">
            {statusText}
          </p>
          {errorMsg && (
            <p className="text-[12px] text-data-neg">{errorMsg}</p>
          )}
          {connectionState === "connected" && (
            <button
              onClick={endSession}
              className="mt-2 inline-flex items-center gap-2 rounded-md border border-hairline bg-paper px-4 py-1.5 text-[12px] font-medium text-terra-700 transition-colors hover:bg-terra-100"
            >
              <PhoneOff className="h-3.5 w-3.5" strokeWidth={1.8} />
              End call
            </button>
          )}
        </div>
      )}

      {/* ---- CHAT: Messages ---- */}
      {view === "chat" && (
        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-md px-3.5 py-2.5 text-[13px] leading-[1.5] ${
                  msg.role === "user"
                    ? "bg-ink-900 text-paper rounded-br-xs"
                    : "bg-paper-2 text-ink-900 rounded-bl-xs"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {connectionState === "error" && errorMsg && (
            <div className="flex justify-center">
              <p className="text-center text-[12px] text-data-neg">{errorMsg}</p>
            </div>
          )}
          {waitingForResponse && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-md rounded-bl-xs bg-paper-2 px-3.5 py-3">
                <div className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-pulse" />
                <div className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-pulse [animation-delay:150ms]" />
                <div className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-pulse [animation-delay:300ms]" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* ---- Text input — visible in idle + chat ---- */}
      {(view === "idle" || view === "chat") && (
        <div className="shrink-0 px-5 pb-5 pt-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (textInput.trim()) {
                handleSendMessage(textInput);
              }
            }}
            className="flex items-center gap-2 rounded-md border border-hairline bg-paper px-3 py-1 transition-colors focus-within:border-forest-500 focus-within:shadow-[0_0_0_3px_rgba(78,106,79,0.12)]"
          >
            <input
              ref={inputRef}
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 bg-transparent py-2 text-[13px] text-ink-900 placeholder-ink-400 outline-none"
            />
            <button
              type="submit"
              disabled={!textInput.trim()}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-ink-900 text-paper transition-all hover:brightness-110 active:scale-90 disabled:cursor-not-allowed disabled:bg-sand-300 disabled:text-ink-400"
            >
              <Send className="h-3.5 w-3.5" strokeWidth={1.8} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
