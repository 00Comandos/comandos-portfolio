import type { ImageMetadata } from "astro";

export type PlaceholderImage = {
  placeholder: true;
  label: string;
  aspect?: string;
};

export type ContentImage =
  | {
      kind: "image";
      image: ImageMetadata;
      alt: string;
      /** Optional mobile-optimized variant — rendered via <picture> at < 768px. */
      mobileImage?: ImageMetadata;
      aspect?: string;
      caption?: string;
    }
  | { kind: "placeholder"; label: string; aspect?: string; caption?: string };

export type ChecklistItem = {
  label: string;
  body?: string;
  sub?: readonly string[];
};

export type StatIcon =
  | "globe"
  | "money"
  | "bell"
  | "chart"
  | { kind: "image"; image: ImageMetadata; alt?: string };

export type AdventureBlock =
  | { kind: "intro"; text: string }
  | { kind: "checklist"; items: readonly ChecklistItem[] }
  | { kind: "image"; image: ContentImage; rounded?: boolean }
  | { kind: "divider" }
  | {
      kind: "step";
      step: string; // "STEP 01"
      heading: string;
      body?: string;
      image?: ContentImage;
      tail?: readonly ChecklistItem[]; // bullets beneath the image (e.g. First Insights)
    }
  | {
      kind: "callout";
      label?: string; // "Design System"
      heading: string;
      image?: ContentImage;
    }
  | {
      kind: "chip";
      icon: "seeing-mountain" | "making-top";
      label: string;
    };

export type WorthBlock =
  | { kind: "intro"; label?: string; heading: string; body?: string }
  | { kind: "image"; image: ContentImage; rounded?: boolean }
  | {
      kind: "before-after";
      before: ContentImage;
      after: ContentImage;
      impact: string; // "↑477%"
    };

export type CaseStudyContent = {
  slug: string;
  kicker: string;
  brandLogo?: { kind: "public"; src: string; alt: string; height?: number };
  hero: {
    image?: ContentImage; // defaults to project thumbnail if omitted
    intro: string; // multi-paragraph; use \n\n as separator
  };
  challenge: {
    heading: string;
    body: string;
    ctaLabel: string;
    results: readonly string[];
    team: readonly { label: string; badge?: string }[];
    image?: ContentImage;
  };
  adventure: {
    heading: string;
    blocks: readonly AdventureBlock[];
  };
  worth: {
    blocks: readonly WorthBlock[];
  };
  result: {
    heading: string;
    stats: readonly {
      value: string;
      label: string;
      caption?: string;
      icon: StatIcon;
    }[];
  };
};
