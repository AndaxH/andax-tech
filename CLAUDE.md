# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (uses webpack)
pnpm build        # Generate RSS feed and build for production
pnpm lint         # Run ESLint on JS/JSX/TS/TSX files
pnpm typecheck    # Run TypeScript type checking
```

## Architecture

This is a personal website/blog built with Next.js and Nextra (blog theme). Content is primarily written in MDX/Markdown.

**Key Files:**
- `next.config.js` - Next.js config with Nextra integration, security headers, and redirects for standalone projects
- `theme.config.jsx` - Nextra blog theme configuration (footer, date formatting, dark mode)
- `scripts/gen-rss.js` - RSS feed generator that runs before build, reads frontmatter from pages

**Content Structure:**
- `pages/` - MDX content pages (blog posts, resources)
- `pages/resource-library/` - Tech resource articles
- `pages/projects/` - Project writeups
- `public/` - Static assets and standalone HTML projects (checklist, tea, verses, zoom-captions, make-a-game)

**Path Aliases:** `@/*` maps to project root (e.g., `@/components/*`, `@/util/*`)

## Content Format

Pages use frontmatter with: `title`, `date`, `description`, `tag` (comma-separated), `author`
