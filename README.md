# No Vibe Coding

Agentic development with evidence.

This is the source for [novibecoding.com](https://novibecoding.com), built with Astro 7,
local Markdown/MDX content, typed content collections, and plain CSS.

## Development

```sh
bun install
bun run dev
```

Before publishing:

```sh
bun run check
```

The check command runs Biome formatting and lint checks, Astro type diagnostics, Knip,
copy/paste detection, and the production build. The production site is written to `dist/`.

To format the project:

```sh
bun run format
```

## Writing

Add posts to `src/content/posts/` as Markdown or MDX:

```yaml
---
title: "Post title"
description: "A concise description for search results and feeds."
publishedAt: 2026-07-24
updatedAt: 2026-07-25
tags:
  - agentic-development
draft: false
---
```

The schema in `src/content.config.ts` validates post metadata. Drafts are excluded from
the homepage, generated routes, RSS feed, and sitemap.

Use Markdown by default. Use MDX only when a post needs an embedded component.

## Cloudflare Pages

Create a Pages project connected to this repository with:

- Build command: `bun run build`
- Build output directory: `dist`
- Production branch: `main`
- Environment variable: `BUN_VERSION=1.3.14`

After the first deployment, attach `novibecoding.com` as the custom domain. The canonical
site URL is configured in `astro.config.mjs`.

The build generates static article pages, `rss.xml`, `robots.txt`, and sitemap files.
