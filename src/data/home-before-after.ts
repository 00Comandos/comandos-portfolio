import type { ImageMetadata } from "astro";
import {
  legalarioImages,
  truoraReportImages,
  spotfinderImages,
  miposKioskImages,
  miposDarkKitchenImages,
  yaydooDesignSystemImages,
  requireImage,
} from "~/lib/image-map";

export type BeforeAfterCase = {
  slug: string;
  brand: string;
  before: ImageMetadata;
  beforeAlt: string;
  after: ImageMetadata;
  afterAlt: string;
  impact: string;
  tagline: string;
};

const L = (f: string) => requireImage(legalarioImages, f);
const T = (f: string) => requireImage(truoraReportImages, f);
const S = (f: string) => requireImage(spotfinderImages, f);
const K = (f: string) => requireImage(miposKioskImages, f);
const DK = (f: string) => requireImage(miposDarkKitchenImages, f);
const YDS = (f: string) => requireImage(yaydooDesignSystemImages, f);

export const homeBeforeAfter: readonly BeforeAfterCase[] = [
  {
    slug: "truora-report",
    brand: "Truora",
    before: T("truora-backgroundCheck-current-problem.webp"),
    beforeAlt:
      "Truora legacy Background Check Report opened in a browser — raw technical layout Latin American HR analysts struggled to read, 8 minutes per report, 100% of users didn't understand the confidence scores",
    after: T("truora-background-check-report.webp"),
    afterAlt:
      "Truora Background Check Report redesigned by Comandos — single at-a-glance confidence score, clean categories, 50% faster to read, 85% satisfaction",
    impact: "-50% reading time · +85% satisfaction",
    tagline: "Rewrote the deliverable — not just the layout.",
  },
  {
    slug: "legalario-e-signature",
    brand: "Legalario",
    before: L("legalario-electronic-signature-legacy-2048x829.webp"),
    beforeAlt:
      "Legalario legacy electronic-signature flow — three outdated mobile screens Mexican SMB signers abandoned mid-flow, pre-redesign UX with cramped signature rectangles and low-confidence previews",
    after: L("legalario-electronic-signature-v1-2048x984.webp"),
    afterAlt:
      "Legalario redesigned e-signature flow — modern mobile + browser journey with biometric face scan, iBeta-certified identity verification and a full-screen legally valid confirmation",
    impact: "99% completion · +24% NPS",
    tagline: "From abandoned mid-flow to iBeta-certified biometric signing.",
  },
  {
    slug: "mipos-kiosk",
    brand: "mipOS Kiosk",
    before: K("mipOS-Kiosko-Old-comandos-studio.png"),
    beforeAlt:
      "Pre-MVP legacy kiosk for El café de Tere — Android purple top-bar with flat Menu 0–4 tabs and Bolón / Bolón Doble / Bolón Triple price rows, the starting point before the ROKU redesign",
    after: K("mipOS-Kiosko-NewDesign-comandos-project-674x1024.png"),
    afterAlt:
      "mipOS Kiosk redesigned Chili's self-order screen on a ROKU-native device — colourful floating burgers, fries and tacos around the Chili's logo, tuned for any touch device",
    impact: "+155% conversion",
    tagline: "From Android-era kiosk to ROKU-native self-order for fast food.",
  },
  {
    slug: "spotfinder",
    brand: "Spotfinder",
    before: S("comandos-spotfinder-spotZero.png"),
    beforeAlt:
      "Original Spotfinder IoT puck v1 held in a hand — bulky grey plastic disc with engraved wordmark, the incumbent hardware before the Comandos redesign broke it into a small wireless unit",
    after: S("spotfinder-comandos-studio-detail.png"),
    afterAlt:
      "Spotfinder IoT puck v2 installed in a Puerto Rico shopping-mall parking bay — low-profile metallic disc with ultrasonic sensor vents under two cars on a yellow-striped lane",
    impact: "+52% IoT activation",
    tagline: "A 17 gram IoT puck tourists actually let guide them with AR.",
  },
  {
    slug: "mipos-dark-kitchen",
    brand: "mipOS Dark Kitchen",
    before: DK("mipOS-DarkKitchen-2019-comandos-project.png"),
    beforeAlt:
      "Dark Kitchen field research 2019 — 10+ delivery-app tablets for Uber Eats, Didi Food, Rappi and iFood pinned to a wooden wall and wired chaotically, the operational pain mipOS set out to replace",
    after: DK("comandos-mipOS-DarkKitchen.png"),
    afterAlt:
      "mipOS Dark Kitchen unified dashboard — one laptop consolidating Uber Eats, Didi Food, Rappi and iFood orders with 99% integration, Rechazar / Aceptar actions and live Lista para entrega status",
    impact: "+400% productivity",
    tagline: "Replaced ten delivery-app tablets with a single screen.",
  },
  {
    slug: "yaydoo-design-system",
    brand: "Yaydoo",
    before: YDS("GrillDesignSystem-RedFlags-yaydoo-comandos-project.png"),
    beforeAlt:
      "Yaydoo brand audit — eight inconsistent logo variations of Yaydoo, PorCobrar, Fcard, Vendorplace and YAYDOO shipping across the Mexican B2B SMB portfolio before the design system",
    after: YDS("GrillDesignSystem-Yaydoo-comandos-project.png"),
    afterAlt:
      "Grill Design System for Yaydoo — unified tokens, components and brand applications across porCobrar, Vendorplace, Fcard and YAYDOO, the Comandos rewrite that locked Yaydoo into Series B and the Paystand acquisition",
    impact: "+40% team productivity",
    tagline: "Eight inconsistent brands — one Design System.",
  },
];
