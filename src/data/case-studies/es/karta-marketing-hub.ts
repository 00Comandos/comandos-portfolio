import type { CaseStudyContent, ContentImage } from "../types";
import { kartaImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(kartaImages, filename);

// Spanish version of ../karta-marketing-hub.ts — same images, translated copy.
// Partner institutions stay anonymised (Partner Bank A/B/C, Brokerage partner).

const heroImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-tool-rewards.webp"),
  alt: "Karta Marketing Hub en la guía Rewards, página 1: menú por producto y audiencia, Digital o Print A4, EN/ES/PT, Descargar PDF",
};

const loginImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-login.webp"),
  alt: "Pantalla de acceso a Karta Marketing Hub: entrada con correo corporativo de Karta y código de un solo uso",
};

const rewardsEn: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-rewards-en.webp"),
  alt: "Guía Rewards de Karta en inglés: portada “Every dollar you spend takes you somewhere” y cómo funcionan los puntos",
  caption: "English",
};
const rewardsEs: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-rewards-es.webp"),
  alt: "Guía Rewards de Karta en español: sección “Transfiera a aerolíneas aliadas” con la equivalencia de puntos a millas",
  caption: "Español",
};
const rewardsPt: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-rewards-pt.webp"),
  alt: "Guía Rewards de Karta en portugués de Brasil: el concierge por WhatsApp para planear cualquier viaje en una conversación",
  caption: "Português",
};
const printImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-print-a4.webp"),
  alt: "One pager de Karta en modo Print (A4) en el hub: paginado para imprimir, con versiones co-branded de partners en el menú",
};
const globalAccountImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-global-account.webp"),
  alt: "Guía Global Account de Karta para asesores financieros, con el menú de productos: Consumer, Corporate y Global Account",
};

const emailsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-emails.webp"),
  alt: "Modo Emails de Karta Marketing Hub: correos transaccionales sincronizados, vista escritorio, tablet o celular, descarga HTML",
  caption: "Emails: cada correo transaccional, sincronizado desde su origen y listo para previsualizar o descargar.",
};
const brandImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-brand.webp"),
  alt: "Modo Brand de Karta Marketing Hub: logotipo e isotipo de Karta en versión oscura, clara y cuadrada, en SVG, PNG y JPG",
  caption: "Brand: logotipos e isotipos en todos los formatos, y el kit completo en un clic.",
};
const landingsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-landings.webp"),
  alt: "Modo Landings de Karta Marketing Hub: páginas públicas de Rewards y Brochure con botón para copiar el enlace por idioma",
  caption: "Landings: páginas públicas para partners, con el enlace de cada idioma a un clic.",
};
const eventsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-events.webp"),
  alt: "Modo Events de Karta Marketing Hub: backdrop de 6 × 3 m a escala 1:10 con sangrado, listo para imprimir",
  caption: "Events: piezas listas para imprimir en eventos, del backdrop al merch.",
};

const mobileLogin: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-mobile-login.webp"),
  alt: "Acceso a Karta Marketing Hub desde el celular: correo corporativo y código de un solo uso",
  caption: "Correo corporativo + código",
};
const mobileDownload: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-mobile-download.webp"),
  alt: "Pieza de ventas de Karta en el celular: Digital o A4, Visa o Mastercard y el botón PDF en la barra",
  caption: "Elige el formato, descarga",
};
const mobileMenu: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-mobile-menu.webp"),
  alt: "Menú a pantalla completa de Karta Marketing Hub en el celular: piezas por producto y audiencia, idiomas al pie",
  caption: "Cada pieza, a un toque",
};
const mobileShare: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-mobile-share.webp"),
  alt: "Landings de Karta Marketing Hub en el celular: botón para copiar el enlace de cada idioma y compartirlo por WhatsApp",
  caption: "Copia el enlace, envíalo",
};

