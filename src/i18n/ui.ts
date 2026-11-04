// UI copy for the shared chrome (header / footer) and the home page.
// Keys are identical across languages — TypeScript enforces parity via
// `satisfies Record<Lang, UI>` at the bottom.

const DISCOVERY = "/contact/?type=discovery";

const en = {
  meta: {
    htmlLang: "en",
    ogLocale: "en_US",
    skip: "Skip to content",
    homeTitle: "Product Design Studio for Founders Scaling to Growth",
    homeDescription:
      "Comandos is a product design studio for startup founders moving from product-market fit to growth. Research, product strategy, design systems and experimentation — led by a Head of Design from LATAM unicorns.",
  },
  nav: {
    work: "Work",
    services: "Services",
    method: "Method",
    studio: "Studio",
    cta: "Book a call",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langLabel: "Language",
    langSwitch: "Ver en español",
  },
  links: {
    discovery: DISCOVERY,
    contact: "/contact/",
  },
  hero: {
    line1: "Your product works.",
    line2: "Let's make it grow.",
    sub: "Product design studio for founders moving from product-market fit to growth. Strategy, UX, design systems and experimentation — led by a Head of Design who's done it at LATAM unicorns.",
    cta: "Book a discovery call",
    secondary: "See the work",
    pause: "Pause video",
    play: "Play video",
  },
  clients: {
    title:
      "Products shipped with founders and teams at — used by millions across Mexico, Brazil, Colombia, Peru and Puerto Rico.",
    label: "Trusted by",
  },
  impact: {
    eyebrow: "Impact",
    title: "Design measured",
    titleEm: "in business metrics.",
    readCase: "Read the case",
  },
  work: {
    eyebrow: "Selected work",
    title: "Product problems,",
    titleEm: "measurably solved.",
    sub: "Products that went from stuck to shipped — what we inherited, what we shipped, and the metric the team moved.",
    before: "Before",
    beforeLong: "Before Comandos",
    now: "Now",
    readCase: (brand: string) => `Read the ${brand} case study`,
    all: "See all case studies",
  },
  services: {
    eyebrow: "Services",
    title: "One studio, from first flow",
    titleEm: "to growth engine.",
    sub: "Pick a single engagement or combine them. We plug in at the stage you're in.",
    cta: "Talk about your stage",
    items: [
      {
        id: "product-design",
        title: "Product Design & UX",
        body: "Audits, user research and end-to-end product design for web and mobile — from first MVP to full redesign.",
        tags: ["UX audit", "Research", "MVP", "Redesign"],
      },
      {
        id: "design-systems",
        title: "Design Systems",
        body: "One source of truth so your team ships faster without drifting. Tokens, component libraries, clean handoff.",
        tags: ["Figma tokens", "Components", "Handoff"],
      },
      {
        id: "growth",
        title: "Product-Led Growth",
        body: "Activation, conversion and retention. We design, test and iterate on the metric that matters to your board.",
        tags: ["Funnels", "A/B tests", "Onboarding"],
      },
      {
        id: "leadership",
        title: "Fractional Head of Design",
        body: "Senior design leadership without the full-time hire — vision, rituals, hiring and a team that scales. Full-time on request.",
        tags: ["Fractional", "Team building", "Roadmap"],
      },
    ],
  },
  method: {
    eyebrow: "Method",
    title: "North Face Growth —",
    titleEm: "how we climb.",
    sub: "Our methodology to create and scale products in turbo mode. Every product needs some of these steps — always in this order.",
    cta: "Explore the method",
    steps: [
      {
        title: "Data, UX audit & research",
        body: "Interviews plus funnels, retention and analytics — so the brief lands on numbers, not opinions.",
      },
      {
        title: "Product strategy",
        body: "North Star, JTBD and a roadmap your team can defend to a board.",
      },
      {
        title: "MVP & design system",
        body: "A production-ready release and the system that lets your team extend it.",
      },
      {
        title: "Testing & experimentation",
        body: "Usability rounds, pilots and A/B tests that inform the next iteration.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Founders and operators",
    titleEm: "on working with us.",
  },
  studio: {
    eyebrow: "Studio",
    title: "Senior from day one.",
    titleEm: "No hand-offs to juniors.",
    body: "Comandos is a lean product design studio. You work directly with Carlos — Head of Design behind products at Stori, Karta, Truora and Yaydoo — plus a hand-picked crew of specialists assembled for your stage.",
    points: [
      {
        title: "Direct access",
        body: "The person who pitches is the person who designs. No account managers in between.",
      },
      {
        title: "A crew sized to your stage",
        body: "Research, UI, motion or engineering specialists join only when the project needs them.",
      },
      {
        title: "Flexible engagement",
        body: "Project, retainer, fractional or full-time Head of Design.",
      },
    ],
    imageAlt:
      "Product design workshop — a strategist mapping sticky-note insights on a whiteboard while the team reviews them on laptops",
  },
  finalCta: {
    title: "Ready for the next stage?",
    titleEm: "Let's talk.",
    sub: "Tell us where your product is and where it needs to be. We reply within one business day.",
    primary: "Book a 30-min discovery call",
    secondary: "Send a project brief",
  },
  footer: {
    description:
      "Product design studio for founders moving from product-market fit to growth — from Mexico City to the world.",
    cta: "Book a discovery call",
    nav: "Navigation",
    social: "Social",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};

export type UI = typeof en;

const es: UI = {
  meta: {
    htmlLang: "es",
    ogLocale: "es_MX",
    skip: "Saltar al contenido",
    homeTitle: "Estudio de Product Design para founders que escalan",
    homeDescription:
      "Comandos es un estudio de product design para founders que pasan de product-market fit a crecimiento. Research, estrategia de producto, design systems y experimentación — liderado por un Head of Design de unicornios LATAM.",
  },
  nav: {
    work: "Trabajo",
    services: "Servicios",
    method: "Método",
    studio: "Estudio",
    cta: "Agenda una llamada",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    langLabel: "Idioma",
    langSwitch: "View in English",
  },
  links: {
    discovery: DISCOVERY,
    contact: "/contact/",
  },
  hero: {
    line1: "Tu producto funciona.",
    line2: "Hagámoslo crecer.",
    sub: "Estudio de product design para founders que pasan de product-market fit a crecimiento. Estrategia, UX, design systems y experimentación — liderado por un Head of Design que ya lo hizo en unicornios de LATAM.",
    cta: "Agenda una discovery call",
    secondary: "Ver el trabajo",
    pause: "Pausar video",
    play: "Reproducir video",
  },
  clients: {
    title:
      "Productos lanzados con founders y equipos de — usados por millones en México, Brasil, Colombia, Perú y Puerto Rico.",
    label: "Han confiado en nosotros",
  },
  impact: {
    eyebrow: "Impacto",
    title: "Diseño medido",
    titleEm: "en métricas de negocio.",
    readCase: "Ver el caso",
  },
  work: {
    eyebrow: "Trabajo seleccionado",
    title: "Problemas de producto,",
    titleEm: "resueltos con métricas.",
    sub: "Productos que pasaron de atorados a lanzados — lo que heredamos, lo que lanzamos y la métrica que movió el equipo.",
    before: "Antes",
    beforeLong: "Antes de Comandos",
    now: "Ahora",
    readCase: (brand: string) => `Ver el caso de ${brand}`,
    all: "Ver todos los casos",
  },
  services: {
    eyebrow: "Servicios",
    title: "Un estudio, del primer flujo",
    titleEm: "al motor de crecimiento.",
    sub: "Elige un solo servicio o combínalos. Entramos en la etapa en la que estás.",
    cta: "Platiquemos de tu etapa",
    items: [
      {
        id: "product-design",
        title: "Product Design & UX",
        body: "Auditorías, user research y diseño de producto end-to-end para web y mobile — del primer MVP al rediseño completo.",
        tags: ["UX audit", "Research", "MVP", "Rediseño"],
      },
      {
        id: "design-systems",
        title: "Design Systems",
        body: "Una sola fuente de verdad para que tu equipo lance más rápido sin perder consistencia. Tokens, librerías de componentes, handoff limpio.",
        tags: ["Figma tokens", "Componentes", "Handoff"],
      },
      {
        id: "growth",
        title: "Product-Led Growth",
        body: "Activación, conversión y retención. Diseñamos, probamos e iteramos sobre la métrica que le importa a tu board.",
        tags: ["Funnels", "A/B tests", "Onboarding"],
      },
      {
        id: "leadership",
        title: "Head of Design fraccional",
        body: "Liderazgo de diseño senior sin la contratación full-time — visión, rituales, hiring y un equipo que escala. Full-time si lo necesitas.",
        tags: ["Fraccional", "Equipo", "Roadmap"],
      },
    ],
  },
  method: {
    eyebrow: "Método",
    title: "North Face Growth —",
    titleEm: "cómo escalamos.",
    sub: "Nuestra metodología para crear y escalar productos en modo turbo. Todo producto necesita algunos de estos pasos — siempre en este orden.",
    cta: "Conoce el método",
    steps: [
      {
        title: "Data, UX audit y research",
        body: "Entrevistas más funnels, retención y analytics — para que el brief se base en números, no en opiniones.",
      },
      {
        title: "Estrategia de producto",
        body: "North Star, JTBD y un roadmap que tu equipo puede defender ante el board.",
      },
      {
        title: "MVP y design system",
        body: "Un release listo para producción y el sistema que permite a tu equipo extenderlo.",
      },
      {
        title: "Testing y experimentación",
        body: "Pruebas de usabilidad, pilotos y A/B tests que guían la siguiente iteración.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Founders y operadores",
    titleEm: "sobre trabajar con nosotros.",
  },
  studio: {
    eyebrow: "Estudio",
    title: "Senior desde el día uno.",
    titleEm: "Sin delegar a juniors.",
    body: "Comandos es un estudio de product design compacto. Trabajas directo con Carlos — Head of Design detrás de productos de Stori, Karta, Truora y Yaydoo — más un equipo de especialistas elegido para tu etapa.",
    points: [
      {
        title: "Acceso directo",
        body: "Quien te presenta la propuesta es quien diseña. Sin account managers de por medio.",
      },
      {
        title: "Un equipo a la medida de tu etapa",
        body: "Especialistas en research, UI, motion o ingeniería se suman solo cuando el proyecto lo necesita.",
      },
      {
        title: "Esquema flexible",
        body: "Proyecto, retainer, Head of Design fraccional o full-time.",
      },
    ],
    imageAlt:
      "Workshop de product design — una estratega organiza insights en post-its sobre un pizarrón mientras el equipo los revisa en sus laptops",
  },
  finalCta: {
    title: "¿Listo para la siguiente etapa?",
    titleEm: "Hablemos.",
    sub: "Cuéntanos dónde está tu producto y a dónde necesita llegar. Respondemos en un día hábil.",
    primary: "Agenda una discovery call de 30 min",
    secondary: "Envía un brief del proyecto",
  },
  footer: {
    description:
      "Estudio de product design para founders que pasan de product-market fit a crecimiento — de la Ciudad de México al mundo.",
    cta: "Agenda una discovery call",
    nav: "Navegación",
    social: "Social",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
  },
};

export const ui = { en, es } as const;
