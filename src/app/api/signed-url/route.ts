import { NextResponse } from "next/server";

export async function GET() {
  const agentId = process.env.NEXT_PUBLIC_AGENT_ID;
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!agentId || !apiKey) {
    console.error("[signed-url] Missing env vars:", {
      hasAgentId: !!agentId,
      hasApiKey: !!apiKey,
    });
    return NextResponse.json(
      { error: "Server misconfigured: missing ElevenLabs credentials" },
      { status: 500 }
    );
  }

  try {
    const url = `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${agentId}`;
    const response = await fetch(url, {
      headers: { "xi-api-key": apiKey },
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("[signed-url] ElevenLabs API error:", response.status, body);
      return NextResponse.json(
        { error: "Failed to generate signed URL" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ signedUrl: data.signed_url });
  } catch (err) {
    console.error("[signed-url] Unexpected error:", err);
    return NextResponse.json(
      { error: "Failed to generate signed URL" },
      { status: 500 }
    );
  }
}
