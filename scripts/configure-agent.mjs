#!/usr/bin/env node

/**
 * Configures the ElevenLabs Conversational AI agent with:
 * - System prompt
 * - First message
 * - Client tool definitions
 * - Override permissions (so the client SDK can send overrides)
 *
 * Usage: node scripts/configure-agent.mjs
 * Reads ELEVENLABS_API_KEY and NEXT_PUBLIC_AGENT_ID from .env.local
 */

import { readFileSync } from "fs";
import { resolve } from "path";

// Parse .env.local
const envPath = resolve(process.cwd(), ".env.local");
const envContent = readFileSync(envPath, "utf-8");
const env = Object.fromEntries(
  envContent
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => l.split("=").map((s) => s.trim()))
);

const API_KEY = env.ELEVENLABS_API_KEY;
const AGENT_ID = env.NEXT_PUBLIC_AGENT_ID;

if (!API_KEY || !AGENT_ID) {
  console.error("Missing ELEVENLABS_API_KEY or NEXT_PUBLIC_AGENT_ID in .env.local");
  process.exit(1);
}

// First, fetch current agent config to understand the structure
console.log(`Fetching agent ${AGENT_ID}...`);
const getRes = await fetch(
  `https://api.elevenlabs.io/v1/convai/agents/${AGENT_ID}`,
  { headers: { "xi-api-key": API_KEY } }
);

if (!getRes.ok) {
  console.error("Failed to fetch agent:", getRes.status, await getRes.text());
  process.exit(1);
}

const agent = await getRes.json();
console.log("Current agent name:", agent.name);
console.log("Current first_message:", agent.conversation_config?.agent?.first_message?.slice(0, 60) || "(none)");
console.log("Current prompt:", agent.conversation_config?.agent?.prompt?.prompt?.slice(0, 60) || "(none)");
console.log("Current tools:", agent.conversation_config?.agent?.prompt?.tools?.length || 0, "tools");

// Import config from our agent-config.ts (the values are simple exports)
const SYSTEM_PROMPT = `You are a SmartCrowd investment advisor. You help investors understand properties on the SmartCrowd platform and answer questions about fractional real estate investing.

## Your Personality
- Professional yet warm and approachable
- Concise — you're speaking, not writing. Keep answers to 2-4 sentences unless the user asks for more detail.
- Use "we" when referring to SmartCrowd ("we charge a 1.5% entry fee")
- All amounts are in AED (United Arab Emirates Dirhams) unless the user specifies otherwise
- Round numbers naturally for speech ("about 835 thousand dirhams" rather than "835,000.00 AED")
- After answering, offer a brief follow-up ("Would you like me to calculate your projected returns?" or "I can also look up other properties in that area.")

## SmartCrowd Platform Knowledge

SmartCrowd is a DFSA-regulated, DIFC-registered fractional real estate investment platform. Investors can start with as little as AED 500. Over 5,000 investors, 165+ funded properties, 67 exits to date, with AED 220 million+ in exit proceeds.

### How It Works
1. Register (under 5 minutes)
2. Complete free KYC verification
3. Fund your wallet
4. Browse available properties
5. Invest from AED 500
6. Earn rental income or flip profits
7. Cash out when the property is sold

### Investment Types
**Hold**: Buy and hold for 3-5 years. Earn regular rental income (monthly) plus capital appreciation. Target annual return: 7-11%.
**Flip**: Buy undervalued property, renovate, sell for profit. Typical hold: 9-12 months. Target ROI: 15-30%.

### Fee Structure
- Entry fee: 1.5% (one-time, on investment amount)
- Annual admin fee: 0.5%
- Exit fee: 2.5% (on exit proceeds)
- Performance fee: 0% — SmartCrowd does not charge performance fees

### Exit Options
- Hold properties: 5-year investor vote to sell or continue
- Early exit: Share Transfer Facility available in March and September windows
- Flip properties: Automatically exited when property is sold after renovation

### Track Record
67 exited properties with an average net ROI of approximately 35-40%. Total exit proceeds exceed AED 220 million.

### Advantages
- Lowest minimum investment in the region (AED 500)
- Full lifecycle property management
- No performance fees
- Sharia-compliant investments available
- DFSA regulated for investor protection

## Tool Usage Rules

You have access to 4 tools. Use them ONLY when needed:

- **lookup_property**: When the user asks about a specific property by name, code (like "SC-315"), or description (like "the Sports City one"). Do NOT use this for general browsing.
- **search_properties**: When the user wants to browse or filter properties by area, type (Hold/Flip), status (Live/Funded/Exited), or minimum yield.
- **calculate_roi**: When the user asks "what would I earn", "what's my return", or wants a projection for a specific investment amount in a specific property.
- **get_renovation_status**: When the user asks about renovation progress on a Flip property.

If the user asks a general question (fees, how it works, what SmartCrowd is), answer from your knowledge above — do NOT call a tool.

## Guardrails
- Never guarantee returns. Always say "projection", "estimate", or "based on current data".
- Never give tax or legal advice. Redirect to a financial advisor.
- Never compare SmartCrowd negatively to competitors.
- If asked something outside your scope, say: "That's a great question — for account-specific issues, I'd recommend reaching out to our support team. But I can help with anything about our properties or how fractional investing works."

## First Message
Greet the user warmly and briefly explain what you can help with. Keep it to 2 sentences.`;

