import type { CaseStudyContent, ContentImage } from "./types";
import { kartaImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(kartaImages, filename);

// Partner institutions are anonymised in every capture (Partner Bank A/B/C,
// Brokerage partner). Screens come from the internal tool itself.

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-tool-rewards.webp"),
  alt: "Karta Marketing Hub on Rewards guide page 1: sidebar by product and audience, Digital or Print (A4), EN/ES/PT, Download PDF",
};

// ———— Challenge ————
const loginImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-login.webp"),
  alt: "Karta Marketing Hub sign-in screen: access with a Karta company email and a one-time code",
};

// ———— Adventure ————
const rewardsEn: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-rewards-en.webp"),
  alt: "Karta Rewards guide in English: cover reading “Every dollar you spend takes you somewhere” and how points work",
  caption: "English",
};
const rewardsEs: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-rewards-es.webp"),
  alt: "Karta Rewards guide in Spanish: “Transfiera a aerolíneas aliadas” section with points-to-miles rates per airline",
  caption: "Español",
};
const rewardsPt: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-rewards-pt.webp"),
  alt: "Karta Rewards guide in Brazilian Portuguese: WhatsApp concierge section to plan any trip in one conversation",
  caption: "Português",
};
const printImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-print-a4.webp"),
  alt: "Karta one pager in Print (A4) mode in the marketing hub: paginated for print, co-branded partner versions in the sidebar",
};
const globalAccountImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-global-account.webp"),
  alt: "Karta Global Account guide for financial advisors in the hub, with the product menu: Consumer, Corporate, Global Account",
};

// ———— Worth ————
const emailsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-emails.webp"),
  alt: "Karta Marketing Hub Emails mode: transactional emails synced from code, preview on desktop, tablet or mobile, download HTML",
  caption: "Emails: every transactional email, synced from its source and ready to preview or download.",
};
const brandImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-brand.webp"),
  alt: "Karta Marketing Hub Brand mode: Karta logo and isotype in dark, light and square versions, with SVG, PNG and JPG downloads",
  caption: "Brand: logos and isotypes in every format, one click for the whole kit.",
};
const landingsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-landings.webp"),
  alt: "Karta Marketing Hub Landings mode: public Rewards and Brochure pages with a copy-link button for each language",
  caption: "Landings: public pages for partners, with the link for each language one click away.",
};
const eventsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-events.webp"),
  alt: "Karta Marketing Hub Events mode: 6 × 3 m event backdrop at 1:10 scale with bleed, ready for print",
  caption: "Events: print-ready pieces for events, from backdrops to merch.",
};

