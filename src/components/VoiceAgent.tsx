"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useConversation } from "@elevenlabs/react";
import { Phone, PhoneOff, Send, MessageSquare, X } from "lucide-react";
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
/*  Orb (lazy-loaded, no SSR)                                         */
/* ------------------------------------------------------------------ */

function OrbFallback() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-3/5 w-3/5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#3B82F6] animate-pulse opacity-60" />
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isChat = view === "chat";

  const conversation = useConversation({
    micMuted: isChat || view === "idle" || view === "minimized",
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
        console.log("[navigate_to_property] params:", params);
        const result = navigateToProperty(params);
        console.log("[navigate_to_property] result:", result);
        return result;
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
      // Only add agent messages — user messages are added in handleSendMessage
      if (props.role === "agent") {
        setMessages((prev) => [...prev, { role: "agent", text: props.message }]);
      }
    },
    onError: (error: unknown) => {
      console.error("ElevenLabs error:", error);
      setConnectionState("error");
      setErrorMsg("Connection lost. Tap to try again.");
    },
  });

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const startSession = useCallback(async () => {
    setConnectionState("connecting");
    setErrorMsg(null);
    setMessages([]);
    try {
      const res = await fetch("/api/signed-url");
      if (!res.ok) throw new Error("Failed to get signed URL");
      const { signedUrl } = await res.json();
      await conversation.startSession({
        signedUrl,
        dynamicVariables: {
          time_of_day: getTimeOfDay(),
          current_tab: getCurrentTab(),
          live_property_count: getLivePropertyCount(),
        },
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("cancelled") || msg.includes("canceled")) {
        setConnectionState("idle");
        setAgentMode(null);
        return;
      }
      console.error("Failed to start:", err);
      setConnectionState("error");
      setErrorMsg("Could not connect. Try again.");
    }
  }, [conversation]);

  const endSession = useCallback(async () => {
    await conversation.endSession();
    setConnectionState("idle");
    setAgentMode(null);
    setMessages([]);
    setView("minimized");
  }, [conversation]);

  const handleCallStart = useCallback(async () => {
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
      if (connectionState !== "connected") {
        await startSession();
        // Wait briefly for connection, then mute + send
        const waitForConnection = () =>
          new Promise<void>((resolve) => {
            const check = setInterval(() => {
              // The onConnect callback will set connectionState
              // We need to check the conversation status
              resolve();
              clearInterval(check);
            }, 500);
          });
        await waitForConnection();
      }
      conversation.setVolume({ volume: 0 });
      setMessages((prev) => [...prev, { role: "user", text: text.trim() }]);
      conversation.sendUserMessage(text.trim());
      setTextInput("");
    },
    [connectionState, startSession, conversation]
  );

  const switchToChat = useCallback(() => {
    setView("chat");
    conversation.setVolume({ volume: 0 });
  }, [conversation]);

  const switchToVoice = useCallback(() => {
    setView("voice");
    conversation.setVolume({ volume: 1 });
  }, [conversation]);

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

  // State: Minimized pill
  if (view === "minimized") {
    return (
      <button
        onClick={() => setView("idle")}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-white/80 dark:bg-[#111F42]/90 backdrop-blur-xl border border-gray-200/60 dark:border-white/10 pl-1.5 pr-5 py-1.5 shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer"
      >
        {/* Mini orb */}
        <div className="h-9 w-9 rounded-full overflow-hidden shrink-0">
          <Orb
            colors={["#2563EB", "#3B82F6"]}
            agentState={null}
          />
        </div>
        <span className="text-sm font-medium text-sc-text-dark whitespace-nowrap">
          Talk to Sara
        </span>
      </button>
    );
  }

  // Panel container (shared across idle, voice, chat)
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-[#0F1D38] md:inset-auto md:bottom-6 md:right-6 md:w-[380px] md:h-[540px] md:rounded-2xl md:border md:border-gray-200/60 md:dark:border-white/8 md:shadow-2xl md:shadow-black/10 overflow-hidden">
      {/* ---- Header ---- */}
      <div className="flex items-center justify-between px-5 py-3.5 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[13px] font-semibold tracking-wide text-sc-text-dark uppercase">
            Sara
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {/* Mode toggle — only when connected */}
          {connectionState === "connected" && view === "voice" && (
            <button
              onClick={switchToChat}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium text-sc-text-muted hover:text-sc-text-dark hover:bg-gray-100 dark:hover:bg-white/8 transition-colors"
              title="Switch to chat"
            >
              <MessageSquare className="h-3.5 w-3.5" />
            </button>
          )}
          {connectionState === "connected" && view === "chat" && (
            <button
              onClick={switchToVoice}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium text-sc-text-muted hover:text-sc-text-dark hover:bg-gray-100 dark:hover:bg-white/8 transition-colors"
              title="Switch to voice"
            >
              <Phone className="h-3.5 w-3.5" />
            </button>
          )}
          {/* Close / End */}
          <button
            onClick={
              connectionState === "connected" ? endSession : () => setView("minimized")
            }
            className="flex items-center justify-center h-7 w-7 rounded-full text-sc-text-muted hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Thin separator */}
      <div className="h-px bg-gray-100 dark:bg-white/6 mx-5" />

      {/* ---- IDLE: Orb invitation ---- */}
      {view === "idle" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-5">
          <button
            onClick={handleCallStart}
            className="group h-40 w-40 rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
            aria-label="Start voice call"
          >
            <Orb colors={["#2563EB", "#3B82F6"]} agentState={null} />
          </button>
          <p className="text-sm text-sc-text-muted">
            Tap to call, or type below
          </p>
        </div>
      )}

      {/* ---- VOICE: Active orb ---- */}
      {view === "voice" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-3 px-5">
          <div className="h-44 w-44">
            <Orb colors={["#2563EB", "#3B82F6"]} agentState={orbState} />
          </div>
          <p className="text-xs font-medium text-sc-text-muted tracking-wide">
            {statusText}
          </p>
          {errorMsg && (
            <p className="text-xs text-red-500">{errorMsg}</p>
          )}
          {connectionState === "connected" && (
            <button
              onClick={endSession}
              className="mt-2 flex items-center gap-2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 px-5 py-2 text-xs font-medium hover:bg-red-500/20 transition-colors"
            >
              <PhoneOff className="h-3.5 w-3.5" />
              End call
            </button>
          )}
        </div>
      )}

      {/* ---- CHAT: Messages ---- */}
      {view === "chat" && (
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {connectionState === "connecting" && messages.length === 0 && (
            <div className="flex-1 flex items-center justify-center h-full">
              <div className="flex items-center gap-2 text-sc-text-muted">
                <div className="h-1.5 w-1.5 rounded-full bg-sc-blue animate-pulse" />
                <div className="h-1.5 w-1.5 rounded-full bg-sc-blue animate-pulse [animation-delay:150ms]" />
                <div className="h-1.5 w-1.5 rounded-full bg-sc-blue animate-pulse [animation-delay:300ms]" />
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-sc-blue text-white rounded-br-sm"
                    : "bg-gray-50 dark:bg-white/6 text-sc-text-dark rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
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
            className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/4 px-4 py-1 focus-within:border-sc-blue dark:focus-within:border-sc-blue/50 transition-colors"
          >
            <input
              ref={inputRef}
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent py-2 text-sm text-sc-text-dark dark:text-white placeholder-sc-text-muted dark:placeholder-white/30 outline-none"
            />
            <button
              type="submit"
              disabled={!textInput.trim()}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sc-blue text-white transition-all disabled:opacity-20 disabled:scale-90 hover:bg-sc-blue/90 active:scale-90"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
