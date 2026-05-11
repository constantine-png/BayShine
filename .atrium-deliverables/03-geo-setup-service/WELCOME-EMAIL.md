# Welcome and intake email — GEO Setup

Triggered on Stripe `checkout.session.completed`. Body below.

## Subject

GEO Setup intake: next step (5 minutes)

## From

`hello@{{ATRIUM_DOMAIN}}` (replyable, monitored by Constantine).

## Body (plain text)

Hi {{BUYER_FIRST_NAME}},

Thanks for the purchase. Here is the next step.

Fill in the intake form below. It takes about 5 minutes. Once it lands, the 10-day delivery clock starts.

Intake form: {{INTAKE_FORM_URL}}

A few notes before you start:

The form asks for three things that sometimes take a minute to gather: (1) admin access to your CMS, (2) Google Search Console access (add `hello@{{ATRIUM_DOMAIN}}` as a User with Owner permissions), (3) the 5 pages on your site you most want rewritten for citation-readiness.

If you do not yet have Google Search Console set up, the engagement can still proceed, but the 90-day probe report will be less complete. The form has guidance on how to add it if needed.

After you submit:

- Day 1-9: work runs. You get a midpoint update at day 5.
- Day 10: delivery. You receive the schema files, the architecture recommendation, the llms.txt, the linking plan, the 5 rewritten pages, the 90-day probe initial report, and a 1-page executive summary signed by Constantine.
- Day 40: 30-day re-check. We re-run the probe and send a 1-page follow-up report at no additional cost.

If anything is unclear, reply to this email. Typical response time is 24 business hours.

— Atrium

## Delivery email (Day 10)

Triggered when the engagement reaches Day 10 and the Auditor has signed off.

### Subject

GEO Setup delivery — your bundle is ready

### Body (plain text)

Hi {{BUYER_FIRST_NAME}},

Your GEO Setup deliverable bundle is attached (or linked below for larger files).

What is in the bundle:

1. `schema-blocks.zip` — validated JSON-LD blocks for every page in scope. Open `INSTALL.md` inside for paste-in instructions for your CMS.
2. `architecture-recommendation.pdf` — site structure recommendation and sitemap diagram.
3. `llms.txt` — drop this at the root of your site (next to robots.txt).
4. `linking-plan.pdf` plus `linking-additions.csv` — internal link graph rebuild plan and a row-per-page additions list.
5. `rewrites/` — the 5 pages rewritten for citation-readiness. Each is in editable Markdown with a diff against the original.
6. `probe-report.pdf` — your baseline AI-citation position across Perplexity, ChatGPT search, Claude, and Gemini for the queries from your intake. This is the starting point for the 90-day tracking.
7. `executive-summary.pdf` — one page summarizing what was done, why, and what to expect.

The 30-day re-check runs automatically. You will get a 1-page follow-up report at Day 40 of the engagement (30 days from today).

If something in the bundle does not match what you expected from the intake form, reply to this email and we will resolve it. The 7-day refund window has closed (you are past Day 10) but we honor delivery quality bar issues without escalation.

If you want to continue the work past this engagement, two options:

1. Retainer ($499/month) — quarterly llms.txt refresh, monthly probe report, schema drift detection.
2. Sibling engagement — a different service like "Service-Area Page Pack" or a vertical-specific rebuild.

Reply with interest in either and we will send the next-step details.

— Constantine
   Atrium

## Voice constraints applied

- No em-dashes.
- No exclamation marks.
- No "we're excited" or "we'd love."
- No invented social proof.
- Concrete commitments (day 5 midpoint, day 10 delivery, day 40 re-check) rather than vague timelines.
- Constantine's signature on the delivery email; faceless brand on the intake email.
