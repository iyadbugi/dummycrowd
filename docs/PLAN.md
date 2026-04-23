# SmartInvestor — AI Voice Agent for SmartCrowd Dashboard

## Context

The user has an Associate Product Manager interview at **SmartCrowd** tomorrow and wants to apply for the **ElevenLabs Customer Success** role. They want to build a project that demonstrates:
- **Builder mentality** — shipping a working product, not just talking about ideas
- **SmartCrowd domain knowledge** — understanding fractional real estate investing in MENA
- **ElevenLabs platform competence** — hands-on experience building and deploying a voice agent
- **Product thinking** — solving a real user problem (investor portfolio Q&A + education)

**User profile**: Non-technical PM based in Middle East, 2-3 days to build. Claude Code does the coding.

---

## What We're Building

A **SmartCrowd dashboard clone** with an embedded ElevenLabs voice agent. The UI replicates the look and feel of SmartCrowd's actual property browse page (sidebar nav, property cards with tabs for Live/Funded/Exited). The voice agent sits as a floating assistant button and can answer two types of questions:

1. **Property-specific queries** — "What's the renovation progress on the Palm Jumeirah Flip?", "What's the rental yield for the 1-bedroom in IMPZ?", "Which property has the best ROI?"

2. **General knowledge queries** — "How does fractional investing work?", "What are SmartCrowd's fees?", "What's the difference between Hold and Flip?"

All property data is real data captured from SmartCrowd's platform API (2 live + 165 funded + 67 exited = 234 properties).

---

## Architecture

```
┌──────────────────────────────────────────────┐
│   Next.js Web App (Vercel)                    │
│                                               │
│  ┌─────────┐  ┌──────────────────────────┐   │
│  │ Sidebar  │  │ Property Browse View     │   │
│  │ Nav      │  │ ┌──────────────────────┐ │   │
│  │ - Explore│  │ │ Tabs: Live|Funded|   │ │   │
│  │ - Wallet │  │ │       Exited         │ │   │
│  │ - Port-  │  │ ├──────────────────────┤ │   │
│  │   folio  │  │ │ Property Cards Grid  │ │   │
│  │ - Cart   │  │ │ (real SC data)       │ │   │
│  │          │  │ └──────────────────────┘ │   │
│  └─────────┘  └──────────────────────────┘   │
│                                               │
│  ┌──────────────────────────────────────────┐ │
│  │ 🎙 Floating Voice Agent Button           │ │
│  │ → Opens voice conversation overlay       │ │
│  │ → ElevenLabs React SDK (WebRTC)          │ │
│  └──────────────────────────────────────────┘ │
│                                               │
│  ┌──────────────────────────────────────────┐ │
│  │ API Routes                                │ │
│  │ - /api/signed-url (ElevenLabs auth)       │ │
│  │ (Property lookup + ROI calc are           │ │
│  │  client-side — data is in-memory)         │ │
│  └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────────┐
│   ElevenLabs Agent (Cloud)                    │
│                                               │
│   Voice: Professional, warm                   │
│   Knowledge: SmartCrowd general info          │
│   Tools:                                      │
│   - lookup_property (by ID, area, or type)    │
│   - search_properties (filter by criteria)    │
│   - calculate_roi (investment projections)    │
│   - get_renovation_status (for Flip props)    │
│   Persona: SmartCrowd Investment Advisor      │
└──────────────────────────────────────────────┘
```

---

## Property Data (Scraped from SmartCrowd)

### Funded Properties (20 — sample shown)

