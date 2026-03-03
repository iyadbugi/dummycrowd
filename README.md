# SmartCrowd Voice Agent

A voice-powered prototype for fractional real estate investing. Users browse 234 properties and talk to an AI agent that calculates returns, explains investments, and drives the UI — not just a chatbot, but an agent with real tools.

**[Live Demo →](#)** *(add your URL here)*

---

## Problem

Fractional real estate platforms present users with dense financial data — rental yields, annualized ROI, renovation timelines, fee structures — across hundreds of properties. The typical solution is filters and search bars.

This prototype takes a different approach: a voice agent that understands the domain. Ask it to compare properties, calculate your return on a specific investment, or show you what's available in a given area. The agent doesn't just retrieve information — it computes, navigates, and acts.

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        Browser                          │
│                                                         │
│  ┌──────────────┐    ┌──────────────────────────────┐   │
│  │  Dashboard    │    │  Voice Agent (Sara)           │   │
│  │              │    │                              │   │
│  │  PropertyTabs │◄───│  ElevenLabs React SDK        │   │
│  │  PropertyGrid │ CE │  3D Orb (Three.js)           │   │
│  │  PropertyCard │    │  Client-Side Tool Handlers   │   │
│  └──────────────┘    └──────────┬───────────────────┘   │
│                                 │                       │
└─────────────────────────────────┼───────────────────────┘
                                  │ Signed URL
                                  ▼
                    ┌──────────────────────────┐
                    │   ElevenLabs Platform     │
                    │                          │
                    │  Conversational AI Agent  │
                    │  Knowledge Base (RAG)     │
                    │  Speech ↔ Text            │
                    └──────────────────────────┘

CE = CustomEvent (agent tools dispatch events → UI responds)
```

**Key components:**

- **Next.js 16 + React 19** — App Router, server/client component split
- **ElevenLabs Conversational AI** — Managed voice agent with knowledge base and client-side tool calling
- **Client-side tools** — `calculate_roi`, `get_renovation_status`, `navigate_to_property`, `start_investment` — execute in the browser with zero latency
- **Knowledge Base** — 234 properties + platform documentation uploaded to ElevenLabs, RAG-indexed for natural language queries
- **Three.js Orb** — 3D visualization that reflects agent state (listening, speaking, thinking)
- **CustomEvent bridge** — Agent tool calls dispatch DOM events that the UI listens to, keeping voice logic and UI rendering decoupled

---

## Why This Approach

Most AI demos are wrappers around an API: send text, get text back. This project solves the harder problems that show up when you build a voice agent that actually operates a product.

**Speech normalization is a real problem.** Users say "jay vee see" and mean JVC. They say "S C three fifteen" and mean SC-315. The agent tools include normalization logic that maps spoken input to structured property codes and area names — something you only discover matters when you test with real speech.

**Tools return narratives, not data.** The ROI calculator doesn't return `{ roi: 0.35 }`. It returns a formatted paragraph that accounts for entry fees, annual admin fees, and exit fees — ready for the agent to speak naturally. Designing tool output for an LLM that talks is fundamentally different from designing API responses.

**The agent drives the UI.** When a user asks "show me SC-315," the agent calls `navigate_to_property`, which dispatches a CustomEvent. The dashboard switches tabs, scrolls to the card, and highlights it with a pulsing border. The voice agent isn't a sidebar widget — it's a primary interface for the product.

---

## Tradeoffs

**Knowledge base vs. client tools — the line evolved through testing.**
The ElevenLabs knowledge base handles property data and platform information via RAG. Client-side tools handle computation (ROI projections with fee deductions), real-time state (renovation progress), and UI actions (navigation, investment dialogs). The boundary wasn't designed upfront — it shifted as I tested what the agent handled well through retrieval vs. what needed deterministic tool execution.

**Client-bundled data vs. real API.**
All 234 properties are bundled into the JavaScript payload. Tool calls execute instantly with no network round-trip. This works for a prototype with a fixed dataset but wouldn't scale to thousands of properties or real-time pricing. The right production architecture would move search to an API with an index and keep only calculation tools client-side.

**Managed voice agent vs. custom pipeline.**
ElevenLabs handles STT → LLM routing → TTS as a managed service. The alternative — stitching together Whisper + GPT + a TTS engine — gives more control but adds latency at every boundary and requires infrastructure for streaming. For a prototype focused on the agent-tool interaction layer, the managed approach was the right call.

---

## Demo

**[Live Demo →](#)** *(add your URL here)*

**What to try:**

1. Browse the property dashboard — switch between Live, Funded, and Exited tabs
2. Filter by investment type: Hold (rental income) or Flip (renovation + resale)
3. Tap the mic and ask:
   - *"What properties do you have in JVC?"*
   - *"Calculate my return on 50,000 dirhams in SC-315"*
   - *"Show me that property on the dashboard"*
   - *"I want to invest in this one"*
4. Toggle dark/light mode in the sidebar

---

## What I'd Improve

**Real backend and auth.** Replace bundled property data with an API backed by a database and search index. Add user accounts so investment history and preferences persist. At scale, tool calls would need server-side execution with proper authorization.

**Conversation memory.** The agent currently has no memory across sessions. A returning user should be able to say "show me the property we discussed last time" and get a meaningful response. This requires persisting conversation state and linking it to user identity.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16, React 19, TypeScript |
| Voice AI | ElevenLabs Conversational AI + React SDK |
| 3D | Three.js, React Three Fiber, Drei |
| UI | Tailwind CSS 4, shadcn/ui, Framer Motion |
| Testing | Vitest (30+ unit tests for agent tools) |

## Running Locally

```bash
git clone <repo-url>
cd dummycrowd
npm install
```

Create `.env.local`:

```
ELEVENLABS_API_KEY=your-api-key
NEXT_PUBLIC_AGENT_ID=your-agent-id
```

```bash
npm run dev
```

See [`docs/elevenlabs-setup-guide.md`](docs/elevenlabs-setup-guide.md) for ElevenLabs agent configuration.
