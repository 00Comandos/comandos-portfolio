import type { CaseStudyContent } from "./types";
import { storiInversionPlus } from "./stori-inversion-plus";
import { kartaApp } from "./karta-app";
import { kartaCard } from "./karta-card";
import { legalarioESignature } from "./legalario-e-signature";
import { legalarioEmails } from "./legalario-emails";

const caseStudies: readonly CaseStudyContent[] = [
  storiInversionPlus,
  kartaApp,
  kartaCard,
  legalarioESignature,
  legalarioEmails,
];

const bySlug = new Map(caseStudies.map((c) => [c.slug, c]));

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return bySlug.get(slug);
}

export { caseStudies };
