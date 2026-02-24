# Phase 3: Dashboard UI Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Use frontend-design skill for each component task.

**Goal:** Build a SmartCrowd dashboard clone with sidebar navigation, tabbed property browsing (Live/Funded/Exited), and paginated property card grid that closely replicates the real SmartCrowd UI.

**Architecture:** Single-page Next.js app with a fixed sidebar (280px) + scrollable main content area. Client-side state for tabs, type filter, and pagination. All 233 properties loaded from the static data layer (`src/data/properties.ts`), filtered and paginated in-browser.

**Tech Stack:** Next.js 16 (App Router), Tailwind CSS v4, shadcn/ui (card, badge, tabs, progress), lucide-react icons

**Design Reference:** Close replica of SmartCrowd's property browse page. Key visual elements:
- Dark navy sidebar (#1B2559) with white text and nav icons
- Light gray main background (#F5F6FA)
- White property cards with rounded corners and subtle shadows
- Blue active tab pill, purple SC-code badges
- Green "Hold" badges, purple/magenta "Flip" badges
- AED currency with Dirham symbol (د.إ)

---

### Task 1: Add sqft to property data + utility helpers

**Files:**
- Modify: `src/types/property.ts` — add optional `sqft` field to `PropertyPhysical`
- Create: `src/lib/property-utils.ts` — formatting and display helpers
- Modify: `src/data/properties.ts` — add sqft values

**What to do:**

1. Add `sqft?: number` to `PropertyPhysical` interface in `src/types/property.ts`

2. Create `src/lib/property-utils.ts` with these helpers:
   - `formatPrice(amount: number): string` — formats as "578,000.00" with commas and 2 decimals
   - `formatPriceShort(amount: number): string` — formats as "578K" or "1.29M" for compact display
   - `getPropertySpecs(property: Property): string[]` — returns array like ["1", "824 sq ft", "JVT", "Long term"] based on available data (bedrooms if > 0, sqft if available, area displayName, "Long term"/"Short term" for Hold)
   - `getRemainingAmount(property: Property): number` — calculates `property.projectPrice - property.performance.fundedAmount`
   - `getFundedPercentage(property: Property): number` — returns `property.performance.funded`

3. Add sqft values to properties in `src/data/properties.ts`:
   - Key properties visible in screenshots: SC-331 (550), SC-327 (6496), SC-330 (550), SC-326 (824), SC-325 (3016)
   - For remaining properties: add sqft based on reasonable estimates from bedroom count (studio: 450-600, 1BR: 700-900, 2BR: 1100-1500, 3BR: 1800-3000, 4BR+: 3000-5000, villa: 3000-6000)
   - Write a small inline script block or manually add to each — agent should use search/replace patterns

**Step: Verify**
Run: `npx next build` — should pass with no type errors

**Step: Commit**
```
feat: add sqft field to property data and create utility helpers
```

---

### Task 2: Update color scheme and globals.css

**Files:**
- Modify: `src/app/globals.css` — SmartCrowd brand colors

**What to do:**

Update CSS custom properties in `:root` to match SmartCrowd's color scheme:
- `--sidebar-bg: #1B2559` (dark navy for sidebar background)
- `--sidebar-active: #3B82F6` (blue for active nav item)
- `--sc-blue: #2563EB` (primary blue for active tabs, buttons)
- `--sc-green: #22C55E` (Hold badge green)
- `--sc-purple: #8B5CF6` (Flip badge purple/SC code badge)
- `--sc-pink: #EC4899` (Flip badge alternative)
- `--background: #F5F6FA` (light gray page background)
- `--card: #FFFFFF` (white cards)

Add custom utility classes:
- `.badge-hold` — green bg for Hold badges
- `.badge-flip` — purple/pink bg for Flip badges
- `.sc-code` — purple outline badge for property codes

Keep the existing shadcn theme variables working (don't break existing components).

**Step: Verify**
Run: `npx next build` — should pass

**Step: Commit**
```
style: add SmartCrowd brand colors to globals.css
```

---

### Task 3: Build Sidebar component

**Files:**
- Create: `src/components/Sidebar.tsx`

**What to build:**

Fixed left sidebar (w-[280px], h-screen) with dark navy background. Structure from top to bottom:

1. **Logo area** (top):
   - "SmartCrowd" in white bold text, "a Nawy company" in smaller gray text below
   - UAE flag emoji + "EN" language badge (decorative, not functional)

2. **Navigation items** (middle):
   - Each item: icon (lucide-react) + label text
   - Items: Explore (Search icon, **active** — highlighted with blue bg + white text), Wallet (Wallet icon), Portfolio (PieChart icon), Cart (ShoppingCart icon), Notifications (Bell icon), Help & Support (Headphones icon)
   - Only Explore has active styling. All others are decorative (no click handler needed).
   - Spacing: gap between Notifications and Help & Support (visual separator)

3. **Light Mode toggle** (below nav):
   - "Light Mode" label with a decorative toggle switch (non-functional, shown as "on")

4. **App download section** (near bottom):
   - SmartCrowd icon
   - "Download our mobile app" text
   - "iOS | Android" links (decorative)
   - "Regulated by DFSA" small text

5. **User section** (bottom):
   - Circle avatar with initials "IB"
   - "Iyad Bugaighis" name
   - Chevron right icon

**Visual treatment:**
- Background: dark navy (#1B2559 or similar)
- Text: white/gray
- Active item: rounded rectangle with blue bg (#3B82F6), white text
- Inactive items: gray text, hover → slightly lighter bg
- Dividers between sections using subtle line or spacing

This is a `"use client"` component (for potential future interactivity).

**Step: Verify**
Run: `npx next build` — should pass

**Step: Commit**
```
feat: add SmartCrowd sidebar navigation component
```

---

### Task 4: Update layout.tsx with sidebar + main content structure

**Files:**
- Modify: `src/app/layout.tsx`

**What to do:**

Replace the current default layout with:
```
<html>
  <body>
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-[#F5F6FA] p-6">
        {children}
      </main>
    </div>
  </body>
</html>
```

Update metadata:
- title: "SmartCrowd - Explore Properties"
- description: "Browse fractional real estate investment opportunities"

**Step: Verify**
Run: `npx next dev` — sidebar should render on left, main content on right with gray background

**Step: Commit**
```
feat: add sidebar layout with SmartCrowd branding
```

---

### Task 5: Build PropertyCard component

**Files:**
- Create: `src/components/PropertyCard.tsx`

**What to build:**

A single `"use client"` component that receives a `Property` object and renders the appropriate card variant based on `investmentType` and `propertyStatus`. This is the most complex component.

**Props:** `{ property: Property }`

**Card structure (all variants share):**
1. **Image area** (top, ~200px height):
   - Gradient placeholder background (vary color by area name for visual variety)
   - Top-left: Hold (green) or Flip (purple/pink) badge with icon
   - Bottom overlay: tag pills (investor count, "Instant Returns" if applicable)

2. **Content area** (below image):
   - **Title row**: Property title (left) + SC-code badge in purple outline (right)
   - **Specs row**: [bedrooms icon + count if > 0] | [sqft icon + "X sq ft"] | [location pin + area] | [clock + "Long term" for Hold]

3. **Metrics section** (varies by card type — see below):

**Hold card (funded — propertyStatus: "CLOSED", investmentType: "HOLD"):**
```
Rental yield                    6.07%
Purchase price           578,000.00
Current market value     580,000.00 (+0.35%)
───────────────────────────────────
Rental income to date          0.00
```
- Rental yield: `property.rental.dividendYield` (or grossYield as fallback)
- Purchase price: `property.price`
- Market value: `property.valuation.marketValue` with `marketValuePercentage` in green/red
- Rental income: `property.rental.totalRentalIncome`

**Flip card (funded — propertyStatus: "CLOSED", investmentType: "FLIP"):**
```
Annualized ROI                15.01%
Estimated timeline          9 months
───────────────────────────────────
Renovation progress               0%
Project cost          11,198,906.00
```
- Annualized ROI: `property.performance.annualized` (can be null — check and use `totalGrossRoi` as fallback, or show "—")
- Timeline: `property.performance.investmentPeriod` + " months"
- Renovation: `property.performance.renovationProgress` (show 0% if null for FLIP)
- Project cost: `property.projectPrice`

**Live card (propertyStatus: "LIVE"):**
Same as Hold or Flip above, plus funding progress section at bottom:
```
X% Funded         Remaining 16,635,623.00
[████████░░░░░░░░░░░░░░░░░] progress bar
Purchase price / Project cost    578,000.00
```
- Funded %: `property.performance.funded`
- Remaining: `property.projectPrice - property.performance.fundedAmount`
- Progress bar: use shadcn Progress component
- Bottom label: "Purchase price" for Hold, "Project cost" for Flip

**Exited card (propertyStatus: "EXITED"):**
```
Exit price              24,000,000
Total rental income              0
Holding period              14 months
───────────────────────────────────
Total return    +9,176,840 (+24.59%)
```
- Exit price: `property.valuation.saleProceed`
- Total rental: `property.rental.totalRentalIncome`
- Holding period: `property.performance.investmentPeriod` + " months"
- Total return: `property.performance.totalReturnRoi` + ` (+${totalReturnRoiPercentage}%)`
- Return amount in green if positive

**Visual treatment:**
- White card background with rounded-xl corners and subtle shadow
- Text: dark gray for labels (left-aligned), black for values (right-aligned)
- Prices prefixed with "Dhs" or "د.إ" symbol
- Green for positive changes, red for negative
- SC-code badge: purple text with purple border, rounded-full, small text

**Image gradient colors by area** (since we don't have real images):
Map area names to gradient pairs for visual variety. E.g.:
- Discovery Gardens → warm amber/orange gradient
- JVT → blue/teal gradient
- Downtown Dubai → purple/indigo gradient
- DIFC → navy/blue gradient
- Palm Jumeirah → cyan/emerald gradient
- Sports City → green/lime gradient
- Default → gray/slate gradient

**Step: Verify**
Run: `npx next build` — should pass with no type errors

**Step: Commit**
```
feat: add PropertyCard component with Hold/Flip/Live/Exited variants
```

---

### Task 6: Build PropertyGrid with pagination

**Files:**
- Create: `src/components/PropertyGrid.tsx`

**What to build:**

`"use client"` component that takes an array of properties and renders them in a paginated grid.

**Props:** `{ properties: Property[] }`

**Layout:**
- CSS Grid: 3 columns on desktop (lg:), 2 columns on tablet (md:), 1 column on mobile
- Gap between cards: gap-6
- Cards rendered via `<PropertyCard property={p} />` for each item in current page

**Pagination:**
- 12 cards per page
- Bottom of grid: pagination controls
- Show: "Page X of Y" centered
- Previous / Next buttons (disabled when at start/end)
- Simple and clean — no page number buttons needed
- State managed with useState for currentPage
- Reset to page 1 when properties array changes (new tab/filter)

**Step: Verify**
Run: `npx next build` — should pass

**Step: Commit**
```
feat: add PropertyGrid with pagination (12 per page)
```

---

### Task 7: Build PropertyTabs and TypeFilter

**Files:**
- Create: `src/components/PropertyTabs.tsx`

**What to build:**

`"use client"` component that manages the tab + filter state and passes filtered properties to PropertyGrid.

**Structure:**
```
┌─────────────────────────────────────────────────────┐
│ [Live (2)] [Funded (165)] [Exited (67)]   [All ▼]   │
└─────────────────────────────────────────────────────┘
│                                                      │
│  <PropertyGrid properties={filteredProperties} />    │
│                                                      │
```

**Tab bar:**
- Three tabs: "Live (2)", "Funded (165)", "Exited (67)"
- Counts computed from the actual data arrays
- Active tab: blue pill background (#2563EB) with white text
- Inactive tabs: gray text on transparent bg, rounded border
- Use shadcn Tabs component with custom styling to match SmartCrowd's pill-style

**Type filter dropdown (right side of header):**
- Dropdown button showing current filter: "All" (default), "Hold", "Flip"
- Each option has an icon: house for All, hold icon for Hold, flip icon for Flip
- When filter changes, re-filter the current tab's properties
- Simple state: `typeFilter: "ALL" | "HOLD" | "FLIP"`

**Data flow:**
1. Import `liveProperties`, `fundedProperties`, `exitedProperties` from data
2. Active tab selects which array to use
3. Type filter narrows: if "HOLD" → only investmentType === "HOLD", etc.
4. Pass filtered array to `<PropertyGrid />`

**Step: Verify**
Run: `npx next build` — should pass

**Step: Commit**
```
feat: add PropertyTabs with Live/Funded/Exited tabs and type filter
```

---

### Task 8: Wire everything into page.tsx

**Files:**
- Modify: `src/app/page.tsx`

**What to do:**

Replace the entire default Next.js template page with the SmartCrowd property browse page:

```tsx
import { PropertyTabs } from "@/components/PropertyTabs";

export default function ExplorePage() {
  return (
    <div>
      <PropertyTabs />
    </div>
  );
}
```

That's it — PropertyTabs handles all the state, filtering, and rendering internally.

**Step: Verify**
Run: `npx next dev` — full dashboard should render:
- Sidebar on left with SmartCrowd branding
- Tab bar showing Live (2) / Funded (165) / Exited (67)
- Property cards in grid layout
- Pagination working
- Type filter (All/Hold/Flip) working
- Click between tabs — cards update correctly

**Step: Commit**
```
feat: wire PropertyTabs into browse page, replacing default template
```

---

### Task 9: Visual polish pass

**Files:**
- May touch any component file for tweaks

**What to verify and fix:**

1. **Color accuracy**: Compare sidebar navy, tab blue, badge colors to screenshots
2. **Typography**: Ensure font sizes, weights match (title bold, specs smaller/gray, prices medium)
3. **Spacing**: Card padding, grid gaps, tab bar height match screenshots
4. **Card image area**: Gradients look professional (not garish)
5. **Badge positioning**: Hold/Flip badge top-left on image, SC-code badge aligned with title
6. **Number formatting**: Prices show proper commas and 2 decimal places
7. **Responsive**: Cards reflow to 2-col on medium screens, 1-col on mobile
8. **Empty states**: If a filter returns 0 results, show a friendly message

**Step: Verify**
Run: `npx next build` — clean build
Run: `npx next dev` — visual inspection against screenshots

**Step: Commit**
```
style: polish dashboard UI to match SmartCrowd design
```

---

## Summary

| Task | Component | Files | Priority |
|------|-----------|-------|----------|
| 1 | Data + Utils | property.ts, property-utils.ts, properties.ts | Must |
| 2 | Color Scheme | globals.css | Must |
| 3 | Sidebar | Sidebar.tsx | Must |
| 4 | Layout | layout.tsx | Must |
| 5 | PropertyCard | PropertyCard.tsx | Must |
| 6 | PropertyGrid | PropertyGrid.tsx | Must |
| 7 | PropertyTabs | PropertyTabs.tsx | Must |
| 8 | Browse Page | page.tsx | Must |
| 9 | Polish | Various | Must |

**Total new files:** 4 (Sidebar.tsx, PropertyCard.tsx, PropertyGrid.tsx, PropertyTabs.tsx, property-utils.ts = 5)
**Total modified files:** 4 (property.ts, properties.ts, globals.css, layout.tsx, page.tsx = 5)

**Execution approach:** Sequential, task-by-task. Use `frontend-design` skill for Tasks 3, 5, 6, 7. Build and verify after each task.
