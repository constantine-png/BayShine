# Cold email templates

Six variants for different prospect types. Each template is the starting point; the first sentence must be customized per prospect using research from PROSPECT-DOSSIER.md.

Voice gate before sending: from Constantine personally, em-dashes max 1 per email, one ask, honest scarcity if mentioned, no invented claims, link to real case study if cited.

---

## Variant A — Multi-location service business owner (HVAC, plumbing, roofing chains)

### Subject

Quick note about how {{PROSPECT_COMPANY}} is showing up on Perplexity

### Body

```
Hi {{FIRST_NAME}},

I ran {{PROSPECT_COMPANY}} through Perplexity and ChatGPT search this morning — typed in "best {{VERTICAL}} in {{CITY}}" — and you're getting cited on Perplexity but missing on ChatGPT search. Your top competitor ({{COMPETITOR_NAME}}) is showing up on both.

The fix is structural — schema markup on your service pages and an llms.txt at your root telling AI engines who you are. Most multi-location operators in your vertical haven't done this yet, which is a real opportunity right now while the gap is wide.

I built a productized service called GEO Setup that handles this end-to-end in 10 business days for $2,500. We do schema, llms.txt, internal linking, citation-readiness rewrites on your top 5 pages, plus 90-day probe tracking across all 4 engines. Built against my own brand (BayShine, mobile detailing in Pasco County FL) as the dogfood — 12% citation lift on Perplexity, 8% on ChatGPT search inside 14 days.

If this is interesting, I have one open engagement slot for the next 2 weeks. Reply if you want to grab it.

— Constantine
   Forge
   {{FORGE_DOMAIN}}/geo-setup
```

### Personalization required

- {{PROSPECT_COMPANY}}, {{FIRST_NAME}}, {{VERTICAL}}, {{CITY}}: from research.
- {{COMPETITOR_NAME}}: the actual top citation result on the engine where {{PROSPECT_COMPANY}} is missing. Run the probe before sending.
- "best {{VERTICAL}} in {{CITY}}": adapt the query to what their actual buyers would search.

---

## Variant B — Regional agency owner serving local service businesses

### Subject

White-label option on the GEO Setup service?

### Body

```
Hi {{FIRST_NAME}},

I saw {{AGENCY_NAME}} works with {{NUMBER}} local service businesses across {{REGION}}. We built a productized GEO setup service that handles AI search visibility — schema, llms.txt, citation-readiness rewrites, 90-day probe tracking — at $2,500 retail per engagement, 10-day turnaround.

Most agencies serving local service businesses haven't built out AI search capability yet, mostly because the work crosses schema markup, content strategy, and engine-specific behavior. We've productized it.

White-label pricing for agencies running 5+ concurrent engagements drops below the $2,500 retail floor — you mark up to your retail. The intake is structured so we can handle high volume without slowing your client work.

If you want the agency pricing sheet, reply and I'll send it.

— Constantine
   Forge
   {{FORGE_DOMAIN}}/geo-setup
```

### Personalization required

