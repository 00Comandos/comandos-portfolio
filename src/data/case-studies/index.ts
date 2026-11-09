import type { CaseStudyContent } from "./types";
import { storiInversionPlus } from "./stori-inversion-plus";
import { kartaApp } from "./karta-app";
import { kartaCard } from "./karta-card";
import { kartaMarketingHub } from "./karta-marketing-hub";
import { legalarioESignature } from "./legalario-e-signature";
import { legalarioEmails } from "./legalario-emails";
import { truoraReport } from "./truora-report";
import { truoraTruConnect } from "./truora-truconnect";
import { yaydooDesignSystem } from "./yaydoo-design-system";
import { yaydooPorCobrar } from "./yaydoo-porcobrar";
import { yaydooVendorplace } from "./yaydoo-vendorplace";
import { stadioAppleWatch } from "./stadio-apple-watch";
import { rebajatuscuentas } from "./rebajatuscuentas";
import { miposDarkKitchen } from "./mipos-dark-kitchen";
import { miposRestaurantPos } from "./mipos-restaurant-pos";
import { miposKiosk } from "./mipos-kiosk";
import { spotfinder } from "./spotfinder";
import { kartaMarketingHubEs } from "./es/karta-marketing-hub";
import { TRANSLATED_CASES } from "./translated.mjs";

const caseStudies: readonly CaseStudyContent[] = [
  storiInversionPlus,
  kartaApp,
  kartaCard,
  kartaMarketingHub,
  legalarioESignature,
  legalarioEmails,
  truoraReport,
  truoraTruConnect,
  yaydooDesignSystem,
  yaydooPorCobrar,
  yaydooVendorplace,
  stadioAppleWatch,
  rebajatuscuentas,
  miposDarkKitchen,
  miposRestaurantPos,
  miposKiosk,
  spotfinder,
];

const caseStudiesEs: readonly CaseStudyContent[] = [kartaMarketingHubEs];

const bySlug = new Map(caseStudies.map((c) => [c.slug, c]));
const bySlugEs = new Map(caseStudiesEs.map((c) => [c.slug, c]));

/** Spanish content when it exists, otherwise the English case. */
export function getCaseStudy(
  slug: string,
  lang: "en" | "es" = "en",
): CaseStudyContent | undefined {
  return (lang === "es" ? bySlugEs.get(slug) : undefined) ?? bySlug.get(slug);
}

export function hasSpanishCase(slug: string): boolean {
  return TRANSLATED_CASES.includes(slug);
}

export { caseStudies };
