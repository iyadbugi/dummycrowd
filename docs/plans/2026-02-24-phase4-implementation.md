# Phase 4: ElevenLabs Agent — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the complete code infrastructure for the ElevenLabs conversational AI agent — tool handlers, system prompt, API route, env config, and setup guide.

**Architecture:** Client-side tool handlers query the in-memory property dataset (234 properties). System prompt contains all static SmartCrowd knowledge. Signed URL API route keeps the ElevenLabs API key server-side. Everything is configured in code, then pasted into the ElevenLabs dashboard.

**Tech Stack:** Next.js 16 (App Router), TypeScript, `@elevenlabs/react` (v0.14.1), `@elevenlabs/elevenlabs-js` (v2.36.0)

**Design doc:** `docs/plans/2026-02-24-elevenlabs-agent-design.md`

---

### Task 1: Helper — findProperties()

The shared matching function used by `lookup_property` and `search_properties`. Build this first since both tools depend on it.

**Files:**
- Create: `src/lib/agent-tools.ts`

**Step 1: Create agent-tools.ts with imports and the allProperties array**

```ts
import { Property } from "@/types/property";
import {
  liveProperties,
  fundedProperties,
  exitedProperties,
} from "@/data/properties";

const allProperties: Property[] = [
  ...liveProperties,
  ...fundedProperties,
  ...exitedProperties,
];
```

**Step 2: Add findProperties() helper**

This is the core matching logic. Exact code match first, then fuzzy match on title + area.

```ts
function findProperties(
  query: string,
  maxResults: number = 3
): Property[] {
  const q = query.toLowerCase().trim();

  // 1. Exact code match (e.g. "SC-315")
  const codeMatch = allProperties.filter(
    (p) => p.code.toLowerCase() === q
  );
  if (codeMatch.length > 0) return codeMatch.slice(0, maxResults);

  // 2. Fuzzy match on title + area
  const scored = allProperties
    .map((p) => {
      let score = 0;
      const title = p.title.toLowerCase();
      const area = p.location.area?.displayName.toLowerCase() ?? "";

      if (title.includes(q)) score += 3;
      if (area.includes(q)) score += 2;

      // Match individual words in query against title and area
      const words = q.split(/\s+/);
      for (const word of words) {
        if (word.length < 2) continue;
        if (title.includes(word)) score += 1;
        if (area.includes(word)) score += 1;
      }

      return { property: p, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, maxResults).map((r) => r.property);
}
```

**Step 3: Add formatPropertySummary() helper**

Formats a single property into a voice-friendly summary string.

```ts
function formatPropertySummary(p: Property): string {
  const area = p.location.area?.displayName ?? "Dubai";
  const type = p.investmentType === "HOLD" ? "Hold" : "Flip";
  const status = p.propertyStatus === "LIVE"
    ? "Live"
    : p.propertyStatus === "EXITED"
    ? "Exited"
    : "Funded";

  let metrics = "";

  if (p.propertyStatus === "EXITED") {
    const roi = p.totalReturnRoiPercentage;
    const period = p.performance.investmentPeriod;
    metrics = `Total return: ${roi}% over ${period} months.`;
    if (p.valuation.saleProceed) {
      metrics += ` Exit price: AED ${Math.round(p.valuation.saleProceed).toLocaleString()}.`;
    }
    if (p.rental.totalRentalIncome > 0) {
      metrics += ` Total rental income: AED ${Math.round(p.rental.totalRentalIncome).toLocaleString()}.`;
    }
  } else if (p.investmentType === "HOLD") {
    const yld = p.rental.grossYield ?? p.rental.dividendYield;
    if (yld) metrics += `Rental yield: ${yld}%. `;
    if (p.valuation.marketValue) {
      metrics += `Market value: AED ${Math.round(p.valuation.marketValue).toLocaleString()} (${p.valuation.marketValuePercentage > 0 ? "+" : ""}${p.valuation.marketValuePercentage}%). `;
    }
    if (p.rental.totalRentalIncome > 0) {
      metrics += `Rental income earned: AED ${Math.round(p.rental.totalRentalIncome).toLocaleString()}. `;
    }
    metrics += `${p.investors || p.performance.investors} investors.`;
  } else {
    // FLIP
    const roi = p.performance.annualized;
    if (roi) metrics += `Annualized ROI: ${roi}%. `;
    const reno = p.renovationProgress ?? p.performance.renovationProgress;
    if (reno !== null && reno !== undefined) {
      metrics += `Renovation: ${reno}% complete. `;
    }
    metrics += `Project cost: AED ${Math.round(p.projectPrice).toLocaleString()}. `;
    metrics += `${p.investors || p.performance.investors} investors.`;
  }

  const beds = p.physical.bedrooms > 0 ? `${p.physical.bedrooms}BR, ` : "";
  const sqft = p.physical.sqft ? `${p.physical.sqft} sqft, ` : "";

  return `${p.code}: ${p.title} (${type}, ${status}). ${beds}${sqft}${area}. ${metrics}`.trim();
}
```

