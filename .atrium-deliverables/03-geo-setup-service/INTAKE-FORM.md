# Intake form — GEO Setup

The intake form is sent to the buyer immediately on successful Stripe
checkout. Recommended platform: Typeform (free tier acceptable at
launch volume) or a Notion form. Tally is also acceptable.

The form is the entire brief. No follow-up call. No discovery
session. If the form is incomplete or ambiguous, the operator
emails the buyer for clarification on specific fields; otherwise
work begins.

## Form fields

### 1. Confirmation

- **Stripe purchase email** (auto-filled from Stripe; buyer
  confirms it is correct).
- **Best email for engagement updates** (defaults to the Stripe
  email, editable).

### 2. About your business

- **Business name** (text, required).
- **Primary website URL** (URL, required, must start with https://).
- **Vertical** (single-select required):
  - Mobile detailing
  - Pressure washing
  - Mobile car wash
  - HVAC
  - Plumbing
  - Roofing
  - Mobile mechanic
  - Mobile pet grooming
  - Electrical
  - Landscaping
  - Pest control
  - Other (text input below)
- **Primary city or service area** (text, required, e.g., "Pasco County, FL" or "Tampa, FL").
- **Service radius in miles** (number, required, e.g., 25).
- **Number of years in business** (number, required).
- **Number of locations** (number, required, default 1).

### 3. Conversion goal

- **What is the primary action you want a website visitor to take?**
  (single-select):
  - Call us
  - Book an appointment online
  - Get a quote / estimate
  - Sign up for the newsletter / list
  - Other (text input)
- **Average revenue per converted customer** (number, optional but recommended).
- **What buyer questions get asked most often?** (textarea, required, "list 5-10 questions you answer on calls or emails frequently").

### 4. Access credentials

These are required to complete the work. The form should warn that
without these, the engagement cannot start, and the 10-day clock
does not begin until access is confirmed.

- **CMS / website admin access** (select):
  - WordPress login (provide URL, username, app password)
  - Webflow editor access (provide email to invite)
  - Astro / Next.js repo access (provide GitHub repo URL and invite a collaborator)
  - Squarespace contributor invite (provide email)
  - Other (text description)
- **Google Search Console access** (provide URL to your property and add the operator email as a User with Owner permissions).
- **Google Business Profile manager access** (optional but recommended).
- **Google Analytics 4 viewer access** (optional but recommended).

### 5. Top 5 pages to rewrite

The citation-readiness pass rewrites 5 of your existing pages. The
buyer specifies which 5.

- **Page 1 URL** (URL, required)
- **Page 2 URL** (URL, required)
- **Page 3 URL** (URL, required)
- **Page 4 URL** (URL, optional)
- **Page 5 URL** (URL, optional)

The form notes: "If you do not have 5 pages worth rewriting, we
will pick the highest-impact pages based on your conversion goal
and document why in the executive summary."

### 6. Constraints and preferences

- **Brand voice notes** (textarea, optional, "anything we should
  preserve or avoid in the rewrites; if blank, we use a direct,
  professional voice").
- **Off-limits topics** (textarea, optional).
- **Existing SEO consultant or agency relationship** (yes / no /
  text description). The operator coordinates with existing
  partners to avoid duplicate work.

### 7. Final checks

- **Reviewed scope** (checkbox required): "I have read the 'What
  this is not' section of the sales page and understand what this
  service does and does not include."
- **Refund policy** (checkbox required): "I understand the 7-day
  refund window starts at purchase and the 10-day delivery date
  triggers an automatic refund if missed."
- **Anything else we should know** (textarea, optional).

## Submission flow

On submit:

1. Form data saves to `Atrium/library/artifacts/services/geo-setup/engagements/{{ENGAGEMENT_ID}}/intake.complete.yml`.
2. Confirmation email to the buyer (template in `WELCOME-EMAIL.md`).
3. Internal notification to Constantine.
4. Engagement clock starts: delivery date is today + 10 business days.
5. The delivery pipeline launches per `DELIVERY-PIPELINE.md`.

## What if the buyer never fills the form

If the form is not submitted within 14 days of purchase, the operator
emails twice (day 3 and day 7) requesting completion. If still
unsubmitted at day 14, the buyer gets a full refund and the
engagement is closed with a Journal entry under
operator-productized-services lineage tagging the cause.
