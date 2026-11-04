// Minimal i18n for the EN / ES rollout.
//
// URL strategy: English is the default locale and lives at the root
// (`/`, `/projects/…`) so no existing URL — or the SEO it has earned —
// changes. Spanish lives under `/es/…`. Pages are translated in phases
// (home first); `localizedPath()` only maps to `/es/…` for routes listed
// in `ES_ROUTES`, every other link falls back to the English page.

export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

/** English paths that already have a Spanish twin under `/es`. */
export const ES_ROUTES = new Set<string>(["/", "/services/"]);

export function getLang(url: URL): Lang {
  return url.pathname === "/es" || url.pathname.startsWith("/es/")
    ? "es"
    : "en";
}

/** Strip the `/es` prefix so we can look up the route's EN twin. */
export function basePath(pathname: string): string {
  if (pathname === "/es" || pathname === "/es/") return "/";
  return pathname.startsWith("/es/") ? pathname.slice(3) : pathname;
}

/**
 * Localize an internal href. Hash-only, external and untranslated routes
 * pass through untouched (they land on the EN page).
 */
export function localizedPath(href: string, lang: Lang): string {
  if (lang === "en" || !href.startsWith("/")) return href;
  const [path, hash = ""] = href.split("#");
  const route = path || "/";
  if (!ES_ROUTES.has(route)) return href;
  const localized = route === "/" ? "/es/" : `/es${route}`;
  return hash ? `${localized}#${hash}` : localized;
}

/** The same page in the other language — or that language's home. */
export function alternatePath(pathname: string, target: Lang): string {
  const base = basePath(pathname);
  const normalized = base.endsWith("/") ? base : `${base}/`;
  if (target === "en") return normalized;
  return ES_ROUTES.has(normalized) ? localizedPath(normalized, "es") : "/es/";
}

export function hasTranslation(pathname: string): boolean {
  const base = basePath(pathname);
  return ES_ROUTES.has(base.endsWith("/") ? base : `${base}/`);
}

export { ui, type UI } from "./ui";