**Step 4: Verify build passes**

Run: `npm run build`
Expected: Compiles with no errors (file is not imported anywhere yet, but should type-check)

**Step 5: Commit**

```bash
git add src/lib/agent-tools.ts
git commit -m "feat: add agent-tools with findProperties and formatPropertySummary helpers"
```

---

### Task 2: Tool — lookup_property

**Files:**
- Modify: `src/lib/agent-tools.ts`

**Step 1: Add the lookup_property handler**

```ts
export function lookupProperty({
  property_id,
}: {
  property_id: string;
}): string {
  const matches = findProperties(property_id);

  if (matches.length === 0) {
    return `No property found matching "${property_id}". Try a different name, area, or SC code (e.g. SC-315).`;
  }

  if (matches.length === 1) {
    return formatPropertySummary(matches[0]);
  }

  // Multiple matches
  const summaries = matches
    .map((p) => formatPropertySummary(p))
    .join("\n\n");
  return `Found ${matches.length} matching properties:\n\n${summaries}`;
}
```

**Step 2: Verify build passes**

Run: `npm run build`
Expected: Compiles with no errors

**Step 3: Commit**

```bash
git add src/lib/agent-tools.ts
git commit -m "feat: add lookup_property tool handler"
```

---

### Task 3: Tool — search_properties

**Files:**
- Modify: `src/lib/agent-tools.ts`

**Step 1: Add the getStatusForProperty helper**

Maps the internal `propertyStatus` enum to user-friendly status strings.

```ts
function getStatusForProperty(p: Property): "Live" | "Funded" | "Exited" {
  if (p.propertyStatus === "LIVE") return "Live";
  if (p.propertyStatus === "EXITED" || p.propertyStatus === "SOLD") return "Exited";
  return "Funded";
}
```

**Step 2: Add search_properties handler**

```ts
export function searchProperties({
  area,
  type,
  status,
  min_yield,
}: {
  area?: string;
  type?: string;
  status?: string;
  min_yield?: number;
}): string {
  let results = [...allProperties];

  // Filter by area (fuzzy match)
  if (area) {
    const a = area.toLowerCase();
    results = results.filter((p) => {
      const areaName = p.location.area?.displayName.toLowerCase() ?? "";
      const areaKey = p.location.area?.name.toLowerCase() ?? "";
      return areaName.includes(a) || areaKey.includes(a);
    });
  }

  // Filter by investment type
  if (type) {
    const t = type.toUpperCase();
    results = results.filter((p) => p.investmentType === t);
  }

  // Filter by status
  if (status) {
    const s = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
    results = results.filter((p) => getStatusForProperty(p) === s);
  }

  // Filter by minimum yield
  if (min_yield !== undefined) {
    results = results.filter((p) => {
      const yld = p.rental.grossYield ?? p.rental.dividendYield ?? 0;
      return yld >= min_yield;
    });
  }

  if (results.length === 0) {
    return "No properties match those criteria. Try adjusting your filters.";
  }

  // Return up to 5 with summaries
  const maxShow = 5;
  const shown = results.slice(0, maxShow);
  const summaries = shown.map((p) => formatPropertySummary(p)).join("\n\n");

  let response = `Found ${results.length} matching ${results.length === 1 ? "property" : "properties"}:\n\n${summaries}`;

  if (results.length > maxShow) {
    response += `\n\n...and ${results.length - maxShow} more. Ask me to narrow it down by area, type, or yield.`;
  }

  return response;
}
```

