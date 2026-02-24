# ElevenLabs Agent Setup Guide

Step-by-step instructions for configuring the SmartCrowd voice agent on the ElevenLabs dashboard. No coding required — everything here happens in the browser.

---

## 1. Create an ElevenLabs Account

1. Go to [elevenlabs.io](https://elevenlabs.io)
2. Click **Sign Up** (top right)
3. Enter your email and create a password (or sign in with Google)
4. Check your inbox and click the verification link
5. Once verified, you'll land on the ElevenLabs dashboard

> **Plan note:** The free tier is enough for testing. You'll need a paid plan (Starter or above) for production usage with higher concurrency and minutes.

---

## 2. Get Your API Key

1. Click your **profile icon** (bottom-left of the sidebar)
2. Go to **Settings** → **API Keys**
3. Click **Create new API key**
4. Give it a name like `smartcrowd-dev`
5. Copy the key immediately (you won't see it again)
6. Open your project's `.env.local` file and add:

```env
ELEVENLABS_API_KEY=your_api_key_here
```

> **Do not commit `.env.local` to git.** It's already in `.gitignore`.

---

## 3. Create the Agent

1. In the ElevenLabs sidebar, click **Conversational AI**
2. Click **Create new agent**
3. Choose **Blank template** (start from scratch)
4. Name the agent: **SmartInvestor**
5. Click **Create**

You'll now be in the agent configuration screen.

---

## 4. Select a Voice

In the agent settings, find the **Voice** section and click to change it. Recommended voices to test:

| Voice | Style | Good for |
|-------|-------|----------|
| **Rachel** | Warm, professional | Best all-around pick for an advisor tone |
| **Josh** | Friendly, conversational | More casual, approachable feel |
| **Adam** | Authoritative, clear | If you want a more formal advisor |

**How to pick:** Click each voice to hear a preview. Choose the one that sounds most like an investment advisor you'd want to talk to. Rachel is the safe default.

---

## 5. Paste the System Prompt

1. In the agent config, find the **System Prompt** field
2. Open the file `src/lib/agent-config.ts` in the project
3. Copy the entire value of the `SYSTEM_PROMPT` constant (everything between the backticks)
4. Paste it into the System Prompt field on ElevenLabs

The full prompt to paste is:

```
You are a SmartCrowd investment advisor. You help investors understand properties on the SmartCrowd platform and answer questions about fractional real estate investing.

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
Greet the user warmly and briefly explain what you can help with. Keep it to 2 sentences.
```

---

## 6. Set the First Message

1. Find the **First Message** field in the agent config
2. Paste this exact text:

```
Hi! I'm your SmartCrowd investment advisor. I can help you explore our properties, explain how fractional investing works, or calculate projected returns. What would you like to know?
```

This is what the agent says when a user first connects.

---

## 7. Register Client Tools

You need to register 4 tools. These are "client" tools, meaning the app handles the execution — ElevenLabs just decides when to call them and passes the parameters.

For each tool below:
1. Click **Add Tool**
2. Select type: **Client**
3. Fill in the name, description, and parameter schema exactly as shown

### Tool 1: lookup_property

- **Name:** `lookup_property`
- **Description:** `Look up a specific property by its SC code (e.g. SC-315) or by a name/description (e.g. 'Sports City' or 'Palm Jumeirah flip'). Returns up to 3 matching properties with key details including type, yield/ROI, price, and investor count.`
- **Expects response:** `true`
- **Parameters schema:**

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "The property SC code (e.g. 'SC-315') or a descriptive search term (e.g. 'Sports City', 'Palm Jumeirah', 'IMPZ 1 bedroom')"
    }
  },
  "required": ["property_id"]
}
```

### Tool 2: search_properties

- **Name:** `search_properties`
- **Description:** `Search and filter properties by area, investment type (Hold or Flip), status (Live, Funded, or Exited), or minimum rental yield. Use this when the user wants to browse or compare multiple properties, NOT for looking up a single specific property.`
- **Expects response:** `true`
- **Parameters schema:**

```json
{
  "type": "object",
  "properties": {
    "area": {
      "type": "string",
      "description": "Filter by area name (e.g. 'IMPZ', 'JVC', 'Downtown Dubai', 'Sports City')"
    },
    "type": {
      "type": "string",
      "description": "Filter by investment type: 'Hold' or 'Flip'",
      "enum": ["Hold", "Flip"]
    },
    "status": {
      "type": "string",
      "description": "Filter by property status: 'Live', 'Funded', or 'Exited'",
      "enum": ["Live", "Funded", "Exited"]
    },
    "min_yield": {
      "type": "number",
      "description": "Minimum rental yield percentage (e.g. 6 for 6%+). Only applies to Hold properties."
    }
  }
}
```

### Tool 3: calculate_roi

- **Name:** `calculate_roi`
- **Description:** `Calculate projected investment returns for a specific property, accounting for SmartCrowd's entry fee (1.5%), annual admin fee (0.5%), and exit fee (2.5%). Use when the user asks 'what would I earn' or 'what's my return' on a specific amount.`
- **Expects response:** `true`
- **Parameters schema:**

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "The property SC code or name to calculate returns for"
    },
    "investment_amount": {
      "type": "number",
      "description": "The investment amount in AED"
    },
    "holding_years": {
      "type": "number",
      "description": "Optional: number of years to hold (defaults to the property's typical holding period)"
    }
  },
  "required": ["property_id", "investment_amount"]
}
```

