# comandos.me — SEO strategy

_Last audit: 2026-11-04 (branch `redesign/home`). Owner: Carlos "Comandos"._

## 1. Positioning → search intent

Comandos is a solo senior product-design consultancy sold as a studio, for founders and LATAM FinTech/SaaS teams. People who need this search in two modes:

- **Hiring intent (money pages):** "product design consultant", "fractional head of design", "product design agency for startups", "diseñador de producto freelance México", "consultor de diseño de producto". These go to **home, /services/, /contact/** (EN + ES).
- **Proof intent (case studies):** brand + product ("Stori Inversión+ case study", "Karta metal card design"), topic + vertical ("fintech UX case study", "design system case study", "e-signature UX", "fintech UX LATAM"). These go to **/projects/** and the 16 case studies. Most backlinks and long-tail traffic come in here, and these pages pass authority to the money pages.

Conversion is the contact form plus a discovery call. Every indexable page needs a visible path to `/contact/` (case studies: the `Challenge` CTA, `CaseCTA` and the footer).

## 2. Target keywords per page

| Page | EN primary / secondary | ES primary / secondary |
|---|---|---|
| `/` · `/es/` | product design studio for founders · product design consultant · head of product design LATAM | estudio de diseño de producto · diseñador de producto freelance México · consultor de product design |
| `/services/` · `/es/services/` | product design services for startups · fractional head of design · design system consultant · product-led growth design | servicios de diseño de producto · head of design fraccional · consultoría de design system |
| `/method/` · `/es/method/` | product design process · product discovery method · North Face Growth (brand) | proceso de diseño de producto · método de product design |
| `/contact/` · `/es/contact/` | hire a product designer · product design discovery call | contratar diseñador de producto · agenda una llamada |
| `/projects/` | product design case studies · fintech UX case studies · SaaS product design portfolio | (ES twin missing, see §4) |
| Case studies | `<brand> case study` + the vertical/topic: fintech app UX, credit card design, e-signature UX, background check report UX, WhatsApp onboarding, design system, POS / kiosk UX, IoT product design | (ES twins missing, see §4) |

Rules: one primary intent per URL, no two pages competing for the same head term. Home targets the studio/consultant term, /services/ the service and "fractional" terms. In ES, keep the English industry terms people actually type ("product design", "design system", "UX") next to the Spanish ones.

## 3. Title / description matrix (current)

Titles are built as `<title> — Comandos`. Aim for 50–60 chars total and 140–160 chars of description. Case-study SERP copy can override the on-page card copy with `seoTitle` / `seoDescription` in `src/data/projects.ts`, so card headlines don't have to be written for Google.

| URL | Title (chars) | Desc chars | Source |
|---|---|---|---|
| `/` | Product Design Studio for Founders Scaling to Growth — Comandos (63) | 158 | `src/i18n/ui.ts` `meta.home*` |
| `/es/` | Estudio de product design para founders que escalan — Comandos (62) | 156 | `ui.ts` es |
| `/services/` | Product Design Services for Startup Founders — Comandos (55) | 158 | `ui.ts` `servicesPage.meta*` |
| `/es/services/` | Servicios de product design para founders — Comandos (52) | 154 | `ui.ts` es |
| `/method/` | North Face Growth: Our Product Design Method — Comandos (55) | 156 | `ui.ts` `methodPage.meta*` |
| `/es/method/` | North Face Growth: método de product design — Comandos (54) | 155 | `ui.ts` es |
| `/contact/` | Contact: Book a Product Design Discovery Call — Comandos (56) | 157 | `src/i18n/contact.ts` |
| `/es/contact/` | Contacto: agenda una discovery call — Comandos (46) | 148 | `contact.ts` es |
| `/projects/` | Product Design Case Studies: FinTech, SaaS, IoT — Comandos (58) | 146 | `src/pages/projects/index.astro` |
| 16 case studies | 49–62 chars, all unique | 131–157 | `projects.ts` `title` / `seoTitle`, `description` / `seoDescription` |

Possible next tweaks (owner's call): work "consultant" or "fractional" into the home title. It currently says "studio", and that is the brand decision. Give the ES titles a Spanish-native term ("diseño de producto") alongside "product design".

## 4. The biggest opportunity: Spanish case studies

Only `/es/`, `/es/services/`, `/es/method/` and `/es/contact/` exist. `/es/projects/` and all ES case studies 404. That means:

- Spanish searchers (MX, CO, AR, PE, CL), the core LATAM market, land on English proof pages.
- ES hub pages link to EN case studies. That works, but there's no ES long-tail at all ("caso de estudio diseño fintech", "rediseño app tarjeta de crédito", "design system caso de estudio").

**Plan (one case at a time, hreflang stays truthful):**

1. Translate the top 4 first (Stori Inversión+, Karta App, Legalario e-signature, Truora report), then the rest. Add a Spanish `seoTitle` / `seoDescription` for each.
2. Add `src/pages/es/projects/index.astro` and `src/pages/es/projects/[slug].astro`. Its `getStaticPaths` returns only the translated slugs.
3. Add each translated path to `ES_ROUTES` in `src/i18n/index.ts` (e.g. `"/projects/"`, `"/projects/stori-inversion-plus/"`). `localizedPath()` then starts linking ES pages to it automatically.
4. In `src/pages/projects/[slug].astro` (and the ES twin), pass `alternates={{ en, es }}` **only when `hasTranslation(path)` is true**. EN-only cases then emit no hreflang, which is the current, correct state.
5. Optional: enable the `i18n` option of `@astrojs/sitemap` so the sitemap carries `xhtml:link` alternates too. It only pairs URLs that exist.
6. Article JSON-LD on ES pages: `inLanguage: "es"`, with the ES URL as `url` / `mainEntityOfPage`.

Never point hreflang or x-default at an `/es/...` URL that doesn't exist yet.

## 5. Technical checklist

| Item | Status |
|---|---|
| Unique `<title>` + meta description on all 25 indexable pages | Done (audited 2026-11-04, 0 duplicates) |
| Canonical: absolute, `https://www.`, trailing slash | Done |
| `html lang` en / es, `og:locale` en_US / es_MX (+ alternate only on bilingual pages) | Done |
| hreflang en / es / x-default only on the 4 bilingual pairs, all targets 200 | Done |
| OG + Twitter `summary_large_image`. Case studies use the hero image, with the hero alt as `og:image:alt` | Done |
| JSON-LD: WebSite + Person + Organization/ProfessionalService linked by `@id` (home); ProfessionalService + OfferCatalog + FAQPage (services, FAQ is visible); HowTo (method); ContactPage; CollectionPage; Article + VideoObject + BreadcrumbList (case studies) | Done. URLs match canonicals (trailing slash) |
| Article `datePublished` | **Owner:** fill `published` (ISO date) per case in `src/data/projects.ts`. The fake build-time date was removed |
| Sitemap: 25 URLs (16 cases, 5 EN hubs, 4 ES), no redirects / 410s / noindex; `sitemap-images.xml` (images + 10 videos) listed in the index and in robots.txt | Done. Verify after the next build |
| Sitemap `lastmod` | Removed (it was the build time on every URL). Re-add only with real per-page dates |
| robots.txt: allows all and assets, blocks `/api/` and SEO-tool scrapers, lists both sitemaps. **Never** disallow `/goods/` or `/b/` | Done |
| Internal links: all 200, all with a trailing slash (no 308 hops) | Done (card, before/after and challenge-CTA links fixed) |
| One h1 per page, logical h2/h3 (`/projects/` cards now h2) | Done |
| Image alts: content images descriptive; decorative (avatars, 18px icons) `alt=""` | Done. ConciergeChat photo alt is empty, see §7 |
| LCP: case-study hero `loading=eager` + `fetchpriority=high`; home hero poster preloaded; everything else lazy | Done |
| `hero-desktop.mp4` is 15 MB (autoplay on home) | **Owner:** consider re-encoding to ~5–8 MB |
| Stadio "Worth" caption block isn't a valid `WorthBlock` (type error, doesn't render) | Open: add `caption` to `WorthBlock` + `Worth.astro`, or move it |
| Case studies: 3 related cases + CTA; no in-body link to the matching `/services/#service-…` | Opportunity: add a "Service used" link per case |
| `/projects/` h1 "Building exponential growth" has no keyword | Opportunity: a keyword-bearing eyebrow/subtitle ("Product design case studies") |

## 6. Apex spam cleanup (manual, owner)

Background: about 23.8K spam URLs from the hacked WordPress site, all on the **apex** `comandos.me` under `/goods/` and `/b/`.

- Code (done): `src/pages/goods/[...slug].ts` and `b/[...slug].ts` return **410** + `X-Robots-Tag: noindex`. The `vercel.json` apex→www 308 excludes `/goods/` and `/b/`, so Google sees the 410 on the apex itself. `public/sitemap-purge.xml` (commit c051563) lists the 345 apex `/goods/` + `/b/` URLs still indexed per the Jul 22 GSC export, to force a recrawl of their 410s. It is intentionally **not** in robots.txt or the sitemap index; delete it once coverage shows them gone. It is served from www but lists apex URLs, so whether GSC accepts it depends on the property it's submitted under (a Domain property should work). Unverified.
- Vercel (done 2026-05-25): apex domain set to "Connect to an environment → Production" (no dashboard 307), so `vercel.json` governs.
- **Still owner-side:** in Google Search Console, in a property that covers the apex (Domain property or `https://comandos.me/`), go to Removals → "Remove all URLs with this prefix" for `https://comandos.me/goods/` and `https://comandos.me/b/`. Submit `sitemap-purge.xml` in that property if it isn't already. Re-check monthly: `curl -sI https://comandos.me/` → 308 to www; `curl -s -o /dev/null -w "%{http_code}" https://comandos.me/goods/x/1` → 410.

## 7. Open items for the owner

1. Add `published` dates per case study (real launch or write-up dates).
2. ES case-study rollout (§4). This is the largest content and ranking lever.
3. ConciergeChat photo on `/projects/karta-app/` has `alt=""`. If the photo carries meaning, give it a short descriptive alt.
4. Re-encode `hero-desktop.mp4`.
5. After deploy, check in GSC: sitemap index read (should show 2 child sitemaps), Rich Results test on home, /services/ and one case study, and hreflang errors = 0.
6. Content: one evergreen article per pillar ("fractional head of design: when founders need one", "design system ROI", "fintech onboarding UX in LATAM"), EN + ES, each linking to 2–3 case studies and /services/.