const mobileLogin: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-mobile-login.webp"),
  alt: "Karta Marketing Hub sign-in on a phone: company email and a one-time code",
  caption: "Company email + code",
};
const mobileDownload: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-mobile-download.webp"),
  alt: "Karta sales piece on a phone: Digital or A4, Visa or Mastercard, and the PDF button in the top bar",
  caption: "Pick the format, download",
};
const mobileMenu: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-mobile-menu.webp"),
  alt: "Karta Marketing Hub full-screen menu on a phone: sales pieces by product and audience, languages at the foot",
  caption: "Every piece, one tap away",
};
const mobileShare: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-mobile-share.webp"),
  alt: "Karta Marketing Hub Landings on a phone: a copy-link button per language, ready to share on WhatsApp",
  caption: "Copy the link, send it",
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
    video: {
      kind: "video",
      src: "/videos/karta-marketing-hub-hero.mp4",
      poster: "/videos/karta-marketing-hub-hero-poster.jpg",
      alt: "Karta Marketing Hub demo: scrolling the Rewards guide, switching to Print (A4) and downloading the PDF",
      name: "Karta Marketing Hub: from Digital to Print (A4) to PDF",
      description: "A seller scrolls the Rewards guide in the Karta Marketing Hub, switches it to the paginated Print (A4) format and downloads the PDF.",
      uploadDate: "2026-11-08",
      durationSeconds: 13,
    },
    backdrop: { color: "rgb(14 13 12)", card: true },
    intro:
      "Karta's sales and partnership team sells a premium U.S. credit card across four markets in three languages: the U.S. and Brazil first, then Mexico and Argentina.\n\nEvery one pager, brochure, guide and email used to be rebuilt by hand in Figma. In 30 days, step by step, we turned all of it into one internal tool: we standardised the brochure first, then the rest of the materials, until everything lived in one source of truth that the whole team trusts and compliance can audit.",
  },
  challenge: {
    heading: "Two weeks per piece, and nobody sure which version was right.",
    body:
      "Every piece was rebuilt by hand in Figma, once per language, and reaching a final version took up to two weeks. The 20–30 MB PDFs had to be compressed before sharing, and they lived in a Drive where only the file name hinted at which version was current or who had it.",
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
            body: "Every language and every partner meant another hand-built Figma file.",
          },
          {
            label: "Heavy files:",
            body: "20–30 MB exports that had to be compressed before anyone could send them.",
          },
          {
            label: "No control:",
            body: "The file name was the only clue to which version was current, who had it and where it went.",
          },
        ],
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Every piece became a page, and the PDF its mirror.",
        body:
          "It started with the brochure: instead of drawing each version, we built it once as a web page and generated the PDF from that page. It worked, so one pager, guides and the rest followed the same path. A change to the copy now updates every language and format at once, and the files come out light enough to share anywhere.",
      },
      {
        kind: "image-grid",
        columns: 3,
        images: [rewardsEn, rewardsEs, rewardsPt],
      },
      {
        kind: "caption",
        text: "One piece, three languages: the Rewards guide in English, Spanish and Brazilian Portuguese, from the same source.",
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
          "Beyond the PDFs, the hub brings together the transactional emails, the brand kit, the public landings for partners and the print pieces for events. Each has its own mode, behind the same sign-in.",
      },
      { kind: "image", image: emailsImage },
      { kind: "image", image: brandImage },
      { kind: "image", image: landingsImage },
      { kind: "image", image: eventsImage },
      { kind: "divider" },
      {
        kind: "intro",
        heading: "From the phone, mid-conversation",
        body:
          "When a client or partner asks for something specific on WhatsApp, the seller opens the hub on their phone, picks the language and sends the current PDF or its link. No laptop, no Drive, no asking design for the latest version.",
        sub: true,
      },
      {
        kind: "image-grid",
        columns: 4,
        images: [mobileLogin, mobileDownload, mobileMenu, mobileShare],
      },
      { kind: "divider" },
      {
        kind: "checklist",
        items: [
          {
            label: "Company email + one-time code:",
            icon: "ph:lock-key-light",
            body:
              "Only Karta addresses can create an account, and without the code sent to that inbox nobody gets in.",
          },
          {
            label: "Every download, on record:",
            icon: "ph:download-simple-light",
            body:
              "Who downloaded which piece, in which language and when. It is the access evidence compliance reviews, and the kind a SOC 2 audit looks for.",
          },
          {
            label: "Custom, within the standard:",
            icon: "ph:seal-check-light",
            body:
              "A request for a specific partner or deal becomes a co-branded variant of the approved piece, not a parallel file with its own promises.",
          },
          {
            label: "Nothing to chase:",
            icon: "ph:link-simple-light",
            body:
              "No attachments with stale versions; the team shares the current piece or its link.",
          },
        ],
      },
    ],
  },
  result: {
    heading: "One message, every market",
    stats: [
      {
        value: "1",
        label: "value proposition in 4 markets",
        caption: "8–10 sellers and partners in the U.S., Brazil, Mexico and Argentina explain Karta the same way, so leads hear one story in their language.",
        icon: { kind: "illustration", scene: "unify", alt: "One team, one message" },
      },
      {
        value: "Minutes",
        label: "to answer a client or partner, not two weeks",
        caption: "From up to two weeks to get a final piece to sending the current version from a phone, mid-conversation.",
        icon: { kind: "illustration", scene: "sync", alt: "Faster answers" },
      },
      {
        value: "SOC 2",
        label: "access and audit controls",
        caption: "Company sign-in with a one-time code and every download logged: access control and an audit trail, the kind of evidence a SOC 2 audit reviews.",
        icon: { kind: "illustration", scene: "certified", alt: "SOC 2 controls" },
      },
    ],
  },
};