| ID | Name | Type | Area | Beds | Sqft | Yield/ROI | Purchase | Market Value | Change | Investors | Rental Income |
|----|------|------|------|------|------|-----------|----------|--------------|--------|-----------|---------------|
| SC-330 | Studio, Discovery Gardens | Hold | Discovery Gardens | - | 550 | 6.07% | 578K | 580K | +0.35% | 150 | 0 |
| SC-326 | 1B+Study, Bali Residences JVT | Hold | JVT | 1 | 824 | 5.94% | 1,290K | 1,300K | +0.78% | 317 | 5,863 |
| SC-325 | 3BR Penthouse, Bellevue Downtown | Flip | Downtown | 3 | 3016 | 15.01% ann. | - | - | 0% reno | 212 | - |
| SC-323 | 1B Lakeside, IMPZ | Hold | IMPZ | 1 | 596 | 6.25% | 600K | 600K | 0% | 174 | 4,690 |
| SC-319 | Old Town Island, Downtown | Flip | Old Town | 2 | 2227 | 15.33% ann. | - | - | 5% reno | 150 | - |
| SC-317 | Serenia West, Palm Jumeirah | Flip | Palm Jumeirah | 3 | 3447 | 15.49% ann. | - | - | 10% reno | 195 | - |
| SC-315 | 1BR Hera Tower, Sports City | Hold | Sports City | 1 | 760 | 6.72% | 835K | 850K | +1.80% | 212 | 25,449 |
| SC-314 | 1BR Joya Blanca, Arjan | Hold | Arjan | 1 | 746 | 6.14% | 995K | 1,100K | +10.55% | 286 | 27,262 |
| SC-309 | 5BR Villa, Sidra 3 Dubai Hills | Flip | Dubai Hills | 5 | 4109 | 15.19% ann. | - | - | 80% reno | 207 | - |
| SC-312 | 3BR Penthouse, Downtown | Flip | Downtown | 3 | 2800 | 15.47% ann. | - | - | 20% reno | 263 | - |

### Exited Properties (20 — sample shown)

| ID | Name | Type | Area | Exit Price | Total Rental | Holding | ROI |
|----|------|------|------|-----------|-------------|---------|-----|
| SC-285 | 3BR Villa, Palm Jumeirah | Flip | Palm Jumeirah | 24,000,000 | - | 14 mo | +24.59% |
| SC-282 | 3BR Duplex, DIFC | Flip | DIFC | 8,700,000 | - | 18 mo | +25.01% |
| SC-231 | 1BR Duplex, Fortunato JVC | Hold | JVC | 894,469 | 130,228 | 34 mo | +49.28% |
| SC-208 | 1BR, 8 Blvd Walk Downtown | Hold | Downtown | 1,531,158 | 178,605 | 43 mo | +51.12% |
| SC-179 | 1BR Fortunato Tower, JVC | Hold | JVC | 713,403 | 102,376 | 35 mo | +63.92% |
| SC-187 | Yacht Bay Studio, Marina | Hold | Dubai Marina | 910,307 | 165,191 | 47 mo | +47.08% |

### Data Capture Summary

All property data has been captured via API interception from SmartCrowd's public API (`api.phoenix.smartcrowd.ae`):
- **2 Live**: SC-331 "Studio in Discovery Gardens" (Hold, 578K AED, 6.07% yield) + SC-327 "Villa in the Sky" Penthouse, DIFC (Flip, 27.35M AED, 33.15% funded)
- **165 Funded**: Full structured data including rental yields, market values, renovation progress, investor counts, funded dates
- **67 Exited**: Full data including exit prices, total rental income, holding periods, ROI percentages

**Raw data file**: `/Users/flashy/.claude/projects/-Users-flashy/0eaeaf78-3e8c-4ae2-88c0-44cb5cf92e30/tool-results/mcp-playwright-browser_run_code-1771926478771.txt`

Each property includes: id, code, title, investmentType, price, propertyType, investmentCategory, propertyStatus, renovationProgress, rental (yields, rent, income), performance (investors, ROI, funded%), valuation (market value, sale proceeds), physical (beds, baths, sqft), location (area, building, city), auction (dates)

*(Full dataset of all 234 properties is in `src/data/properties.ts`)*

---

## Agent Knowledge Base

