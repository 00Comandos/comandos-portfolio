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

export type ContentVideo = {
  kind: "video";
  /** Public-path mp4, e.g. "/videos/foo.mp4". */
  src: string;
  /** Public-path poster frame. */
  poster: string;
  /** Optional portrait variant served at < 768px. */
  mobileSrc?: string;
  /** CSS aspect-ratio applied to the mobile variant (e.g. "4 / 5") so a
      tall portrait clip is center-cropped instead of filling the screen. */
  mobileAspect?: string;
  /** Portrait-only footage: rendered centered at a phone-like width on
      desktop instead of stretching full-bleed. */
  orientation?: "portrait";
  /** Accessible description — mirrors ContentImage.alt. */
  alt: string;
  caption?: string;
  aspect?: string;
  /** VideoObject metadata (JSON-LD + video sitemap). */
  name: string;
  description: string;
  /** ISO 8601 date, e.g. "2026-07-21". */
  uploadDate: string;
  /** Duration in whole seconds. */
  durationSeconds: number;
};

/** Small isometric drawings available to pillars / feature-grid cells. */
export type PillarArtKind = "ready" | "race" | "refer" | "travel" | "assistant" | "liquidity" | "conversation" | "leads";

export type ChecklistItem = {
  label: string;
  /** Pillars layout only: small isometric drawing above the item
      (same vocabulary as the /method principles). */
  art?: PillarArtKind;
  body?: string;
  sub?: readonly string[];
};

/** One beat of a sticky scroll scene (Worth `scene` block). */
export type SceneBeat = {
  /** Image/video for the beat. Omit it and pass `quotes` for a typographic beat. */
  media?: ContentImage | ContentVideo;
  /** Users' own words, set large in place of the media (research beats). */
  quotes?: readonly string[];
  /** Short mono label for the beat, e.g. "Before" / "New". */
  label: string;
  /** Optional 1–2 word figure shown as a `.hl` pill next to the label (e.g. "↑477%"). */
  impact?: string;
  /** The line that changes per beat (bottom-left of the stage). */
  caption: string;
};

export type FeatureGridItem = {
  number: string;
  label?: string;
  title: string;
  body: string;
  highlight?: boolean;
  /** Optional isometric drawing above the cell (see PillarArt). */
  art?: PillarArtKind;
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
      scene: IllustrationScene;
      alt?: string;
    };

export type TwoColMediaItem = {
  image: ContentImage;
  /** Optional small uppercase label above the title. */
  kicker?: string;
  title: string;
  detail?: string;
};

export type AdventureBlock =
  | { kind: "intro"; text: string }
  /** Animated deck of design iterations (cut-out card images + labels). */
  | { kind: "card-stack"; cards: readonly { image: Extract<ContentImage, { kind: "image" }>; label: string; caption?: string }[] }
  /** Pinned before → after sequence (same renderer as the Worth scene). */
  | { kind: "scene"; label?: string; heading?: string; body?: string; beats: readonly SceneBeat[] }
  | { kind: "caption"; text: string }
  | { kind: "spacer"; size?: "sm" | "md" | "lg" }
  /** "8/10 users …" rows: `cards` = side-by-side stat cards with people,
      `rings` = columns of progress rings, `chart` = analytics-style bar
      chart (Amplitude/Mixpanel insight) led by the top finding. */
  | { kind: "checklist"; items: readonly ChecklistItem[]; layout?: "cards" | "rings" | "chart" | "quotes" }
  | { kind: "image"; image: ContentImage; rounded?: boolean }
  | { kind: "video"; video: ContentVideo; rounded?: boolean }
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
      icon:
        | "seeing-mountain"
        | "making-top"
        | "nps"
        | "interview"
        | "signature";
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
    }
  | {
      kind: "image-grid";
      columns: 2 | 3 | 4;
      images: readonly ContentImage[];
    }
  | {
      kind: "prose-with-image";
      heading: string;
      body: string;
      image: ContentImage;
      /** Position of the image relative to the text on desktop. Defaults to "right". */
      imagePosition?: "left" | "right";
    }
  | {
      kind: "illustrated-heading";
      /** Either a rich StatIllustration scene or an Iconify name (e.g. "lucide:scan-face"). */
      scene?: IllustrationScene;
      icon?: string;
      /** Bespoke animated drawing instead of an icon/scene. */
      art?: "facescan";
      heading: string;
      body?: string;
    }
  | {
      kind: "illustrated-groups";
      groups: readonly {
        scene?: IllustrationScene;
        icon?: string;
        heading: string;
        items: readonly ChecklistItem[];
      }[];
    };

