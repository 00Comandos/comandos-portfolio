import type { CaseStudyContent } from "./types";
import { storiInversionPlus } from "./stori-inversion-plus";
import { kartaApp } from "./karta-app";
import { kartaCard } from "./karta-card";
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

const caseStudies: readonly CaseStudyContent[] = [
  storiInversionPlus,
  kartaApp,
  kartaCard,
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

const bySlug = new Map(caseStudies.map((c) => [c.slug, c]));

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return bySlug.get(slug);
}

export { caseStudies };
