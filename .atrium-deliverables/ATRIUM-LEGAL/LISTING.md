# Deployment notes — Atrium legal page

## What this is

A combined Terms of Use and Privacy Policy page for Atrium. Required before
Gumroad products go live (Gumroad seller TOS requires sellers to have their own
refund policy and privacy policy linked), recommended before Stripe Checkout
pages go live, and legally required before collecting email addresses.

## Files

- `terms.html` — Deployable HTML covering: info product license and refunds,
  service engagement terms and refunds, limitation of liability, privacy policy,
  contact.

## Placeholders to replace before deployment

| Placeholder | Replace with |
|---|---|
| `{{ATRIUM_DOMAIN}}` | Your Atrium domain (e.g., atrium.co, atrium.io) |

Two instances of `{{ATRIUM_DOMAIN}}` in email addresses, one in the footer link.

## Deployment

Deploy to `{{ATRIUM_DOMAIN}}/terms` (Vercel, same project as the sales pages).

```
vercel deploy --prod
```

After deployment, update:
- Gumroad seller profile: add `https://{{ATRIUM_DOMAIN}}/terms` as the refund
  policy URL.
- Stripe Checkout: add `https://{{ATRIUM_DOMAIN}}/terms` to the footer links
  field in Checkout settings.
- Atrium content site footer (`ATRIUM-CONTENT-SITE/index.html`): add a Terms
  link pointing to `/terms`.
- AI Citation Audit sales page: add a Terms link in the footer.
- GEO Setup sales page: add a Terms link in the footer.

## Why noindex

The terms page is marked `<meta name="robots" content="noindex">` because legal
pages add noise to search indexes without adding search value. This is standard
practice. The page is publicly accessible via direct link; it just does not
appear in search results.

## What this page does NOT cover

Enterprise engagements (Forge Enterprise GEO Sprint and Program) at $5k-$25k
warrant more robust legal terms. The Forge legal page should be a separate
document. For the first Forge enterprise engagement, Constantine should review
whether a formal service agreement is warranted in addition to a public terms
page.

## Forge equivalent

A Forge-side legal page is needed before the waitlist converts to live
subscriptions (Citation Watch, Schema Doctor Pro) and before the first
enterprise inquiry converts to a signed engagement. The Forge legal should
cover subscription cancellation terms (for the SaaS products when live) and
enterprise engagement terms (for Sprint and Program).
