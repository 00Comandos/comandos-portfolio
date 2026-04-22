import type { CaseStudyContent, ContentImage } from "./types";
import { yaydooDesignSystemImages, requireImage } from "~/lib/image-map";

const img = (filename: string) =>
  requireImage(yaydooDesignSystemImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("GrillDesignSystem-Yaydoo-comandos-project.png"),
  alt: "Grill Design System by Yaydoo — the design-system library that unified 6+ Yaydoo fintech products, shown as a Figma file alongside live invitation email, payment reminder and calendar components",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("comandos-yaydoo-design-system-grill.png"),
  alt: "Grill Design System in use — Yaydoo Figma library powering invitation emails, payment reminder frequency and admin UI across the product suite",
};

// ———— Adventure ————
const redFlagsImage: ContentImage = {
  kind: "image",
  image: img("GrillDesignSystem-RedFlags-yaydoo-comandos-project.png"),
  alt: "Yaydoo brand audit — eight inconsistent logo variations of Yaydoo, PorCobrar, Fcard, Vendorplace and YAYDOO shipping across the product portfolio before the redesign",
  caption:
    "Eight logo variations across seven Yaydoo B2B SaaS products — porCobrar, Vendorplace, Fcard and YAYDOO shipping — the brand inconsistency the Grill Design System was built to fix before the Series B and the eventual Paystand acquisition.",
};

const newBrandImage: ContentImage = {
  kind: "image",
  image: img("Yaydoo-new-brand-comandos-project.png"),
  alt: "Unified Yaydoo brand architecture — a single Yaydoo mark with Vendorplace, PorCobrar and Buyer as endorsed sub-brands under one design language",
};
const newMarketingImage: ContentImage = {
  kind: "image",
  image: img("yaydoo-newMarketing-comandos-project.png"),
  alt: "Yaydoo partner-program landing page — the unified brand applied to the ¡Únete a nuestra red de socios! lead-gen page for collections and receivables automation",
};

const buttonsImage: ContentImage = {
  kind: "image",
  image: img("GrillDesignSystem-Buttons-yaydoo-comandos-project.png"),
  alt: "Grill Design System button specs for Yaydoo — Simple button component in Small, Medium and Large sizes with typography, padding, icon offsets and touch targets annotated for engineering hand-off",
};
const textFieldsImage: ContentImage = {
  kind: "image",
  image: img("GrillDesignSystem-TextFields-yaydoo-comandos-project.png"),
  alt: "Grill Design System text-field library for Yaydoo — Inputs, Password and Select variants with chip groups, validation states and helper-text rules across all products",
};
const fontsImage: ContentImage = {
  kind: "image",
  image: img("GrillDesignSystem-Fonts-yaydoo-comandos-project.png"),
  alt: "Grill Design System typography hierarchy for Yaydoo — Display, Heading, Titles, Paragraph and Components styles with Desktop and Mobile behavior rules",
};

// ———— Worth ————
const protoPersonaImage: ContentImage = {
  kind: "image",
  image: img("GrillDesignSystem-ProtoPersona-yaydoo-comandos-project.png"),
  alt: "Yaydoo finance-manager Proto-Persona — Julio Rodríguez, 27, Jefe de finanzas in Mexico City, with behaviours, attitudes, frustrations and motivations mapped for Grill Design System decisions",
  caption:
    "Julio Rodríguez — the finance-manager Proto-Persona Grill Design System was shaped around.",
};
const resultAnatomyImage: ContentImage = {
  kind: "image",
  image: img("GrillDesignSystem-Result-yaydoo-comandos-project.png"),
  alt: "Grill Design System email anatomy — Vendorplace / Buyer invitation email documented atom-by-atom with content insets, radii, image sizes, font styles and button variants for engineering implementation",
  caption:
    "Atomic-design spec for every email — each atom, molecule and component documented for engineering.",
};

