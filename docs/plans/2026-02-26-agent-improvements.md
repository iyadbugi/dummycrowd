# Plan: Improve SmartCrowd Voice Agent

## Context

The SmartCrowd dashboard has an ElevenLabs voice agent with 4 client-side tools and a ~120-line system prompt with all platform knowledge baked in. Two core problems:

1. **Speech-to-text mangles property codes** -- "SC-315" becomes "S-C-three-fifteen" and fails tool lookup. Moving property data to the Knowledge Base (RAG) fixes this because the LLM reads KB text directly.
2. **The agent doesn't drive conversion** -- Research shows educational-guide framing converts 5-15% higher than sales-style agents, through progressive disclosure, objection anticipation, and social proof.

### Approach
- **Slow and methodical** -- one phase at a time, verify before moving on
- **Collaborative document creation** -- each KB document drafted individually, reviewed with the user via AskUserQuestion before finalizing
- **Manual platform work** -- tools are created manually on ElevenLabs dashboard, not via API scripts. The plan generates content/configs you paste in.
- **Code changes are minimal** -- most value comes from KB content and prompt quality

### Key Constraints
- ElevenLabs KB limit: **300K characters / 20MB** (non-enterprise)
- Current property data is ~360KB serialized -- **must trim fields to fit**
- Tools should be created/updated manually on ElevenLabs dashboard
- Agent may hit quota limits -- check subscription before testing

---

## Phase 1: Knowledge Base Documents

**Goal**: Create 2 KB documents and upload them to ElevenLabs, replacing the need for `lookup_property` tool.

### Why Remove `lookup_property`?
Speech-to-text mangles SC codes ("S-C-three-fifteen" fails lookup). With property data in the KB, the LLM reads it directly -- no speech recognition issues.

### Document 1: Platform Knowledge

**Source files**: `src/data/knowledge.ts` (SMARTCROWD_INFO, FEES, INVESTMENT_MODELS, HOW_IT_WORKS, ADVANTAGES, FAQS)

**Process**:
1. Generate a draft document from `knowledge.ts` data, written as conversational prose (not bullet points or code)
2. Present draft to user via AskUserQuestion for review
3. Iterate until approved
4. User uploads to ElevenLabs dashboard: Conversational AI → Agent → Knowledge Base → Add → Text

**Content should include**:
- Platform overview (DFSA-regulated, DIFC-registered, AED 500 minimum, 5000+ investors)
- How it works (7-step process, written naturally)
- Hold vs Flip comparison with worked examples
- Fee structure with a concrete example ("If you invest AED 10,000...")
- FAQs expanded into natural Q&A format
- Advantages framed as investor benefits
- Track record summary (67 exits, avg 35-40% ROI, AED 220M+ proceeds)

### Document 2: Property Portfolio

**Source files**: `src/data/properties.ts` (liveProperties, fundedProperties, exitedProperties)

**Process**:
1. Write a script to generate trimmed property text from the data arrays
2. Present sample output to user via AskUserQuestion -- iterate on format and field selection
3. Verify total character count is under 300K
4. User uploads to ElevenLabs dashboard

**Content format** (per property, trimmed to essential fields):
```
SC-315: Marina Heights Tower (Hold, Funded)
2BR, 1,200 sqft, Dubai Marina
Rental yield: 7.2%. Market value: AED 1,850,000 (+12.3%). 47 investors.
```

**Grouping**: By status (Live → Funded → Exited), then by area within each group. Summary stats at top of each section.

### Files to Create/Modify
- **`scripts/generate-kb.ts`** (new) -- Reads properties data, generates trimmed text, outputs char count
- **`src/lib/agent-config.ts`** -- Remove `lookup_property` from TOOL_DEFINITIONS
- **`src/components/VoiceAgent.tsx`** -- Remove `lookup_property` handler from client tool callback map

### Verification
- [ ] KB doc char count < 300K total
- [ ] User has uploaded both docs to ElevenLabs dashboard
- [ ] Test in ElevenLabs Playground: "tell me about SC-315" → answers from KB, no tool call
- [ ] Test: "the Sports City villa" → finds correct property from KB

---

## Phase 2: Speech Recognition Handling

**Goal**: Add normalization so remaining 3 tools handle speech-to-text variations gracefully.

### 2.1 SC Code Normalization
Add `normalizeSCCode(input: string): string` to `agent-tools.ts`:
- Strip whitespace/punctuation: "SC 315" / "S.C. 315" / "sc-315" → "SC-315"
- Handle spelled-out numbers: "three fifteen" → "315", "three one five" → "315"