- {{AGENCY_NAME}}, {{FIRST_NAME}}: from Sales Navigator or LinkedIn research.
- {{NUMBER}}: estimated client count from their website or LinkedIn (use a range if you can't pin it).
- {{REGION}}: their primary service area.

---

## Variant C — SaaS founder building tools for service businesses

### Subject

Forge's Schema Doctor Pro waitlist + your tool integration?

### Body

```
Hi {{FIRST_NAME}},

I noticed {{PROSPECT_COMPANY}} builds tools for {{VERTICAL}} businesses. We launched Citation Watch (AI search monitoring at $19/mo) and have Schema Doctor Pro on a waitlist for late Q3 — automated JSON-LD generation, build-pipeline validation, drift detection across multiple domains.

The integration angle: Schema Doctor Pro's CMS webhook listener could plug into {{PROSPECT_COMPANY}} as an add-on or as a referral partnership. Buyers of your tool get AI search ops for $19-$99/mo; you get a revenue share or affiliate commission.

If this overlaps with your product roadmap, reply and we can talk about specifics. If it doesn't, no follow-up.

— Constantine
   Forge
   {{FORGE_DOMAIN}}/schema-doctor-pro
```

---

## Variant D — Single-location service business that's already doing GEO badly

### Subject

I ran {{PROSPECT_COMPANY}} through Perplexity — found something specific

### Body

```
Hi {{FIRST_NAME}},

Probed {{PROSPECT_COMPANY}} this morning across Perplexity, ChatGPT search, Claude, and Gemini for "best {{VERTICAL}} in {{CITY}}." You have schema markup installed — that's already ahead of most local operators — but the FAQPage block is generic. The questions are things like "What areas do you serve?" rather than the vertical-specific questions buyers actually ask.

The fix is replacing the generic FAQs with 5 vertical-specific Q&As that match real buyer queries. Specific to {{VERTICAL}}, those queries are about pricing, scheduling, service area scope, and the most common technical questions.

For a one-time pack, our Schema Pack v1.5 at $39 has the 5 vertical-specific FAQs pre-written for {{VERTICAL}}. For a full diagnostic including position tracking across the 4 engines, our AI Citation Audit at $499 / 5 days is the next step.

Reply if either fits.

— Constantine
   Forge
   {{FORGE_DOMAIN}}/{{generate|citation-watch|atrium-link}}
```

---

## Variant E — Existing AI Citation Audit buyer who hasn't upgraded to GEO Setup

### Subject

Your audit findings + the $250 credit toward Setup

### Body

```
Hi {{FIRST_NAME}},

{{AUDIT_DELIVERY_DATE}} marks 14 days since your AI Citation Audit delivery. The remediation list flagged {{TOP_GAP_1}}, {{TOP_GAP_2}}, and {{TOP_GAP_3}} as the highest-impact items.

If you'd rather we execute the remediation directly, GEO Setup at $2,500 (with the $250 audit credit applied, so $2,250) handles all three plus the 90-day probe tracking. We can start next Monday.

If you've already executed some of the remediation yourself, reply and tell me which. The follow-up probe at Day 30 will catch what's working; we can re-scope GEO Setup to focus on what's left.

— Constantine
   Forge / Atrium
   {{ATRIUM_DOMAIN}}/geo-setup
```

### Note

Variant E is Atrium-Forge crossover outreach. The audit is an Atrium product; the upgrade is technically an Atrium product (GEO Setup). Constantine writes this in his own voice rather than purely Forge voice — he signs as "Forge / Atrium" reflecting that he operates both networks. The outreach is more conversational because the buyer has already engaged.

---

## Variant F — Cold reach to enterprise prospect (multi-location service chain at $50M+ revenue scale)

### Subject

GEO program for {{PROSPECT_COMPANY}} — quick scope check

### Body

```
Hi {{FIRST_NAME}},

{{PROSPECT_COMPANY}} operates {{NUMBER_OF_LOCATIONS}} {{VERTICAL}} locations across {{REGIONS}}. At that scale, your AI search visibility across Perplexity, ChatGPT search, Claude, and Gemini is meaningful revenue — buyer queries like "best {{VERTICAL}} near {{ANY_LOCATION}}" route to whoever is structurally citable.

I ran a sampling probe on three of your locations ({{LOCATION_1}}, {{LOCATION_2}}, {{LOCATION_3}}) and saw {{SPECIFIC_GAPS}}. Each location has the same fix pattern; the cost of fixing 50 or 200 locations is roughly 3-5x the cost of fixing one.

We built a Forge Enterprise GEO Program for multi-location operators — $25,000 flat for a 30-day full implementation across your locations, including a 12-month probe tracking dashboard. If you want the spec, reply and I'll send it.

— Constantine
   Forge
   {{FORGE_DOMAIN}}/enterprise
```

### Personalization required (this variant has the highest research budget)

The probe sampling (locations 1, 2, 3) requires running real probes before sending. Don't send Variant F until the probe data is in the prospect dossier.

The {{SPECIFIC_GAPS}} should name 2-3 concrete structural issues, not generic ones. "Missing FAQPage schema across all 3 sampled locations" is good. "Some AI search optimization opportunities" is filler.

---

## A/B testing the templates

Run two variants in parallel for the first 100 sends per prospect type. Track:

- Open rate per variant.
- Reply rate per variant.
- Meeting-booked rate per variant.

The variant with higher meeting-booked rate at 100+ sends becomes the template-of-record for that prospect type. Document the result in `Forge/library/decisions.jsonl` under operator-forge-products lineage.

## What goes in the FROM and REPLY-TO fields

- FROM: `Constantine <constantine@{{forge-domain}}>` — named operator.
- REPLY-TO: same. Replies route directly to Constantine.
- The "From name" matters for deliverability and reply rate. A real human name + business email outperforms a generic business-only address.

## Subject line discipline

- Under 50 characters.
- No emojis (looks like consumer spam).
- No all-caps words.
- No "Re:" or "Fwd:" prefixes (deceptive).
- Specific to the prospect's situation (their company name, vertical, or geography).
- The subject and body must align — clickbait subjects with mismatched bodies kill reply rates and trust.

## Unsubscribe / opt-out language

Standard CAN-SPAM-compliant footer in every cold email:

```
You received this because we identified {{PROSPECT_COMPANY}} as a potential fit for Forge's services. If you'd rather not hear from us, reply with "unsubscribe" and you won't.

Forge, operated by Constantine, Pasco County FL, USA.
```

Reply-based unsubscribes are handled by the outbound tool (Instantly, Lemlist, etc.); the customer-support-specialist's escalation rules include unsubscribe processing.
