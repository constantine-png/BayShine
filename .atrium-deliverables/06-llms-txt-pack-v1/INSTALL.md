# Install — llms.txt Template Pack v1

Before any install: open your vertical's template in `templates/` and
replace every `{{PLACEHOLDER}}` value with your business information.
The placeholders are listed at the top of each file in a comment block.

Save the file as `llms.txt` (not `<vertical>-llms.txt`). The filename
matters: AI engines look for the file at exactly `https://yoursite.com/llms.txt`.

## WordPress

### Option A — File Manager plugin (easiest)

1. Install "File Manager" by mndpsingh287 from the WordPress plugin directory.
2. Activate.
3. Navigate to the root of your WordPress install (the directory containing `wp-config.php` and `index.php`).
4. Upload `llms.txt`.
5. Visit `https://yoursite.com/llms.txt` to confirm it loads.

### Option B — FTP / SFTP

1. Connect to your server with an FTP client (FileZilla, Cyberduck, etc.).
2. Navigate to the WordPress root directory.
3. Upload `llms.txt` to the root, same level as `robots.txt`.
4. Verify accessibility at `https://yoursite.com/llms.txt`.

### Note

WordPress does not natively serve `.txt` files differently from any
other static file. No plugin or configuration is needed beyond placing
the file in the right directory.

## Astro

1. Save `llms.txt` to the `public/` directory of your Astro project.
2. The file is served at `https://yoursite.com/llms.txt` automatically.
3. Commit and deploy.

## Next.js

1. Save `llms.txt` to the `public/` directory of your Next.js project.
2. The file is served at `https://yoursite.com/llms.txt` automatically.
3. Commit and deploy.

## Webflow

Webflow does not natively serve custom static files at root. Three workarounds:

### Option A — Subdomain (recommended for Webflow)

If you control your DNS, create a subdomain (e.g., `cdn.yoursite.com`) pointing to a simple static host (Cloudflare Pages, Vercel) and serve `llms.txt` from there. Reference it from your main site's HTML as a `<link rel="ai">` tag (currently non-standard but supported by some engines as a hint).

This is more setup than the other platforms support.

### Option B — Use Webflow's hosting integration

Webflow's site export includes the `public/` directory equivalent.
Some users export the site, add `llms.txt`, and re-host on Vercel or
Netlify. Not recommended unless you're already considering migrating.

## Squarespace

Squarespace does not natively support custom files at the root of the
domain. Same workarounds as Webflow above.

If you're on Squarespace and serious about AI search visibility, the
llms.txt limitation is one of several reasons to consider migrating
to a platform that does (WordPress, Astro, Next.js).

## Verification

After install:

1. Visit `https://yoursite.com/llms.txt` in a browser. The file should display as plain text.
2. Check that the `Content-Type` header is `text/plain` (use the browser dev tools Network tab). Most static hosts handle this correctly; if you see `text/html` instead, your server is misconfigured.
3. Probe an AI engine after deployment:
   - In Perplexity, ask "Tell me about [your business name]."
   - In ChatGPT search, ask the same question.
   - Compare the engines' responses against what your `llms.txt` declares. Citations should pick up the canonical business name, the service area, and the priority pages.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| File not found at `/llms.txt` | Wrong directory | Move to web root, same level as `robots.txt` |
| File loads as HTML download | Server `Content-Type` misconfigured | Configure `text/plain` for `.txt` files |
| AI engines still cite wrong info | Indexing not yet refreshed | Wait 7-14 days; some engines re-crawl on a slower schedule |
| Placeholders still visible in production | Forgot to replace | Edit `llms.txt` and re-upload |

## Update cadence

Refresh your `llms.txt` quarterly or when:

- You add a new service.
- Your service area changes.
- Your business name or address changes.
- You add a new priority page (e.g., a new high-converting service page).

Stale llms.txt is worse than no llms.txt because AI engines will cite the stale information confidently.
