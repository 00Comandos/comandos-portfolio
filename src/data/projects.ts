export type Project = {
  slug: string;
  brand: string;
  title: string;
  description: string;
  impact: string;
  timeline: string;
  order: number;
};

export const projects: readonly Project[] = [
  {
    slug: "stori-inversion-plus",
    brand: "Stori",
    title: "Stori Inversión+ Case Study: +477% Activation",
    description:
      "Democratize returns with easy, guided investing and time-locked accounts. Offer tiered yields, goal-based locks.",
    impact: "+477% activation explosion",
    timeline: "90 days",
    order: 1,
  },
  {
    slug: "karta-app",
    brand: "Karta",
    title: "Karta App Case Study: Premium Credit Card UX",
    description:
      "Product design for Karta's premium credit card app. WhatsApp concierge integration, investment-backed payments, and 85% lower fees.",
    impact: "1k customers in 12 months",
    timeline: "90 days",
    order: 2,
  },
  {
    slug: "karta-card",
    brand: "Karta",
    title: "Karta Card Design Case Study: AI Metal Credit Card",
    description:
      "Industrial and brand design for Karta's physical credit card. 17g metal card with AI features and premium finish.",
    impact: "1k customers in 12 months",
    timeline: "45 days",
    order: 3,
  },
  {
    slug: "legalario-e-signature",
    brand: "Legalario",
    title: "Legalario Case Study: 99% E-Signature Completion",
    description:
      "Product design for Legalario's electronic signature platform. Achieved 99% completion rate, +24% NPS, 4 biometric models and iBeta.",
    impact: "99% completion rate",
    timeline: "6 months",
    order: 4,
  },
  {
    slug: "legalario-emails",
    brand: "Legalario",
    title: "Legalario Emails Case Study: Electronic Signature for Anyone",
    description:
      "Email redesign for Legalario's e-signature platform. Previous emails looked like spam. We redesigned invitations, reminders, and confirmation.",
    impact: "+9% in Customer Love",
    timeline: "30 days",
    order: 5,
  },
  {
    slug: "truora-report",
    brand: "Truora",
    title: "Truora Report Case Study: -50% Reading Time",
    description:
      "Design case study for Truora's background check PDF report. Redesigned for non-technical users. Results: -50% reading time, +85% satisfaction.",
    impact: "-50% reading time",
    timeline: "30 days",
    order: 6,
  },
  {
    slug: "truora-truconnect",
    brand: "Truora",
    title: "Truora TruConnect Case Study: WhatsApp Onboarding MVP",
    description:
      "MVP for Truora TruConnect — a WhatsApp-based onboarding tool with chatbot conversations and biometric verification. Built MVP in 3 months.",
    impact: "+20 pilots",
    timeline: "MVP in 3 months",
    order: 7,
  },
  {
    slug: "yaydoo-design-system",
    brand: "Yaydoo",
    title: "Yaydoo Design System: +40% Productivity in 3 Months",
    description:
      "Design system for Yaydoo. Organized 6+ products with brand and usability inconsistencies. Built Grill Design System with engineering team.",
    impact: "+40% productivity",
    timeline: "MVP in 30 days",
    order: 8,
  },
  {
    slug: "yaydoo-porcobrar",
    brand: "Yaydoo",
    title: "Yaydoo porCobrar: +40% New Users in 30 Days",
    description:
      "UX redesign for Yaydoo porCobrar, a 2-year-old financial logbook product. Improved user experience drove +40% new user growth in 30 days.",
    impact: "+40% new users",
    timeline: "Product in 4 months",
    order: 9,
  },
  {
    slug: "yaydoo-vendorplace",
    brand: "Yaydoo",
    title: "Yaydoo Vendorplace: 2× User Registrations",
    description:
      "UX optimization for Yaydoo Vendorplace during product-market fit phase. More than doubled registered users and improved retention by 15%.",
    impact: "+15% retention",
    timeline: "Product in 4 months",
    order: 10,
  },
  {
    slug: "stadio-apple-watch",
    brand: "Stadio",
    title: "Stadio Case Study: Apple Watch Running App",
    description:
      "Product design for Stadio, a social running app for Apple Watch. 30% new runner adoption in two weeks during the pandemic.",
    impact: "+8 countries",
    timeline: "MVP in 4 weeks",
    order: 11,
  },
  {
    slug: "rebajatuscuentas",
    brand: "RebajaTusCuentas",
    title: "RebajaTusCuentas: +300% Growth, 3 Countries",
    description:
      "PropTech product design for RebajaTusCuentas, a mortgage comparison platform. Full UX redesign drove +300% growth and expansion from Peru.",
    impact: "+300% growth",
    timeline: "Redesign in 6 months",
    order: 12,
  },
  {
    slug: "mipos-dark-kitchen",
    brand: "mipOS Dark Kitchen",
    title: "mipOS Dark Kitchen: +400% Productivity",
    description:
      "FoodTech product design for mipOS Dark Kitchen. Consolidated 40+ tablets from Uber Eats, Rappi, and Didi Food into one screen.",
    impact: "+200 clients",
    timeline: "Product in 4 months",
    order: 13,
  },
  {
    slug: "mipos-restaurant-pos",
    brand: "mipOS Restaurants",
    title: "mipOS Restaurant POS: 70% Conversion Rate",
    description:
      "POS system design for the next generation of restaurants. Modern point-of-sale supporting legacy operating systems.",
    impact: "50.25% new clients",
    timeline: "Product in 4 months",
    order: 14,
  },
  {
    slug: "mipos-kiosk",
    brand: "mipOS Kiosk",
    title: "mipOS Kiosk: +155% Conversion Optimization",
    description:
      "Self-order kiosk design for fast food restaurants. Optimized the ordering and delivery flow by 155%. MVP built in 6 weeks.",
    impact: "+155% growth",
    timeline: "MVP in 6 weeks",
    order: 15,
  },
  {
    slug: "spotfinder",
    brand: "Spotfinder",
    title: "Spotfinder: +52% IoT Hardware Activation Rate",
    description:
      "IoT product design for Spotfinder's parking hardware and app. Full redesign of hardware device and mobile application. +52% user activation and brand adoption growth.",
    impact: "+52% activation",
    timeline: "Redesign in 6 months",
    order: 16,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
