/**
 * Split an SEO project title ("Stori Inversión+ Case Study: +477% Activation")
 * into a display name and tagline for on-page headings. `<title>`, meta and
 * JSON-LD keep the full SEO string; this is presentation only.
 */
export function splitCaseTitle(title: string): { name: string; tagline?: string } {
  const i = title.indexOf(": ");
  const head = i === -1 ? title : title.slice(0, i);
  const tagline = i === -1 ? undefined : title.slice(i + 2).trim();
  const name = head.replace(/\s+(Design\s+)?Case Study$/i, "").trim();
  return { name, tagline };
}
