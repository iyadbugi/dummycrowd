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
    <div className="fixed bottom-6 right-6 z-50">
      <p className="text-xs">Agent: {agentState} | Mode: {mode}</p>
      {errorMsg && <p className="text-xs text-red-500">{errorMsg}</p>}
      {agentState === "idle" || agentState === "error" ? (
        <button onClick={startConversation} className="bg-blue-500 text-white px-3 py-1 rounded">
          Start
        </button>
      ) : (
        <button onClick={endConversation} className="bg-red-500 text-white px-3 py-1 rounded">
          End
        </button>
      )}
    </div>
  );
}