**Step 3: Verify build passes**

Run: `npm run build`
Expected: Compiles with no errors

**Step 4: Commit**

```bash
git add src/lib/agent-tools.ts
git commit -m "feat: add search_properties tool handler"
```

---

### Task 4: Tool — calculate_roi

**Files:**
- Modify: `src/lib/agent-tools.ts`

**Step 1: Add the calculate_roi handler**

```ts
export function calculateRoi({
  property_id,
  investment_amount,
  holding_years,
}: {
  property_id: string;
  investment_amount: number;
  holding_years?: number;
}): string {
  const matches = findProperties(property_id, 1);

  if (matches.length === 0) {
    return `No property found matching "${property_id}". Try a different name or SC code.`;
  }

  const p = matches[0];
  const amount = investment_amount;
  const entryFeeRate = 0.015;
  const annualFeeRate = 0.005;
  const exitFeeRate = 0.025;

  // Entry fee
  const entryFee = amount * entryFeeRate;
  const workingCapital = amount - entryFee;

  if (p.propertyStatus === "EXITED" || p.propertyStatus === "SOLD") {
    // Use actual historical returns
    const totalRoiPct = p.totalReturnRoiPercentage;
    const period = p.performance.investmentPeriod;
    const grossReturn = workingCapital * (totalRoiPct / 100);
    const grossProceeds = workingCapital + grossReturn;
    const exitFee = grossProceeds * exitFeeRate;
    const netProceeds = grossProceeds - exitFee;
    const netProfit = netProceeds - amount;
    const netRoiPct = ((netProfit / amount) * 100).toFixed(1);

    return `${p.code}: ${p.title} (Exited after ${period} months, actual ${totalRoiPct}% return).
On a ${amount.toLocaleString()} AED investment:
- Entry fee (1.5%): ${Math.round(entryFee).toLocaleString()} AED
- Working capital: ${Math.round(workingCapital).toLocaleString()} AED
- Gross return (${totalRoiPct}%): ${Math.round(grossReturn).toLocaleString()} AED
- Exit fee (2.5%): ${Math.round(exitFee).toLocaleString()} AED
- Net return: ${Math.round(netProfit).toLocaleString()} AED (${netRoiPct}% net ROI)
Note: These are actual historical results for this property.`;
  }

  if (p.investmentType === "HOLD") {
    // Use yield-based projection
    const years = holding_years ?? Math.round(p.performance.investmentPeriod / 12) || 3;
    const yieldRate = (p.rental.grossYield ?? p.rental.dividendYield ?? 0) / 100;
    const appreciationRate = (p.valuation.marketValuePercentage ?? 0) / 100;

    const totalRentalIncome = workingCapital * yieldRate * years;
    const totalAdminFees = workingCapital * annualFeeRate * years;
    const capitalGain = workingCapital * appreciationRate;
    const grossProceeds = workingCapital + capitalGain;
    const exitFee = grossProceeds * exitFeeRate;
    const netProceeds = grossProceeds - exitFee;
    const netProfit = netProceeds + totalRentalIncome - totalAdminFees - amount;
    const netRoiPct = ((netProfit / amount) * 100).toFixed(1);
    const annualizedPct = (parseFloat(netRoiPct) / years).toFixed(1);

    return `${p.code}: ${p.title} (Hold, ${yieldRate * 100}% yield).
