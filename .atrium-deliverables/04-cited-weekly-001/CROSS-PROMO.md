# Cross-promotion — Cited Weekly issues cross-mention shipped products

Drafted by the launch-specialist descendant. The newsletter audience
is the compounding asset; every issue should reference the most
recently launched product without becoming an advertisement.

## Per-issue cross-promotion rules

- One product mention per issue, in the "Reader Action" section only. Never in the lede, never in the analysis sections.
- The mention is positioned as "if you would rather not do this yourself, here is the productized version" — direct, not pushy.
- Cross-mentions use the canonical Atrium voice. No marketing copy. No urgency tactics.
- Discount codes or beta prices are surfaced in issue mentions only when the product is in a launch window (within 14 days of public launch).

## Cited Weekly Issue 002 (Day 21)

Issue 002 should be drafted by Day 19 and queued. Lede candidates
based on what data will be available:

- Schema Pack v1 sales data: which verticals sold first, which CMS platforms generated install issues, refund rate.
- llms.txt Pack adoption: how many sites actually deployed the llms.txt file (verifiable via probe).
- Bundle conversion rate: % of Schema Pack v1 buyers who added the bundle.

### Reader Action template for Issue 002

```
Reader Action

If you've been meaning to add schema markup or llms.txt to your service business site, the two packs Atrium shipped over the past two weeks cover 6 mobile service verticals at $29 and $9 respectively. Bundle is $35 for both.

The current Schema Pack v1 buyers are split roughly evenly between mobile detailing, HVAC, and plumbing operations. The most-asked-about vertical not yet in the pack is dental; v2 expands to 24 verticals at $49 when there's a waitlist of 50.

{{LINKS}}

For a full done-for-you setup (we do all the work, not just give you templates), the GEO Setup productized service is at {{GEO_SETUP_URL}}.
```

## Cited Weekly Issue 003 (Day 28)

By Day 28, GEO Setup has been live for 5 days. Issue 003 introduces it.

### Reader Action template for Issue 003

```
Reader Action

The done-for-you tier launched last week. GEO Setup is a $2,500 fixed-price productized service that handles schema, llms.txt, internal linking, citation-readiness rewrites on top 5 pages, and a 90-day AI citation probe across all 4 engines. 10 business days from intake to delivery. 7-day refund. Automatic full refund if we miss the date.

Built against my own brand (BayShine, mobile detailing) as the dogfood case study. 12% citation-position improvement on Perplexity and 8% on ChatGPT search, inside 14 days post-implementation, documented in the paid-tier supplement of Issue 001.

{{SALES_PAGE_URL}}

Verticals calibrated: mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing. Other verticals on request.
```

## Cited Weekly Issue 004 (Day 35)

AI Citation Audit launched on Day 30. Issue 004 introduces the audit-vs-setup choice.

### Reader Action template for Issue 004

```
Reader Action

For readers who want data before committing to a full GEO setup, the AI Citation Audit launched last week. $499 for a 5-day diagnostic: we probe all 4 engines against 25-40 queries in your vertical and geo, cross-reference your top 3 competitors, and deliver a structured remediation list sorted by impact.

If after the audit you decide you want us to do the work, audit buyers get a $250 credit toward GEO Setup (effective price $2,250) within 30 days.

{{AUDIT_URL}}

If you already know you want the implementation, GEO Setup at {{GEO_SETUP_URL}} is the direct path.
```

## Beyond Issue 004

Issues 005+ alternate between vertical spotlights and product cross-mentions. Typical rotation:

- Issue 005: vertical spotlight (HVAC schema patterns) + Schema Pack mention in Reader Action.
- Issue 006: methodology piece (how the citation probe works) + AI Citation Audit mention.
- Issue 007: case study from a real engagement (GEO Setup buyer, anonymized if needed) + GEO Setup mention.
- Issue 008: data piece (which engines are easiest/hardest to optimize for) + Schema Pack v2 launch announcement if v2 ships by then.

## Sponsored issues

The newsletter does not accept sponsored issues until the audience is over 1,000 free subscribers AND founding has approved the first sponsor in a Journal entry. Sponsorship can never violate the voice rules.

## Tracking

After each issue, log to `Atrium/library/decisions.jsonl` under `operator-newsletter` lineage:

- Issue number, send date, free subs at send, paid subs at send, open rate, click rate.
- Click-through to each linked product.
- Attributable sales to the issue (Stripe `client_reference_id` or Gumroad UTM tracking).

Cross-mention attribution is the North Star metric for the newsletter's compounding effect on the rest of the catalog. A single issue that drives 1 GEO Setup sale ($2,500) is worth more than 100 paid newsletter subscriptions ($900/mo).