export const yaydooDesignSystem: CaseStudyContent = {
  slug: "yaydoo-design-system",
  kicker: "FinTech — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/yaydoo-logo.svg",
    alt: "Yaydoo",
    height: 44,
  },
  hero: {
    image: heroImage,
    intro:
      "Grill Design System was born out of the need to organize 6+ products from Yaydoo's portfolio into a single, consistent brand and product experience.",
  },
  challenge: {
    heading: "Optimize product development times",
    body:
      "Having 6+ products, MVPs and business ideas with a growing team of 50 to 150 people is a big challenge to maintain consistency as a brand and final product. Considering that the design team was just created, how to support all products at the same time?",
    ctaLabel: "I want to grow as Yaydoo",
    results: [
      "+40% productivity increase in engineering squads.",
      "Uniformity on 6+ products.",
      "+35% conversion rate from Marketing.",
    ],
    team: [
      { label: "4 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "2 UX/UI Designers" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Understanding the Yaydoo context",
    blocks: [
      { kind: "image", image: redFlagsImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "We quickly realized that Yaydoo had a great brand and product inconsistency that was reflected in the User Interface of their products. In addition to identifying these inconsistencies, we detected the lack of clear User Personas and Proto-Persona. Considering that their workforce grew +140% in less than 7 months, we knew we had to act quickly to grow conversion, product usability and brand consistency.",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Where do we start?",
        body:
          "After putting our neurons to work, we identified 3 opportunities that help us make a quick impact.",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "We are recognized by our users:",
            body:
              "Do you know who Yaydoo is? Do you recognize their products?",
          },
          {
            label: "Leads acquisition:",
            body:
              "Do customers who use several Yaydoo solutions, such as porCobrar and Buyer, feel that they are part of a suite?",
          },
          {
            label: "Internal Social Selling:",
            body:
              "How do we get the product + engineering squads to adopt the Grill Design System? How do we involve the Marketing team? How will we positively impact the Quarter's OKRs?",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "Start with branding unification",
        body:
          "We brought together Business, Marketing and Product in a single squad with a single goal: a unified brand under a single management. This was immediately reflected in a +15% increase in traffic and leads for Yaydoo products.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [newBrandImage, newMarketingImage],
      },
      {
        kind: "caption",
        text:
          "This was the result of 3 weeks of work with a dedicated team. We redesigned the company's narrative and began to translate it into Grill Design System, where Product and Marketing were already starting to show brand and communication uniformity.",
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "The first steps of Design System for Product",
        body:
          "Whenever we have to start a Design System from scratch we start with fonts, buttons, icons and inputs. This is the natural way to start positively affecting products and day-to-day implementations.",
      },
      { kind: "image", image: buttonsImage },
      { kind: "image", image: textFieldsImage },
      {
        kind: "caption",
        text:
          "Key points of Grill Design System: first we validate with users in prototypes of the products. Once we validate that they have the correct behavior, we turn them into components.",
      },
      {
        kind: "intro",
        text:
          "Understanding the routine of external and internal users — product, engineering and marketing — was key to develop everything necessary. Everything revolves around making stakeholders aware of the importance of this system, developers adopting it as a habit and Marketing aligning all visual communication. It's not easy, but we like challenges.",
      },
      { kind: "image", image: fontsImage },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "A result that is measured in productivity",
        body:
          "In 6 months we redesigned the entire Yaydoo product experience. Sprint after sprint we managed to increase usability and adoption of the products. We invested 3 weeks in a branding redesign which helped us align as a team.",
      },
      { kind: "image", image: protoPersonaImage },
      { kind: "image", image: resultAnatomyImage },
      {
        kind: "checklist",
        items: [
          { label: "Detailed anatomy of each atom, molecule and component." },
          {
            label: "Productivity:",
            body:
              "+35% productivity in front-end development was the direct result of implementing this design system.",
          },
          {
            label: "Social Selling:",
            body:
              "+22% optimization of our users' time in job-to-be-done processes.",
          },
        ],
      },
    ],
  },
  result: {
    heading: "Measured in productivity, adoption and JTBD optimization",
    stats: [
      {
        value: "+35%",
        label: "productivity",
        caption:
          "Front-end development shipped faster after adopting Grill Design System.",
        icon: { kind: "illustration", scene: "sprint", alt: "Productivity growth" },
      },
      {
        value: "6+",
        label: "products unified",
        caption: "A single brand and design language across the Yaydoo suite.",
        icon: { kind: "illustration", scene: "unify", alt: "Products unified" },
      },
      {
        value: "+22%",
        label: "JTBD optimization",
        caption:
          "Users completed their job-to-be-done flows in meaningfully less time.",
        icon: { kind: "illustration", scene: "flow", alt: "JTBD optimization" },
      },
    ],
  },
};
