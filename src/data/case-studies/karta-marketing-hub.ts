import type { CaseStudyContent, ContentImage } from "./types";
import { kartaImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(kartaImages, filename);

// Partner institutions are anonymised in every capture (Partner Bank A/B/C,
// Brokerage partner). Screens come from the internal tool itself.

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-tool.webp"),
  alt: "Karta Marketing Hub — the internal tool open on the financial-advisor one pager, with the document sidebar grouped by product and audience, Digital / Print (A4) formats, English / Español / Português and a Download PDF button",
};

// ———— Challenge ————
const loginImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-login.webp"),
  alt: "Karta Marketing Hub sign-in — access only with a one-time code sent to a Karta company email",
};

// ———— Adventure ————
const onePagerEn: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-onepager-en.webp"),
  alt: "Financial-advisor one pager in English — Issued in the U.S. Recognized globally.",
  caption: "English",
};
const onePagerEs: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-onepager-es.webp"),
  alt: "The same one pager in Spanish — Emitida en EE. UU. Reconocida globalmente.",
  caption: "Español",
};
const onePagerPt: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-onepager-pt.webp"),
  alt: "The same one pager in Brazilian Portuguese — Emitido nos EUA. Reconhecido globalmente.",
  caption: "Português",
};
const printImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-print-a4.webp"),
  alt: "The one pager switched to Print (A4): the same page, paginated and numbered for printing, with co-branded partner versions listed in the sidebar",
};
const globalAccountImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-global-account.webp"),
  alt: "Global Account guide for financial advisors inside the hub — the Products menu switches between Consumer, Corporate and Global Account materials",
};

// ———— Worth ————
const emailsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-emails.webp"),
  alt: "Emails mode — every Karta transactional email synced from its repository, previewable on desktop, tablet or mobile and downloadable as HTML",
  caption: "Emails — every transactional email, synced from its source and ready to preview or download.",
};
const brandImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-brand.webp"),
  alt: "Brand mode — Karta logo and isotype in dark, light and square versions with SVG, PNG and JPG downloads",
  caption: "Brand — logos and isotypes in every format, one click for the whole kit.",
};
const landingsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-landings.webp"),
  alt: "Landings mode — the public Rewards and Brochure pages with a copy-link for each language",
  caption: "Landings — public pages for partners, with the link for each language one click away.",
};
const eventsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-events.webp"),
  alt: "Events mode — a 6 × 3 m event backdrop prepared for print at 1:10 scale with bleed",
  caption: "Events — print-ready pieces for events, from backdrops to merch.",
};

export const kartaMarketingHub: CaseStudyContent = {
  slug: "karta-marketing-hub",
  kicker: "FinTech — Internal tools / Sales enablement",
  brandLogo: {
    kind: "public",
    src: "/images/logo-karta.png",
    alt: "Karta",
    height: 28,
  },
  hero: {
    image: heroImage,
    backdrop: { color: "rgb(14 13 12)", card: true },
    intro:
      "Karta's sales and partnership team sells a premium U.S. credit card across four markets — the U.S. and Brazil first, then Mexico and Argentina — in three languages.\n\nEvery one pager, brochure, guide and email used to be rebuilt by hand in Figma. We turned all of it into one internal tool: one source of truth that the whole team trusts, and that compliance can audit.",
  },
  challenge: {
    heading: "Two weeks to ship one piece, in three languages, with nobody sure which version was the right one.",
    body:
      "Each version of a marketing piece was designed manually in Figma, once per language. Design and the first round of feedback easily took three days; reaching a final version took up to two weeks. Then every PDF had to be exported and pushed through compressors so a 20–30 MB file could be shared on any channel. Everything lived in a Drive folder that grew harder to manage with every version and every new teammate — and beyond the file name, there was no record of who had which piece or how it was being shared.",
    ctaLabel: "I want to scale my sales team",
    results: [
      "One hub for 8–10 people across 4 markets.",
      "144 PDFs in English, Spanish and Portuguese, always current.",
      "Access by company email + one-time code, every download logged.",
    ],
    team: [
      { label: "1 Head of Product Design", badge: "by Comandos" },
      { label: "Sales & Partnerships team" },
      { label: "Compliance" },
    ],
    image: loginImage,
  },
  adventure: {
    heading: "From a Drive full of versions to one source of truth.",
    blocks: [
      {
        kind: "checklist",
        items: [
          {
            label: "Manual by design:",
            body: "every language and every partner meant another hand-built Figma file.",
          },
          {
            label: "Heavy files:",
            body: "20–30 MB exports that had to be compressed before anyone could send them.",
          },
          {
            label: "No control:",
            body: "the file name was the only clue to which version was current, who had it and where it went.",
          },
        ],
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Every piece became a page — and the PDF, its mirror.",
        body:
          "Instead of drawing each version, we built each piece once as a web page. The PDF is always generated from that page, so a change to the copy updates every language and format at once — and the files come out light enough to share anywhere.",
      },
      {
        kind: "image-grid",
        columns: 3,
        images: [onePagerEn, onePagerEs, onePagerPt],
      },
      {
        kind: "caption",
        text: "One page, three languages: English, Spanish and Brazilian Portuguese from the same source.",
      },
      { kind: "divider" },
      {
        kind: "heading",
        heading: "Digital to share, A4 to print.",
        body:
          "Each piece comes in two formats: a continuous page to share on screen and a paginated, numbered A4 for print. Co-branded versions for partner banks live under the same piece, so a partner never receives an off-brand copy.",
      },
      { kind: "image", image: printImage },
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "heading",
        heading: "Organised the way the team sells: by product, then by audience.",
        body:
          "A product menu switches between Consumer, Corporate and Global Account; inside each one, the pieces are grouped for financial advisors, for clients and for partners. Every piece shows when it was last updated, taken from its version history.",
      },
      { kind: "image", image: globalAccountImage },
    ],
  },
  worth: {
    blocks: [
      {
        kind: "intro",
        heading: "Everything the commercial team shares, in one place",
        body:
          "Beyond the PDFs, the hub brings together the transactional emails, the brand kit, the public landings for partners and the print pieces for events — each in its own mode, behind the same sign-in.",
      },
      { kind: "image", image: emailsImage },
      { kind: "image", image: brandImage },
      { kind: "image", image: landingsImage },
      { kind: "image", image: eventsImage },
      { kind: "divider" },
      {
        kind: "checklist",
        items: [
          {
            label: "Company email + one-time code:",
            body:
              "only Karta addresses can create an account, and without the code sent to that inbox nobody gets in.",
          },
          {
            label: "Every download, on record:",
            body:
              "who downloaded which piece, in which language and format — the audit trail compliance and SOC 2 ask for.",
          },
          {
            label: "Nothing to chase:",
            body:
              "no attachments with stale versions; the team shares the current piece or its link.",
          },
        ],
      },
    ],
  },
  result: {
    heading: "One source of truth for sales and partners",
    stats: [
      {
        value: "144",
        label: "PDFs always current",
        caption: "Every piece in three languages, digital and A4, regenerated from one source.",
        icon: { kind: "illustration", scene: "sync", alt: "Always in sync" },
      },
      {
        value: "4",
        label: "markets aligned",
        caption: "8–10 people in the U.S., Brazil, Mexico and Argentina working from the same materials.",
        icon: { kind: "illustration", scene: "unify", alt: "One team" },
      },
      {
        value: "100%",
        label: "downloads on record",
        caption: "Company sign-in with a one-time code; every download logged for compliance.",
        icon: { kind: "illustration", scene: "certified", alt: "Audit trail" },
      },
    ],
  },
};