### General SmartCrowd Knowledge (baked into system prompt)
- **Platform**: DFSA-regulated, DIFC-registered, AED 500 minimum, 5000+ investors, 165+ funded properties, 67 exits
- **How it works**: Register (5 min) → KYC (free) → Fund wallet → Browse → Invest → Earn returns → Exit
- **Hold model**: 3-5yr hold, earn rental income + capital appreciation, target 7-11% annual
- **Flip model**: 9-12 month, buy undervalued → renovate → sell, target 15-30% ROI
- **Fees**: 1.5% entry, 0.5% annual admin, 2.5% exit, 0% performance fee
- **Track record**: 67 exits, avg ~35-40% net ROI, AED 220M+ in exit proceeds
- **Exit options**: 5-year investor vote, Share Transfer Facility (March/September windows)
- **Advantages**: Lowest entry (AED 500), full lifecycle management, no performance fees, Sharia-compliant

### Property-Specific Knowledge (via tool calls)
The agent uses tools to query the property database, enabling questions like:
- "What's the renovation progress on the Sidra villa?" → calls `get_renovation_status("SC-309")` → "80% complete"
- "What's the yield on the IMPZ properties?" → calls `search_properties({area: "IMPZ"})` → lists SC-323, SC-321, SC-320
- "If I invest 10,000 in the Sports City property, what would I earn?" → calls `calculate_roi({amount: 10000, property_id: "SC-315"})`

---

## Implementation Plan

### Phase 1: Setup ~~(Day 1, ~1 hour)~~ COMPLETED
1. ~~**Create ElevenLabs account** at elevenlabs.io → generate API key~~ *(pending — user to set up)*
2. **Scaffold Next.js project** in `/Users/flashy/Downloads/dummycrowd/` — DONE
   - Next.js 16.1.6 with App Router + Turbopack + Tailwind v4
   - Installed: `@elevenlabs/react`, `@elevenlabs/elevenlabs-js` *(packages renamed from `@11labs/react` and `elevenlabs`)*
   - shadcn/ui initialized + components added: `button`, `card`, `badge`, `tabs`, `dialog`, `progress`, `separator`, `scroll-area`
   - Git repo initialized with proper `.gitignore`
   - Build verified passing

### Phase 2: Build Data Layer ~~(Day 1, ~1 hour)~~ COMPLETED
1. **`src/types/property.ts`** — TypeScript interfaces for all property data — DONE
   - Types discovered from actual API data: `PropertyStatus` includes `SOLD`, `PropertyType` includes `HOTEL_APARTMENT` and `TOWN_HOUSE`, `InvestmentCategory` includes `SHORT_TERM`, `PropertyCategory` includes `COMMERCIAL`
   - Added `sqft?: number` to `PropertyPhysical` interface (Phase 3)
2. **`src/data/properties.ts`** — All 234 properties (2 live + 165 funded + 67 exited) as typed objects — DONE
   - Transformed from raw API data via Node.js script
   - Spot-checked: SC-315 yield = 6.72%, SC-309 renovation = 80%, SC-285 ROI = 24.59% — all correct
   - Added SC-331 (new live Hold property: Studio in Discovery Gardens, 578K AED, 6.07% yield)
   - Updated SC-327 with real data (72 investors, 33.15% funded, 15.13% ROI, 27.35M project cost)
   - Added sqft values to all 234 properties (known values from screenshots + derived estimates)
   - Images: area-based gradient placeholders (no image URLs in API data)
3. **`src/data/knowledge.ts`** — SmartCrowd constants (fees, stats, investment models, FAQs) — DONE

