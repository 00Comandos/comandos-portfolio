import type { CaseStudyContent, ContentImage } from "../types";
import { kartaImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(kartaImages, filename);

// Spanish version of ../karta-marketing-hub.ts — same images, translated copy.
// Partner institutions stay anonymised (Partner Bank A/B/C, Brokerage partner).

const heroImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-tool.webp"),
  alt: "Karta Marketing Hub — la herramienta interna abierta en el one pager para asesores financieros, con la barra lateral de documentos agrupada por producto y audiencia, formatos Digital / Print (A4), English / Español / Português y un botón para descargar el PDF",
};

const loginImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-login.webp"),
  alt: "Acceso a Karta Marketing Hub — solo con un código de un solo uso enviado al correo corporativo de Karta",
};

const onePagerEn: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-onepager-en.webp"),
  alt: "One pager para asesores financieros en inglés — Issued in the U.S. Recognized globally.",
  caption: "English",
};
const onePagerEs: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-onepager-es.webp"),
  alt: "El mismo one pager en español — Emitida en EE. UU. Reconocida globalmente.",
  caption: "Español",
};
const onePagerPt: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-onepager-pt.webp"),
  alt: "El mismo one pager en portugués de Brasil — Emitido nos EUA. Reconhecido globalmente.",
  caption: "Português",
};
const printImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-print-a4.webp"),
  alt: "El one pager en formato Print (A4): la misma página paginada y numerada para imprimir, con las versiones co-branded de los partners en la barra lateral",
};
const globalAccountImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-global-account.webp"),
  alt: "Guía de Global Account para asesores financieros dentro del hub — el menú de productos cambia entre materiales de Consumer, Corporate y Global Account",
};

const emailsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-emails.webp"),
  alt: "Modo Emails — todos los correos transaccionales de Karta sincronizados desde su repositorio, con vista previa en escritorio, tablet o móvil y descarga en HTML",
  caption: "Emails — cada correo transaccional, sincronizado desde su origen y listo para previsualizar o descargar.",
};
const brandImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-brand.webp"),
  alt: "Modo Brand — logotipo e isotipo de Karta en versiones oscura, clara y cuadrada con descargas en SVG, PNG y JPG",
  caption: "Brand — logotipos e isotipos en todos los formatos, y el kit completo en un clic.",
};
const landingsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-landings.webp"),
  alt: "Modo Landings — las páginas públicas de Rewards y Brochure con un enlace para copiar en cada idioma",
  caption: "Landings — páginas públicas para partners, con el enlace de cada idioma a un clic.",
};
const eventsImage: ContentImage = {
  kind: "image",
  image: img("karta-marketing-hub-events.webp"),
  alt: "Modo Events — un backdrop de 6 × 3 m preparado para impresión a escala 1:10 con sangrado",
  caption: "Events — piezas listas para imprimir en eventos, del backdrop al merch.",
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
    backdrop: { color: "rgb(14 13 12)", card: true },
    intro:
      "El equipo de ventas y alianzas de Karta vende una tarjeta de crédito premium de EE. UU. en cuatro mercados — primero EE. UU. y Brasil, luego México y Argentina — en tres idiomas.\n\nCada one pager, brochure, guía y correo se rehacía a mano en Figma. En 30 días, paso a paso, lo convertimos en una sola herramienta interna: primero estandarizamos el brochure, después el resto de los materiales, hasta que todo vivió en una única fuente de verdad en la que el equipo confía y que compliance puede auditar.",
  },
  challenge: {
    heading: "Dos semanas por pieza, y nadie seguro de cuál era la versión correcta.",
    body:
      "Cada pieza se rehacía a mano en Figma, una vez por idioma — hasta dos semanas para llegar a la versión final. Los PDFs de 20–30 MB había que comprimirlos antes de compartirlos, y vivían en un Drive donde solo el nombre del archivo daba una pista de qué versión estaba vigente o quién la tenía.",
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
            body: "cada idioma y cada partner significaba otro archivo de Figma hecho a mano.",
          },
          {
            label: "Archivos pesados:",
            body: "exportaciones de 20–30 MB que había que comprimir antes de poder enviarlas.",
          },
          {
            label: "Sin control:",
            body: "el nombre del archivo era la única pista de qué versión estaba vigente, quién la tenía y a dónde iba.",
          },
        ],
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Viendo la montaña" },
      {
        kind: "heading",
        heading: "Cada pieza se volvió una página — y el PDF, su reflejo.",
        body:
          "Empezamos por el brochure: en lugar de dibujar cada versión, lo construimos una sola vez como página web y generamos el PDF desde esa página. Funcionó, así que el one pager, las guías y el resto siguieron el mismo camino. Hoy un cambio en el copy actualiza todos los idiomas y formatos a la vez — y los archivos salen lo bastante ligeros para compartirlos en cualquier lugar.",
      },
      {
        kind: "image-grid",
        columns: 3,
        images: [onePagerEn, onePagerEs, onePagerPt],
      },
      {
        kind: "caption",
        text: "Una página, tres idiomas: inglés, español y portugués de Brasil desde la misma fuente.",
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
          "Además de los PDFs, el hub reúne los correos transaccionales, el kit de marca, las landings públicas para partners y las piezas impresas para eventos — cada uno en su propio modo, detrás del mismo acceso.",
      },
      { kind: "image", image: emailsImage },
      { kind: "image", image: brandImage },
      { kind: "image", image: landingsImage },
      { kind: "image", image: eventsImage },
      { kind: "divider" },
      {
        kind: "checklist",
        items: [
          {
            label: "Correo corporativo + código de un solo uso:",
            body:
              "solo las direcciones de Karta pueden crear una cuenta, y sin el código que llega a ese buzón nadie entra.",
          },
          {
            label: "Cada descarga, registrada:",
            body:
              "quién descargó qué pieza, en qué idioma y formato — la trazabilidad que piden compliance y SOC 2.",
          },
          {
            label: "Nada que perseguir:",
            body:
              "sin adjuntos con versiones viejas; el equipo comparte la pieza vigente o su enlace.",
          },
        ],
      },
    ],
  },
  result: {
    heading: "Una sola fuente de verdad para ventas y partners",
    stats: [
      {
        value: "144",
        label: "PDFs siempre vigentes",
        caption: "Cada pieza en tres idiomas, digital y A4, regenerada desde una sola fuente.",
        icon: { kind: "illustration", scene: "sync", alt: "Siempre sincronizado" },
      },
      {
        value: "4",
        label: "mercados alineados",
        caption: "8–10 personas en EE. UU., Brasil, México y Argentina trabajando con los mismos materiales.",
        icon: { kind: "illustration", scene: "unify", alt: "Un solo equipo" },
      },
      {
        value: "100%",
        label: "descargas registradas",
        caption: "Acceso corporativo con código de un solo uso; cada descarga registrada para compliance.",
        icon: { kind: "illustration", scene: "certified", alt: "Trazabilidad" },
      },
    ],
  },
};
