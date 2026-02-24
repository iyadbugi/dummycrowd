# Phase 4 Design: ElevenLabs Agent Configuration

## Overview

Build the code infrastructure for the ElevenLabs conversational AI agent. The agent acts as a SmartCrowd investment advisor that can answer general knowledge questions from its system prompt and property-specific questions via 4 client-side tools.

## Architecture

```
User speaks → ElevenLabs Agent (cloud LLM) → decides: answer from knowledge OR call tool
                                                          ↓
                                              Client tool runs in browser
                                              Queries local property data (234 properties)
                                              Returns formatted summary string
                                                          ↓
                                              Agent speaks the answer
```

**Key design decision**: Client-side tools (not server-side webhooks) because property data is already bundled in the Next.js app. No network round-trip, no database needed.

## Deliverables

| File | Purpose |
|------|---------|
| `src/lib/agent-tools.ts` | 4 tool handler functions |
| `src/lib/agent-config.ts` | System prompt + tool definitions |
| `src/app/api/signed-url/route.ts` | Signed URL API route (keeps API key server-side) |
| `.env.local` | Template with ELEVENLABS_API_KEY + NEXT_PUBLIC_AGENT_ID |
| `docs/elevenlabs-setup-guide.md` | Step-by-step dashboard configuration guide |

## Tool Designs

### 1. lookup_property

- **When called**: User asks about a specific property by name, code, or description
- **Parameters**: `property_id: string` (SC code like "SC-315" OR partial name like "Sports City")
- **Matching logic**: Exact code match first → area + partial title match → rank by relevance
- **Returns**: Up to 3 matches with formatted summaries (name, type, status, key metric)
- **Edge cases**: No match → "No property found matching [query]". Multiple matches → list up to 3, agent asks which one.
- **Description for LLM**: "Look up a specific property by its SC code (e.g. SC-315) or by a name/description (e.g. 'Sports City' or 'Palm Jumeirah flip'). Returns up to 3 matching properties with key details."

### 2. search_properties

- **When called**: User asks about properties in an area, of a type, or above a yield threshold
- **Parameters**: `area?: string`, `type?: "Hold" | "Flip"`, `status?: "Live" | "Funded" | "Exited"`, `min_yield?: number`
- **Returns**: Count + up to 5 matching properties (name, code, key metric). If more than 5, says "and X more"
- **Edge cases**: No filters → count summary by status. No matches → "No properties match those criteria"
- **Description for LLM**: "Search for properties by area, investment type (Hold/Flip), status (Live/Funded/Exited), or minimum yield. Returns a summary of matching properties."

### 3. calculate_roi

- **When called**: User asks "what would I earn" or "what's my return on X amount"
- **Parameters**: `property_id: string`, `investment_amount: number`, `holding_years?: number`
- **Calculation**:
  - Hold: entry fee (1.5%) → working capital × annual yield × years → minus annual admin (0.5%/yr) → capital appreciation → exit fee (2.5%) → net return
  - Flip: entry fee → apply annualized ROI for estimated hold period → exit fee → net return
  - Exited: use actual historical totalReturnRoiPercentage
- **Returns**: Pre-formatted narrative with gross return, fees breakdown, net return, net ROI %
- **Edge cases**: Live properties with 0% funded → caveat that projections are speculative. Always includes disclaimer about projections.
- **Description for LLM**: "Calculate projected returns on an investment amount for a specific property, accounting for SmartCrowd's entry, annual, and exit fees. Returns a breakdown of expected net returns."

### 4. get_renovation_status

- **When called**: User asks about renovation progress on Flip properties
- **Parameters**: `property_id: string`
- **Returns**: Property name, renovation %, qualitative status ("just started" 0-15% / "underway" 16-60% / "well advanced" 61-85% / "nearly complete" 86-99% / "complete" 100%)
- **Edge cases**: Called on a Hold property → "This is a Hold property — no renovation to track." Property not found → standard not-found message.
- **Description for LLM**: "Get the current renovation progress for a Flip property. Returns the percentage complete and a status description."

## System Prompt Structure

### Section 1: Persona & Tone
- SmartCrowd investment advisor persona
- Professional, warm, concise (voice-optimized)
- Use "we" for SmartCrowd references
- Short sentences, natural speech patterns
- Default to AED for all currency amounts

### Section 2: Baked-in Knowledge
All content from `src/data/knowledge.ts`:
- Platform overview (DFSA-regulated, AED 500 minimum, 5000+ investors)
- Hold model (3-5yr, 7-11% annual, rental income + appreciation)
- Flip model (9-12mo, 15-30% ROI, buy-renovate-sell)
- Fee structure (1.5% entry, 0.5% annual, 2.5% exit, 0% performance)
- How it works (7-step process)
- Track record (67 exits, ~35-40% avg ROI, AED 220M+ proceeds)
- Exit options (5-year vote, Share Transfer Facility)
- Advantages (lowest entry, full management, no performance fees, Sharia-compliant)
- FAQs

### Section 3: Tool Usage Instructions
Explicit routing rules:
- Specific property by name/code → `lookup_property`
- Properties by area/type/yield → `search_properties`
- "What would I earn" / investment projections → `calculate_roi`
- Renovation progress → `get_renovation_status`
- General questions (fees, how it works, etc.) → answer from knowledge, no tool call

### Section 4: Response Formatting
- Keep answers under 3-4 sentences unless detail requested
- List properties: name + one key metric only
- Round numbers naturally for speech ("about 835 thousand dirhams")
- Offer natural follow-ups after answering

### Section 5: Guardrails
- Never guarantee returns (always "projection" / "based on current data")
- Never give tax advice
- Never compare SmartCrowd negatively to competitors
- Redirect out-of-scope questions to support team gracefully

## API Route: signed-url

Standard ElevenLabs pattern:
- `GET /api/signed-url`
- Reads `ELEVENLABS_API_KEY` and `NEXT_PUBLIC_AGENT_ID` from env
- Calls `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=...`
- Returns `{ signedUrl: string }`
- Signed URL valid for 15 minutes

## Environment Variables

```
ELEVENLABS_API_KEY=your-api-key-here
NEXT_PUBLIC_AGENT_ID=your-agent-id-here
```
