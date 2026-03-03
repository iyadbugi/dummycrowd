# Phase 5: New UI Tools & Dynamic Variables — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 2 new client tools (`navigate_to_property`, `start_investment`) and dynamic variables so the voice agent can control the dashboard UI and personalize conversations.

**Architecture:** Tools dispatch `CustomEvent`s from `agent-tools.ts`. UI components listen for these events and update state (tab switching, page navigation, highlighting, dialogs). Dynamic variables pass dashboard context at session start and on tab change via `sendContextualUpdate`.

**Tech Stack:** React (Next.js App Router), ElevenLabs React SDK (`useConversation`, `startSession`, `sendContextualUpdate`), TypeScript, shadcn/ui Dialog, Tailwind CSS.

---

### Task 1: Create dashboard-context module

**Files:**
- Create: `src/lib/dashboard-context.ts`

**Step 1: Write the module**

```ts
// src/lib/dashboard-context.ts
import { liveProperties } from "@/data/properties";

export type Tab = "live" | "funded" | "exited";

let currentTab: Tab = "live";

export function getCurrentTab(): Tab {
  return currentTab;
}

export function setCurrentTab(tab: Tab): void {
  currentTab = tab;
}

export function getTimeOfDay(): "morning" | "afternoon" | "evening" {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
}

export function getLivePropertyCount(): number {
  return liveProperties.length;
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors related to `dashboard-context.ts`.

**Step 3: Commit**

```
feat: add dashboard-context module for dynamic variables
```

---

### Task 2: Add navigateToProperty and startInvestment to agent-tools.ts

**Files:**
- Modify: `src/lib/agent-tools.ts` (add 2 new exports before `getRenovationStatus` at line 418)

**Step 1: Write tests for navigateToProperty**

Add to `src/lib/__tests__/agent-tools.test.ts`:

```ts
import {
  normalizeSCCode,
  normalizeAreaName,
  calculateRoi,
  getRenovationStatus,
  navigateToProperty,
  startInvestment,
} from "../agent-tools";

// ... existing tests ...

// --- navigateToProperty ---

describe("navigateToProperty", () => {
  it("returns error for unknown property", () => {
    const result = navigateToProperty({ property_code: "SC-999" });
    expect(result).toContain("No property found");
  });

  it("returns success message with property code and title", () => {
    const result = navigateToProperty({ property_code: "SC-315" });
    expect(result).toContain("SC-315");
    expect(result).toContain("Navigating");
  });

  it("resolves speech-mangled codes", () => {
    const result = navigateToProperty({ property_code: "S C three fifteen" });
    expect(result).toContain("SC-315");
  });
});
```

**Step 2: Run tests to verify they fail**

Run: `npx vitest run src/lib/__tests__/agent-tools.test.ts`
Expected: FAIL — `navigateToProperty` is not exported.

**Step 3: Write tests for startInvestment**

Add to `src/lib/__tests__/agent-tools.test.ts`:

```ts
// --- startInvestment ---

describe("startInvestment", () => {
  it("returns error for unknown property", () => {
    const result = startInvestment({ property_code: "SC-999" });
    expect(result).toContain("No property found");
  });

  it("returns success for Live property (SC-331)", () => {
    const result = startInvestment({ property_code: "SC-331" });
    expect(result).toContain("Opening investment");
    expect(result).toContain("SC-331");
  });

  it("rejects Funded property (SC-315)", () => {
    const result = startInvestment({ property_code: "SC-315" });
    expect(result).toContain("not open for new investment");
  });

  it("rejects Exited property (SC-106)", () => {
    const result = startInvestment({ property_code: "SC-106" });
    expect(result).toContain("not open for new investment");
  });

  it("resolves speech-mangled codes", () => {
    const result = startInvestment({ property_code: "S C three thirty one" });
    expect(result).toContain("SC-331");
  });
});
```

**Step 4: Implement navigateToProperty and startInvestment**

Add to `src/lib/agent-tools.ts`, before the `getRenovationStatus` function (before line 418):

```ts
export function navigateToProperty({
  property_code,
}: {
  property_code: string;
}): string {
  const normalized = normalizeSCCode(property_code);
  const matches = findProperties(normalized, 1);

  if (matches.length === 0) {
    return `No property found matching "${property_code}".`;
  }

  const p = matches[0];
  const tab = getStatusForProperty(p).toLowerCase() as "live" | "funded" | "exited";

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("navigate-to-property", {
        detail: { code: p.code, tab },
      })
    );
  }

  return `Navigating to ${p.code}: ${p.title}.`;
}

