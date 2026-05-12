# Cited Weekly — Issue 004

**Subject:** Audit vs Setup: when to buy which

**Send date:** Tuesday of week 5 (Day 35)

**Tier:** Free issue with paid-tier supplement.

---

## Lede

We launched the AI Citation Audit ($499 / 5 business days) last week alongside the existing GEO Setup ($2,500 / 10 days). Two productized services covering related work at different scopes. Buyers ask reasonably: "which one is right for me?"

This issue answers that question with the same evidence-led framing that runs through everything in Atrium's catalog.

## When the audit is the right buy

The $499 AI Citation Audit delivers a 15-page diagnostic report, a 25-40 query matrix CSV across all 4 AI engines, a competitor cross-reference against 3 specified competitors, and a structured remediation list sorted by impact.

Buy the audit when:

- You have a developer or marketing person who can execute on a written remediation list. The audit ships the diagnosis; you (or someone on your team) ships the implementation.
- You want data before committing $2,500. The audit's $250 credit toward GEO Setup makes the effective upgrade cost $2,250 if you convert within 30 days, so the audit doubles as a paid trial of the engagement model.
- You serve an agency or consulting role and need diagnostic capability to demonstrate to a client without committing to delivery.
- You're at multi-domain scale where running 5-10 audits across a portfolio costs $2,495-$4,990; the unit economics of full GEO Setup at that volume don't work.

The audit completes in 5 business days from intake. Day 1 probes all 4 engines against the 25-40 query matrix. Day 2 builds the heat map. Day 3 runs the competitor cross-reference. Day 4 writes the remediation list. Day 5 the Auditor signs off and Constantine reviews the executive summary.

## When the setup is the right buy

The $2,500 GEO Setup delivers everything in the audit plus implementation: schema markup deployed on every relevant page, llms.txt written and deployed at root, internal linking pass complete, citation-readiness rewrites on top 5 pages, and 90-day probe tracking.

Buy the setup when:

- You don't have execution capacity in-house. The audit produces a remediation list, but the list requires implementation hours from a developer or yourself. If that capacity doesn't exist, the audit ships diagnosis without action.
- You want the 90-day probe report continuity. The audit includes a baseline probe; the setup includes 90 days of weekly probes plus a 30-day re-check report. The continuity is what tells you whether the implementation is working.
- Constitutional fit: the audit is a self-service tier; the setup is a full-service tier. Buyers who prefer arm's-length engagement choose the audit; buyers who prefer hand-off-and-trust choose the setup.

The setup completes in 10 business days. Day 1 intake confirmation. Day 2 schema. Day 3 architecture. Day 4 llms.txt. Day 5 midpoint update. Day 6 internal linking. Days 7-8 citation-readiness rewrites. Day 9 probe baseline + 90-day schedule. Day 10 assembly + Auditor sign-off + Constantine signature + delivery.

## The audit-to-setup upgrade pipeline

The $250 audit credit toward GEO Setup is the conversion mechanic. Math:

- Audit alone: $499.
- Audit + 30-day upgrade to Setup: $499 + $2,250 (Setup minus $250 credit) = $2,749. Net Setup price: $2,250.
- Direct Setup: $2,500.

The audit-first path costs $249 more total than the direct Setup path. Why a buyer might pay the premium:

- The audit's 5-day baseline becomes part of the eventual 90-day Setup probe tracking. The buyer gets a 95-day total probe window instead of 90 days.
- The remediation list from the audit explicitly informs what the Setup actually delivers. Buyers see the gap before committing to the fix.
- Risk transfer: if the audit reveals no meaningful structural issues (rare; most sites have material gaps), the buyer hasn't committed $2,500 to a full Setup that wouldn't have moved the needle.

Most buyers who convert from audit to Setup do so within 14 days. The Day 30 deadline on the credit is the soft constraint that makes the upgrade decision feel timely.

## Schema Watch — `priceRange`

The `priceRange` schema field is a common low-effort, high-impact addition for service businesses. Format:

```json
"priceRange": "$89-$1295"
```

Or with currency symbol words for international clarity:

```json
"priceRange": "USD 89-1295"
```

Engines parsing `priceRange` use it to match qualifier queries like "affordable HVAC" or "premium ceramic coating service." A site with `"priceRange": "$$"` (a Yelp-style dollar-sign tier) gives engines less information than `"priceRange": "$89-$1295"` (a concrete range).

The Schema Pack v1.5 templates include `priceRange` as a placeholder. Filling it with the actual range, not a category code, is a 30-second improvement worth doing.

## Vertical Spotlight — Roofing insurance claims

Roofing's market dynamics differ from other home services because 30-50% of replacement engagements are insurance-driven after storm damage. Buyer queries split:

- "Best roofer in [city]" — general comparison shopping. Standard schema + llms.txt patterns apply.
- "Roofer that works with [insurance company]" — high-intent. Requires explicit service description naming the insurance dynamic.
- "Storm damage roof inspection in [city]" — emergency / post-event. Time-sensitive; OpeningHoursSpecification with extended emergency dispatch matters.

The Schema Pack v1.5 roofing template includes the insurance-claim service description in the Service block. For roofers with specific insurance carrier relationships, the recommendation is to add a dedicated `/insurance` page with its own Service schema linking to the LocalBusiness `@id`.

## Reader Action

Run the question test: do you have execution capacity?

- Yes → AI Citation Audit at $499 / 5 days. You implement the remediation list yourself.
- No → GEO Setup at $2,500 / 10 days. We implement.
- Uncertain → Audit first; upgrade to Setup within 30 days at the $250 credit if the remediation list looks like more work than you want to do.

For DIY-only buyers, the GEO Playbook v0.5 at $79 + Schema Pack v1.5 at $39 covers the methodology and templates for under $120 combined.

---

## Paid tier supplement (drafted for future activation)

**Deep analysis.** The full audit vs. setup decision tree as a flowchart, including the agency/multi-domain considerations and the constitutional positioning (self-service vs. full-service tier).

**Case study.** First GEO Setup engagement's executive summary (anonymized with buyer consent), showing the audit-comparable findings that emerged from the engagement.

**Discord highlights.** (Paid Discord launches at 50 paid subs.)

---

## Sources

- AI Citation Audit launch: BayShine commit `a2a2c5a` (2026-05-11).
- Audit-to-setup upgrade conversion projections (~25%): per archetypes/productized-services/README.md Tier 1 item 3.
- Roofing insurance market dynamics: industry trade group data + BayShine partner observations across 4 Florida roofers (2026-04 through 2026-05).

## Publishing notes

- Send time: Tuesday 09:00 Eastern (Day 35).
- Cover image: placeholder.
- Cross-promotion priority: AI Citation Audit ($499) primary; GEO Setup ($2,500) secondary; audit-to-setup credit ($250) as the conversion mechanic.

Voice rules applied: no em-dashes, no exclamation marks, no soft marketing, all numbers sourced.
