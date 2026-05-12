# Forge Weekly — publish checklist

## Pre-launch (one-time)

- [ ] Create Substack account if not already done.
- [ ] Create publication "Forge Weekly" at forge-weekly.substack.com or under a custom domain (forge.{{tld}}/weekly).
- [ ] Publication tagline: "Weekly AI search data and methodology for local service businesses. Operator-fronted. Paid tier from issue 1."
- [ ] Set free tier and paid tier ($9/mo standard, $5/mo founding-member rate for first 100).
- [ ] Set up custom domain (DNS) once Forge domain is registered.
- [ ] Connect Substack API key to env vars per Atrium's archetypes/shared/beehiiv.ts patterns (Substack-equivalent).
- [ ] Configure welcome email sequence (3 emails): introduction + free vs paid tier explanation + first paid issue preview.
- [ ] Enable Substack recommendations network. Opt in to local-SEO, SMB-ops, and indie-SaaS clusters.

## Per-issue (weekly cadence — proposed Thursday 09:00 Eastern)

- [ ] Pull last week's data: Schema Generator usage, Citation Watch waitlist growth, Forge Weekly subscription metrics, any insights from probes run on partner customers.
- [ ] Identify the issue's lede (one high-signal data point or pattern).
- [ ] Draft the issue using the template in `issue-draft.md` (this directory).
- [ ] Voice check: this is Forge's voice (em-dashes welcome, Constantine named, marketing-permissive within truth). Apply Forge's voice rules, not Atrium's.
- [ ] Every statistic traces to a real source (BayShine probe dataset, Schema Generator usage telemetry, Citation Watch dashboard data once that exists, public AI engine probes).
- [ ] Preview in Substack. Confirm rendering, cover image, paywall placement.
- [ ] Schedule send: Thursday 09:00 Eastern.
- [ ] Track: free subscribers at send, paid subscribers at send, click-throughs to Schema Generator and Citation Watch waitlist.

## Special notes for Issue 001

### Cross-promotion mechanic

Issue 001 references:

- **Atrium** (sibling network) — once in the "Where to find more" section. This is the two-network coordination. Atrium readers learn Forge exists; Forge readers learn Atrium exists. Per the coordination doc, this is honest and useful, not promotional.
- **Schema Generator** (Forge's free tool) — three times. This is the primary CTA. Most readers should land at the Schema Generator after reading.
- **Citation Watch** (Forge's subscription) — once in "Where to find more" and once in the paid tier supplement context. Lower-pressure mention because the product isn't shipped yet.
- **GEO Playbook v0.5 ($79) and AI Citation Audit ($499) and GEO Setup ($2,500)** (Atrium products) — implicit reference via the link to Atrium. The paid tier supplement specifically mentions "47 distinct structural gaps" which echoes the kind of analysis Atrium's playbook covers; cross-curious readers can find them by visiting Atrium.

### Real numbers verification

Before send, verify these numbers against the BayShine probe dataset:

- 25 sites probed (verify count)
- 64% / 80% / 48% / 92% engine coverage (re-run probes if data is older than 14 days)
- 84% buyer-intent miss rate (re-verify)
- 23/25 schema mismatches, 22/25 missing FAQs, 24/25 missing llms.txt (re-verify against current site states)

If any number has shifted by more than 5 percentage points, update before send. If shifts are minor (±2 points), use the current numbers and note the data window.

### Paid tier launch from Issue 1

Forge Weekly's paid tier is live from issue 1 (unlike Atrium's Cited Weekly which defers paid tier to 500 free subs). The founding-member rate ($5/mo locked for life for first 100) is the conversion mechanic.

Expected metrics on Issue 1 with cold-start audience (assume 50-100 readers from Schema Generator funnel):

- Free subscribers at send: 50-100.
- Paid conversion on issue 1: 5-15% (high because founding-member rate is genuinely compelling).
- Paid subscribers at +24h: 3-15.
- Paid revenue at +24h: $15-$75 MRR.

These would be small but real. The MRR compounds across issues if the cadence and quality hold.

## Issue 002 preview

Issue 002 (next Thursday) draft topics:

- The remediation cascade: which of the 47 gaps to fix first, and why.
- A worked example: take one of the 25 sites (anonymized) and walk through the 5 highest-impact fixes in detail.
- A small data update: re-probe one or two of the audited sites and show what changed after they implemented one of the fixes.

Each issue should have a concrete data update (not just opinion) to maintain editorial differentiation from competing SEO newsletters that publish opinion only.

## Audience growth targets

- Issue 001 subscribers at send + 7 days: 75-150 free, 5-20 paid.
- Issue 005 (~month 1): 250-500 free, 15-40 paid.
- Issue 012 (~quarter 1): 1,000-2,500 free, 50-150 paid.

Founding-member cap at 100 paid subscribers; expected to hit by issue 8-15 if growth holds. After founding-member cap closes, standard $9/mo pricing.

Cross-network compare with Atrium's Cited Weekly: Atrium projects ~25 free subs at issue 1 (slower start, faceless brand, paid tier deferred). Forge's projected 75-150 at issue 1 reflects (a) the Schema Generator funnel already running, (b) Constantine's named-operator presence, (c) the founding-member pricing urgency.

## What success looks like at issue 5

- 250+ free subscribers (5x the Schema Generator's email-capture flow if Schema Generator has 1,000+ visitors).
- 15+ paid subscribers (60%+ of the founding-member runway used).
- Open rate above 45%.
- 3+ reader replies with substantive feedback per issue.
- 5+ click-throughs to Schema Generator per issue.
- 1+ click-through to Citation Watch waitlist per issue.

## What failure looks like at issue 5

- Under 100 free subscribers.
- Under 5 paid subscribers.
- Open rate below 30%.

If failure: the audience targeting is wrong OR the editorial differentiation isn't landing OR the Schema Generator funnel isn't converting. Operator-forge-weekly writes a Journal entry diagnosing which.

## Voice rules compliance

This issue, like all Forge content, follows Forge's voice rules from `Forge/spine/constitution.md`:

- Em-dashes welcome and used.
- Exclamation marks avoided in this issue (the content is technical-analytical; not all Forge issues will be, but this one doesn't need them).
- Marketing voice permissible within truth.
- Named operator presence ("I probed 25 sites," "Constantine, Forge" byline).
- Numbers have real sources.
- Predictions marked as predictions.

The Forge Auditor will eventually do quarterly drift detection on these voice rules. For now, the author (Constantine, or a Forge instance acting on Constantine's behalf) verifies before send.
