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

export type FeatureGridItem = {
  number: string;
  label?: string;
  title: string;
  body: string;
  highlight?: boolean;
};

export type StatAnimation = "spin" | "bob" | "shake";

export type StatIcon =
  | "globe"
  | "money"
  | "bell"
  | "chart"
  | { kind: "image"; image: ImageMetadata; alt?: string }
  | {
      kind: "phosphor";
      name: string;
      animation?: StatAnimation;
      alt?: string;
    }
  | {
      kind: "illustration";
      scene: "launch" | "rise" | "retention";
      alt?: string;
    };

export type TwoColMediaItem = {
  image: ContentImage;
  title: string;
  detail?: string;
};

export type AdventureBlock =
  | { kind: "intro"; text: string }
  | { kind: "checklist"; items: readonly ChecklistItem[] }
  | { kind: "image"; image: ContentImage; rounded?: boolean }
  | { kind: "divider"; variant?: "hatched" | "line" }
  | {
      kind: "step";
      step: string;
      heading: string;
      body?: string;
      image?: ContentImage;
      tail?: readonly ChecklistItem[];
    }
  | {
      kind: "callout";
      label?: string;
      heading: string;
      image?: ContentImage;
    }
  | {
      kind: "chip";
      icon: "seeing-mountain" | "making-top";
      label: string;
    }
  | {
      kind: "feature-grid";
      columns: 2 | 3;
      items: readonly FeatureGridItem[];
    }
  | {
      kind: "heading";
      label?: string;
      heading: string;
      body?: string;
    }
  | {
      kind: "two-col-media";
      items: readonly TwoColMediaItem[];
    }
  | {
      kind: "responsive-media";
      desktop: ContentImage;
      mobile: readonly ContentImage[];
    };

export type WorthBlock =
  | { kind: "intro"; label?: string; heading: string; body?: string }
  | { kind: "image"; image: ContentImage; rounded?: boolean }
  | {
      kind: "before-after";
      before: ContentImage;
      after: ContentImage;
      impact: string;
    }
  | {
      kind: "chip";
      icon: "seeing-mountain" | "making-top" | "worth";
      label: string;
    }
  | { kind: "divider"; variant?: "hatched" | "line" }
  | { kind: "text"; text: string }
  | {
      kind: "checklist";
      heading?: string;
      items: readonly ChecklistItem[];
    }
  | { kind: "big-heading"; heading: string }
  | {
      kind: "image-grid";
      columns: 2 | 3 | 4;
      images: readonly ContentImage[];
    }
  | {
      kind: "responsive-media";
      desktop: ContentImage;
      mobile: readonly ContentImage[];
    };

export type CaseStudyContent = {
  slug: string;
  kicker: string;
  brandLogo?: { kind: "public"; src: string; alt: string; height?: number };
  hero: {
    image?: ContentImage;
    /** Multi-paragraph body; split by \n\n. */
    intro: string;
    /** Optional bulleted list rendered beneath the intro paragraphs. */
    bullets?: readonly string[];
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
