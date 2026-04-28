# Blog Workflow

## Writing a post

1. Create `src/content/blog/your-slug.mdx`
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
description: "One sentence summary for SEO and card previews."
pubDate: 2026-04-28
category: "Car Care"  # Car Care | Boat & Marine | Fleet Tips | Local
readTime: 6
featured: false
draft: true
---
```

3. Write content in MDX. Use the `FieldNote` shortcode for callouts:

```mdx
import FieldNote from '@/components/ui/FieldNote.astro';

<FieldNote label="Field Note">
  This is a highlighted observation or tip.
</FieldNote>
```

4. Set `draft: true` while writing. The post will not appear in production until you flip it.

---

## Previewing a draft

Generate a preview URL with your `PREVIEW_TOKEN`:

```
https://bayshine.net/api/preview?token=YOUR_TOKEN&slug=your-slug
```

This sets a 1-hour preview cookie. You'll see draft posts marked with an orange "Draft" badge on the blog index, and a "Draft — not publicly visible" banner on the post.

To exit preview mode:
```
https://bayshine.net/api/preview?clear=1
```

The `PREVIEW_TOKEN` env var must be set in `.env` and in Vercel project settings.

---

## Publishing

Change `draft: false` in the frontmatter (or remove the field entirely — default is `false`). Commit and push. Vercel deploys automatically on main branch push.

---

## Categories

| Category | Use for |
|---|---|
| `Car Care` | Technique, products, paint care for automotive |
| `Boat & Marine` | Gel coat, salt, marine-specific technique |
| `Fleet Tips` | B2B content — lot maintenance, fleet managers |
| `Local` | Pasco County / area-specific content, seasonal notes |

---

## MDX Components available

| Component | Import path | Use |
|---|---|---|
| `FieldNote` | `@/components/ui/FieldNote.astro` | Gold-accent callout box |

---

## Env vars required

```
PREVIEW_TOKEN=your-secret-token
```

Set in `.env` locally and in Vercel → Settings → Environment Variables.