const FIRST_MESSAGE =
  "Hi! I'm your SmartCrowd investment advisor. I can help you explore our properties, explain how fractional investing works, or calculate projected returns. What would you like to know?";

const TOOLS = [
  {
    type: "client",
    name: "lookup_property",
    description:
      "Look up a specific property by its SC code (e.g. SC-315) or by a name/description (e.g. 'Sports City' or 'Palm Jumeirah flip'). Returns up to 3 matching properties with key details including type, yield/ROI, price, and investor count.",
    parameters: {
      type: "object",
      properties: {
        property_id: {
          type: "string",
          description:
            "The property SC code (e.g. 'SC-315') or a descriptive search term (e.g. 'Sports City', 'Palm Jumeirah', 'IMPZ 1 bedroom')",
        },
      },
      required: ["property_id"],
    },
    expects_response: true,
  },
  {
    type: "client",
    name: "search_properties",
    description:
      "Search and filter properties by area, investment type (Hold or Flip), status (Live, Funded, or Exited), or minimum rental yield. Use this when the user wants to browse or compare multiple properties, NOT for looking up a single specific property.",
    parameters: {
      type: "object",
      properties: {
        area: {
          type: "string",
          description:
            "Filter by area name (e.g. 'IMPZ', 'JVC', 'Downtown Dubai', 'Sports City')",
        },
        type: {
          type: "string",
          description: "Filter by investment type: 'Hold' or 'Flip'",
          enum: ["Hold", "Flip"],
        },
        status: {
          type: "string",
          description: "Filter by property status: 'Live', 'Funded', or 'Exited'",
          enum: ["Live", "Funded", "Exited"],
        },
        min_yield: {
          type: "number",
          description:
            "Minimum rental yield percentage (e.g. 6 for 6%+). Only applies to Hold properties.",
        },
      },
    },
    expects_response: true,
  },
  {
    type: "client",
    name: "calculate_roi",
    description:
      "Calculate projected investment returns for a specific property, accounting for SmartCrowd's entry fee (1.5%), annual admin fee (0.5%), and exit fee (2.5%). Use when the user asks 'what would I earn' or 'what's my return' on a specific amount.",
    parameters: {
      type: "object",
      properties: {
        property_id: {
          type: "string",
          description: "The property SC code or name to calculate returns for",
        },
        investment_amount: {
          type: "number",
          description: "The investment amount in AED",
        },
        holding_years: {
          type: "number",
          description:
            "Optional: number of years to hold (defaults to the property's typical holding period)",
        },
      },
      required: ["property_id", "investment_amount"],
    },
    expects_response: true,
  },
  {
    type: "client",
    name: "get_renovation_status",
    description:
      "Get the current renovation progress for a Flip property. Returns percentage complete and a status description. Only relevant for Flip properties — Hold properties don't have renovations.",
    parameters: {
      type: "object",
      properties: {
        property_id: {
          type: "string",
          description: "The property SC code or name to check renovation status for",
        },
      },
      required: ["property_id"],
    },
    expects_response: true,
  },
];

// Build the update payload — use exact API structure from GET response
const updatePayload = {
  conversation_config: {
    agent: {
      first_message: FIRST_MESSAGE,
      prompt: {
        prompt: SYSTEM_PROMPT,
        tools: TOOLS,
      },
    },
  },
  platform_settings: {
    overrides: {
      conversation_config_override: {
        agent: {
          first_message: true,
          language: true,
          prompt: {
            prompt: true,
          },
        },
      },
    },
  },
};

console.log("\nUpdating agent configuration...");
const patchRes = await fetch(
  `https://api.elevenlabs.io/v1/convai/agents/${AGENT_ID}`,
  {
    method: "PATCH",
    headers: {
      "xi-api-key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatePayload),
  }
);

if (!patchRes.ok) {
  const errBody = await patchRes.text();
  console.error("Failed to update agent:", patchRes.status, errBody);
  process.exit(1);
}

const updated = await patchRes.json();
console.log("\nAgent updated successfully!");
console.log("  Name:", updated.name);
console.log("  First message:", updated.conversation_config?.agent?.first_message?.slice(0, 60) + "...");
console.log("  Prompt set:", !!updated.conversation_config?.agent?.prompt?.prompt);
console.log("  Tools:", updated.conversation_config?.agent?.prompt?.tools?.length || 0);
console.log("  Overrides enabled:", JSON.stringify(updated.platform_settings?.overrides || {}));
