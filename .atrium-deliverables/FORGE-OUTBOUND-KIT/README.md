# Forge outbound kit

Cold-outreach templates, prospect dossier framework, and sequence playbooks for Forge's enterprise and mid-market pipeline. Ready when Forge Rung 2 unlocks paid acquisition and outbound email tooling.

Atrium does not run outbound (closer-less by constitution). Forge does. This kit is Forge-specific and lives in the courier directory because it ships from a Forge instance into Constantine's hands for execution; it can be migrated to `Forge/library/playbooks/outbound/` after PC migration.

## What's in this directory

- `README.md` — this file.
- `COLD-EMAIL-TEMPLATES.md` — 6 cold-email variants for different prospect types (multi-location service chain, regional agency, indie SaaS founder, etc.).
- `LINKEDIN-OUTREACH.md` — connection-request and follow-up templates for Constantine's LinkedIn outbound.
- `PROSPECT-DOSSIER.md` — fillable research template for turning "prospect name" into "personalized outreach."
- `SEQUENCE-PLAYBOOK.md` — multi-touch outreach sequences (4-touch, 7-touch, 10-touch) with timing and content per touch.

## Voice rules for outbound

Forge's outbound is in Forge's voice but with additional discipline because cold outreach has higher consequences than inbound marketing:

- **Named operator presence required.** Every cold email is from Constantine. No "the team," no "we." Constantine signs personally.
- **First sentence references something specific to the prospect.** Generic openings ("I came across your business and...") are forbidden. The first sentence proves we did research.
- **Em-dashes allowed but used sparingly in cold email** (1 per email max). LinkedIn outreach can use more freely.
- **No claims without sources** — the constitutional floor. If we cite "we lifted citation position 12% on a comparable business," the source is the BayShine dogfood data, and the email links to the case study.
- **One ask per email.** Either book a call, reply with a question, or click through to a sales page. Never two asks.
- **Honest scarcity if mentioned.** Founding-member caps, limited engagement slots — only mention if real.

## What this kit does NOT do

- It does not contain a prospect list. Constantine builds the list via Sales Navigator or LinkedIn research; the kit is templates and methodology, not data.
- It does not automate sending. Constantine uses Instantly.ai, Lemlist, or Mailshake (one of the standard sequencing tools) at Forge Rung 2. The kit's templates feed into that tool.
- It does not include legal compliance materials (CAN-SPAM, GDPR, opt-out language). Standard email-sequencing tools include those by default; consult with Constantine's legal counsel for jurisdiction-specific compliance.

## When to use this kit

Forge Rung 2 unlocks paid acquisition and outbound email tooling at $1k/mo Forge revenue sustained for one month. Until Rung 2, outbound is off — this kit is staged for the moment Rung 2 fires.

After Rung 2:

- Week 1 of outbound: 50-100 sends per week, monitoring reply and bounce rates.
- Week 2-3: scale to 250-500 sends per week if reply rate is above 5%.
- Week 4+: full cadence at 500-1000 sends per week, subject to deliverability guardrails.

Pause outbound if:

- Bounce rate exceeds 5% (list quality problem).
- Spam complaint rate exceeds 0.1% (content or list quality problem).
- Reply rate falls below 2% (targeting or content problem).

In any of these cases, write a Forge journal entry under operator-forge-products lineage diagnosing the issue.

## Conversion expectations at scale

- Connect rate (email opened): 30-50% typical for cold outreach to verified business addresses.
- Reply rate: 5-10% for genuinely useful cold outreach with specific personalization.
- Meeting / discovery booked: 1-3% of replies (so 0.05% - 0.3% of total sends).
- Engagement closed: 10-25% of meetings.

At 1,000 sends per week with these rates: 5-15 meetings booked per week, 1-4 engagements closed per month. At Forge's Enterprise GEO Sprint ($5,000) or Program ($25,000), that's $5k-$100k of new revenue per month from outbound alone.

These are projections, not promises. Real numbers govern.
