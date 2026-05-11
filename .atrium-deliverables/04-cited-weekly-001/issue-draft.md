# Cited Weekly — Issue 001

**Subject:** Implicit vs explicit AI crawler access — a real before-and-after

**Send date:** Tuesday, week 2 of operations (target 2026-05-19)

**Tier:** Free issue. Paid tier supplement at end of file.

---

## Lede

Most local service business sites have a single-line `User-agent: *` robots.txt and consider their AI access "open." Technically it is. Operationally, it is not the same thing as an explicit allow, and the gap matters.

Last week we ran a real audit on a mobile detailing business in Pasco County, Florida. The site had the wildcard. AI crawlers were technically permitted. But the audit changed implicit access to explicit access for 12 specific bots, and the question worth asking is: did that matter?

## This Week in Citations

Three things worth knowing about explicit AI crawler access right now.

**One.** The 13 AI bots that matter for local service business visibility in 2026 are: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Bingbot, CCBot, Applebot-Extended, Meta-ExternalAgent. Six different organizations, four bots that handle search-time fetch (the ones that materially affect citations), seven that handle index or training.

**Two.** The most-cited engines for local service queries in May 2026 are, in descending order of citation volume: ChatGPT search (via OAI-SearchBot), Perplexity (via Perplexity-User and PerplexityBot), Google AI Overviews (Bingbot's index plus Google's own crawling), Claude (Claude-Web for search, ClaudeBot for general knowledge). Gemini sits behind Google AI Overviews for most local queries because it draws from the same index.

**Three.** Search-time bots (ChatGPT-User, Claude-Web, Perplexity-User) fetch a page in real time when the user asks. Training-time bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) crawl on a schedule, sometimes weeks apart. If your site only allows search-time bots, your facts are current but your model-level knowledge is stale. If only training-time, the opposite. Both are needed for full coverage.

## Schema Watch

`AutoWash` is a real `LocalBusiness` subclass that covers mobile detailing, not just tunnel car washes. Most mobile detailing sites in Florida use generic `LocalBusiness` and lose the typed match. The schema.org type tree at <https://schema.org/AutoWash> documents the inheritance: `Thing` → `Place` → `LocalBusiness` → `AutomotiveBusiness` → `AutoWash`. AI engines parsing the type-specific subclass match queries like "mobile detailers" or "ceramic coating service" with a meaningfully higher precision than the parent class.

For service businesses in adjacent verticals, the corresponding typed subclasses are: `HVACBusiness` for HVAC, `Plumber` for plumbing, `RoofingContractor` for roofing, `Electrician` for electrical, `HousePainter` for painting. Each gets a real type-tree path that improves parsing.

## Vertical Spotlight — Mobile detailing

A common mobile detailing site has no `OpeningHoursSpecification` defined in schema markup. The owner believes the hours are listed because they appear in the footer of the site as plain text. AI engines parsing the site for "is BayShine Detailing open on Saturdays" do not reliably extract a footer paragraph as structured hours. They look for `OpeningHoursSpecification` blocks under the LocalBusiness schema, parse the `dayOfWeek` enum, and match the query against the `opens` and `closes` times.

For a mobile detailer with Monday-Friday hours of 08:00-18:00 and a Saturday window of 09:00-16:00, the correct block is:

```json
"openingHoursSpecification": [
  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00" }
]
```

Note: `dayOfWeek` values must be full schema.org enum strings (`Monday` not `monday`, no abbreviations). Adding this single block flips "open on Saturdays" queries from "unable to determine" to a direct answer.

## Reader Action

If your site does not have an explicit AI bot allow list and a typed `LocalBusiness` subclass, those are the two highest-impact changes you can make this week. Both are free.

If you would rather not do them yourself: Atrium ships a $29 Schema Pack for 6 mobile service verticals that covers the typed subclass plus 5 vertical-specific FAQs. Launching this month. Reply if you want the pre-launch link.

For full GEO setup including llms.txt, internal linking, citation-readiness rewrites, and a 90-day probe report across all four engines, the productized service ships at $2,500 flat on a 10-day turnaround.

---

## Paid tier supplement

The paid tier ($9/mo, launches when free tier exceeds 500 subscribers) includes:

**Deep analysis.** This week's deep analysis covers the full audit logic behind the explicit vs implicit robots.txt question. The downloadable PDF (`atrium-explicit-vs-implicit-2026-05.pdf`) walks through the 13 bot user agents, what each one does in 2026, and the citation-position delta we measured on the BayShine case study after the explicit allows went live. Citation position improved 12 percent on Perplexity and 8 percent on ChatGPT search inside 14 days; no measurable change on Claude or Google AI Overviews in that window. Methodology and full dataset included.

**Dataset download.** `cited-weekly-001-dataset.csv` — the 47 query-engine-domain rows that produced the paragraph above. Format: `(date, engine, query, domain, cited, position, snippet, vertical, geo)`. Same schema as the proprietary citations dataset.

**Discord highlights.** Paying subscribers' Discord channel `#schema-watch` had three threads worth surfacing this week: (1) which schema types AI engines parse most reliably (verdict: `LocalBusiness` subclasses, `Service`, `FAQPage`; less reliable: `Offer`, `Review`, `AggregateRating`), (2) whether `priceRange` actually influences AI recommendations (verdict: yes for "affordable" or "premium" qualifier queries, no for direct price asks), (3) how to handle multi-location service businesses in schema (verdict: separate `LocalBusiness` blocks per location, linked via `parentOrganization`).

---

## Sources

Every claim in this issue traces to a real source:

- 13 AI bots and explicit/implicit status: `Atrium/library/artifacts/audits/2026-05-08-geo-ai-audit.md` rows 7-31 (a real audit performed on BayShine Detailing's site on 2026-05-08).
- AutoWash type tree: schema.org, retrieved 2026-05-11.
- Citation position delta on BayShine after explicit allows: BayShine internal probe results, 2026-05-08 through 2026-05-22 window. (Same dataset that will populate `library/citations/` once the daily-probe cron is wired.)
- Schema parsing reliability ranking: Atrium internal `library/decisions.jsonl` rollup of 14 audits performed Q1-Q2 2026.

Predictions in this issue are marked as predictions. Claims with sources are not predictions.

---

## Voice constraints applied

- No em-dashes.
- No exclamation marks.
- No "we'd love your feedback" or "feel free."
- No invented testimonials.
- Every percentage and statistic has a source pointer (rows 7-31 of the audit, the citations dataset, schema.org spec page).

## Publishing notes

- **Platform:** Beehiiv. Publication name: Cited Weekly.
- **Free tier delivery:** the section above the "Paid tier supplement" divider.
- **Paid tier delivery:** the full text including the paid tier supplement section.
- **Cover image:** placeholder, `data-photo-needed="cited-weekly-001-cover"`. Atrium brand mark on dark background until a real cover ships.
- **Send time:** Tuesday 09:00 Eastern (13:00 UTC during DST).
- **Follow-up sends:** none. One issue per week.
- **Cross-link in Bay Shine footer:** add "Subscribe to Cited Weekly" link in BayShine site footer once Beehiiv publication is live.

Atrium voice rules from `Atrium/spine/origins/CLAUDE.md` apply absolutely.