export const kartaMarketingHubEs: CaseStudyContent = {
  slug: "karta-marketing-hub",
  kicker: "FinTech — Herramientas internas / Sales enablement",
  brandLogo: {
    kind: "public",
    src: "/images/logo-karta.png",
    alt: "Karta",
    height: 28,
  },
  hero: {
    image: heroImage,
    video: {
      kind: "video",
      src: "/videos/karta-marketing-hub-hero.mp4",
      poster: "/videos/karta-marketing-hub-hero-poster.jpg",
      alt: "Demo de Karta Marketing Hub: recorrer la guía de Rewards, cambiar a Print (A4) y descargar el PDF",
      name: "Karta Marketing Hub: de Digital a Print (A4) y al PDF",
      description: "Un vendedor recorre la guía de Rewards en Karta Marketing Hub, la cambia al formato paginado Print (A4) y descarga el PDF.",
      uploadDate: "2026-11-08",
      durationSeconds: 13,
    },
    backdrop: { color: "rgb(14 13 12)", card: true },
    intro:
      "El equipo de ventas y alianzas de Karta vende una tarjeta de crédito premium de EE. UU. en cuatro mercados y tres idiomas: primero EE. UU. y Brasil, luego México y Argentina.\n\nCada one pager, brochure, guía y correo se rehacía a mano en Figma. En 30 días, paso a paso, lo convertimos en una sola herramienta interna: primero estandarizamos el brochure, después el resto de los materiales, hasta que todo vivió en una única fuente de verdad en la que el equipo confía y que compliance puede auditar.",
  },
  challenge: {
    heading: "Dos semanas por pieza, y nadie seguro de cuál era la versión correcta.",
    body:
      "Cada pieza se rehacía a mano en Figma, una vez por idioma, y llegar a la versión final tomaba hasta dos semanas. Los PDFs de 20–30 MB había que comprimirlos antes de compartirlos, y vivían en un Drive donde solo el nombre del archivo daba una pista de qué versión estaba vigente o quién la tenía.",
    ctaLabel: "Quiero escalar mi equipo de ventas",
    results: [
      "Un solo hub para 8–10 personas en 4 mercados.",
      "144 PDFs en inglés, español y portugués, siempre actualizados.",
      "Acceso con correo corporativo + código de un solo uso, cada descarga registrada.",
    ],
    team: [
      { label: "1 Head of Product Design", badge: "by Comandos" },
      { label: "Equipo de Ventas y Alianzas" },
      { label: "Compliance" },
    ],
    image: loginImage,
  },
  adventure: {
    heading: "De un Drive lleno de versiones a una sola fuente de verdad.",
    blocks: [
      {
        kind: "checklist",
        items: [
          {
            label: "Manual por diseño:",
            body: "Cada idioma y cada partner significaba otro archivo de Figma hecho a mano.",
          },
          {
            label: "Archivos pesados:",
            body: "Exportaciones de 20–30 MB que había que comprimir antes de poder enviarlas.",
          },
          {
            label: "Sin control:",
            body: "El nombre del archivo era la única pista de qué versión estaba vigente, quién la tenía y a dónde iba.",
          },
        ],
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Viendo la montaña" },
      {
        kind: "heading",
        heading: "Cada pieza se volvió una página, y el PDF su reflejo.",
        body:
          "Empezamos por el brochure: en lugar de dibujar cada versión, lo construimos una sola vez como página web y generamos el PDF desde esa página. Funcionó, así que el one pager, las guías y el resto siguieron el mismo camino. Hoy un cambio en el copy actualiza todos los idiomas y formatos a la vez, y los archivos salen lo bastante ligeros para compartirlos en cualquier lugar.",
      },
      {
        kind: "image-grid",
        columns: 3,
        images: [rewardsEn, rewardsEs, rewardsPt],
      },
      {
        kind: "caption",
        text: "Una pieza, tres idiomas: la guía de Rewards en inglés, español y portugués de Brasil, desde la misma fuente.",
      },
      { kind: "divider" },
      {
        kind: "heading",
        heading: "Digital para compartir, A4 para imprimir.",
        body:
          "Cada pieza viene en dos formatos: una página continua para compartir en pantalla y un A4 paginado y numerado para imprimir. Las versiones co-branded para bancos aliados viven dentro de la misma pieza, así ningún partner recibe una copia fuera de marca.",
      },
      { kind: "image", image: printImage },
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Haciendo cima" },
      {
        kind: "heading",
        heading: "Organizado como vende el equipo: por producto y luego por audiencia.",
        body:
          "Un menú de productos cambia entre Consumer, Corporate y Global Account; dentro de cada uno, las piezas se agrupan para asesores financieros, para clientes y para partners. Cada pieza muestra cuándo se actualizó por última vez, tomado de su historial de versiones.",
      },
      { kind: "image", image: globalAccountImage },
    ],
  },
  worth: {
    blocks: [
      {
        kind: "intro",
        heading: "Todo lo que comparte el equipo comercial, en un solo lugar",
        body:
          "Además de los PDFs, el hub reúne los correos transaccionales, el kit de marca, las landings públicas para partners y las piezas impresas para eventos. Cada uno tiene su propio modo, detrás del mismo acceso.",
      },
      { kind: "image", image: emailsImage },
      { kind: "image", image: brandImage },
      { kind: "image", image: landingsImage },
      { kind: "image", image: eventsImage },
      { kind: "divider" },
      {
        kind: "intro",
        heading: "Desde el teléfono, en plena conversación",
        body:
          "Cuando un cliente o partner pide algo puntual por WhatsApp, el vendedor abre el hub en su teléfono, elige el idioma y envía el PDF vigente o su enlace. Sin laptop, sin Drive, sin pedirle a diseño la última versión.",
        sub: true,
      },
      {
        kind: "image-grid",
        columns: 4,
        images: [mobileLogin, mobileDownload, mobileMenu, mobileShare],
      },
      { kind: "divider" },
      {
        kind: "checklist",
        items: [
          {
            label: "Correo corporativo + código de un solo uso:",
            icon: "ph:lock-key-light",
            body:
              "Solo las direcciones de Karta pueden crear una cuenta, y sin el código que llega a ese buzón nadie entra.",
          },
          {
            label: "Cada descarga, registrada:",
            icon: "ph:download-simple-light",
            body:
              "Quién descargó qué pieza, en qué idioma y cuándo. Es la evidencia de acceso que revisa compliance, y la que busca una auditoría SOC 2.",
          },
          {
            label: "Custom, dentro del estándar:",
            icon: "ph:seal-check-light",
            body:
              "Una petición para un partner o un deal específico se vuelve una variante co-branded de la pieza aprobada, no un archivo paralelo con sus propias promesas.",
          },
          {
            label: "Nada que perseguir:",
            icon: "ph:link-simple-light",
            body:
              "Sin adjuntos con versiones viejas; el equipo comparte la pieza vigente o su enlace.",
          },
        ],
      },
    ],
  },
  result: {
    heading: "Un solo mensaje en cada mercado",
    stats: [
      {
        value: "1",
        label: "propuesta de valor en 4 mercados",
        caption: "8–10 vendedores y partners en EE. UU., Brasil, México y Argentina explican Karta igual, así los leads escuchan una sola historia en su idioma.",
        icon: { kind: "illustration", scene: "unify", alt: "Un equipo, un mensaje" },
      },
      {
        value: "Minutos",
        label: "para responder a un cliente o partner, no dos semanas",
        caption: "De hasta dos semanas para tener una pieza final a enviar la versión vigente desde el teléfono, en plena conversación.",
        icon: { kind: "illustration", scene: "sync", alt: "Respuestas más rápidas" },
      },
      {
        value: "SOC 2",
        label: "controles de acceso y auditoría",
        caption: "Acceso corporativo con código de un solo uso y cada descarga registrada: control de acceso y trazabilidad, la evidencia que revisa una auditoría SOC 2.",
        icon: { kind: "illustration", scene: "certified", alt: "Controles SOC 2" },
      },
    ],
  },
};