### Tool 4: get_renovation_status

- **Name:** `get_renovation_status`
- **Description:** `Get the current renovation progress for a Flip property. Returns percentage complete and a status description. Only relevant for Flip properties — Hold properties don't have renovations.`
- **Expects response:** `true`
- **Parameters schema:**

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "The property SC code or name to check renovation status for"
    }
  },
  "required": ["property_id"]
}
```

> **Important:** Make sure "Expects response" is set to `true` for all 4 tools. This tells ElevenLabs to wait for the app to return data before the agent continues speaking.

---

## 8. Copy the Agent ID

1. After saving all the settings above, look for the **Agent ID** in the agent settings panel (it's a string like `aBcDeFgHiJkLmNoPqR`)
2. Copy it
3. Add it to your `.env.local`:

```env
NEXT_PUBLIC_AGENT_ID=your_agent_id_here
```

Your `.env.local` should now have both values:

```env
ELEVENLABS_API_KEY=your_api_key_here
NEXT_PUBLIC_AGENT_ID=your_agent_id_here
```

---

## 9. Test in the Playground

Before touching the app, verify everything works in ElevenLabs' built-in playground.

1. Click the **Test** or **Playground** button in the agent dashboard
2. Run through these test queries and check the expected behavior:

| Query | Expected Behavior |
|-------|-------------------|
| "How does SmartCrowd work?" | Answers from knowledge (no tool call) |
| "What are the fees?" | Answers from knowledge (no tool call) |
| "Tell me about the Sports City property" | Triggers `lookup_property` tool |
| "What properties are in IMPZ?" | Triggers `search_properties` tool |
| "If I invest 10,000 in SC-315, what would I earn?" | Triggers `calculate_roi` tool |
| "How's the Sidra villa renovation going?" | Triggers `get_renovation_status` tool |

**What to look for:**
- For knowledge questions (rows 1-2), the agent should answer directly without calling any tool
- For tool questions (rows 3-6), you should see the tool name appear in the conversation log, confirming the agent decided to call it
- The agent's tone should be conversational, not robotic
- Responses should be 2-4 sentences, not paragraphs

> **Note:** In the playground, tool calls will show as pending/failed since the client app isn't running. That's fine — you're just verifying the agent knows *when* to call each tool.

---

## 10. Start the App

Once the playground tests look good:

1. Make sure `.env.local` has both `ELEVENLABS_API_KEY` and `NEXT_PUBLIC_AGENT_ID`
2. Run the dev server:

```bash
npm run dev
```

3. Open the app in your browser
4. Click the voice agent button — it will connect to ElevenLabs via the signed URL route (`/api/elevenlabs/signed-url`)
5. Try the same test queries from Step 9, this time through the actual app

The voice agent button will handle the microphone, audio playback, and tool execution automatically.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "Invalid API key" error | Double-check `ELEVENLABS_API_KEY` in `.env.local`. Make sure there are no extra spaces or quotes. |
| Agent not responding to tool calls | Verify all 4 tools are saved with `expects_response: true` and parameter schemas match exactly. |
| Voice sounds wrong | Go back to agent settings and try a different voice. Changes take effect immediately. |
| "Agent not found" error | Verify `NEXT_PUBLIC_AGENT_ID` matches the ID shown in the ElevenLabs dashboard. Restart the dev server after changing `.env.local`. |
| Audio not working in browser | Make sure the browser has microphone permissions. Check for HTTPS (required for mic access in production). |
