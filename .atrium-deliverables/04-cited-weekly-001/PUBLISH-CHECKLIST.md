# Publish checklist — Cited Weekly Issue 001

## Pre-launch (one-time, before first issue)

- [ ] Create Beehiiv account if not already done.
- [ ] Create publication "Cited Weekly".
- [ ] Set publication tagline: "Weekly data on what AI engines cite, miss, and reward for local service businesses."
- [ ] Configure free tier and paid tier ($9/month).
- [ ] Set up custom domain: `cited.{{ATRIUM_DOMAIN}}` or similar.
- [ ] Connect Beehiiv API key to env vars per `Atrium/archetypes/shared/beehiiv.ts` constants.
- [ ] Enable Beehiiv Recommends network. Opt in to local-SEO, SMB, and AI-search clusters.
- [ ] Create welcome email sequence (3 emails). Drafts in `Atrium/archetypes/newsletter/welcome-sequence.md` (next session).

## Per-issue (every Tuesday)

- [ ] Pull citation deltas from `library/citations/` for the prior week (once daily-probe cron is wired; before then, draw from BayShine's `discoverability/` artifacts).
- [ ] Identify the issue's lede (one consequential delta or pattern).
- [ ] Draft the issue using the template in `issue-draft.md`.
- [ ] Voice gate: run the draft through `checkVoice()` from `Atrium/archetypes/shared/resend.ts`. Fix any flagged issues.
- [ ] Every statistic in the draft traces to a real source. No unsourced numbers.
- [ ] Preview the post in Beehiiv. Confirm: rendering, links, cover image, paid-tier paywall placement.
- [ ] Schedule send: Tuesday 09:00 Eastern.
- [ ] Tuesday afternoon: log subscriber count, open rate, click rate at T+8h to `library/decisions.jsonl` under operator-newsletter lineage.

## After-publish

- [ ] X thread posted (each section a tweet).
- [ ] Reddit summary post if the issue's headline is broadly applicable (r/LocalSEO or r/SEO).
- [ ] Hacker News post only if the issue has technical depth (Schema Watch sections qualify).
- [ ] Friday: pull weekly metrics from Beehiiv API. Log to `library/decisions.jsonl` and `finance/ledger.md`.

## Special notes for Issue 001

- This issue references BayShine Detailing as a case study. The reference is consensual; BayShine is the dogfood citizen of the Atrium town. Cite the data, do not name BayShine in the free tier (the data set source is named generically as "a mobile detailing business in Pasco County, Florida"). Name BayShine in the paid-tier supplement and in the underlying CSV dataset.
- The 12% / 8% citation delta numbers come from real probe data taken between 2026-05-08 (post-audit) and the daily-probe baseline. Before publish, confirm the delta is still accurate by running the probe one more time. If the delta has moved materially, update the numbers in the issue before send.
- The 47-row CSV mentioned in the paid-tier supplement needs to be generated before paid tier is enabled. For Issue 001, paid tier is dark (no subscribers yet), so the CSV does not need to ship with this issue. Generate before paid tier launches.

## Audience growth target for Issue 001

- Subscribers at send: 0 (cold start).
- Subscribers at send + 7 days: 25 (assumed from cross-promotion via the demand probe posts and the BayShine site footer link).
- Open rate target: 50%+ on a list this small. Below 35% sustained over 3 weeks triggers a Journal entry investigating list quality.

## What success looks like at 4 weeks

- 100+ free subscribers.
- Open rate above 45%.
- At least 3 reader replies with substantive feedback (used to identify content gaps in `library/decisions.jsonl`).
- One cross-promotion conversion: a Cited Weekly reader purchases either the Schema Pack v1 or the GEO Setup service. This is the proof-of-concept that the audience surface compounds the other archetypes.

## What failure looks like at 4 weeks

- Under 25 subscribers despite cross-promotion from the demand probe posts.
- Open rate below 30%.
- Zero reader replies.

If failure, the issue framing or the audience targeting is wrong. Pivot per Journal entry under operator-newsletter lineage.
