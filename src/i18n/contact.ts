// Contact page copy (EN / ES). Kept out of `ui.ts` on purpose.
//
// Enum VALUES in `~/lib/contact` stay English — they are what gets posted
// and emailed. The label maps below only change what the visitor sees.

import type { PROJECT_TYPES, REFERRAL_SOURCES } from "~/lib/contact";
import type { Lang } from "./index";

type ProjectType = (typeof PROJECT_TYPES)[number];
type ReferralSource = (typeof REFERRAL_SOURCES)[number];

const en = {
  meta: {
    title: "Contact",
    description:
      "Partner with Comandos on your next FinTech or SaaS product. Tell us about your project and we'll reply within one business day.",
    breadcrumbHome: "Home",
    breadcrumb: "Contact",
  },
  intro: {
    title: "Let's build something",
    titleEm: "millions of people use.",
    sub: "Tell us where your product is and what's blocking it. We'll take it from there.",
  },
  bullets: [
    "Reply within one business day.",
    "A 30-min call — no pitch deck needed.",
    "In English or Spanish.",
  ],
  direct: {
    label: "Prefer email?",
    copy: "Copy",
    copied: "Copied",
    follow: "Follow",
  },
  form: {
    projectType: "What do you need?",
    name: "Name",
    email: "Email",
    whatsapp: "WhatsApp",
    whatsappHint: "Include your country code — we'll reach out on WhatsApp.",
    company: "Company",
    referralSource: "How did you hear about us?",
    referralPlaceholder: "Choose one…",
    message: "Project details",
    messagePlaceholder: "Stage, team, what's blocking you…",
    honeypot: "Website",
    submit: "Send message",
  },
  status: {
    successTitle: "Thanks — your message is on its way.",
    successBody: "We usually reply within one business day.",
    errorTitle: "Something went wrong.",
    errorBody:
      "Please try again in a moment. If it keeps happening, email c@comandos.me and we'll sort it out.",
    captchaBody:
      "We couldn't verify you're human. Refresh the page and try again, or email c@comandos.me.",
  },
  // Client-side validation microcopy — friendly, field-aware.
  errors: {
    required: {
      name: "We'd love to know who we're talking to.",
      email: "Leave us an email so the reply has somewhere to land.",
      whatsapp: "Drop your WhatsApp — it's the fastest way to reach us.",
      company: "Which company or project is this for?",
      projectType: "Pick the closest match — it helps us route your project.",
      referralSource: "We're curious — how did you land here?",
      message: "Tell us about your project — that's the important part.",
    },
    requiredFallback: "A quick answer here helps us help you.",
    email: "That email looks off — mind double-checking it?",
    tooShort:
      "A few more characters, please — at least {min} (you're at {count}).",
    tooLong: "Love the detail, but let's keep it under {max} characters.",
    pattern: "That format doesn't look quite right.",
    generic: "Something looks off here — mind taking another look?",
    whatsappPlus: "Start with your country code — +52, +57, +1…",
    whatsappChars: "Numbers only — spaces, dashes and parentheses are fine.",
    whatsappLength:
      "That looks incomplete — a full number runs 7 to 15 digits.",
  },
  projectTypeLabels: {
    "Discovery call (30 min)": "Discovery call (30 min)",
    "MVP / Pilot": "MVP / Pilot",
    "Product Strategy": "Product strategy",
    "Design System": "Design system",
    "UX Research": "UX research",
    "Growth / Experimentation": "Growth / Experimentation",
    "Full Product Redesign": "Full product redesign",
    "Fractional / Full-time Head of Design": "Fractional / Full-time Head of Design",
    Other: "Other",
  } satisfies Record<ProjectType, string>,
  referralLabels: {
    "Google search": "Google search",
    ChatGPT: "ChatGPT",
    Claude: "Claude",
    Perplexity: "Perplexity",
    Gemini: "Gemini",
    LinkedIn: "LinkedIn",
    "X / Twitter": "X / Twitter",
    "Referral / Word of mouth": "Referral / Word of mouth",
    "Conference or event": "Conference or event",
    "Read a case study": "Read a case study",
    Other: "Other",
  } satisfies Record<ReferralSource, string>,
};

export type ContactCopy = typeof en;

