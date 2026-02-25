"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useConversation } from "@elevenlabs/react";
import { Mic, PhoneOff } from "lucide-react";
import {
  lookupProperty,
  searchProperties,
  calculateRoi,
  getRenovationStatus,
} from "@/lib/agent-tools";
import type { AgentState as OrbAgentState } from "@/components/ui/orb";

const Orb = dynamic(
  () => import("@/components/ui/orb").then((mod) => ({ default: mod.Orb })),
  { ssr: false }
);

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

  const orbState: OrbAgentState =
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
                <Orb colors={["#2563EB", "#3B82F6"]} agentState={orbState} />
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
                <Orb colors={["#2563EB", "#3B82F6"]} agentState={orbState} />
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
}
