# GameDevDolin Website

Personal portfolio and consulting site for Adam Dolin — narrative designer, game writer, and creative consultant.

**Live site:** https://gamedevdolin.com
**Stack:** Astro 5.2 (SSG), vanilla CSS, deployed on Netlify
**No frontend frameworks** — pure Astro components with minimal vanilla JS (mobile menu toggle, Discord reveal button).

## Deployment

- Netlify auto-deploys from GitHub: pushing/merging to `main` builds and publishes the site. There is no separate deploy step.
- Never run `netlify deploy` manually — it publishes the local checkout as-is and can silently revert changes merged on GitHub.
- `git pull` before starting any work: changes also land on `main` via Claude web/GitHub sessions, so the local checkout may be behind.
- The contact form uses Netlify Forms (enabled on the Netlify project; submissions email adam@gamedevdolin.com and land on `/thanks`). Keep `data-netlify="true"` and the hidden `form-name` input intact when editing it.

## Architecture

- **Pages** are in `src/pages/` using Astro file-based routing
- **One layout:** `src/layouts/BaseLayout.astro` wraps every page (Nav + Footer + slot)
- **Components:** `src/components/` — Nav.astro, Footer.astro
- **Styles:** `src/styles/global.css` — custom CSS design system (no Tailwind), sunset color palette, Inter font
- **Static assets:** `public/` — images organized by category (`images/logos/`, `images/games/`, `images/currentwork/`), PDFs and files in `public/files/`

## Key Design Patterns

- **Color variables:** `--color-bg`, `--color-accent` (coral), `--color-blue`, `--color-coral`, `--color-sage`, `--color-text-muted`
- **Spacing:** `--space-xs` through `--space-4xl`
- **Layout classes:** `.container`, `.section`, `.grid`, `.grid-2`, `.grid-3`, `.grid-4`, `.card`, `.btn`, `.btn-primary`, `.btn-outline`, `.label`
- **Hover interactions:** Cards use `max-height: 0` / overflow hidden pattern to reveal content on hover
- **Responsive breakpoints:** 1024px, 768px, 480px
- **Data is hardcoded** in page frontmatter as JS arrays/objects — no CMS or database

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing — hero, current projects, featured work, services preview, studios grid |
| `/about` | Bio, quick facts |
| `/work` | Portfolio hub |
| `/work/interactive-fiction` | Twine games, AAA playthrough videos |
| `/work/screenwriting` | Scripts and writing tests |
| `/work/prose` | Short fiction and flash fiction |
| `/work/goblin-atelier` | Playable Twine game showcase |
| `/services` | Consulting packages |
| `/contact` | Contact form and links |
| `/lily` | Pug showcase |
| `/gdc2026` | GDC 2026 talk details and slides |
| `/thanks` | Contact form success page (form `action` target) |
| `/404` | Custom not-found page (served for unknown URLs) |

## Conventions

- Pages use `<style>` blocks scoped to each `.astro` file
- Global utility classes come from `global.css`
- External links use `target="_blank" rel="noopener"`
- Internal navigation links use simple `href="/path"` (no Astro prefetch)
- Studio data on the homepage is a JS array in frontmatter
- No build-time content collections — everything is hand-authored HTML in Astro templates