export type IllustrationScene =
  | "launch"
  | "rise"
  | "retention"
  | "multiply"
  | "audience"
  | "ink"
  | "biometric"
  | "certified"
  | "progress"
  | "documents"
  | "signed-growth"
  | "love"
  | "reactivate"
  | "sprint"
  | "unify"
  | "flow"
  | "streak"
  | "orbit"
  | "sync"
  | "whisper"
  | "lap"
  | "magnet"
  | "summit"
  | "anydevice"
  | "renew"
  | "simmer"
  | "tap-pay"
  | "refer"
  | "parking"
  | "activate"
  | "wayfind";

export type WorthBlock =
  /** `sub`: a smaller sub-point under the previous intro (e.g. numbered use cases). */
  | { kind: "intro"; label?: string; heading: string; body?: string; sub?: boolean }
  | { kind: "image"; image: ContentImage; rounded?: boolean }
  | { kind: "video"; video: ContentVideo; rounded?: boolean }
  | {
      kind: "before-after";
      before: ContentImage;
      after: ContentImage;
      impact: string;
    }
  /** Draggable before/after compare: the two halves stacked, a range handle
      reveals one over the other. Both images should share one canvas size. */
  | {
      kind: "compare";
      before: Extract<ContentImage, { kind: "image" }>;
      after: Extract<ContentImage, { kind: "image" }>;
      label?: string;
    }
  /** Screen-by-screen capture flow: frames highlighted in turn while in view.
      `label` is the short on-screen prompt shown under each frame. */
  | {
      kind: "capture-sequence";
      frames: readonly { image: Extract<ContentImage, { kind: "image" }>; label: string }[];
    }
  | {
      kind: "chip";
      icon:
        | "seeing-mountain"
        | "making-top"
        | "worth"
        | "nps"
        | "interview"
        | "signature";
      label: string;
    }
  | { kind: "divider"; variant?: "hatched" | "line" }
  | { kind: "text"; text: string }
  /** Section heading + intro with one labelled sub-point directly beneath
      (label · title · optional lead + list rendered as hairline chips). */
  | {
      kind: "lead-point";
      heading: string;
      body?: string;
      point: { label: string; heading: string; lead?: string; items?: readonly string[] };
    }
  /** Concierge conversation card: each topic arrives as an incoming
      message once in view (all shown under reduced motion). */
  | {
      kind: "concierge-chat";
      heading: string;
      title: string;
      channel?: string;
      /** Optional photo the conversation floats over (decorative). */
      backdrop?: ContentImage;
      items: readonly string[];
    }
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
    }
  /** Sticky before → after scene (max one per case). Pinned stage with
      crossfading media per beat on ≥900px; stacked beats on mobile and
      under reduced motion. */
  | {
      kind: "scene";
      label?: string;
      heading: string;
      body?: string;
      beats: readonly SceneBeat[];
    }
  /** Edge-to-edge video band with one overlaid line (breaks out of the
      case-study column). */
  | { kind: "bleed-video"; video: ContentVideo; line: string };

export type CaseStudyContent = {
  slug: string;
  kicker: string;
  brandLogo?: { kind: "public"; src: string; alt: string; height?: number };
  hero: {
    image?: ContentImage;
    /** Optional stack of images rendered on mobile instead of `image`. */
    mobileStack?: readonly ContentImage[];
    /** Opt-in contained hero: the image renders narrower and centred on a
        full-width band of `color` (the image's own backdrop colour), so its
        coloured area runs edge to edge. `until` = how far down the image the
        band reaches, in % of the image height (default 100) — anything
        below (e.g. a phone poking out of the card) sits on the page. */
    backdrop?: { color: string; until?: number };
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
      /** Optional large chart image rendered below the stat label. */
      chart?: ContentImage;
    }[];
    /** Optional impact cards rendered below the stats grid. */
    cards?: readonly {
      heading: string;
      body?: string;
      image?: ContentImage;
      /** Animated illustration rendered in place of the image. */
      scene?: IllustrationScene;
    }[];
  };
};
