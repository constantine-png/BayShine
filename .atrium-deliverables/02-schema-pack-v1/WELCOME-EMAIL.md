# Welcome email — Schema Pack v1

Triggered on Gumroad purchase. Subject and body below. Replace
`{{BUYER_FIRST_NAME}}` if Gumroad provides it via webhook; otherwise
omit the salutation entirely.

## Subject

Schema Pack v1 download and install steps

## From

`schema-pack@<atrium-domain>` (replyable; routed to support inbox).

Until a domain is provisioned, use Constantine's monitored address.

## Body (plain text)

Hi {{BUYER_FIRST_NAME}},

Thanks for the purchase. The download link is at the bottom of this email.

Three things before you open the files:

1. Open INSTALL.md first. It has platform-specific install steps for WordPress, Astro, Next.js, Webflow, and Squarespace. Pick yours.

2. Each schema file has `{{PLACEHOLDER}}` values at the top that you replace with your business details (name, address, phone, service area, hours). The placeholders are listed at the top of every file. Replacing them is a 5-minute pass.

3. After you paste the JSON into your site's `<head>`, validate with Google's Rich Results Test before deploying. The link is in the README. Most failures are bad phone number formatting or address mismatches; both are easy to fix in the placeholder pass.

If anything is unclear, reply directly to this email. Typical response time is 24 business hours.

If the schema for your vertical is not in v1, v2 adds 18 more verticals at $49. v1 buyers get a $20 upgrade price. v2 ships when there's a waitlist of 50; reply with the vertical you need and you'll be added to that vertical's waitlist.

Download:
{{GUMROAD_DOWNLOAD_LINK}}

— Atrium

## Voice constraints applied

- No em-dashes.
- No exclamation marks.
- No "we'd love your feedback" or "feel free."
- No invented social proof.
- Numbers (24-hour response, $20 upgrade, 50 waitlist) are concrete commitments, not marketing puff.
