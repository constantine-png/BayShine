# Deploying pro.bayshine.net

The operator-recruitment surface lives at `pro.bayshine.net`. It is built into the same Astro app as bayshine.net but routed via a hostname rewrite in `vercel.json`. The page lives at `src/pages/pro/index.astro` and its API at `src/pages/api/pro/apply.ts`. The layout (`ProLayout`, `ProHeader`, `ProFooter`) is under `src/components/pro/` and imports nothing from the main site, so the whole operator surface can be extracted to its own Astro app later by copying that folder tree plus the relevant tokens from `src/styles/global.css`.

Three one-time setup steps are required before the subdomain works.

## 1. Verify the Resend setup for operator email

The apply form sends through Resend (same provider already used by `/api/contact`). The from-address used is `operators@bayshine.net`.

- In your Resend dashboard (https://resend.com), confirm `bayshine.net` is a verified domain. If `operators@bayshine.net` is rejected on first apply attempt, the domain verification needs to include that sender. Resend treats any `*@bayshine.net` as valid once the domain is verified.
- `RESEND_API_KEY` is already in the Vercel env from the main site setup. No new key needed.
- No DNS work required if the domain is already verified.

## 2. Add `pro.bayshine.net` as a domain on the existing Vercel project

Same project, additional domain. This is what makes the hostname rewrite in `vercel.json` actually do anything.

- Vercel dashboard → bayshine project → **Settings** → **Domains** → **Add**
- Enter `pro.bayshine.net` → **Add**
- Vercel will show DNS instructions. For a subdomain on a domain you do not host at Vercel: add a `CNAME` record on your DNS provider:
  - **Type**: CNAME
  - **Name**: `pro`
  - **Value**: `cname.vercel-dns.com`
  - **TTL**: default (3600 or auto)
- If `bayshine.net` is hosted on Vercel DNS, the record is added automatically.

Once the CNAME propagates (usually a few minutes), Vercel issues an SSL cert and the subdomain goes live.

## 3. Trigger a deploy and verify

Push the changes to `main` (or any branch that auto-deploys to a preview):

```powershell
git add vercel.json astro.config.mjs src/pages/pro/ src/pages/api/pro/ src/components/pro/ DEPLOY-PRO-SUBDOMAIN.md
git commit -m "feat(pro): operator-recruitment subdomain at pro.bayshine.net (stage 1)"
git push origin main
```

After the deploy completes, verify in this order:

1. **bayshine.net/pro/** loads the operator page. (Confirms the route built correctly.)
2. **pro.bayshine.net/** loads the same operator page. (Confirms the hostname rewrite works and the cert provisioned.)
3. The header on pro.bayshine.net shows the BAYSHINE wordmark + Operators tag — NOT the main site nav.
4. Submit a test application from pro.bayshine.net. Email lands in `constantine@bayshine.net` within ~30 seconds with the subject `BayShine Operators application: [name] ([location])`.
5. Reply-to on the test email goes back to the email you entered in the form, not to the BayShine address.

If step 4 fails, check Vercel function logs for the `/api/pro/apply` invocation. Most common cause: Resend rejecting `operators@bayshine.net` because the domain verification predates that sender or the sender wasn't included.

## What this is and isn't

- **Is**: a single landing page for operator recruitment, with an apply form that emails you directly. Stage 1 of the network play. Designed to validate supply-side interest before any infrastructure is built behind it.
- **Is not**: a CRM, a directory, a zip lookup, a payment pipeline, or a real application-tracking system. Those are stages 2 through 4 and depend on certification standards documentation that is actively being written from the Land O' Lakes operation.

## Extracting later (stage N: brand split)

If the operator network grows into its own brand (or you want it on its own deploy cycle), the extraction is mechanical:

1. New repo, new Astro project.
2. Copy `src/components/pro/*` (rename folder if you want) and `src/pages/pro/*` and `src/pages/api/pro/*` into the new app's `src/`.
3. Copy the relevant tokens, fonts, and component classes from `src/styles/global.css` (the `@theme` block, the `.btn-sweep`, `.gloss-cap`, `.section-bevel`, `.divider`, `.noise-overlay`, `.reveal`, and the focus-ring rules).
4. Remove the hostname rewrite for `pro.bayshine.net` from `vercel.json` here.
5. Point `pro.bayshine.net` (or the new brand subdomain) at the new Vercel project.

Nothing on the operator surface depends on main-site code, so the cutover is non-destructive.