### 2.2 Area Name Speech Aliases
Add `normalizeAreaName(input: string): string`:
- "jay vee see" / "jvc" → "JVC"
- "dee eye ef see" → "DIFC"
- "impz" → "IMPZ"
- Common misspellings and spoken forms

### 2.3 Apply to Tool Functions
Call normalization at the top of `searchProperties`, `calculateRoi`, `getRenovationStatus` before any matching logic.

### Files to Modify
- **`src/lib/agent-tools.ts`** -- Add normalization functions, apply in tool handlers

### Verification
- [ ] Test with "S C three fifteen" → resolves to SC-315
- [ ] Test with "jay vee see" → resolves to JVC area filter

---

## Phase 3: Unit Tests

**Goal**: Add tests for `agent-tools.ts` -- the only file with real business logic.

### Test Cases
- **`findProperties`**: exact SC code match, fuzzy name match, area match, no results
- **`searchProperties`**: filter by area, type, status, min_yield, combinations, empty results
- **`calculateRoi`**: Hold/Flip/Exited calculations, fee math correctness (1.5% entry, 0.5% annual, 2.5% exit)
- **`getRenovationStatus`**: Flip vs Hold property, progress ranges (0%, 15%, 60%, 85%, 100%)
- **Normalization** (from Phase 2): SC code variations, area name aliases

### Files to Create
- **`src/lib/__tests__/agent-tools.test.ts`** (new)

### Verification
- [ ] `npx vitest run src/lib/__tests__/agent-tools.test.ts` -- all pass

---

## Phase 4: System Prompt Rewrite

**Goal**: Lean, conversion-focused prompt. Knowledge is now in RAG (Phase 1), so the prompt focuses on personality and behavior.

### Process
1. Draft new prompt section by section
2. Present each section to user via AskUserQuestion for review
3. Iterate until approved
4. Update `agent-config.ts`
5. User pastes updated prompt into ElevenLabs dashboard (or runs configure script)

### New Prompt Sections

**Section 1 -- Identity & Voice**
- Named persona: "Sara, SmartCrowd Investment Guide"
- Educational guide, not salesperson
- Measured confidence, deliberate pacing
- Concise (2-3 sentences), natural AED rounding
- Honest about uncertainty and complexity

**Section 2 -- Conversation Strategy** (the conversion engine)
- **Progressive disclosure**: concept → specifics → data → next steps
- **Educational framing**: every feature positioned as investor benefit
- **Social proof weaving**: specific track record numbers, with past-performance disclaimers
- **Objection anticipation**: proactively address risk, liquidity, fees, regulation
- **Decision paralysis detection**: offer comparisons, suggest starting small (AED 500)
- **Progressive commitment**: explore → calculate → navigate → invest

**Section 3 -- Knowledge Base & Tools**
- KB for: platform info, fees, property details, historical data, FAQs
- 3 remaining tools: `search_properties`, `calculate_roi`, `get_renovation_status`
- 2 new tools (Phase 5): `navigate_to_property`, `start_investment`
- Tool chaining guidance

**Section 4 -- Speech Recognition Coaching**
- Guide agent on common speech-to-text variations
- Instruct to normalize before calling tools

**Section 5 -- Guardrails**
- No guaranteed returns, no tax/legal advice, no competitor bashing
- No urgency/pressure language
- Always disclose past performance caveat
- Acknowledge frustration gracefully

### Files to Modify
- **`src/lib/agent-config.ts`** -- Rewrite SYSTEM_PROMPT, update TOOL_DEFINITIONS (3 tools)

### Verification
- [ ] Test in Playground: general questions answered from KB (no tool calls)
- [ ] Test: "show me JVC properties" → uses search_properties
- [ ] Test: "what would I earn on 10,000 AED in SC-315?" → uses calculate_roi
- [ ] Test: agent naturally weaves in social proof and addresses risks

---

## Phase 5: New UI Tools & Dynamic Variables

### 5.1 `navigate_to_property` (client tool)
Scrolls dashboard to highlight a property card when agent mentions it.

**Code changes:**
- `src/lib/agent-tools.ts` -- Add `navigateToProperty()` dispatching `CustomEvent('navigate-to-property')`
- `src/components/PropertyTabs.tsx` -- Listen for event, switch to correct tab
- `src/components/PropertyCard.tsx` -- Accept `highlighted` prop, pulsing border + `scrollIntoView()`
- `src/components/PropertyGrid.tsx` -- Pass `highlightedCode` to PropertyCard
- `src/components/VoiceAgent.tsx` -- Wire up tool handler

