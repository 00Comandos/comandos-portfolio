# Comandos Portfolio

Personal portfolio for **Carlos "Comandos"** — Head / Director of Product Design with impact on LATAM unicorns (Stori, Karta, Truora, Yaydoo, Legalario, RebajaTusCuentas, and more). Live at [comandos.me](https://comandos.me).

Migrated from WordPress (Elementor) to a fast, SEO-optimized, static-first site with a single dynamic surface: the contact form.

---

## Stack

| | |
|---|---|
| Framework | [Astro 6](https://astro.build) (SSR, `output: "server"`) |
| Adapter | [`@astrojs/node`](https://docs.astro.build/en/guides/integrations-guide/node/) — standalone mode (DigitalOcean-ready) |
| UI | [React 19](https://react.dev) islands (only where needed) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with `@theme` tokens |
| Type system | TypeScript strict |
| Validation | [Zod v4](https://zod.dev) |
| Email | [Resend](https://resend.com) |
| Anti-spam | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) |
| Font | Poppins (Google Fonts) |
| SEO | Per-page meta + OG + Twitter Cards + JSON-LD, `@astrojs/sitemap`, `robots.txt` |

Most pages are **prerendered as static HTML** at build time. Only `/contact` and `/api/contact` run dynamically.

---

## Quick start

Requires **Node ≥ 22.12**.

```bash
npm install
cp .env.example .env   # fill in keys when ready
npm run dev            # http://localhost:3002
```

### Scripts

```bash
npm run dev       # start dev server on :3002
npm run build     # produce ./dist (server + client bundles)
npm run preview   # serve the production build locally
npm run astro     # passthrough to the Astro CLI
```

---

## Environment variables

Copy `.env.example` → `.env`. All keys are optional at this stage — the contact form logs submissions to stdout when they are missing, so nothing is silently lost in development.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key. When present, submissions are emailed. |
| `CONTACT_FROM_EMAIL` | `From:` address — must match a verified Resend domain (e.g. `hello@comandos.me`). |
| `CONTACT_TO_EMAIL` | Where submissions are sent (e.g. `c@comandos.me`). |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key (public — rendered in the widget). |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret — server-side verification. |
| `PUBLIC_GA_ID` | Optional Google Analytics 4 measurement ID. |

### DNS records needed for Resend

To send from `@comandos.me`, add these records at the DigitalOcean DNS panel:

- **SPF** (TXT) — authorizes Resend to send.
- **DKIM** (TXT) — signature validation.
- **DMARC** (TXT) — reporting policy.

Resend's dashboard generates the exact record values after you add and verify the domain.

---

## Project structure

```
src/
├── components/
│   ├── layout/      Header, Footer, SEO, BaseLayout
│   ├── home/        Hero, JourneyChart, ClientsStrip, Testimonials, NFG CTA
│   ├── projects/    ProjectCard
│   ├── contact/     ContactForm
│   └── ui/          Logo, ArrowIcon, Placeholder
├── data/            Typed content: projects, testimonials, clients
├── layouts/         BaseLayout (wraps all pages)
├── lib/             site config, contact (validation + Resend + Turnstile)
├── pages/
│   ├── index.astro          /            — prerendered
│   ├── projects/index.astro /projects    — prerendered
│   ├── projects/[slug].astro            — 16 case studies, prerendered
│   ├── contact.astro        /contact     — SSR (reads query params for status)
│   ├── north-face-growth.astro          — prerendered
│   └── api/contact.ts       POST handler — SSR
├── styles/global.css        Tailwind v4 + design tokens
└── env.d.ts
public/
├── favicon.svg
├── og-default.svg
├── robots.txt
└── images/                  All site imagery (logos, avatars, case studies)
```

---

## Content

Content lives in typed TS modules in `src/data/`:

- `projects.ts` — 16 case studies (slug, brand, title, description, impact, timeline, image).
- `testimonials.ts` — 4 client quotes with avatars.
- `clients.ts` — 6 brand logos displayed in the home strip.

Edit these files to update copy — changes are reflected immediately in both the home page sections and the prerendered project detail pages.

---

## Design system

Tokens are defined in `src/styles/global.css` via `@theme`:

- **Colors:** ink / paper / muted / border + magenta accent, mint, sun, sky, crimson.
- **Typography:** Poppins (300 → 800 + italic).
- **Radii:** `xs` 0.25rem → `full` 9999px.
- **Shadows:** `--shadow-card` for testimonial cards.

Custom utility classes:

- `.container-page` — responsive page container (max 1200px).
- `.btn-primary` — black pill with hover lift + arrow slide.
- `.btn-outline` — outlined pill, inverts to black on hover.
- `.btn-link` — subtle underline-on-hover link.

---

## Deploy (DigitalOcean)

The Node standalone adapter outputs a self-contained server at `dist/server/entry.mjs`.

### Option A — App Platform

1. Connect the GitHub repo.
2. Build command: `npm run build`.
3. Run command: `node dist/server/entry.mjs`.
4. HTTP port: `3002` (the server uses `$PORT` if set, otherwise the configured port).
5. Add env vars under **Settings → App-Level Environment Variables**.

### Option B — Droplet (PM2 / systemd)

```bash
npm ci
npm run build

# Start under PM2
pm2 start dist/server/entry.mjs --name comandos-portfolio \
  --env-from-file .env
pm2 save
pm2 startup
```

Point an Nginx reverse proxy at `localhost:3002` and terminate TLS with Let's Encrypt / Certbot.

---

## SEO

- Per-page `<title>`, `<meta description>`, canonical, OG + Twitter Card tags via `src/components/layout/SEO.astro`.
- Structured data (JSON-LD): `Person` (global), `WebSite`, `CollectionPage`, `CreativeWork` (per case study), `ContactPage`, `Article`.
- Sitemap generated at `/sitemap-index.xml` via `@astrojs/sitemap`.
- `robots.txt` points crawlers at the sitemap.
- OG image at `/og-default.svg` (1200×630).

---

## Accessibility

- Skip-to-content link.
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav aria-label>`).
- Burger menu wired with `aria-expanded` / `aria-controls`; ESC closes.
- Focus-visible outlines on all interactive elements.
- Testimonials carousel respects `prefers-reduced-motion` (falls back to snap-scroll).
- All images carry descriptive `alt`; decorative icons use `alt=""`.

---

## License

All rights reserved © Comandos.
