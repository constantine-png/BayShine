# Intake form — AI Citation Audit

Shorter than the GEO Setup intake. The audit does not need CMS
access (we're observing, not editing), so fewer credentials and
faster intake. Typeform or Notion form.

## Form fields

### 1. Confirmation

- **Stripe purchase email** (auto-filled).
- **Best email for engagement updates** (defaults to Stripe email, editable).

### 2. About your business

- **Business name** (text, required).
- **Primary website URL** (URL, required, https://).
- **Vertical** (single-select required):
  - Mobile detailing
  - Pressure washing
  - Mobile car wash
  - HVAC
  - Plumbing
  - Roofing
  - Mobile mechanic
  - Electrical
  - Landscaping
  - Pest control
  - Other (text input)
- **Primary city or service area** (text, required, e.g., "Pasco County, FL").
- **Service radius in miles** (number, required).
- **Top 3 local competitors** (text, required, "list 3 competitor websites or business names; we will look up the domains").

### 3. Queries you care about

The heart of the intake. The audit runs the 4 engines against
the buyer's specified queries plus 15-20 we auto-generate from
the vertical.

- **5 to 10 buyer queries** (textarea, required, "list 5-10 specific queries you wish buyers were finding you with; one per line; we will probe all 4 AI engines on each").
  - Field placeholder example: "best mobile detailer in Pasco County\nceramic coating service near Tampa\nmobile detailer for fleet vehicles in Hillsborough\nbest ceramic coating for daily drivers\nbest mobile detailer for apartment complexes"
- **What query do you most wish AI engines knew the answer to about your business?** (single text, required, "we use this as the lead query in the report").

### 4. Read-only access (no edits)

- **Google Search Console viewer access** (provide URL to your property, add `audit@{{ATRIUM_DOMAIN}}` as a User with Read permissions). Optional but recommended.
- **Google Analytics 4 viewer access**. Optional.
- **Google Business Profile manager access**. Optional.

If none of these are provided, the audit still runs but is less precise about "what does the buyer's data say" alongside the AI probe data.

### 5. Constraints

- **Are you currently working with another SEO consultant or agency?** (yes / no / text description). The auditor notes this in the executive summary so any recommendations dovetail rather than conflict.
- **Anything we should know before starting?** (textarea, optional).

### 6. Final checks

- **Reviewed scope** (checkbox required): "I have read the 'What this is not' section of the sales page and understand the audit delivers a diagnosis and remediation list, not implementation."
- **Refund policy** (checkbox required): "I understand the 7-day refund window starts at purchase and the 5-day delivery date triggers an automatic refund if missed."

## Submission flow

On submit:

1. Form data saves to `Atrium/library/artifacts/services/ai-citation-audit/engagements/{{ENGAGEMENT_ID}}/intake.complete.yml`.
2. Confirmation email to buyer.
3. Internal notification to Constantine.
4. Engagement clock starts: 5 business days to delivery.

## If form is incomplete after purchase

Email at day 2 if no intake form submitted. Refund at day 7 if still no submission. Per the same logic as GEO Setup, with a tighter timeline matching the 5-day delivery commitment.
