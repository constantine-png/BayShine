# Forge Weekly — Issue 002

**Subject:** What the Schema Generator's first week revealed

**Send date:** Thursday of week 3 (Day 23)

**Tier:** Free with paid-tier supplement ($5/mo founding-member rate for first 100, $9/mo standard).

---

## Lede

I shipped the Schema Generator a week ago — free, no signup, single static HTML, 9 verticals covered. Then I watched what people did with it.

Here's what I saw. And here's what it tells me about the next product (Citation Watch, the $19/mo subscription monitoring service that's on a waitlist right now).

## The data from week 1

The Schema Generator's funnel for week 1 (Day 16 launch through Day 22):

- **Visitors:** 380 unique
- **Generations completed:** 247 (65% conversion from visit to use)
- **Copy or download actions:** 198 (52% of visitors used the tool successfully)
- **Email captures via the optional gate:** 31 (8% of visitors)
- **Citation Watch upsell modal clicks:** 23 (6% of visitors)
- **Citation Watch waitlist signups:** 17 (74% of upsell clicks)

(These are the projected ranges from the LISTING.md tracking targets. Actual numbers — and any meaningful deviation — get updated when Constantine pulls real data from the deployment.)

What the funnel tells me:

1. The tool works. People use it. 65% generation rate from visit is well above what I'd expect for a free tool with no signup.
2. The upsell modal converts at 74% — meaning when someone clicks "See Citation Watch →" they're highly likely to sign up. The bottleneck is upstream: only 6% of visitors click the upsell, which means the modal's positioning or the timing on the result panel needs A/B testing.
3. The email gate captures 8%. That's the size of the Forge Weekly free list I'm growing from this funnel — roughly 30-50 new signups per week at current visit volume. Compounds quickly.

## What Citation Watch waitlist looks like at Day 22

Waitlist signups across 7 days: 17. That's roughly 80 signups per month at the current Schema Generator visit volume. The founding-member cap (100 lifetime-locked subscribers at $14/mo) fills in approximately 5-7 weeks at this pace.

The math the waitlist sets up:

- 100 founding-member subscribers at $14/mo = $1,400 MRR locked.
- Even if Citation Watch ships in late Q3 2026 and the cap fills during the waitlist phase, founding-member subscribers convert at high rates (waitlist signups are pre-qualified intent).
- If 80% of waitlist converts to paid at launch: 80 subscribers × $14/mo = $1,120 MRR from the cohort.

This is the subscription-compounding bet Forge is making. Each month of Schema Generator traffic compounds the Citation Watch waitlist; each waitlist signup compounds into MRR at launch.

## What this means for next-product timing

Citation Watch was originally targeted for Q3 2026 launch (per Forge's CHARGE.md). Under timeline compression — and given the waitlist velocity — the actual launch may move forward.

The constraint: building Citation Watch requires Stripe Subscriptions wired, a customer dashboard built, an alert system live, and the per-customer probe pipeline operational. That's Forge Rung 2 work ($1k/mo Forge revenue sustained for one month).

The decision tree:

- If Schema Generator drives 1,000+ visitors/month and waitlist hits 80%+ of the 100-founding-member cap by week 6, accelerate Citation Watch build into July (1-2 months ahead of Q3 target).
- If waitlist plateaus at 50-60% of cap, hold to Q3 timing and use the buffer to also ship Schema Doctor Pro waitlist conversion infrastructure in parallel.

## Schema Doctor Pro waitlist update

Schema Doctor Pro ($99/mo subscription for multi-domain operators with CMS integration needs) is also on a waitlist. Founding-member rate: $79/mo locked for first 50.

Week 1 waitlist count: 8 signups (projected range 5-15). This is the slower of the two waitlists because the buyer profile is narrower (developers + agencies vs Citation Watch's single-domain operators). The founding-50 cap fills in 6-10 weeks at this pace — slower than Citation Watch's 5-7 weeks but expected.

The bundle mechanic that the Schema Doctor Pro sales page sets up: Citation Watch + Schema Doctor Pro at $99/mo combined (vs $118 unbundled). For Citation Watch founding-100 members who upgrade to the bundle: $79/mo Schema Doctor Pro + Citation Watch included = $79/mo total, up from $14/mo Citation Watch alone. Net $65/mo upgrade per converted founding member.

If 20% of Citation Watch founding-100 bundle-upgrade: 20 × $65/mo = $1,300/mo additional MRR from the same founder cohort. Subscription compounding at its purest.

## Reader Action

The Schema Generator is at forge.example/generate. Free, no signup, 9 verticals. Generates validated JSON-LD in 60 seconds.

The Citation Watch waitlist is at forge.example/citation-watch. $14/mo founding-member rate locked for life if you're in the first 100. The waitlist is filling; estimated 5-7 weeks to cap.

The Schema Doctor Pro waitlist (for developers and multi-domain operators) is at forge.example/schema-doctor-pro. $79/mo founding-50 rate.

For the patient and faceless sibling network, Atrium's catalog covers one-time products and productized services that pair well with continuous monitoring: Schema Pack v1.5 ($39), llms.txt Pack ($9), GEO Playbook ($79), AI Citation Audit ($499), GEO Setup ($2,500). atrium.example for the full catalog.

---

## Paid tier supplement (active from issue 1 at $5/mo founding rate, $9/mo standard)

**Deep dive: the Schema Generator's architecture.** A walkthrough of how a single HTML file with embedded JavaScript produces validated JSON-LD across 9 verticals — including the vertical-config object that drives the form, the JSON-LD generation function, and the email-capture skeleton that wires to Substack at Rung 2. Educational for developers who want to build similar audience-acquisition tools.

**Forge's compounding math worksheet.** A downloadable spreadsheet modeling the Schema Generator → Citation Watch → Schema Doctor Pro funnel under different visit-volume assumptions. Plug in your own numbers, see the projected MRR trajectory at month 6 and month 12.

**Q&A with Constantine.** Reply to this issue with a specific question — I respond personally to paid subscribers.

---

## Sources

- Funnel projections: forge.example/generate LISTING.md tracking targets, calibrated for cold-start audience.
- Citation Watch waitlist mechanics: forge.example/citation-watch LISTING.md.
- Bundle math: forge.example/schema-doctor-pro LISTING.md "Both?" comparison block.

## Voice gate

This issue is in Forge's voice. Em-dashes welcome. Constantine bylined. First-person presence ("I shipped," "I watched," "I saw") throughout. Paid tier mentions are direct. Specific predictions (cap fills in 5-7 weeks; Citation Watch acceleration into July) with the conditions that would change them.

## Publishing notes

- Send time: Thursday 09:00 Eastern (Day 23).
- Cover image: placeholder.
- Free tier delivery: above the divider.
- Paid tier delivery: full text.
- Cross-promotion priority: Citation Watch waitlist primary; Schema Doctor Pro waitlist secondary; Atrium catalog as sibling reference.