export function startInvestment({
  property_code,
  suggested_amount,
}: {
  property_code: string;
  suggested_amount?: number;
}): string {
  const normalized = normalizeSCCode(property_code);
  const matches = findProperties(normalized, 1);

  if (matches.length === 0) {
    return `No property found matching "${property_code}".`;
  }

  const p = matches[0];

  if (p.propertyStatus !== "LIVE") {
    return `${p.code}: ${p.title} is currently ${getStatusForProperty(p).toLowerCase()} and not open for new investment. Only Live properties accept new investments.`;
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("start-investment", {
        detail: { property: p, suggestedAmount: suggested_amount },
      })
    );
  }

  return `Opening investment details for ${p.code}: ${p.title}.`;
}
```

**Step 5: Run all tests**

Run: `npx vitest run src/lib/__tests__/agent-tools.test.ts`
Expected: All tests pass (existing 30 + new 8 = 38 tests).

**Step 6: Commit**

```
feat: add navigateToProperty and startInvestment tool handlers
```

---

### Task 3: Add highlight support to PropertyCard and PropertyGrid

**Files:**
- Modify: `src/components/PropertyCard.tsx:241-256` (add `highlighted` prop)
- Modify: `src/components/PropertyGrid.tsx:11-44` (add `highlightedCode` prop, calculate page)

**Step 1: Update PropertyCard to accept `highlighted` prop**

In `src/components/PropertyCard.tsx`, update the interface and component:

```tsx
// Change the interface (line 241-243):
interface PropertyCardProps {
  property: Property;
  highlighted?: boolean;
}