Projection for ${amount.toLocaleString()} AED over ${years} years:
- Entry fee (1.5%): ${Math.round(entryFee).toLocaleString()} AED
- Working capital: ${Math.round(workingCapital).toLocaleString()} AED
- Estimated rental income (${years}yr): ${Math.round(totalRentalIncome).toLocaleString()} AED
- Annual admin fees (0.5%/yr x ${years}): ${Math.round(totalAdminFees).toLocaleString()} AED
- Capital appreciation (${p.valuation.marketValuePercentage}%): ${Math.round(capitalGain).toLocaleString()} AED
- Exit fee (2.5%): ${Math.round(exitFee).toLocaleString()} AED
- Estimated net return: ${Math.round(netProfit).toLocaleString()} AED (${netRoiPct}% total, ~${annualizedPct}% per year)
Note: This is a projection based on current yield and market data, not a guarantee.`;
  }

  // FLIP
  const annualizedRoi = p.performance.annualized ?? 15;
  const periodMonths = p.performance.investmentPeriod || 12;
  const years = periodMonths / 12;
  const totalRoiRate = (annualizedRoi / 100) * years;
  const grossReturn = workingCapital * totalRoiRate;
  const grossProceeds = workingCapital + grossReturn;
  const exitFee = grossProceeds * exitFeeRate;
  const netProceeds = grossProceeds - exitFee;
  const netProfit = netProceeds - amount;
  const netRoiPct = ((netProfit / amount) * 100).toFixed(1);

  return `${p.code}: ${p.title} (Flip, ${annualizedRoi}% annualized ROI target).
Projection for ${amount.toLocaleString()} AED over ~${periodMonths} months:
- Entry fee (1.5%): ${Math.round(entryFee).toLocaleString()} AED
- Working capital: ${Math.round(workingCapital).toLocaleString()} AED
- Estimated gross return (${annualizedRoi}% ann. x ${years.toFixed(1)}yr): ${Math.round(grossReturn).toLocaleString()} AED
- Exit fee (2.5%): ${Math.round(exitFee).toLocaleString()} AED
- Estimated net return: ${Math.round(netProfit).toLocaleString()} AED (${netRoiPct}% net ROI)
Note: This is a projection based on the target ROI, not a guarantee. Actual returns depend on the sale price after renovation.`;
}
```

**Step 2: Verify build passes**

Run: `npm run build`
Expected: Compiles with no errors

**Step 3: Commit**

```bash
git add src/lib/agent-tools.ts
git commit -m "feat: add calculate_roi tool handler"
```

---

### Task 5: Tool — get_renovation_status

**Files:**
- Modify: `src/lib/agent-tools.ts`

**Step 1: Add the get_renovation_status handler**

```ts
export function getRenovationStatus({
  property_id,
}: {
  property_id: string;
}): string {
  const matches = findProperties(property_id, 1);

  if (matches.length === 0) {
    return `No property found matching "${property_id}".`;
  }

  const p = matches[0];

  if (p.investmentType !== "FLIP") {
    return `${p.code}: ${p.title} is a Hold property — there is no renovation to track. Hold properties generate rental income instead.`;
  }

  const reno = p.renovationProgress ?? p.performance.renovationProgress ?? 0;

  let status: string;
  if (reno === 0) status = "not yet started";
  else if (reno <= 15) status = "just getting started";
  else if (reno <= 60) status = "underway";
  else if (reno <= 85) status = "well advanced";
  else if (reno < 100) status = "nearly complete";
  else status = "complete";

  return `${p.code}: ${p.title}. Renovation is ${reno}% complete (${status}).${p.propertyStatus === "EXITED" ? " This property has already been sold." : ""}`;
}
```

**Step 2: Verify build passes**

Run: `npm run build`
Expected: Compiles with no errors

**Step 3: Commit**

```bash
git add src/lib/agent-tools.ts
git commit -m "feat: add get_renovation_status tool handler"
```

---

### Task 6: System Prompt + Tool Definitions (agent-config.ts)

**Files:**
- Create: `src/lib/agent-config.ts`

**Step 1: Create agent-config.ts with the full system prompt**

This file exports the system prompt as a string constant (for pasting into ElevenLabs dashboard) and the tool definitions as structured objects.