const es: ContactCopy = {
  meta: {
    title: "Contacto",
    description:
      "Trabaja con Comandos en tu próximo producto FinTech o SaaS. Cuéntanos de tu proyecto y te respondemos en máximo un día hábil.",
    breadcrumbHome: "Inicio",
    breadcrumb: "Contacto",
  },
  intro: {
    title: "Construyamos algo que",
    titleEm: "millones de personas usen.",
    sub: "Cuéntanos dónde está tu producto y qué lo está frenando. Nosotros nos encargamos del resto.",
  },
  bullets: [
    "Respuesta en máximo un día hábil.",
    "Una llamada de 30 min, sin pitch deck.",
    "En español o inglés.",
  ],
  direct: {
    label: "¿Prefieres correo?",
    copy: "Copiar",
    copied: "Copiado",
    follow: "Síguenos",
  },
  form: {
    projectType: "¿Qué necesitas?",
    name: "Nombre",
    email: "Correo",
    whatsapp: "WhatsApp",
    whatsappHint: "Incluye tu código de país — te contactamos por WhatsApp.",
    company: "Empresa",
    referralSource: "¿Cómo nos conociste?",
    referralPlaceholder: "Elige una opción…",
    message: "Detalles del proyecto",
    messagePlaceholder: "Etapa, equipo, qué te está frenando…",
    honeypot: "Sitio web",
    submit: "Enviar mensaje",
  },
  status: {
    successTitle: "Gracias — tu mensaje va en camino.",
    successBody: "Normalmente respondemos en máximo un día hábil.",
    errorTitle: "Algo salió mal.",
    errorBody:
      "Inténtalo de nuevo en un momento. Si sigue pasando, escríbenos a c@comandos.me y lo resolvemos.",
    captchaBody:
      "No pudimos verificar que eres humano. Recarga la página e inténtalo de nuevo, o escríbenos a c@comandos.me.",
  },
  errors: {
    required: {
      name: "Nos encantaría saber con quién hablamos.",
      email: "Déjanos un correo para que la respuesta tenga a dónde llegar.",
      whatsapp: "Déjanos tu WhatsApp — es la forma más rápida de contactarte.",
      company: "¿Para qué empresa o proyecto es?",
      projectType: "Elige la opción más cercana — nos ayuda a enfocar tu proyecto.",
      referralSource: "Nos da curiosidad — ¿cómo llegaste aquí?",
      message: "Cuéntanos de tu proyecto — es la parte importante.",
    },
    requiredFallback: "Una respuesta rápida aquí nos ayuda a ayudarte.",
    email: "Ese correo se ve raro — ¿lo revisas?",
    tooShort:
      "Unos caracteres más, por favor — mínimo {min} (llevas {count}).",
    tooLong: "Nos encanta el detalle, pero mantenlo en menos de {max} caracteres.",
    pattern: "Ese formato no se ve del todo bien.",
    generic: "Algo no cuadra aquí — ¿le echas otro vistazo?",
    whatsappPlus: "Empieza con tu código de país — +52, +57, +1…",
    whatsappChars: "Solo números — espacios, guiones y paréntesis están bien.",
    whatsappLength:
      "Parece incompleto — un número completo tiene de 7 a 15 dígitos.",
  },
  projectTypeLabels: {
    "Discovery call (30 min)": "Discovery call (30 min)",
    "MVP / Pilot": "MVP / Piloto",
    "Product Strategy": "Estrategia de producto",
    "Design System": "Design system",
    "UX Research": "UX research",
    "Growth / Experimentation": "Growth / Experimentación",
    "Full Product Redesign": "Rediseño completo",
    "Fractional / Full-time Head of Design": "Head of Design fractional / full-time",
    Other: "Otro",
  },
  referralLabels: {
    "Google search": "Búsqueda en Google",
    ChatGPT: "ChatGPT",
    Claude: "Claude",
    Perplexity: "Perplexity",
    Gemini: "Gemini",
    LinkedIn: "LinkedIn",
    "X / Twitter": "X / Twitter",
    "Referral / Word of mouth": "Recomendación",
    "Conference or event": "Conferencia o evento",
    "Read a case study": "Leí un caso de estudio",
    Other: "Otro",
  },
};

export const contactCopy: Record<Lang, ContactCopy> = { en, es };
