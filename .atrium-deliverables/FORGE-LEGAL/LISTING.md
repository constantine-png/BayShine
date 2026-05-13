# Deployment notes — Forge legal page

## What this is

Combined Terms and Privacy Policy for Forge. Needed before:
- Citation Watch and Schema Doctor Pro convert from waitlist to active billing
- First enterprise inquiry signs a charter
- Forge Weekly paid tier launches

## Files

- `terms.html` — Covers: free tools, subscription terms, enterprise engagement
  terms, newsletter, liability limitation, privacy policy.

## Placeholders to replace before deployment

| Placeholder | Replace with |
|---|---|
| `{{FORGE_DOMAIN}}` | Your Forge domain (e.g., forge.run, forge.build) |

Three instances in email addresses and footer.

## Deployment

Deploy to `{{FORGE_DOMAIN}}/terms` (Forge Vercel project).

```
vercel deploy --prod
```

After deployment, update:
- Forge content site footer (`FORGE-CONTENT-SITE/index.html`): add Terms link.
- Schema Generator page: add Terms link in footer.
- Citation Watch sales page: add Terms link.
- Schema Doctor Pro sales page: add Terms link.
- Forge Weekly (Substack): link in publication settings.

## Enterprise engagement note

For actual enterprise engagements at $5k-$25k, the terms page establishes the
framework, but each engagement should also have a signed engagement charter as
a separate document. The charter template is in
`Forge/.claude/agents/enterprise-engagement-builder.md`.

The terms page protects both parties for the general case; the charter is the
binding engagement-specific agreement. Do not begin enterprise work without
a signed charter even if the terms page is live.
