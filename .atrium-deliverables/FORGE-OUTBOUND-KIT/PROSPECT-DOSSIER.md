# Prospect dossier template

Fill out one dossier per prospect before sending cold outreach. The personalization data feeds into the cold-email and LinkedIn templates.

Time budget: 15-30 minutes per dossier. For high-value prospects (multi-location chains, agencies, enterprise targets), the upper end is justified. For volume outreach to SMB, batch dossiers (5-10 per hour) using shorter research.

---

## Dossier — {{PROSPECT_COMPANY}}

### Basic identification

- **Prospect company name:**
- **Primary domain:**
- **Vertical:** (mobile detailing / HVAC / plumbing / roofing / electrical / pest control / landscaping / agency / SaaS / other)
- **Company size:** (estimated employee count; estimated annual revenue if observable)
- **Locations served:** (single location / multi-location / regional chain / national)
- **Headquarters:** (city, state)

### Contact

- **First name:**
- **Last name:**
- **Title:**
- **LinkedIn URL:**
- **Email (verified):** (use Hunter.io, RocketReach, or similar verification — never guess)
- **Phone (if outbound calling is planned):**

### Why this prospect

(2-3 sentences. The specific reason this prospect is a fit. Examples:)

- "Multi-location HVAC chain with {{N}} locations across Florida — at scale, AI search visibility gaps multiply."
- "Agency principal serving 50+ local service businesses in the Pacific Northwest — likely fit for white-label productized service."
- "SaaS founder building scheduling tools for service businesses — Schema Doctor Pro integration angle."

### AI search probe results

Run the probe BEFORE outreach. Without real probe data, the outreach is generic.

- **Query 1 probed:** ("best {{vertical}} in {{their primary city}}")
  - Perplexity: cited (Y/N), position
  - ChatGPT search: cited (Y/N), position
  - Claude: cited (Y/N), position
  - Gemini: cited (Y/N), position
- **Query 2 probed:**
  - Perplexity / ChatGPT / Claude / Gemini
- **Query 3 probed:**
  - Perplexity / ChatGPT / Claude / Gemini

### Structural gaps observed

(From source-of-truth: viewing their page source and checking schema validators)

- Schema markup present? (none / generic LocalBusiness / typed subclass)
- FAQPage schema? (none / generic FAQs / vertical-specific FAQs)
- llms.txt present? (no / yes / fresh / stale)
- Site architecture: (single page / dedicated service pages / service-area pages)

### Top 3 competitors that dominate buyer-intent queries

(Probe again with their competitors in mind)

- Competitor 1: {{name}} — cited where {{prospect_company}} is missing
- Competitor 2: {{name}} —
- Competitor 3: {{name}} —

### The hook (specific to this prospect)

(One sentence that names something concrete from research. Used as the first sentence of the cold email.)

Example: "I ran {{PROSPECT_COMPANY}} through Perplexity this morning — typed 'best HVAC in Tampa' — and your top competitor (American Air Pros) appears at position 1 with full schema markup, while {{PROSPECT_COMPANY}} doesn't appear in the first 5 results."

### The right product fit

- [ ] Schema Pack v1.5 ($39) — solo operator who wants templates
- [ ] llms.txt Pack v1 ($9) — solo operator who wants llms.txt templates
- [ ] GEO Playbook v0.5 ($79) — DIY operator who wants the full methodology
- [ ] AI Citation Audit ($499) — operator who wants diagnostic before commitment
- [ ] GEO Setup ($2,500) — operator who wants done-for-you implementation
- [ ] Enterprise GEO Sprint ($5,000) — Forge tier for mid-market
- [ ] Enterprise GEO Program ($25,000) — Forge tier for multi-location
- [ ] White-label agency pricing — agency principal
- [ ] Citation Watch waitlist ($19/mo when ships) — operator who wants continuous monitoring
- [ ] Schema Doctor Pro waitlist ($99/mo when ships) — developer or agency with multiple domains

Pick ONE primary fit. Secondary fit can be mentioned in a follow-up email if first contact doesn't land.

### Outreach plan

- **Channel:** (cold email / LinkedIn connection request / LinkedIn InMail / direct DM on X)
- **Cold email variant:** (A / B / C / D / E / F from `COLD-EMAIL-TEMPLATES.md`)
- **LinkedIn variant:** (L1 / L2 / L3 from `LINKEDIN-OUTREACH.md`)
- **First contact date:** (target)
- **Follow-up cadence:** (4-touch / 7-touch / 10-touch from `SEQUENCE-PLAYBOOK.md`)
- **Hard stop date:** (if no reply by this date, drop and revisit in 90 days)

### Constitutional compliance check

- [ ] Hook is specific to this prospect, not generic.
- [ ] Claims about Forge are sourced (BayShine probe data, case studies, waitlist counts).
- [ ] No invented metrics in the outreach.
- [ ] Founding-member scarcity if mentioned is real (not invented urgency).
- [ ] One ask in the email/message, not two.
- [ ] Voice gate passes (em-dashes max 1 per email, no soft marketing in inbound contexts that get forwarded).

### Decision log

(Append after first contact)

- **Date sent:**
- **Channel sent on:**
- **Reply received:** (Y/N, date)
- **Reply summary:**
- **Meeting booked:** (Y/N, date)
- **Outcome:**

---

## Research tools to use

### Free / inexpensive

- LinkedIn (public profile + posts)
- Hunter.io email finder ($49/mo for low volume)
- Apollo.io company database
- The prospect's website + page source
- Schema.org validator (for structural checks)
- Google Rich Results Test (for structural checks)
- Manual AI engine probes (free if you have accounts on Perplexity, ChatGPT, Claude, Gemini)

### Paid / subscription (Rung 2+)

- Sales Navigator ($79-$129/mo) for LinkedIn deep search
- Apollo.io paid tier ($59-$149/mo) for verified contact data
- BuiltWith / SimilarTech for tech stack info (e.g., which CMS, which schema generator if any)
- Ahrefs / SEMrush for SEO context (if relevant)

### What NOT to use

- Scraped contact databases of questionable provenance. CAN-SPAM compliance and deliverability both suffer.
- Generic "outreach personalization AI" tools. They produce text that reads as AI-generated, which is worse than no personalization.
- Anyone offering "verified emails of decision-makers" for $0.50 each. The 70-95% bounce rate destroys sender reputation.

## Research time budget

| Prospect tier | Time per dossier | Sources |
|---|---|---|
| SMB cold (Variant A, B, D) | 10-15 min | LinkedIn + website + 1 probe query |
| Agency / SaaS founder (B, C) | 20-30 min | LinkedIn + website + tech stack check + 2 probe queries |
| Enterprise (Variant F) | 60-90 min | LinkedIn + Sales Navigator + 3 probe queries on different locations + financial intel + competitor probes |

Budget the time. Skipping research produces generic outreach. Generic outreach produces 0.5-1% reply rates. Personalized outreach produces 5-10% reply rates. The 10x difference compounds.

## When to drop a prospect

After:
- 2 cold emails (no reply)
- 2 LinkedIn messages (1 connection request, 1 follow-up; no reply)
- Or 1 InMail (no reply)

Wait 90 days, then re-research and re-engage with fresh hook based on new information. Or drop permanently if the prospect isn't actually a fit.

Persistent re-outreach to the same uninterested prospect costs trust and sender reputation. The 90-day pause + fresh hook is the discipline.