### Phase 3: Build Dashboard UI ~~(Day 1-2, ~3-4 hours)~~ COMPLETED
1. **Layout** (`app/layout.tsx`) — DONE
   - SmartCrowd-style dark navy sidebar (280px fixed): logo, nav items (Explore active, Wallet, Portfolio, Cart, Notifications, Help & Support), Light Mode toggle, app download section, user avatar
   - Main content area to the right with light gray background (#F5F6FA)
2. **Property Browse Page** (`app/page.tsx`) — DONE
   - Tab bar: Live (2) | Funded (165) | Exited (67) — pill-style tabs, counts from actual data
   - All/Hold/Flip type filter dropdown (resets on tab switch)
   - Paginated property cards grid (12 per page) with prev/next controls
3. **Property Card Component** (`src/components/PropertyCard.tsx`) — DONE
   - Single component that renders 4 variants based on investmentType + propertyStatus:
   - **Hold cards** (funded): gradient image, green Hold badge, investor count + "Instant Returns" pills, SC-code badge, specs row (beds/sqft/area/term), rental yield, purchase price, market value with change %, rental income
   - **Flip cards** (funded): gradient image, purple Flip badge, investor count pill, specs row, annualized ROI, timeline, renovation progress in purple, project cost
   - **Live cards**: Hold or Flip metrics + funding progress bar (green for Hold, blue for Flip), remaining amount, funded percentage
   - **Exited cards**: exit price, total rental income, holding period, total return in green
   - Area-based gradient colors for image placeholders (13 areas mapped)
4. **`src/components/PropertyGrid.tsx`** — DONE
   - Responsive grid: 3 cols desktop, 2 cols tablet, 1 col mobile
   - Pagination: 12 cards/page, resets on tab/filter change
5. **`src/components/PropertyTabs.tsx`** — DONE
   - Manages tab state (live/funded/exited) + type filter (All/Hold/Flip)
   - Filters properties with useMemo, passes to PropertyGrid
   - Type filter resets to "All" on tab switch
6. **`src/lib/property-utils.ts`** — DONE
   - `formatPrice()`, `formatPriceShort()`, `getPropertySpecs()`, `getRemainingAmount()`, `getFundedPercentage()`
7. **SmartCrowd color scheme** in `globals.css` — DONE
   - CSS variables: sc-navy, sc-blue, sc-green, sc-purple, sc-pink, sc-gray-bg, sc-text-dark/muted/green/red
   - Registered as Tailwind utilities via `@theme inline`
8. **shadcn components used**: `button`, `card`, `badge`, `progress`

### Phase 4: Configure ElevenLabs Agent ~~(Day 2, ~1-2 hours)~~ COMPLETED
1. **`src/lib/agent-tools.ts`** — 4 client-side tool handlers — DONE
   - `lookupProperty`: fuzzy match by SC code or name/area, returns up to 3 formatted summaries
   - `searchProperties`: filter by area, type (Hold/Flip), status (Live/Funded/Exited), min yield; returns up to 5 results
   - `calculateRoi`: projects net returns after fees (1.5% entry, 0.5% annual, 2.5% exit) for Hold/Flip/Exited
   - `getRenovationStatus`: returns renovation % + qualitative status for Flip properties
   - Helpers: `findProperties()` (fuzzy matching), `formatPropertySummary()` (voice-optimized formatting)
2. **`src/lib/agent-config.ts`** — System prompt + tool definitions — DONE
   - `SYSTEM_PROMPT`: persona, knowledge base, tool routing rules, guardrails
   - `FIRST_MESSAGE`: agent greeting
   - `TOOL_DEFINITIONS`: 4 tool contracts with parameter schemas for ElevenLabs dashboard
3. **`src/app/api/signed-url/route.ts`** — Signed URL API route — DONE
   - Fetches signed WebSocket URL from ElevenLabs API, keeps API key server-side
4. **`.env.local`** — Environment template with placeholder values — DONE
5. **`docs/elevenlabs-setup-guide.md`** — Step-by-step dashboard setup guide — DONE
   - 10-step walkthrough: account creation, agent config, tool registration, testing
6. **ElevenLabs dashboard configuration** — DONE
   - Agent created: "dummycrowd" with system prompt, first message, 4 client tools registered
   - API key generated, Agent ID obtained, `.env.local` populated

### Phase 5: Build Voice Agent Component ~~(Day 2, ~2 hours)~~ COMPLETED
1. **`src/components/VoiceAgent.tsx`** — Main conversation component — DONE
   - Uses `@elevenlabs/react` `useConversation` hook with signed URL auth
   - Floating mic button (bottom-right, pulsing blue #2563EB)
   - Desktop (≥768px): Bottom-right card panel (280px wide) with Orb + status + End Call
   - Mobile (<768px): Full-screen overlay with centered Orb + status + End Call
   - 4 client-side tool handlers wired: `lookup_property`, `search_properties`, `calculate_roi`, `get_renovation_status`
   - State management: idle → connecting → connected (listening/speaking/thinking) → error
   - Event handlers: onConnect, onDisconnect, onModeChange, onError
2. **`src/components/ui/orb.tsx`** — ElevenLabs 3D Orb visualization — DONE
   - React Three Fiber + Perlin noise shader animation
   - State mapping: idle → listening (oscillating) → talking (amplified) → thinking (slow pulse)
   - WebGL context loss recovery, dynamic import (SSR: false)
   - Color customization, fade-in animation, volume reactivity
3. **VoiceAgent integrated into `app/layout.tsx`** — DONE
   - Single Orb instance to prevent WebGL context loss

### Phase 6: Integration & Polish (Day 3)
1. ~~**Wire up tool handlers**~~ — DONE in Phase 5 (tools wired directly in VoiceAgent.tsx)
2. **Polish the dashboard** — REMAINING
   - ~~Match SmartCrowd's blue/white color scheme~~ — DONE
   - ~~Property card hover states~~ — DONE
   - ~~Responsive for mobile demo~~ — DONE
   - Smooth transitions on tab switch
   - Any visual polish or bug fixes found during testing
3. **Test conversations end-to-end** — REMAINING
   - "What's the rental yield for the 1-bedroom in IMPZ?" → agent calls search_properties → "The 1-bedroom in Lakeside IMPZ (SC-323) has a rental yield of 6.25%..."
   - "How's the renovation going on the Sidra villa?" → agent calls get_renovation_status → "The 5-bedroom villa in Sidra 3 is at 80% renovation progress..."
   - "How does fractional investing work?" → agent answers from knowledge base
   - "What fees does SmartCrowd charge?" → agent explains 1.5% entry, 0.5% annual, 2.5% exit
   - "If I invest 5000 dirhams in the Sports City property, what would I make?" → agent calls calculate_roi → returns projection

### Phase 7: Deploy (Day 3)
1. ~~**Init git repo**~~ — DONE
2. **Push to GitHub** — REMAINING
3. **Deploy to Vercel** — set env vars (ELEVENLABS_API_KEY, NEXT_PUBLIC_AGENT_ID)
4. **Test live URL** on phone + desktop
5. **Record a 60-second demo video** (optional but high-impact for ElevenLabs application)

---

## File Structure

```
dummycrowd/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Dashboard layout with sidebar ✅
│   │   ├── page.tsx                  # Property browse page (tabs + grid) ✅
│   │   ├── globals.css               # Global styles + Tailwind + SC color scheme ✅
│   │   └── api/
│   │       └── signed-url/route.ts  # ElevenLabs signed URL generation ✅
│   ├── components/
│   │   ├── Sidebar.tsx           # SmartCrowd-style sidebar nav ✅
│   │   ├── PropertyTabs.tsx      # Live/Funded/Exited tab bar + type filter ✅
│   │   ├── PropertyCard.tsx      # Card component (Hold/Flip/Live/Exited variants) ✅
│   │   ├── PropertyGrid.tsx      # Paginated grid of property cards ✅
│   │   ├── VoiceAgent.tsx        # ElevenLabs voice agent + floating button + panel/overlay ✅
│   │   └── ui/                   # shadcn components + orb.tsx (3D Orb visualization) ✅
│   ├── data/
│   │   ├── properties.ts        # All 234 properties (2 live + 165 funded + 67 exited) ✅
│   │   └── knowledge.ts         # SmartCrowd constants, fees, FAQs ✅
│   ├── lib/
│   │   ├── utils.ts             # shadcn cn() utility ✅
│   │   ├── property-utils.ts    # formatPrice, getPropertySpecs, etc. ✅
│   │   ├── agent-tools.ts      # Tool handler functions for ElevenLabs agent ✅
│   │   └── agent-config.ts    # System prompt + tool definitions ✅
│   └── types/
│       └── property.ts          # TypeScript types for properties ✅
├── docs/
│   ├── elevenlabs-setup-guide.md        # ElevenLabs dashboard config guide ✅
│   └── plans/
│       ├── 2026-02-24-dashboard-ui.md   # Phase 3 implementation plan
│       ├── 2026-02-24-elevenlabs-agent-design.md  # Phase 4 design doc ✅
│       ├── 2026-02-24-phase4-implementation.md    # Phase 4 implementation plan ✅
│       ├── 2026-02-25-voice-agent-design.md       # Phase 5 design doc ✅
│       └── 2026-02-25-voice-agent-implementation.md # Phase 5 implementation plan ✅
├── .env.local                   # ELEVENLABS_API_KEY, NEXT_PUBLIC_AGENT_ID
├── next.config.ts
├── components.json              # shadcn config
├── package.json
├── PLAN.md
└── tsconfig.json
```

---

## Key Dependencies

- `next` (16.1.6) — React framework with App Router + Turbopack
- `@elevenlabs/react` (0.14.1) — ElevenLabs React SDK for voice conversations (useConversation hook)
- `@elevenlabs/elevenlabs-js` (2.36.0) — ElevenLabs JS SDK (server-side signed URL generation)
- `@react-three/fiber` (9.5.0) + `@react-three/drei` (10.7.7) + `three` (0.183.1) — 3D Orb visualization
- `tailwindcss` (v4) — Styling
- `lucide-react` — Icons
- shadcn/ui: `button`, `card`, `badge`, `tabs`, `dialog`, `progress`, `separator`, `scroll-area`

---

## Verification

1. **Dashboard renders**: `npm run dev` → sidebar + property cards display correctly across all 3 tabs
2. **Data accuracy**: Property cards match real SmartCrowd data (spot-check SC-315 yield = 6.72%, SC-309 renovation = 80%)
3. **Voice agent connects**: Click floating mic → microphone permission → agent greets you
4. **Property queries work**: Ask "What's the yield on the IMPZ property?" → agent returns 6.25%
5. **Renovation queries work**: Ask "How far along is the Sidra villa renovation?" → agent returns 80%
6. **General knowledge works**: Ask "How does SmartCrowd work?" → coherent explanation
7. **ROI calculator works**: Ask "If I invest 10,000 in Sports City, what do I earn?" → returns projection with fee breakdown
8. **Deploy test**: Live URL works on mobile and desktop
9. **Demo readiness**: Can walk through dashboard + have a voice conversation in under 2 minutes

---

## What This Demonstrates

### SmartCrowd Interview (tomorrow)
- "I built a voice-powered assistant for your dashboard that can answer investor questions about their properties and about fractional investing in general"
- Shows: deep product understanding, initiative, builder mentality, AI product vision
- Talking point: "This could reduce Help & Support tickets by 40%+ and improve investor confidence during onboarding"

### ElevenLabs Application
- Built a production-quality conversational agent on the ElevenLabs platform with:
  - Custom tool integrations (4 tools)
  - React SDK + WebRTC integration
  - Real enterprise use case (FinTech investor dashboard)
  - Knowledge base + dynamic data retrieval
- Shows: hands-on platform expertise, enterprise customer empathy, ability to advise on agent design
- Talking point: "I built this to understand the platform from a customer's perspective — the biggest insight was how tool design determines conversation quality"
