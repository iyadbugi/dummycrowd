# Phase 5 Design: New UI Tools & Dynamic Variables

## Context

Phase 5 of the agent improvement plan. Phases 1-4 are complete (KB docs, speech normalization, unit tests, system prompt rewrite). The agent has 2 client tools (`calculate_roi`, `get_renovation_status`) and answers property/platform questions from the Knowledge Base via RAG.

## Design Decisions

- **navigate_to_property**: Agent-initiated only (Sara decides when visual context helps)
- **navigate_to_property scope**: All tabs (Live, Funded, Exited) — supports educational flow with exited properties as social proof
- **start_investment**: Live properties only open dialog; Funded/Exited get a polite verbal redirect to Live properties
- **Dynamic variables**: All three (time_of_day, current_tab, live_property_count)

---

## 5.1 navigate_to_property

**Purpose:** Visual bridge between voice and screen. When Sara recommends or discusses a property, she can "show" it on the dashboard. Demonstrates the agent controlling the UI.

**Behavior:**
- Agent-initiated — Sara calls it when she thinks showing the card adds value
- Works across all tabs — auto-switches to correct tab (Live/Funded/Exited)
- Handles pagination — calculates correct page and navigates to it
- Single property at a time — highlights one card with a pulsing blue border + smooth scrollIntoView()
- Auto-clears highlight after ~4 seconds
- Mechanism: tool dispatches `CustomEvent('navigate-to-property', { detail: { code, tab } })`. PropertyTabs listens, switches tab. PropertyGrid calculates page. PropertyCard renders highlight.

**Tool definition (for ElevenLabs dashboard):**
- Name: `navigate_to_property`
- Params: `property_code` (string, required)
- Client tool, expects response

## 5.2 start_investment

**Purpose:** Completes the conversion funnel — Explore, Learn, Calculate, Invest. Shows the agent can initiate transactions.

**Behavior:**
- Live properties: opens InvestmentDialog with property details, fee summary, CTA to smartcrowd.ae
- Funded/Exited: tool returns redirect message, Sara suggests Live properties instead. No dialog opens.
- Dialog includes demo disclaimer
- Mechanism: tool validates status, dispatches `CustomEvent('start-investment', { detail: { property, suggestedAmount } })`. InvestmentDialog (mounted in layout) listens and opens.

**Tool definition (for ElevenLabs dashboard):**
- Name: `start_investment`
- Params: `property_code` (string, required), `suggested_amount` (number, optional)
- Client tool, expects response

## 5.3 Dynamic Variables

**Purpose:** Makes Sara context-aware from first word. Personalized greeting and mid-conversation awareness.

**Variables passed at session start via `dynamicVariables`:**
- `time_of_day` — "morning" / "afternoon" / "evening"
- `current_tab` — "live" / "funded" / "exited"
- `live_property_count` — count of live properties

**Mid-conversation updates:** When user switches tabs, `sendContextualUpdate()` tells Sara "The user switched to the [tab] tab."

**System prompt addition:** Session Context section referencing `{{time_of_day}}`, `{{current_tab}}`, `{{live_property_count}}`.

---

## Files Changed

| File | Change |
|------|--------|
| `src/lib/agent-tools.ts` | Add `navigateToProperty()`, `startInvestment()` |
| `src/components/PropertyTabs.tsx` | Listen for navigate event, switch tab, expose current tab |
| `src/components/PropertyCard.tsx` | Accept `highlighted` prop, pulsing border + scrollIntoView |
| `src/components/PropertyGrid.tsx` | Accept `highlightedCode`, calculate page, pass to cards |
| `src/components/VoiceAgent.tsx` | Wire 2 new tool handlers, pass dynamicVariables, sendContextualUpdate on tab change |
| `src/lib/agent-config.ts` | Add 2 tool definitions, Session Context section in prompt, update FIRST_MESSAGE |
| `src/lib/dashboard-context.ts` | **New** — global state for currentTab + getTimeOfDay helper |
| `src/components/InvestmentDialog.tsx` | **New** — dialog with property details, fees, CTA |
| `src/app/layout.tsx` | Mount InvestmentDialog |
