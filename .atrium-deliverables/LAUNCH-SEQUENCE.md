# Launch sequence — Atrium cold-start

Maintained by the launch-specialist descendant. This file is the
master schedule for launching the six revenue surfaces in the
right order so the audience compounds across launches rather than
competing with itself.

Do not launch multiple products in the same 7-day window. Indie
audiences treat back-to-back launches as spam; staggered launches
read as ongoing momentum.

## Master sequence

| Week | Day | Event | Channel(s) | Owner |
|---|---|---|---|---|
| 0 | Today | Demand probe | IndieHackers | Constantine |
| 0 | +24h | Demand probe | r/LocalSEO | Constantine |
| 1 | Day 6 | Demand probe analysis | (internal) | Constantine + Launch Specialist |
| 1 | Day 7 (Tue) | Schema Pack v1 launch — primary | IndieHackers | Constantine (post launch-specialist's draft) |
| 1 | Day 9 (Thu) | Schema Pack v1 launch — secondary | r/SEO | Constantine |
| 1 | Day 10 | Schema Pack v1 launch — tertiary | r/LocalSEO | Constantine |
| 2 | Day 14 (Tue) | Cited Weekly Issue 001 publishes | Beehiiv (free + paid tiers dark) | Constantine |
| 2 | Day 14 (Tue evening) | Schema Pack v1 X thread | X / Twitter | Constantine |
| 2 | Day 16 (Thu) | llms.txt Pack v1 launch | IndieHackers | Constantine |
| 2 | Day 17 | llms.txt Pack v1 + bundle CTA | r/SEO, X | Constantine |
| 3 | Day 21 (Tue) | Cited Weekly Issue 002 publishes (cross-mentions both packs + Bundle) | Beehiiv | Constantine |
| 3 | Day 23 (Thu) | GEO Setup productized service launch | IndieHackers + X | Constantine |
| 3 | Day 24 | GEO Setup r/SmallBusiness | r/SmallBusiness | Constantine |
| 4 | Day 28 (Tue) | Cited Weekly Issue 003 publishes (mentions GEO Setup) | Beehiiv | Constantine |
| 4 | Day 30 (Thu) | AI Citation Audit launch | IndieHackers + r/LocalSEO | Constantine |
| 4 | Day 31 | AI Citation Audit X thread | X | Constantine |
| 5 | Day 35 (Tue) | Cited Weekly Issue 004 (audit + setup tier comparison post) | Beehiiv | Constantine |
| 6 | Day 42+ | First retainer offers to existing audit buyers (Day 25 hook) | Email | Operator-Productized-Services |
| 7+ | ongoing | Sustained: 1 newsletter issue/week, 1 launch event/2-3 weeks, response work daily | All | All operators |

## Why this order

**Schema Pack v1 first** because it's the lowest price ($29), the smallest commitment, and the most-shareable artifact. A first sale at $29 is statistically more likely than a first sale at $499 or $2,500, and the first sale validates everything.

**llms.txt Pack second** because it pairs with Schema Pack (Bundle SKU at $35 cross-sells immediately to Schema Pack v1 buyers) and because it's the second-lowest entry-point.

**Cited Weekly issues anchor the cadence** between product launches. Each issue cross-promotes the most-recently-launched product, building the audience that makes the next launch land.

**GEO Setup before AI Citation Audit** because the $2,500 service is the highest-margin item; once it has one case study (even from the BayShine dogfood account), every subsequent launch can reference real results. The audit at $499 is the middle-tier sibling of GEO Setup, so launching it AFTER GEO Setup means the audit can reference the setup service as the upgrade path.

**No product launches in the demand-probe week (Week 0-1).** The probe needs clear signal-collection time without competing posts diluting the data.

## Day-6 decision tree (demand probe → Schema Pack v1 launch)

If demand probe signal is:

- **High (>10 DMs OR >5 beta signups OR >20 IndieHackers upvotes):** Launch Schema Pack v1 at full price ($29) on Day 7. Schedule the rest per the master sequence.
- **Moderate (3-10 DMs OR 2-5 beta signups OR 10-19 upvotes):** Launch Schema Pack v1 at the beta price ($14) on Day 7 to the people who responded. Public launch at $29 deferred to Day 14. Re-evaluate after first 10 sales.
- **Low (<3 DMs AND <2 beta signups):** Re-frame. Probe was wrong about vertical positioning or about price tier or about category fit. Operator-Info-Products writes a Journal entry under their lineage identifying the most likely cause and proposes a re-framed product (could be 3 specialized verticals at $19, could be a different vertical entirely, could be a different format like a Notion template).

## Voice gate

Every launch post in this directory passes `checkVoice()` from
`Atrium/archetypes/shared/resend.ts` before publish. The function
rejects: em-dashes, exclamation marks, "we'd love," "feel free,"
"passionate about," "exciting."

Manual rule (not enforced by the function but enforced by the
discipline): no invented sales counts, no invented testimonials,
no invented social proof. If a launch post wants to reference
sales numbers, the numbers come from Stripe or Gumroad real
data, or the post does not include the number.

## Tracking

After each launch event, log to `Atrium/library/decisions.jsonl`
under `launch-specialist` lineage with:

- date, channel, product, post URL, T+1h engagement, T+24h
  engagement, T+7d engagement, first-week sales attributable.

After 10 launch events, the Pattern Rollup descendant produces
the first launch playbook at `Atrium/library/playbooks/launch.md`,
which then refines this sequence for the next 10 launches.

## When this sequence breaks

If any of the following happens, pause the schedule and write a
Journal entry under launch-specialist lineage before proceeding:

- A launch generates >50 sales in 48 hours (capacity overrun on
  the productized services; pricing audit needed).
- A launch generates 0 sales in 7 days (the post or the channel
  or the product is wrong; diagnose before next launch).
- A platform rule violation (Reddit removes a post, IndieHackers
  flags as spam, HN flag-kills); document the cause to avoid in
  future launches.
- Constantine indicates capacity issues with the customer support
  load (the support load grows with cumulative sales, not with
  individual launches; flag the threshold).
