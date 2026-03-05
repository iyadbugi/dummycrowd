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

**How the agent works for visitors:**

The prototype uses a signed URL flow so visitors can talk to the agent without exposing any API keys.

1. The browser requests a signed URL from `/api/signed-url` (a Next.js API route)
2. That route uses your `ELEVENLABS_API_KEY` server-side to request a short-lived signed URL from ElevenLabs
3. The browser receives the signed URL and opens a WebSocket connection directly to ElevenLabs
4. All conversation audio and tool calls flow over that WebSocket — your API key never leaves the server

Because the prototype has no auth gate, anyone with the link can start a conversation. Every conversation uses your ElevenLabs quota. In production you'd add authentication or rate limiting before handing out signed URLs.

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

**Client tools vs. server-side tools vs. webhooks — three integration patterns.**
ElevenLabs supports three ways to connect an agent to your application. This prototype uses client tools exclusively, but a production system would use all three.

| Pattern | How it works | When to use it |
|---|---|---|
| Client tools (current) | ElevenLabs sends tool calls over WebSocket → browser executes them | Tools only need client-side data, no secrets, no external APIs |
| Server-side API tools | ElevenLabs calls your server endpoint directly during a conversation | Tools need databases, secrets, third-party APIs, or authenticated actions |
| Webhooks | ElevenLabs notifies your server about conversation events (start, end, transcript ready) | Logging, analytics, CRM integration, follow-up actions |

The current client-tool approach works because all property data is bundled in the browser and no tool needs secrets or external services. The moment you add a tool that writes to a database or calls a third-party API, that tool should move to a server-side endpoint.

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

**Knowledge base evolution.** Currently, property data is duplicated — it lives in the ElevenLabs knowledge base (for RAG retrieval) and in `src/data/properties.ts` (for tools and UI rendering). In production, the knowledge base would shrink to static information only: brand personality, fee structure, how fractional investing works, and FAQs. Property-specific data would move to server-side tools that query a live API on demand, and the UI would fetch from the same API — giving you a single source of truth instead of two copies that can drift.

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

## Deployment

This is a standard Next.js app — deploying to Vercel requires near-zero configuration.

1. Push the repo to GitHub and import it in the [Vercel dashboard](https://vercel.com/new)
2. Add two environment variables in the Vercel project settings:
   - `ELEVENLABS_API_KEY` — your ElevenLabs API key
   - `NEXT_PUBLIC_AGENT_ID` — your ElevenLabs agent ID
3. Deploy — the `/api/signed-url` route works as a Vercel serverless function out of the box

Make sure `.env.local` is in your `.gitignore` (it is by default in Next.js projects). Never commit API keys to the repository.
