import type {
  CaseStudyContent,
  ContentImage,
} from "~/data/case-studies/types";

/**
 * Walk every image block inside a case study and return the flat list of
 * real ContentImage entries (kind === "image"). Used to emit an
 * ImageObject[] array inside the page-level JSON-LD so Google indexes
 * every in-page image with its alt + caption instead of just the OG.
 */
export function extractCaseStudyImages(cs: CaseStudyContent): Extract<
  ContentImage,
  { kind: "image" }
>[] {
  const out: Extract<ContentImage, { kind: "image" }>[] = [];
  const push = (img: ContentImage | undefined) => {
    if (img && img.kind === "image") out.push(img);
  };

  push(cs.hero.image);
  cs.hero.mobileStack?.forEach(push);
  push(cs.challenge.image);

  for (const block of cs.adventure.blocks) {
    if (block.kind === "image") push(block.image);
    else if (block.kind === "step" && block.image) push(block.image);
    else if (block.kind === "callout" && block.image) push(block.image);
    else if (block.kind === "responsive-media") {
      push(block.desktop);
      block.mobile.forEach(push);
    } else if (block.kind === "image-grid") {
      block.images.forEach(push);
    } else if (block.kind === "two-col-media") {
      block.items.forEach((i) => push(i.image));
    } else if (block.kind === "prose-with-image") {
      push(block.image);
    }
  }

  for (const block of cs.worth.blocks) {
    if (block.kind === "image") push(block.image);
    else if (block.kind === "before-after") {
      push(block.before);
      push(block.after);
    } else if (block.kind === "responsive-media") {
      push(block.desktop);
      block.mobile.forEach(push);
    } else if (block.kind === "image-grid") {
      block.images.forEach(push);
    }
  }

  return out;
}
