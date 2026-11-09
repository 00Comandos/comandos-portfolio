// Case studies with real Spanish content (src/data/case-studies/es/*).
// Their /es/projects/<slug>/ page is indexable, self-canonical and in the
// sitemap; every other /es/projects/ page stays a noindex mirror of the EN case.
// Plain .mjs so astro.config.mjs (sitemap filter) can import it too.

/** @type {readonly string[]} */
export const TRANSLATED_CASES = ["karta-marketing-hub"];
