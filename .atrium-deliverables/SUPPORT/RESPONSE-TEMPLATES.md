# Response templates — common buyer patterns

Maintained by the customer-support-specialist descendant. Each
template is a starting point; the Support Specialist adapts to
the specific buyer's question. All templates pass the voice gate.

## Refund — inside policy window (auto-send)

```
Hi {{NAME}},

Refund processed. You'll see the credit on your card in 5-10 business days per Stripe's standard timeline.

The file you downloaded remains on your computer; no action needed on your end.

If anything in the product wasn't clear or there was a specific install issue, reply and we'll log it. Two short paragraphs of feedback are more useful than five-star reviews for the next version.

— Atrium
```

## Refund — outside policy window (constantine-sign required)

```
Hi {{NAME}},

You're past the 7-day refund window (purchased {{DATE}}). Refunds outside the policy are case-by-case.

If the deliverable failed the documented quality bar — for example, the schema didn't pass validation after install, the install instructions were materially wrong for your platform, or the audit report missed something we'd documented as in-scope — refund is the right outcome and we'll process it within 1 business day.

If the issue is that the product didn't do something we hadn't documented as in scope, the refund is harder to grant because the scope was the documented scope at purchase.

Tell me which case applies and we'll move on it.

— Constantine
   Atrium
```

## Install question — Schema Pack (auto-send)

```
Hi {{NAME}},

The {{ERROR_TYPE}} validation failure on {{LIVE_URL}} is most likely caused by {{LIKELY_CAUSE}}.

To fix:

1. {{STEP_1}}
2. {{STEP_2}}
3. Re-test at https://search.google.com/test/rich-results.

If still failing after those three steps, reply with a screenshot of the new validation error and we'll diagnose further.

— Atrium
```

Fill in `{{LIKELY_CAUSE}}` from the INSTALL.md troubleshooting table:

- Phone validation: country code and spaces format.
- `dayOfWeek` enum: full word, capitalized.
- `geo` coordinates: numbers not strings.
- Duplicate scripts: another plugin already injects schema.

## Custom-quote inquiry — under productized scope

```
Hi {{NAME}},

The custom scope you describe is {{SUMMARY_OF_REQUEST}}. The productized service is fixed-scope at {{PRICE}}; what you're describing is approximately {{ESTIMATED_PRICE}} as a separate engagement.

Specifically, the additions over the productized scope are:

- {{ADDITION_1}} (estimated {{EFFORT_1}})
- {{ADDITION_2}} (estimated {{EFFORT_2}})

If that pricing works, reply with a confirmation and we'll generate a Stripe link for the custom engagement. Same 7-day refund and same delivery-date policy apply (we'd commit a specific date in the engagement scope).

If $X is over budget, the productized version at $Y delivers the core scope; the custom additions can be a follow-on engagement after the productized one if useful.

— Atrium
```

## Custom-quote inquiry — completely outside calibration

```
Hi {{NAME}},

The work you describe — {{SUMMARY_OF_REQUEST}} — is outside our current calibration.

We're specialized in AI-search visibility for local service businesses (schema, llms.txt, citation-readiness, AI-engine probing). For {{REQUEST_CATEGORY}}, the specialists who focus on that work are likely a better fit.

If we're misunderstanding the request and it's actually within our scope, reply with more detail and we'll re-evaluate.

— Atrium
```

## Agency / white-label inquiry

```
Hi {{NAME}},

Yes, we work with agencies on the productized services.

Default pricing for white-label is the same as retail ($2,500 for GEO Setup, $499 for AI Citation Audit). You mark up your retail price as you see fit; we don't restrict.

For agencies with 5+ concurrent engagements, the per-unit price drops on a case-by-case basis. Reply with the number of engagements you typically run per quarter and we'll propose the volume tier.

The intake forms for white-label engagements are the same as retail; you submit on behalf of your client.

— Atrium
```

## Beta / waitlist request

```
Hi {{NAME}},

Added you to the {{VERTICAL}} waitlist for {{PRODUCT}} v2.

v2 ships when there's a waitlist of 50. As of {{DATE}}, the {{VERTICAL}} waitlist has {{CURRENT_COUNT}} signups.

If you want to be a paid beta buyer at half-price when v2 ships, reply with "beta yes" and we'll prioritize you for the first 10 beta slots.

— Atrium
```

## Technical question requiring a specialist loop

```
Hi {{NAME}},

Your question {{QUESTION_SUMMARY}} touches on {{TECHNICAL_AREA}}, which is detailed enough that I want to give you the right answer rather than a quick one.

Drafting a response now, will be back within 24 business hours with the specifics.

— Atrium
```

(Then invoke the relevant specialist: schema-specialist for schema, geo-ai-search-specialist for llms.txt or AI parsing, site-architecture-specialist for URL or sitemap, internal-linking-specialist for anchor text, citation-readiness-specialist for content structure. The Support Specialist composes the final reply integrating the specialist's draft.)

## Angry / litigious buyer — escalate immediately

```
[ESCALATE TO CONSTANTINE — DO NOT SEND]

Buyer: {{NAME}}
Product: {{PRODUCT}}
Tone: {{ANGRY / LITIGIOUS / OTHER}}
Specific language: {{KEY_PHRASE_FROM_BUYER}}

Recommended next step:

{{EITHER:
"Constantine drafts personally. Tone of buyer suggests a public-platform escalation if mishandled."

OR:

"Refund offered + 1-paragraph apology + offer to discuss by phone if buyer wants. Stops here unless buyer escalates further."

OR:

"Legal review recommended before any response. Specific language 'lawsuit/fraud/lawyer' triggers Constantine + counsel."}}
```

## Common question patterns and quick responses

### "Is this AI-generated?"

```
The product structure follows the documented spec (schema.org for schema, the llms.txt convention for llms.txt files). The content was drafted by Atrium's authoring process — partial yes, an LLM is part of that pipeline — and validated against real AI-engine probe data before publish.

If "AI-generated" means "produced and shipped without human validation," the answer is no. The schema files pass automated validators; the audit reports include the actual probe queries that produced the findings.
```

### "Can I see proof this works?"

```
The BayShine Detailing site (bayshine.net) is the dogfood case study. Schema visible in page source; llms.txt visible at bayshine.net/llms.txt. The 12% Perplexity citation improvement and 8% ChatGPT search improvement after the audit-and-implementation pass are documented in Cited Weekly Issue 001's paid-tier supplement.

For independent verification: probe Perplexity, ChatGPT search, Claude, and Gemini against "best mobile detailer in Pasco County FL" and "ceramic coating service near Wesley Chapel FL" and observe whether BayShine is cited.
```

### "Money-back if it doesn't work?"

```
7-day no-questions refund on every product. For productized services, automatic refund if we miss the contracted delivery date. After delivery, refunds are tied to documented quality-bar failure, not to whether the AI engines respond to your specific market in a way you wanted.

We make the site readable, citable, and structurally correct. Position depends on your market.
```

### "Discount?"

```
The catalog is priced as listed. No discount codes, no urgency timers, no flash sales.

The closest things to a discount that exist:

- 7-day beta price ($14 instead of $29) on Schema Pack v1, offered ONLY to people who signed up via the demand probe.
- $250 audit credit toward GEO Setup if upgraded within 30 days of audit delivery.
- Bundle pricing (Schema Pack + llms.txt Pack at $35).

None of these are discount-chasing; each one ties a price to a specific behavior.
```