**Manual step**: User creates `navigate_to_property` tool on ElevenLabs dashboard with params: `property_code` (string, required).

### 5.2 `start_investment` (client tool)
Opens investment dialog when user explicitly wants to invest.

**Code changes:**
- `src/lib/agent-tools.ts` -- Add `startInvestment()` handler (validates Live status, dispatches event)
- **New**: `src/components/InvestmentDialog.tsx` -- Dialog with property details, fee breakdown, CTA to smartcrowd.ae (demo disclaimer)
- `src/app/layout.tsx` -- Mount InvestmentDialog
- `src/components/VoiceAgent.tsx` -- Wire up tool handler

**Manual step**: User creates `start_investment` tool on ElevenLabs dashboard with params: `property_code` (string, required), `suggested_amount` (number, optional).

### 5.3 Dynamic Variables
Pass session context at conversation start for personalization.

**Code changes:**
- `src/components/VoiceAgent.tsx` -- Pass `dynamicVariables` to `startSession()`: user_name, current_tab, live_property_count, time_of_day
- **New**: `src/lib/dashboard-context.ts` -- Global state for currentTab + getTimeOfDay helper
- `src/components/PropertyTabs.tsx` -- Call `setCurrentTab()` on tab change, dispatch `dashboard-tab-change` event
- `src/components/VoiceAgent.tsx` -- Listen for tab change events, call `conversation.sendContextualUpdate()`
- `src/lib/agent-config.ts` -- Reference `{{variables}}` in prompt Session Context section

### Verification
- [ ] navigate_to_property: say "tell me about SC-315" → card highlights on dashboard
- [ ] start_investment: say "I want to invest" → dialog opens
- [ ] Dynamic vars: first message references correct time of day and current tab
- [ ] Tab switching while connected → agent acknowledges context change

---

## Phase 6: First Message & Voice Tuning

### 6.1 Personalized First Message
```
"Good {{time_of_day}}! I'm Sara, your SmartCrowd investment guide.
I see you're looking at our {{current_tab}} properties.
Would you like me to walk you through what's available, or do you have a specific question?"
```

**File**: `src/lib/agent-config.ts` -- Update FIRST_MESSAGE

### 6.2 Voice & TTS
- **Manual step**: User selects voice on ElevenLabs dashboard (recommend: warm-professional, not overly cheerful)
- `src/components/VoiceAgent.tsx` -- Add TTS overrides to `startSession()`:
  - `stability: 0.7`, `speed: 0.9`, `similarityBoost: 0.8`

### Verification
- [ ] First message uses correct time of day and tab
- [ ] Voice sounds measured and professional

---

## Implementation Order

Execute one phase at a time. Verify before moving to the next.

```
Phase 1 (KB docs)              ── collaborative doc creation, one at a time
Phase 2 (Speech normalization) ── can start after Phase 1
Phase 3 (Unit tests)           ── after Phase 1-2 (tests final tool set)
Phase 4 (System prompt)        ── after Phase 1 (prompt references KB)
Phase 5 (New UI tools)         ── after Phase 4 (prompt references new tools)
Phase 6 (First message + voice)── after Phase 5 (uses dynamic variables)
```

| Phase | What | Impact | Effort |
|-------|------|--------|--------|
| 1 | Knowledge Base + remove lookup_property | High | Medium |
| 2 | Speech normalization | Medium | Low |
| 3 | Unit tests | Medium | Low |
| 4 | System prompt rewrite | High | Medium |
| 5 | New UI tools + dynamic vars | Medium | High |
| 6 | First message + voice | Low | Low |

---

## Research Summary (for reference)

Key findings from deep research on conversion-driving voice agents:

- **Educational framing > sales pitching** -- agents positioned as guides convert 5-15% higher
- **Progressive information disclosure** -- reveal in stages to avoid decision paralysis
- **Objection anticipation** -- proactively address concerns before users ask
- **Social proof** -- use specific numbers ("67 exits, avg 35-40% ROI"), not generic claims
- **Transparency about risks** -- paradoxically increases conversion by signaling integrity
- **Voice personality** -- measured confidence > friendliness for financial decisions; slightly slower speech rate signals competence
- **RAG vs tools trade-off**: static content (FAQs, history, education) → KB; dynamic content (live search, calculations, user-specific) → tools
- **RAG latency**: ~500ms per query, acceptable for reference lookups, not for simple known-answer questions (keep those in prompt memory)
