import type { ImageMetadata } from "astro";
import {
  legalarioImages,
  truoraReportImages,
  stadioImages,
  miposKioskImages,
  miposDarkKitchenImages,
  yaydooDesignSystemImages,
  storiImages,
  kartaCardImages,
  rebajatuscuentasImages,
  requireImage,
} from "~/lib/image-map";

export type BeforeAfterCase = {
  slug: string;
  brand: string;
  before: ImageMetadata;
  beforeAlt: string;
  after: ImageMetadata;
  afterAlt: string;
  duringCaption: string;
  nowCaption: string;
  impact: string;
  tagline: string;
};

const L = (f: string) => requireImage(legalarioImages, f);
const T = (f: string) => requireImage(truoraReportImages, f);
const STA = (f: string) => requireImage(stadioImages, f);
const K = (f: string) => requireImage(miposKioskImages, f);
const DK = (f: string) => requireImage(miposDarkKitchenImages, f);
const YDS = (f: string) => requireImage(yaydooDesignSystemImages, f);
const ST = (f: string) => requireImage(storiImages, f);
const KC = (f: string) => requireImage(kartaCardImages, f);
const RTC = (f: string) => requireImage(rebajatuscuentasImages, f);

export const homeBeforeAfter: readonly BeforeAfterCase[] = [
  {
    slug: "stori-inversion-plus",
    brand: "Stori",
    before: ST("stori-inversion-plus-before-comandos.png"),
    beforeAlt:
      "Stori Inversión+ pre-redesign legacy flow — Nueva inversión screen on iPhone with a $2,000.00 amount input, fixed 90 / 180 / 365 días plazo pills and separate Nombre de inversión / Tasa de rendimiento (GAT Nominal anual 16.50%) blocks, the fragmented fintech savings onboarding Mexican savers opened but abandoned before activating their first time-locked investment",
    after: ST("stori-inversion-plus-after-comandos.png"),
    afterAlt:
      "Stori Inversión+ redesigned guided fintech savings flow on iPhone — ¿Cuánto quieres invertir? screen with a $15,500 input that auto-previews the 30 / 90 / 180 días return ($20,017.53 · $20,037.53 · $20,076.66) plus ↗ 15.00% / 15.50% / 14.75% rate pills, a Saldo después de la inversión hint and a mint Continuar CTA, the MVP Comandos shipped for Stori Mexico that drove +477% activation explosion in 90 days",
    duringCaption:
      "A fintech savings flow users opened and then abandoned mid-onboarding.",
    nowCaption:
      "Guided, time-locked investing. +477% activation explosion in 90 days.",
    impact: "+477% activation · 90 days",
    tagline: "Mexican savers opened the app, then actually invested.",
  },
  {
    slug: "truora-report",
    brand: "Truora",
    before: T("truora-report-before-comandos.png"),
    beforeAlt:
      "Truora Background Check Report pre-redesign — dense Colombia KYC page showing Laura Lizeth Jimenez Garcia's full profile (nombre, género, fecha de nacimiento, número de identificación) alongside a wall of Identidad / Penal y Criminal / Legal / Internacional / Profesional / Afiliaciones / Medios / Impuestos y Finanzas cards each with its own Puntaje 10 Limpio, the raw technical report LATAM HR analysts spent 8 minutes per read trying to interpret",
    after: T("truora-report-after-comandos.png"),
    afterAlt:
      "Truora Background Check Report redesigned by Comandos — guided Reporte de consulta layout with a single at-a-glance Puntaje 2 Confianza muy bajo gauge, Nivel de confianza legend (Muy Bajo → Muy alto), weighted categorías (Identidad personal 20%, Criminal 60%, Legal 10%, Internacional 10%, Profesional 0%, Afiliaciones, Medios, Impuestos y finanzas) and a QR code to drill into the full bases consultadas — the deliverable rewrite that cut reading time 50% and lifted HR satisfaction to 85%",
    duringCaption:
      "Raw legacy report. 8-minute read. Analysts never understood the confidence score.",
    nowCaption:
      "Single at-a-glance score. 50% faster. 85% satisfaction across LATAM HR teams.",
    impact: "-50% reading time · +85% satisfaction",
    tagline: "Rewrote the deliverable — not just the layout.",
  },
  {
    slug: "karta-card",
    brand: "Karta Card",
    before: KC("karta-card-before-comandos.png"),
    beforeAlt:
      "Karta Card pre-redesign concept in portrait — generic off-white industry card with a blank grey magstripe on the right, a minimal diamond chip icon at the bottom and a faint guilloché curve pattern, the commodity off-the-shelf look LATAM credit cards shared before the Comandos industrial-design rewrite",
    after: KC("karta-card-after-comandos.png"),
    afterAlt:
      "Karta Card final product in portrait — black heavyweight premium credit card with the Karta wordmark etched vertically, engraved chevron line pattern, EMV chip and VISA Infinite branding on a textured matte-noir surface, the 17-gram metal design Comandos shipped that gained 1,000 LATAM high-net-worth customers in the first 12 months",
    duringCaption:
      "Commodity industry card. Plain magstripe. No premium signal.",
    nowCaption:
      "Black 17-gram Visa Infinite. 1,000 customers in the first 12 months.",
    impact: "1k customers · 17-gram metal",
    tagline:
      "From exploratory concepts to a 17-gram metal card LATAM customers flex.",
  },
  {
    slug: "legalario-e-signature",
    brand: "Legalario",
    before: L("legalario-electronic-signature-legacy-2048x829.webp"),
    beforeAlt:
      "Legalario legacy electronic-signature flow — three outdated mobile screens Mexican SMB signers abandoned mid-flow, pre-redesign UX with cramped signature rectangles and low-confidence previews",
    after: L("legalario-e-signature-after-comandos.png"),
    afterAlt:
      "Legalario redesigned electronic-signature identity step on iPhone — Toma la foto del frente de tu identificación with INE / Pasaporte / FM3 as accepted Mexican IDs, a live photo of a signer framing his credential on a plain background, the guided biometric onboarding Comandos shipped to lift completion to 99% and NPS +24% across LATAM",
    duringCaption:
      "Mid-flow drop-off. Draw-your-signature crammed inside a finger-stroke rectangle.",
    nowCaption:
      "99% completion rate. iBeta-certified biometric identity end-to-end.",
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
    duringCaption:
      "Android purple tabs. Flat price rows. Kiosks nobody used.",
    nowCaption:
      "ROKU-native Chili's kiosk. +155% conversion lift. Any touch device.",
    impact: "+155% conversion",
    tagline: "From Android-era kiosk to ROKU-native self-order for fast food.",
  },
  {
    slug: "stadio-apple-watch",
    brand: "Stadio",
    before: STA("stadio-apple-watch-before-comandos.png"),
    beforeAlt:
      "Stadio Apple Watch running app first-draw paper sketches — Project: Apple Run notebook page showing hand-drawn Nuevo Amir leaderboard with runners (Orlando 75:40 min · 9.7 km, Comandos 18:51 min · 8.9 km, Rodrigo 19:21 min · 8.6 km) and a second screen sketching a run route with Empezó / Terminó / País / Ruta fields, the raw ideation Comandos iterated before shipping the MVP during the pandemic",
    after: STA("stadio-app-runners.png"),
    afterAlt:
      "Stadio shipped Apple Watch + iPhone running app — the social-running product that launched in 4 weeks during the pandemic with +30% word-of-mouth growth and 45% retention after the first room",
    duringCaption:
      "Rough first-draw concepts for an Apple Watch social running app.",
    nowCaption:
      "Shipped MVP in 4 weeks. +30% word-of-mouth. 45% retention.",
    impact: "+30% word-of-mouth · MVP in 4 weeks",
    tagline: "An Apple Watch running app runners actually recommended.",
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
    duringCaption:
      "Ten delivery-app tablets nailed to a wooden wall.",
    nowCaption:
      "One unified dashboard. 99% integration. +400% productivity.",
    impact: "+400% productivity",
    tagline: "Replaced ten delivery-app tablets with a single screen.",
  },
  {
    slug: "yaydoo-design-system",
    brand: "Yaydoo",
    before: YDS("yaydoo-design-system-before-comandos.png"),
    beforeAlt:
      "Yaydoo brand audit pre-Grill Design System — eight inconsistent logo variations shipping in the wild across the Mexican B2B SMB portfolio: two different Yaydoo wordmarks, two PorCobrar lockups (blue chip + standalone P-icon), a purple-block Vendorplace icon alongside a cyan Vendorplace wordmark, and two YAYDOO all-caps treatments with mismatched lotus / navy-dotted icons — the brand chaos the Comandos Grill Design System rewrite was built to consolidate",
    after: YDS("GrillDesignSystem-Yaydoo-comandos-project.png"),
    afterAlt:
      "Grill Design System for Yaydoo — unified tokens, components and brand applications across porCobrar, Vendorplace, Fcard and YAYDOO, the Comandos rewrite that locked Yaydoo into Series B and the Paystand acquisition",
    duringCaption:
      "Eight inconsistent logos across seven products.",
    nowCaption:
      "Grill Design System. +40% team productivity. Paystand acquisition.",
    impact: "+40% team productivity",
    tagline: "Eight inconsistent brands — one Design System.",
  },
  {
    slug: "rebajatuscuentas",
    brand: "RebajaTusCuentas",
    before: RTC("rebajaTusCuentas-2018-comandos-project.png"),
    beforeAlt:
      "RebajaTusCuentas legacy 2018 mortgage comparison platform — the Peruvian PropTech UX before the Comandos full redesign, stuck in one country with flat conversion",
    after: RTC("rebajatuscuentas-after-comandos.png"),
    afterAlt:
      "RebajaTusCuentas redesigned PropTech form on web — conversational flow hosted by Nicolás (CEO) with a 2 minutos para completar el formulario progress bar, three product-category cards (Nuevo Crédito Hipotecario, Compra de Deuda Hipotecaria, Préstamos con Garantía Hipotecaria with a mint-check selected state) and a SUNARP registry question (Sí está registrado / No está registrado / No lo sé) leading into a Siguiente CTA, the guided mortgage-comparison UX Comandos shipped that drove +300% growth across Peru, Colombia and Mexico",
    duringCaption:
      "A 2018 mortgage comparison platform stuck in a single country.",
    nowCaption:
      "Full UX redesign. +300% growth. Peru → Colombia + Mexico.",
    impact: "+300% growth · 3 countries",
    tagline: "Peru mortgage platform to LATAM PropTech across three countries.",
  },
];