// Change the function signature (line 245):
export default function PropertyCard({ property, highlighted }: PropertyCardProps) {

// Change the Card element (line 256) — add ref for scrollIntoView and conditional highlight class:
// Add useRef and useEffect imports at top of file
// Add a ref and effect inside the component:
```

Specifically:
1. Add `useRef, useEffect` to the React import (line 3 — note: it's `"use client"` so this is fine)
2. Add the `highlighted` prop to the interface
3. Add a `cardRef` inside the component body
4. Add a `useEffect` that scrolls into view when `highlighted` becomes true
5. Add conditional CSS classes to the `<Card>` element for the pulsing border

The Card element becomes:
```tsx
<Card
  ref={cardRef}
  className={`overflow-hidden shadow-sm hover:shadow-md transition-shadow p-0 gap-0 dark:bg-[#111F42] dark:border-[#1C3058] ${
    highlighted
      ? "ring-2 ring-sc-blue ring-offset-2 dark:ring-offset-[#0B1A33] animate-pulse"
      : ""
  }`}
>
```

**Step 2: Update PropertyGrid to accept and handle `highlightedCode`**

In `src/components/PropertyGrid.tsx`, update the interface, add page calculation logic, and pass prop:

```tsx
interface PropertyGridProps {
  properties: Property[];
  highlightedCode?: string | null;
}

export default function PropertyGrid({ properties, highlightedCode }: PropertyGridProps) {
```

Add a `useEffect` that sets `currentPage` to the page containing the highlighted property when `highlightedCode` changes:

```tsx
useEffect(() => {
  if (!highlightedCode) return;
  const index = properties.findIndex((p) => p.code === highlightedCode);
  if (index >= 0) {
    setCurrentPage(Math.floor(index / CARDS_PER_PAGE));
  }
}, [highlightedCode, properties]);
```

Pass `highlighted` prop to PropertyCard:
```tsx
<PropertyCard
  property={p}
  highlighted={highlightedCode === p.code}
/>
```

**Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

**Step 4: Commit**

```
feat: add highlight support to PropertyCard and PropertyGrid
```

---

### Task 4: Add navigation event handling to PropertyTabs

**Files:**
- Modify: `src/components/PropertyTabs.tsx` (listen for `navigate-to-property` event, switch tab, pass highlightedCode)

**Step 1: Update PropertyTabs**

Add a `highlightedCode` state and event listener:

```tsx
const [highlightedCode, setHighlightedCode] = useState<string | null>(null);
```

Add a `useEffect` to listen for the `navigate-to-property` event:

```tsx
useEffect(() => {
  function handleNavigate(e: Event) {
    const { code, tab } = (e as CustomEvent).detail;
    setActiveTab(tab);
    setTypeFilter("ALL");
    setHighlightedCode(code);
    // Auto-clear highlight after 4 seconds
    setTimeout(() => setHighlightedCode(null), 4000);
  }

  window.addEventListener("navigate-to-property", handleNavigate);
  return () => window.removeEventListener("navigate-to-property", handleNavigate);
}, []);
```

Also add a `useEffect` to dispatch a `dashboard-tab-change` event whenever `activeTab` changes (for dynamic variables in Task 6):

```tsx
useEffect(() => {
  window.dispatchEvent(
    new CustomEvent("dashboard-tab-change", { detail: { tab: activeTab } })
  );
}, [activeTab]);
```

Import and call `setCurrentTab` from dashboard-context when tab changes:

```tsx
import { setCurrentTab } from "@/lib/dashboard-context";

// Inside the existing useEffect that resets type filter on tab change (line 54-57):
useEffect(() => {
  setTypeFilter("ALL");
  setCurrentTab(activeTab);
}, [activeTab]);
```

Pass `highlightedCode` to PropertyGrid:

```tsx
<PropertyGrid properties={filteredProperties} highlightedCode={highlightedCode} />
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

**Step 3: Commit**

```
feat: add navigation event handling to PropertyTabs
```

---

### Task 5: Create InvestmentDialog component

**Files:**
- Create: `src/components/InvestmentDialog.tsx`
- Modify: `src/app/layout.tsx:5,44` (mount InvestmentDialog)

**Step 1: Create InvestmentDialog**

```tsx
// src/components/InvestmentDialog.tsx
"use client";

import { useState, useEffect } from "react";
import { Property } from "@/types/property";
import { formatPrice } from "@/lib/property-utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function InvestmentDialog() {
  const [open, setOpen] = useState(false);
  const [property, setProperty] = useState<Property | null>(null);
  const [suggestedAmount, setSuggestedAmount] = useState<number | undefined>();

  useEffect(() => {
    function handleInvest(e: Event) {
      const detail = (e as CustomEvent).detail;
      setProperty(detail.property);
      setSuggestedAmount(detail.suggestedAmount);
      setOpen(true);
    }

    window.addEventListener("start-investment", handleInvest);
    return () => window.removeEventListener("start-investment", handleInvest);
  }, []);

  if (!property) return null;

  const isHold = property.investmentType === "HOLD";
  const price = isHold ? property.price : property.projectPrice;
  const rentalYield = property.rental.grossYield ?? property.rental.dividendYield;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Invest in {property.code}</DialogTitle>
          <DialogDescription>{property.title}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Property summary */}
          <div className="rounded-lg bg-gray-50 dark:bg-white/5 p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Type</span>
              <span className="font-medium text-sc-text-dark">{isHold ? "Hold" : "Flip"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">{isHold ? "Purchase Price" : "Project Cost"}</span>
              <span className="font-medium text-sc-text-dark">AED {formatPrice(price)}</span>
            </div>
            {rentalYield && (
              <div className="flex justify-between text-sm">
                <span className="text-sc-text-muted">Rental Yield</span>
                <span className="font-medium text-sc-text-green">{rentalYield}%</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Min. Investment</span>
              <span className="font-medium text-sc-text-dark">AED 500</span>
            </div>
          </div>

          {/* Fee summary */}
          <div className="rounded-lg border border-gray-200 dark:border-white/10 p-4 space-y-2">
            <p className="text-sm font-medium text-sc-text-dark">Fee Structure</p>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Entry fee</span>
              <span className="text-sc-text-dark">1.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Annual admin</span>
              <span className="text-sc-text-dark">0.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Exit fee</span>
              <span className="text-sc-text-dark">2.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-sc-text-muted">Performance fee</span>
              <span className="text-sc-text-green font-medium">0%</span>
            </div>
          </div>

          {suggestedAmount && (
            <p className="text-sm text-sc-text-muted text-center">
              Sara suggested investing AED {suggestedAmount.toLocaleString()}
            </p>
          )}

          {/* CTA */}
          <Button asChild className="w-full bg-sc-blue hover:bg-sc-blue/90">
            <a
              href="https://www.smartcrowd.ae"
              target="_blank"
              rel="noopener noreferrer"
            >
              Invest on SmartCrowd
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {/* Demo disclaimer */}
          <p className="text-xs text-sc-text-muted text-center">
            This is a demo. Visit smartcrowd.ae for real investments.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

**Step 2: Mount in layout.tsx**

In `src/app/layout.tsx`, add the import and mount InvestmentDialog next to VoiceAgent:

```tsx
import InvestmentDialog from "@/components/InvestmentDialog";

// Inside the ThemeProvider, after <VoiceAgent />:
<InvestmentDialog />
```

**Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

**Step 4: Commit**

```
feat: add InvestmentDialog component
```

---

### Task 6: Wire new tools into VoiceAgent and add dynamic variables

**Files:**
- Modify: `src/components/VoiceAgent.tsx` (add 2 tool handlers, dynamic variables, contextual updates)

**Step 1: Update imports**

Add `navigateToProperty` and `startInvestment` to the import from `@/lib/agent-tools`, and import dashboard context helpers:

```tsx
import {
  calculateRoi,
  getRenovationStatus,
  navigateToProperty,
  startInvestment,
} from "@/lib/agent-tools";
import { getCurrentTab, getTimeOfDay, getLivePropertyCount } from "@/lib/dashboard-context";
```

Add `useEffect` to the React import.

**Step 2: Add new client tool handlers**

Inside the `clientTools` object in `useConversation` (after `get_renovation_status` handler):

```tsx
navigate_to_property: (params: { property_code: string }) => {
  const result = navigateToProperty(params);
  return result;
},
start_investment: (params: { property_code: string; suggested_amount?: number }) => {
  const result = startInvestment(params);
  return result;
},
```

**Step 3: Pass dynamic variables to startSession**

Update the `startConversation` callback — change the `startSession` call to:

```tsx
await conversation.startSession({
  signedUrl,
  dynamicVariables: {
    time_of_day: getTimeOfDay(),
    current_tab: getCurrentTab(),
    live_property_count: getLivePropertyCount(),
  },
});
```

**Step 4: Add tab change listener for contextual updates**

Add a `useEffect` inside VoiceAgent that listens for `dashboard-tab-change` events and calls `sendContextualUpdate` when the agent is connected:

```tsx
useEffect(() => {
  function handleTabChange(e: Event) {
    const { tab } = (e as CustomEvent).detail;
    if (agentState === "connected") {
      conversation.sendContextualUpdate(
        `The user just switched to the ${tab} properties tab.`
      );
    }
  }

  window.addEventListener("dashboard-tab-change", handleTabChange);
  return () => window.removeEventListener("dashboard-tab-change", handleTabChange);
}, [agentState, conversation]);
```

**Step 5: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

**Step 6: Commit**

```
feat: wire navigate + invest tools and dynamic variables into VoiceAgent
```

---

### Task 7: Update agent-config with new tool definitions and prompt changes

**Files:**
- Modify: `src/lib/agent-config.ts`

**Step 1: Add Session Context section to SYSTEM_PROMPT**

Add after the `## Conversation Strategy` section, before `## Knowledge Base & Tools`:

```
## Session Context
- Time of day: {{time_of_day}}
- User is currently viewing: {{current_tab}} properties
- Live properties open for investment: {{live_property_count}}
Use this context naturally. Greet appropriately for the time of day. Reference what the user is currently browsing when relevant.
```

**Step 2: Update Knowledge Base & Tools section**

Replace the existing `## Knowledge Base & Tools` section to include all 4 tools:

```
## Knowledge Base & Tools

Your Knowledge Base contains the full SmartCrowd property portfolio (234 properties) and platform knowledge (fees, how it works, SPV structure, track record, FAQs). Answer ALL property questions and platform questions from your Knowledge Base.

You have 4 tools — use them only when needed:

- **calculate_roi**: When the user wants a projection for a specific investment amount in a specific property.
- **get_renovation_status**: When the user asks about renovation progress on a Flip property.
- **navigate_to_property**: When you want to visually highlight a property on the dashboard. Use when recommending a specific property or when visual context helps. Don't use for every property mentioned.
- **start_investment**: When the user explicitly expresses intent to invest. Only works for Live properties — if the property is funded or exited, explain it's not available and suggest Live alternatives.

Do NOT call a tool for questions you can answer from your Knowledge Base.
```

**Step 3: Update FIRST_MESSAGE to use dynamic variables**

```ts
export const FIRST_MESSAGE = "Good {{time_of_day}}! I'm Sara, your SmartCrowd investment guide. I see you're browsing our {{current_tab}} properties. Would you like me to walk you through what's available, or do you have a specific question?";
```

**Step 4: Add new tool definitions to TOOL_DEFINITIONS**

Add after the `get_renovation_status` definition:

```ts
{
  type: "client" as const,
  name: "navigate_to_property",
  description:
    "Scroll the dashboard to highlight a specific property card. Use when recommending a property or when visual context would help the investor understand what you're describing. Do not use for every property mentioned — only when showing the card adds value.",
  parameters: {
    type: "object",
    properties: {
      property_code: {
        type: "string",
        description: "The property SC code or name to navigate to",
      },
    },
    required: ["property_code"],
  },
  expects_response: true,
},
{
  type: "client" as const,
  name: "start_investment",
  description:
    "Open the investment dialog for a Live property. Use only when the user explicitly wants to invest. If the property is not Live (funded or exited), do not call this tool — instead explain verbally that it's not available and suggest Live properties.",
  parameters: {
    type: "object",
    properties: {
      property_code: {
        type: "string",
        description: "The property SC code or name to invest in",
      },
      suggested_amount: {
        type: "number",
        description: "Optional: a suggested investment amount in AED based on the conversation",
      },
    },
    required: ["property_code"],
  },
  expects_response: true,
},
```

**Step 5: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

**Step 6: Commit**

```
feat: update agent-config with new tools and dynamic variable support
```

---

### Task 8: Final verification

**Step 1: Run all unit tests**

Run: `npx vitest run src/lib/__tests__/agent-tools.test.ts`
Expected: All 38 tests pass.

**Step 2: Run full build**

Run: `npm run build`
Expected: Build succeeds with no errors.

**Step 3: Run dev server and visual check**

Run: `npm run dev`
Verify:
- Dashboard loads normally with all 3 tabs
- No console errors
- Voice agent button visible

**Step 4: Commit all changes if any remaining**

---

### Manual Steps (User — ElevenLabs Dashboard)

After all code changes are committed, the user needs to manually configure these on the ElevenLabs dashboard:

1. **Create `navigate_to_property` tool** on ElevenLabs dashboard:
   - Type: Client
   - Name: `navigate_to_property`
   - Parameter: `property_code` (string, required)
   - Expects response: Yes

2. **Create `start_investment` tool** on ElevenLabs dashboard:
   - Type: Client
   - Name: `start_investment`
   - Parameters: `property_code` (string, required), `suggested_amount` (number, optional)
   - Expects response: Yes

3. **Update system prompt** on ElevenLabs dashboard — paste from `agent-config.ts` SYSTEM_PROMPT

4. **Update first message** on ElevenLabs dashboard — paste from `agent-config.ts` FIRST_MESSAGE

5. **Add dynamic variables** on ElevenLabs dashboard:
   - `time_of_day` (string)
   - `current_tab` (string)
   - `live_property_count` (number)