```ts
export const SYSTEM_PROMPT = `You are a SmartCrowd investment advisor. You help investors understand properties on the SmartCrowd platform and answer questions about fractional real estate investing.

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

export const TOOL_DEFINITIONS = [
  {
    type: "client" as const,
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
    type: "client" as const,
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
    type: "client" as const,
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
    type: "client" as const,
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
] as const;
```

**Step 2: Verify build passes**

Run: `npm run build`
Expected: Compiles with no errors

**Step 3: Commit**

```bash
git add src/lib/agent-config.ts
git commit -m "feat: add agent system prompt and tool definitions"
```

---

### Task 7: API Route — signed-url

**Files:**
- Create: `src/app/api/signed-url/route.ts`

**Step 1: Create the signed URL API route**

```ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${process.env.NEXT_PUBLIC_AGENT_ID}`,
      {
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY!,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get signed URL");
    }

    const data = await response.json();
    return NextResponse.json({ signedUrl: data.signed_url });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate signed URL" },
      { status: 500 }
    );
  }
}
```

**Step 2: Verify build passes**

Run: `npm run build`
Expected: Compiles with no errors

**Step 3: Commit**

```bash
git add src/app/api/signed-url/route.ts
git commit -m "feat: add signed-url API route for ElevenLabs auth"
```

---

### Task 8: Environment Template

**Files:**
- Create: `.env.local`

**Step 1: Create .env.local with placeholder values**

```
# ElevenLabs Conversational AI
# Get your API key from: https://elevenlabs.io/app/settings/api-keys
ELEVENLABS_API_KEY=your-api-key-here

# Agent ID from: https://elevenlabs.io/app/conversational-ai (after creating your agent)
NEXT_PUBLIC_AGENT_ID=your-agent-id-here
```

**Step 2: Verify .env.local is in .gitignore**

Check that `.gitignore` includes `.env.local` (Next.js scaffold includes this by default).

**Step 3: Commit (do NOT commit .env.local)**

No git commit for this task — .env.local should stay untracked.

---

### Task 9: ElevenLabs Setup Guide

**Files:**
- Create: `docs/elevenlabs-setup-guide.md`

**Step 1: Write the step-by-step setup guide**

This document walks the user through creating and configuring the ElevenLabs agent on the web dashboard. It references the system prompt and tool definitions from `agent-config.ts`.

Content should cover:
1. Create ElevenLabs account at elevenlabs.io
2. Navigate to Conversational AI section
3. Create a new agent named "SmartInvestor"
4. Select a voice (recommend testing: "Rachel", "Josh", or "Adam" for professional warm tone)
5. Paste the system prompt from `agent-config.ts`
6. Set the first message: "Hi! I'm your SmartCrowd investment advisor. I can help you explore our properties, explain how fractional investing works, or calculate projected returns. What would you like to know?"
7. Register 4 client tools — for each: name, description, parameters (copy from TOOL_DEFINITIONS), set `expects_response: true`
8. Copy the Agent ID and paste into `.env.local`
9. Copy API key from Settings → API Keys and paste into `.env.local`
10. Test in the ElevenLabs playground first

**Step 2: Commit**

```bash
git add docs/elevenlabs-setup-guide.md
git commit -m "docs: add ElevenLabs dashboard setup guide"
```

---

### Task 10: Build Verification

**Step 1: Full build check**

Run: `npm run build`
Expected: All pages compile successfully, no TypeScript errors

**Step 2: Spot-check tool logic manually (dev console)**

Start dev server, open browser console, and verify:
- `lookupProperty({ property_id: "SC-315" })` returns Sports City summary
- `searchProperties({ area: "IMPZ" })` returns IMPZ properties
- `calculateRoi({ property_id: "SC-315", investment_amount: 10000 })` returns fee breakdown
- `getRenovationStatus({ property_id: "SC-309" })` returns "80% complete"

**Step 3: Final commit with PLAN.md update**

Update PLAN.md to mark Phase 4 as COMPLETED, then commit.
