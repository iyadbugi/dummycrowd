# Nice-to-Haves

Post-demo improvements to add once the core agent is working.

## Additional search_properties Filters

| Parameter | Data type | Description | Why deferred |
|-----------|-----------|-------------|--------------|
| `max_price` | Number | Maximum property/project price in AED | Wide price range (500K-27M) makes voice thresholds awkward |
| `min_price` | Number | Minimum property/project price in AED | Same as above |
| `min_roi` | Number | Minimum total return ROI % (for exited properties) | Only useful for Exited tab, niche query |
| `bedrooms` | Integer | Filter by number of bedrooms | Useful but rarely the primary filter in voice |
| `area_multiple` | Array | Filter by multiple areas at once | Voice UX: hard to say multiple areas naturally |

## Additional Tools

| Tool | Description | Why deferred |
|------|-------------|--------------|
| `compare_properties` | Side-by-side comparison of 2-3 properties | Great for voice but complex to format for speech |
| `get_portfolio_summary` | Aggregate stats across all properties (avg yield, total investors, etc.) | No user-specific portfolio data |
| `get_best_performing` | Top N properties by yield, ROI, or appreciation | Could be a search_properties sort option |

## Agent Enhancements

- **Conversation memory** — remember which properties the user asked about earlier in the session
- **Dynamic variables** — pass the user's name from the dashboard UI to personalize the greeting
- **Arabic language support** — SmartCrowd operates in MENA, many investors prefer Arabic
- **Proactive suggestions** — "Based on your interest in IMPZ, you might also like JVC properties with similar yields"
- **RAG Knowledge Base** — upload SmartCrowd's investor FAQ docs, blog posts, annual reports, or legal terms to the ElevenLabs Knowledge Base. The agent would retrieve relevant chunks via RAG for questions beyond what's in the system prompt (e.g. detailed regulatory info, historical market context, specific T&Cs)
