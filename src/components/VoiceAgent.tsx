"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useConversation } from "@elevenlabs/react";
import { Mic, PhoneOff } from "lucide-react";
import {
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
    onDisconnect: (reason?: unknown) => {
      console.log("ElevenLabs disconnected:", reason);
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

      {/* Active conversation UI — single responsive container with ONE Orb */}
      {isActive && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 md:inset-auto md:bottom-6 md:right-6 md:w-80 md:rounded-2xl md:bg-white md:p-6 md:shadow-2xl md:animate-in md:slide-in-from-bottom-4 md:duration-300">
          <div className="flex flex-col items-center gap-6 md:gap-4">
            <div className="h-48 w-48 md:h-40 md:w-40">
              <Orb colors={["#2563EB", "#3B82F6"]} agentState={orbState} />
            </div>
            <p className="text-lg font-medium text-white md:text-sm md:text-sc-text-dark">
              {statusText}
            </p>
            {errorMsg && (
              <p className="text-sm text-red-400 md:text-xs md:text-red-500">
                {errorMsg}
              </p>
            )}
            <button
              onClick={endConversation}
              className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700 md:px-5 md:py-2.5"
            >
              <PhoneOff className="h-4 w-4" />
              End Call
            </button>
          </div>
        </div>
      )}
    </>
  );
}
