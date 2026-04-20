import type { CaseStudyContent } from "./types";
import { storiInversionPlus } from "./stori-inversion-plus";

const caseStudies: readonly CaseStudyContent[] = [storiInversionPlus];

const bySlug = new Map(caseStudies.map((c) => [c.slug, c]));

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return bySlug.get(slug);
}

export { caseStudies };
