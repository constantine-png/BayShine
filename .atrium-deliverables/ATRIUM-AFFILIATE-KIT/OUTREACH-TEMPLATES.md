# Affiliate outreach templates

Four variants. Each personalized per target before sending. Voice gate before send: faceless brand (signed "Atrium"), no em-dashes, no exclamation marks, no soft marketing, no invented metrics.

---

## Variant AR1 — Local-SEO blogger or newsletter author

### Subject

Schema and llms.txt pack affiliate program at 30%

### Body

```
Hi {{TARGET_FIRST_NAME}},

We saw {{SPECIFIC_POST_OR_NEWSLETTER_ISSUE}} on {{TARGET_BLOG_OR_NEWSLETTER_NAME}}. The audience you reach with that content overlaps closely with the buyer profile for Atrium's info products.

The catalog:

- Schema Pack v1.5: $39, 9 service business verticals (mobile detailing, pressure washing, mobile car wash, HVAC, plumbing, roofing, electrical, pest control, landscaping). Validated JSON-LD with vertical-specific FAQ schema.
- llms.txt Pack v1: $9, same 9 verticals.
- Bundle: $45 (saves $3 vs unbundled).
- GEO Playbook v0.5: $79, 30-page methodology for local service business AI search.

Affiliate commission: 30% on each sale referred via your Gumroad affiliate link. Per-sale net to you: $11.70 (Schema Pack), $2.70 (llms.txt), $13.50 (Bundle), $23.70 (GEO Playbook).

If aligned operators in your network would find these useful, the program is enabled on Gumroad. Reply with confirmation and we'll send the affiliate signup link plus a suggested-copy snippet that matches Atrium's voice rules.

Atrium
```

### Personalization

- `{{TARGET_FIRST_NAME}}`: the writer's first name. Always specific.
- `{{SPECIFIC_POST_OR_NEWSLETTER_ISSUE}}`: actual title of a recent piece of theirs that aligns. Not a generic reference.
- `{{TARGET_BLOG_OR_NEWSLETTER_NAME}}`: the publication name.

If you can't name a specific recent piece, you haven't researched enough. Re-research before sending.

---

## Variant AR2 — Indie hacker newsletter or community author

### Subject

Affiliate program for AI search info products

### Body

```
Hi {{TARGET_FIRST_NAME}},

Atrium runs a catalog of info products and productized services for local service businesses in the AI search space. Your audience at {{TARGET_NEWSLETTER}} likely includes solo operators, agency principals, and tool builders who serve service business clients.

Affiliate program structure:

- 30% commission on Gumroad info products (Schema Pack v1.5 at $39, llms.txt Pack at $9, Bundle at $45, GEO Playbook v0.5 at $79).
- Per-sale net to affiliate: $11.70 to $23.70 depending on product.
- Tracking via Gumroad's per-affiliate UTM (automatic).
- Payout monthly via Gumroad's standard affiliate payment flow.

The pitch: Atrium's catalog is calibrated for indie hacker / SMB / agency audiences. If you'd promote it occasionally in newsletter mentions, sponsored slots, or product roundups, the commission compounds over time.

Reply if interested in the signup link plus suggested copy.

Atrium
```

---

## Variant AR3 — Schema-org tutorial author or developer educator

### Subject

Schema Pack v1.5 affiliate program for content creators

### Body

```
Hi {{TARGET_FIRST_NAME}},

Atrium ships JSON-LD schema packs for local service businesses. Schema Pack v1.5 ($39) covers 9 verticals with the most specific schema.org subclasses (AutoWash, HVACBusiness, Plumber, RoofingContractor, Electrician, PestControl, LandscapeService, HomeAndConstructionBusiness) plus vertical-specific FAQPage schema calibrated for AI engine citation.

Your tutorials on schema markup ({{SPECIFIC_TUTORIAL_REFERENCED}}) reach an audience that often implements these patterns. Schema Pack v1.5 is the templated companion to the tutorials — readers who want validated, pre-tested JSON-LD without writing it from scratch.

Affiliate commission: 30%. Per-sale net: $11.70 (Schema Pack), $13.50 (Bundle with llms.txt Pack), $23.70 (GEO Playbook).

If aligned with your audience, reply for the affiliate signup link.

Atrium
```

---

## Variant AR4 — Marketing agency principal

### Subject

Affiliate program for agencies referring AI search clients

### Body

```
Hi {{TARGET_FIRST_NAME}},

Atrium runs productized AI search services for local service businesses. The catalog includes one-time products ($9-$79) and services ($499-$2,500) covering schema, llms.txt, citation-readiness, and 90-day probe tracking across Perplexity, ChatGPT search, Claude, and Gemini.

For agencies serving local service business clients, the affiliate program lets you refer clients you don't directly serve (or layer Atrium's products into the work you DO serve, with a 30% commission as the alignment mechanism).

Per-sale commission (30%):

- Schema Pack v1.5: $11.70
- llms.txt Pack: $2.70
- Bundle: $13.50
- GEO Playbook v0.5: $23.70
- AI Citation Audit ($499 productized service): $149.70
- GEO Setup ($2,500 productized service): $750

For agencies running 5+ concurrent client engagements at $2,500+ each, the affiliate commissions add up to material monthly revenue ($1,500-$5,000) without additional client work on your side.

If interested, reply for affiliate signup + the agency-specific suggested workflow.

Atrium
```

### Note

Variant AR4 is the highest-ROI affiliate variant because agencies have built-in client volume. A single agency affiliate driving 10 referrals/month on GEO Setup at 30% = $7,500/month in affiliate revenue to them, $17,500/month net to Atrium.

The reverse: agencies who do their own AI search work in-house compete with Atrium's GEO Setup. Targeting agencies that DON'T do AI search work is the discipline — they refer the work rather than competing.

---

## Follow-up template (if no reply after 7 days)

### Subject

Re: {{ORIGINAL_SUBJECT}}

### Body

```
Hi {{TARGET_FIRST_NAME}},

Following up briefly on the affiliate program note. No reply pressure; if it's not the right time or fit, no further follow-up from this thread.

Atrium
```

After this follow-up, no further outreach for 6 months. The 6-month pause is the discipline against persistence-as-spam.

---

## Stopping criteria

- Reply received: switch to direct conversation; onboarding kit follows if affiliate accepts.
- "Not interested" or "remove me": stop immediately; tag target as "do not contact" with 365-day expiration.
- No reply after one follow-up: 6-month pause before re-engaging with fresh hook.

## Tracking

Per affiliate outreach, log to `Atrium/library/decisions.jsonl` under `affiliate-recruiter-specialist` lineage:

```json
{"date":"YYYY-MM-DD","channel":"affiliate_recruitment","variant":"AR1","target":"<name>","target_audience_size":N,"outcome":"sent|reply|accept|decline|no_reply"}
```

After 50+ recruitment attempts, the data tells which variants and which target types convert best. Future quarters weight into those.

## Voice rules check before send

- [ ] No em-dashes in body.
- [ ] No exclamation marks.
- [ ] No soft marketing language ("we'd love," "feel free," "passionate about," "exciting").
- [ ] Faceless brand signature ("Atrium," not Constantine).
- [ ] First sentence references something specific to the target (not generic).
- [ ] Commission math stated as concrete numbers, not "great commissions."
- [ ] One ask (reply for signup), no two-ask emails.
- [ ] No invented metrics about Atrium's affiliate program (current count, conversion rates).
