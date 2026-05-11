# Welcome and delivery emails — AI Citation Audit

## Intake email (triggered on Stripe checkout)

### Subject

AI Citation Audit intake: next step (5 minutes)

### From

`hello@{{ATRIUM_DOMAIN}}`

### Body

Hi {{BUYER_FIRST_NAME}},

Thanks for the purchase. The audit takes 5 business days from when you submit the intake form below.

Intake form: {{INTAKE_FORM_URL}}

The form takes about 5 minutes. The key questions are:

- Your top 3 local competitors (we look up the domains for you).
- 5 to 10 specific queries you wish buyers were finding you with. Examples for a mobile detailer would be: "best mobile detailer in [your city]", "ceramic coating service in [county]", "best mobile detailer for fleet vehicles".

Once the intake is in, here is what happens:

- Day 1: we probe all 4 engines (Perplexity, ChatGPT search, Claude, Gemini) against your queries and against 15-20 we auto-generate for your vertical and geography.
- Day 2: we build the heat map of citations per (query, engine).
- Day 3: we cross-reference your top 3 competitors to show what's structurally different.
- Day 4: we write the remediation list and the report.
- Day 5: you receive the bundle.

If anything is unclear, reply to this email. Typical response time is 24 business hours.

— Atrium

## Delivery email (Day 5)

### Subject

AI Citation Audit delivery — your bundle is ready

### Body

Hi {{BUYER_FIRST_NAME}},

Your AI Citation Audit is attached or linked below.

What is in the bundle:

1. `audit-report.pdf` — 15-page report covering methodology, engine-by-engine analysis, competitor cross-reference, and the prioritized remediation list.
2. `query-matrix.csv` — the full query matrix with one row per (query, engine) pair, citation position, and snippet.
3. `competitor-matrix.csv` — the same matrix run against your top 3 competitors.
4. `remediation.md` — the structured remediation list, sorted by impact descending. Hand this to your developer or marketing person.
5. `executive-summary.pdf` — one page summarizing the three highest-leverage moves to make this quarter, signed by Constantine.

A note on the priority list:

The top items in the remediation list are sorted by expected impact, not by ease. If you only have time for three things this quarter, do items 1-3. If you have a developer with 4-8 hours of slack time, items 1-7 are achievable in that window.

Two follow-on options:

1. **Free follow-up probe at Day 30.** Reply to this email with "follow up" by Day 25 and we re-run the original probe matrix at no cost. You'll see whether your post-audit changes moved the needle on which engines.

2. **GEO Setup upgrade ($2,250 with audit credit).** If you'd rather we execute the remediation directly, the GEO Setup productized service does exactly that, and we credit $250 against your audit cost if you purchase within 30 days. The full scope is at {{GEO_SETUP_URL}}.

If something in the bundle does not match what you expected from the intake form, reply and we will resolve it.

— Constantine
   Atrium

## Voice constraints applied

- No em-dashes.
- No exclamation marks.
- No "we'd love" or "feel free" or "passionate about."
- No invented social proof.
- Concrete commitments (5 business days, $250 audit credit, Day 25 follow-up cutoff).
- Constantine's signature on the delivery email; faceless brand on the intake email.
