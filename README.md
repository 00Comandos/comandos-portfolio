# Comandos Portfolio

Personal portfolio for **Carlos "Comandos"** — Head / Director of Product Design with impact on LATAM unicorns (Stori, Karta, Truora, Yaydoo, Legalario, RebajaTusCuentas, and more). Live at [www.comandos.me](https://www.comandos.me).

Migrated from WordPress (Elementor) to a fast, SEO-optimized, static-first site with a single dynamic surface: the contact form.

---

## Stack

| | |
|---|---|
| Framework | [Astro 6](https://astro.build) (SSR, `output: "server"`) |
| Hosting | [Vercel](https://vercel.com) via [`@astrojs/vercel`](https://docs.astro.build/en/guides/integrations-guide/vercel/) |
| UI | [React 19](https://react.dev) islands (only where needed) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with `@theme` tokens |
| Type system | TypeScript strict |
| Validation | [Zod v4](https://zod.dev) |
| Email | [Resend](https://resend.com) |
| Anti-spam | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) |
| Font | Poppins (Google Fonts) |
| SEO | Per-page meta + OG + Twitter Cards + JSON-LD (`Article`, `BreadcrumbList`, `ItemList`, `VideoObject`), `@astrojs/sitemap` + custom image/video sitemap, `robots.txt` |
| Video | H.264 reels + per-case-study clips in `public/videos/` (see **Video system**) |

Most pages are **prerendered as static HTML** at build time. The contact form, its API handler, and the catch-all 410 routes (`/goods/`, `/b/`) run dynamically through the Vercel serverless function.

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
| `RESEND_API_KEY` | Resend API key (Sending access). When present, submissions are emailed. |
| `CONTACT_FROM_EMAIL` | `From:` address — must match a verified Resend domain. Currently `c@comandos.me`. |
| `CONTACT_TO_EMAIL` | Where submissions are sent. Currently `c@comandos.me`. |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key (public — rendered in the widget). |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret — server-side verification. Fails closed in production. |
| `PUBLIC_GA_ID` | Optional Google Analytics 4 measurement ID. |
| `PUBLIC_GSC_VERIFICATION` | Optional Google Search Console HTML-tag verification token. |
| `PUBLIC_BING_VERIFICATION` | Optional Bing Webmaster Tools verification token. |

### DNS records needed for Resend

DNS for `comandos.me` is managed in **Cloudflare**. To send from `@comandos.me`, Resend asks for these records (all `DNS only`, no proxy):

- **SPF** (TXT on `send`) — authorizes Resend / Amazon SES to send.
- **DKIM** (TXT on `resend._domainkey`) — signature validation.
- **MX** (on `send`) — feedback / bounce handling.
- **DMARC** (TXT on `_dmarc`) — reporting policy (currently `p=none`).

Resend's dashboard generates the exact record values after you add and verify the domain.

---

## Project structure

```
src/
├── components/
│   ├── layout/      Header, Footer, SEO, BaseLayout
│   ├── home/        Hero, BeforeAfter, ClientsStrip, Testimonials, NorthFaceGrowthCTA
│   ├── case-study/  Adventure, Challenge, Result, Worth, CaseStudyHeader, CaseStudyNav, RelatedCases
│   ├── projects/    ProjectCard
│   ├── contact/     ContactForm (per-field validation incl. E.164 WhatsApp, CTA gating)
│   └── ui/          Logo, ArrowIcon, Placeholder
├── data/
│   ├── projects.ts, testimonials.ts, clients.ts, home-before-after.ts
│   └── case-studies/    Per-project structured content (16 case studies)
├── layouts/         BaseLayout (wraps all pages)
├── lib/             site config, contact (Zod + Resend + Turnstile), image-map
├── pages/
│   ├── index.astro                /           — prerendered
│   ├── projects/index.astro       /projects/  — prerendered
│   ├── projects/[slug].astro                  — 16 case studies, prerendered
│   ├── contact.astro              /contact/   — SSR (reads ?status= for banners)
│   ├── north-face-growth.astro                — prerendered long-form essay
│   ├── api/contact.ts             POST        — SSR Resend handler
│   ├── goods/[...slug].ts         GET → 410   — deindex spam from old WP
│   ├── b/[...slug].ts             GET → 410   — deindex spam from old WP
│   └── sitemap-images.xml.ts                  — custom image + video sitemap
├── styles/global.css        Tailwind v4 + design tokens
└── env.d.ts
public/
├── favicon.svg, favicon-*.png, apple-touch-icon.png, icon-*.png
├── og-default.png / og-default.svg
├── robots.txt
├── site.webmanifest
├── sitemap-purge.xml        Spam URLs still indexed — forces recrawl of the 410s (delete once clear)
├── videos/                  Hero reels (desktop/mobile) + per-case-study clips with poster JPGs
└── images/                  Logos, avatars, brand artwork
vercel.json                   trailingSlash + apex → www 308 redirect (excludes /goods, /b)
```

---

## Content

Content lives in typed TS modules in `src/data/`:

- `projects.ts` — 16 case studies (slug, brand, title, description, impact, timeline, image).
- `testimonials.ts` — 4 client quotes with avatars.
- `clients.ts` — 6 brand logos displayed in the home strip.

Edit these files to update copy — changes are reflected immediately in both the home page sections and the prerendered project detail pages.

---

## Video system

The home hero is a full-bleed, device-height reel that slides under the transparent header (logo/burger invert to white until scroll). Two masters live in `public/videos/`:

- `hero-desktop.mp4` (1920×1080) and `hero-mobile.mp4` (720×1280) — one round per client (Karta → Stori → mipOS → Truora), audio-free, H.264 `+faststart`, `<source media>` picks per viewport, matching poster JPGs per orientation.
- A **brand chip** (logo + product label) syncs to the playing round via `timeupdate` and links to its case study — timestamps live in `ROUNDS` at the top of `Hero.astro`; update them whenever the reel composition changes.
- A **pause/play control** (translucent square, `aria-pressed`) sits on the container grid, aligned with the burger.

Case studies embed clips as typed `{ kind: "video" }` blocks (`ContentVideo` in `src/data/case-studies/types.ts`): landscape canonical `src` + optional portrait `mobileSrc` cropped via `mobileAspect`, lazy-loaded through IntersectionObserver (`preload="none"`, zero bytes until near the viewport). Each clip auto-emits `VideoObject` JSON-LD and a `<video:video>` sitemap entry via `extractCaseStudyVideos`.

Encoding conventions (ffmpeg): H.264 CRF 21–24, `preset slow`, 24 fps, `-an`, `+faststart`; upscaled 720p sources get lanczos + light unsharp. Keep original exports (ideally 1920×1080+) — masters should be rebuilt from first-generation clips, never re-encoded over themselves.

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

## Deploy (Vercel)

The site is deployed on Vercel via `@astrojs/vercel`. Pushes to `main` auto-deploy to production; every other branch / PR gets a Preview deployment.

1. **GitHub integration**: Vercel project is linked to `00Comandos/comandos-portfolio`. Build is auto-detected (Astro preset).
2. **Domain**: `www.comandos.me` is the primary. The apex `comandos.me` must redirect to www with a **permanent (308)** status — *not* Vercel's default **307 Temporary**, which tells Google to keep the (spam) apex URLs indexed and stalls de-indexing. Under **Settings → Domains → Edit** the apex, pick one:
   - **(a)** keep *Redirect to Another Domain* but switch the status dropdown to **308 Permanent Redirect**; or
   - **(b)** choose **Connect to an environment → Production** so `vercel.json` governs (`permanent: true` → 308). Option (b) also lets `/goods/*` and `/b/*` return **410 directly on the apex** (see below) instead of redirecting to www first.

   Don't use *Remove* — that detaches the apex domain and breaks it.
3. **Trailing slash**: `vercel.json` declares `trailingSlash: true`, so Vercel edge 308-redirects `/path` → `/path/` for every non-API, non-asset URL. Keeps canonical clean.
4. **Env vars**: configure under **Project → Settings → Environment Variables**. Mark `RESEND_API_KEY` and `TURNSTILE_SECRET_KEY` as **Sensitive**.

### Local preview of the production build

```bash
npm run build
npm run preview
```

### Why `/goods/*` and `/b/*` return 410

The previous WordPress site at this domain was compromised before the migration and accumulated ~24K spam affiliate URLs in Google's index. Two Astro catch-all routes (`src/pages/goods/[...slug].ts`, `src/pages/b/[...slug].ts`) respond `HTTP 410 Gone` with `X-Robots-Tag: noindex` so Google deindexes them faster than the default 404.

The indexed spam lives on the **apex** (`comandos.me/goods/...`, `comandos.me/b/...`), so `vercel.json` excludes those two prefixes from the apex→www redirect — they return 410 on the exact URL Google has indexed, instead of redirecting first. Returning 410 *directly* on the apex requires option (b) in Deploy → Domain (apex connected to the deployment); a 308 dashboard redirect also de-indexes the spam, just via apex → 308 → www → 410.

---

## SEO

- Canonical origin is `https://www.comandos.me/` with trailing slashes enforced via `vercel.json`. Apex 308-redirects to www.
- Per-page `<title>`, `<meta description>`, canonical, OG + Twitter Card tags via `src/components/layout/SEO.astro`. Per-page OG images derived from real artwork: case studies use their hero, the home and `/projects/` use the top featured case-study image.
- Structured data (JSON-LD): `Person` + `Organization` (global), `WebSite`, `ItemList` (home), `CollectionPage` + `BreadcrumbList` (`/projects/`), `Article` + `BreadcrumbList` + per-image `ImageObject` + per-clip `VideoObject` (each case study), `ContactPage` + `BreadcrumbList` (`/contact/`).
- Sitemaps: `/sitemap-index.xml` (via `@astrojs/sitemap`) plus a custom `/sitemap-images.xml` that lists every case-study image (title + caption) **and video** (`<video:video>` with thumbnail, description, duration) for Google Image/Video Search. `/sitemap-purge.xml` lists residual indexed spam URLs to force Google to recrawl their 410s — delete it once coverage shows them gone.
- `robots.txt` allows well-behaved AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended), blocks noisy scrapers (Semrush, Ahrefs, DotBot, MJ12), and points to both sitemaps.
- Search Console / Bing verification can be added via the optional `PUBLIC_GSC_VERIFICATION` / `PUBLIC_BING_VERIFICATION` env vars (`BaseLayout.astro` injects the meta tags conditionally). The production property is already DNS-verified.

---

## Accessibility

- Skip-to-content link.
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav aria-label>`).
- Burger menu (full-screen takeover on mobile, right drawer on desktop) wired with `aria-expanded` / `aria-controls`; ESC closes; body scroll locks while open.
- Hero reel: visible pause/play control (`aria-pressed`), and `prefers-reduced-motion` swaps every autoplaying video for its poster.
- Focus-visible outlines on all interactive elements.
- Testimonials carousel respects `prefers-reduced-motion` (falls back to snap-scroll).
- All images carry descriptive `alt`; decorative icons use `alt=""`.

---

## License

All rights reserved © Comandos.
