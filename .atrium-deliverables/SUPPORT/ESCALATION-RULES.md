# Escalation rules

Maintained by the customer-support-specialist descendant. This is
the decision tree for what gets handled at what level. Mis-routing
costs trust; correct routing scales the catalog.

## Tag definitions

Every drafted response carries one tag. The Operator sends or escalates per the tag.

### `[auto-send]`

The Operator may send without further review. Used for:

- Refunds inside the 7-day policy window. The Support Specialist drafts a 1-paragraph confirmation; the Operator processes the refund and sends.
- Install troubleshooting from the documented INSTALL.md troubleshooting tables. The Support Specialist drafts; the Operator sends.
- Vertical-availability questions (which verticals are in v1, when v2 ships, what's on the waitlist).
- Policy clarifications (refund window, license scope, bundle availability).
- Quick technical questions answerable from the product docs in under 5 minutes.

### `[operator-review]`

The Operator (operator-info-products, operator-productized-services, or operator-newsletter, depending on the product) reviews before sending. Used for:

- Roadmap inquiries (when will v2 ship, will you add vertical X, will you build a tool).
- Beta or waitlist requests.
- Catalog-level questions that affect operator strategy (pricing, distribution, product evolution).
- Custom-quote inquiries under $1,000 differential from listed price.
- Agency-license questions (volume pricing, white-label terms).
- Cross-product questions (which product is the right fit for this buyer).

### `[constantine-sign]`

Constantine reviews and signs before sending. Used for:

- Refunds OUTSIDE the 7-day policy window.
- Custom-quote inquiries over $1,000 differential from listed price (e.g., a $5,000 custom engagement on top of GEO Setup, a $25,000 enterprise tier, anything that's a different shape of contract).
- Legal language in the buyer's message ("breach," "fraud," "lawyer," "lawsuit," "small claims," "demand letter").
- Engagement disputes after delivery (the buyer claims the deliverable failed; the operator's position is the deliverable passed quality bar).
- Multi-location or franchise sales inquiries (operational decisions that affect Constantine's tax and entity structure).
- Sponsor / partnership inquiries on the newsletter (founding-Journal-gated decision).
- Press / interview inquiries.
- Any buyer who is angry, hostile, or threatening (regardless of refund status).

### `[specialist-loop]`

A discoverability specialist is invoked to draft the technical portion of the response. Used for:

- Technical schema questions beyond the INSTALL.md troubleshooting (schema-specialist drafts).
- llms.txt questions about AI engine parsing behavior (geo-ai-search-specialist drafts).
- Site architecture questions about URL or sitemap structure (site-architecture-specialist drafts).
- Internal linking strategy questions for buyers who didn't purchase GEO Setup but want guidance (internal-linking-specialist drafts; the Support Specialist composes the final reply with a note that full implementation is a separate engagement).
- Citation-readiness questions about page content rewriting (citation-readiness-specialist drafts).

The Support Specialist composes the final reply integrating the specialist's draft, applies the voice gate, and tags it `[auto-send]` if confined to documented information OR `[operator-review]` if the response commits to anything outside documented scope.

## When to escalate immediately (skip drafting)

These bypass the standard tag system and go directly to Constantine within 2 business hours:

1. **Threat language.** "Lawsuit," "fraud," "report to BBB," "small claims," "chargeback," "stop payment." Even if the buyer is wrong, the response requires Constantine's voice.

2. **Public-platform negative content.** A buyer posts a public negative review on Gumroad, Trustpilot, Twitter, IndieHackers, Reddit. The Support Specialist drafts but does NOT post; Constantine reviews and posts the public response. Public responses set precedent for future buyers reading the thread; voice and accuracy matter more than speed.

3. **Compliance / privacy issues.** GDPR / CCPA data request, "delete my information," any indication the buyer is in a regulated industry (healthcare, finance, legal) and concerned about data handling.

4. **Press / journalist inquiries.** Anything that smells like a media request, even informal ("I'm writing about indie hackers in AI search"). These can be opportunities OR liabilities; Constantine decides.

5. **Refund + escalation combined.** Buyer demands refund AND threatens further action ("refund me and I'll consider not [X]"). Process refund per policy AND escalate the messaging to Constantine for the response.

## Response-time targets per tag

| Tag | Target response time | Notes |
|---|---|---|
| `[auto-send]` | <4 business hours | Operator sends from drafted template |
| `[operator-review]` | <24 business hours | Operator reviews; may modify; sends |
| `[constantine-sign]` | <24 business hours | Constantine reviews; signs; sends |
| `[specialist-loop]` | <24 business hours | Includes specialist invocation time |
| Immediate escalation | <2 business hours | Constantine receives the alert immediately |

Sustained miss of any target triggers a Journal entry under
`customer-support-specialist` lineage proposing either (a) FAQ
expansion to reduce volume in that category, (b) automation of
the response if the category is repetitive enough, or (c) a
dedicated junior support agent (post-$15k-unlock).

## Refund handling — specific flow

**Inside 7-day window:**

1. Support Specialist receives request.
2. Drafts confirmation, tags `[auto-send]`.
3. Operator processes refund in Gumroad / Stripe dashboard within 1 business day.
4. Operator sends the confirmation.
5. Log to `library/decisions.jsonl` with category=refund, outcome=approved, days_since_purchase, product.

**Outside 7-day window:**

1. Support Specialist receives request.
2. Drafts a constantine-sign response that includes:
   - Buyer's specific claim.
   - Whether the claim has merit per documented quality bar (yes / no / partially).
   - Recommended outcome (approve / decline / partial refund).
   - Rationale in 2-3 sentences.
3. Constantine reviews the draft within 24 business hours.
4. Constantine signs and the Operator sends.
5. Log to `library/decisions.jsonl` with category=refund-OOP (out of policy), outcome=approved/declined, full reasoning.

If refund rate within policy exceeds 5% on any product for 60 days, the Operator writes a Journal entry investigating the root cause (product issue, install difficulty, scope misunderstanding) and proposes fixes.

If refund requests OUTSIDE the 7-day window exceed 2/month for 60 days, the same investigation triggers.

## Common escalation pitfalls (avoid)

- **Auto-sending a custom-quote draft because it "felt routine."** Custom quotes commit pricing precedent that affects future quotes. Always at least `[operator-review]`, never `[auto-send]`.
- **Asking Constantine to sign a refund-inside-policy.** The policy is auto-approve. Asking for sign-off creates a bottleneck and signals to Constantine that the Specialist isn't trusting the policy.
- **Sending a press response without Constantine.** Even friendly press creates brand precedent. Always `[constantine-sign]`.
- **Engaging with hostile buyers in the same thread without escalation.** Once tone turns hostile, the next message goes to Constantine, not back to the buyer.
- **Promising a fix or a feature in a response without operator-review.** "Oh, we'll add that in v2" commits the catalog to deliverable the Operator may not have approved. Always `[operator-review]` for any roadmap commitment.
