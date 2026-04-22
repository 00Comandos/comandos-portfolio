import type { CaseStudyContent, ContentImage } from "./types";
import { spotfinderImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(spotfinderImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("spotfinder-comandos-studio-detail.png"),
  alt: "Spotfinder IoT puck hardware installed in a Puerto Rico shopping-mall parking bay — low-profile metallic disc with Spotfinder wordmark and ultrasonic sensor vents sitting on concrete below two cars on a yellow-striped parking lane",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("comandos-spotfinder-spotZero.png"),
  alt: "Original Spotfinder IoT hardware v1 held in hand — bulky grey plastic puck with engraved Spotfinder logo, the incumbent industrial design before the Comandos redesign broke it down to a small, wireless, economical unit",
};

// ———— Adventure ————
const marketingHeroImage: ContentImage = {
  kind: "image",
  image: img("spotfinder-comandos-project-01.png"),
  alt: "Spotfinder marketing hero on web — Find and reserve your parking in a effective way headline with a purple shopping-mall garage backdrop, Based on Spotfinder ExpertⓇ patented solution badge, Know more CTA and the Spotfinder mobile app showing the Nivel Planta Baja floor with live parking availability",
};

const parkingLotImage: ContentImage = {
  kind: "image",
  image: img("spotfinder-comandos-project-02.png"),
  alt: "Aerial view of a Puerto Rico shopping-mall parking lot with dozens of cars across multiple lanes — the high-density, tourist-heavy context where 76% of citizens own a vehicle and where Spotfinder had to solve the 1-hour parking search",
};

const prototype3dImage: ContentImage = {
  kind: "image",
  image: img("comandos-spotfinder-prototype-3d.png"),
  alt: "Spotfinder IoT hardware v2 exploded 3D render in AutoDesk Inventor — low-profile black cap lifted above a red-accent base with a yellow power module inside, a compact wireless puck redesigned for economical large-scale reproduction",
};

const prototypePrinterImage: ContentImage = {
  kind: "image",
  image: img("comandos-spotfinder-prototype01.png"),
  alt: "Spotfinder hardware v2 being 3D-printed — black honeycomb-infill enclosure mid-print on an FDM 3D printer, the rapid-prototyping loop the Comandos industrial designer and Electronics Engineer used to iterate on energy usage in weeks instead of months",
};

const appScreensImage: ContentImage = {
  kind: "image",
  image: img("app-spotfinder-comandos-project.png"),
  alt: "Spotfinder mobile app key screens — Selecciona tu lugar parking-floor picker with Nivel Planta Baja zones (Zona A–D) and a live reserved orange car, Steps left / Time left turn-by-turn map navigation to the mall and a processing state illustration telling the user Estamos procesando la ubicación de tu vehículo",
  caption:
    "Key points of Spotfinder — select your parking, guide your way to the mall or stadium and locate where you parked in case you forget.",
};

// ———— Worth ————
const hardwareAndSoftwareImage: ContentImage = {
  kind: "image",
  image: img("spotfinder-hardwareAndSoftware-comandos-project.png"),
  alt: "Spotfinder final result montage — iPhone showing augmented-reality wayfinding arrows on the mall floor with the Spotfinder app, alongside the New hardware design (black low-profile puck) and New electronic design (custom Spotfinder PCB) cards, the full redesigned IoT + software experience",
};

export const spotfinder: CaseStudyContent = {
  slug: "spotfinder",
  kicker: "Parking — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/spotfinder-logo.svg",
    alt: "Spotfinder",
    height: 44,
  },
  hero: {
    image: heroImage,
    intro:
      "Spotfinder is an effort to control the availability of parking spaces in shopping malls, stadiums and very large amusement parks. Booking FREE parking with an integration with Google Maps and augmented reality was a big part of what we managed to create for Spotfinder, going through a redesign of its hardware.",
  },
  challenge: {
    heading: "A product with its own hardware",
    body:
      "In very large and crowded places it can take a person up to 1 hour to find a parking space. So why not reserve it for a limited time and guide you to the place?",
    ctaLabel: "I want to grow as Spotfinder",
    results: [
      "Hardware and digital product redesign in 6 months.",
      "A pilot with 100 parking lots.",
      "19% conversion.",
    ],
    team: [
      { label: "2 developers" },
      { label: "1 product designer", badge: "by Comandos" },
      { label: "1 industrial designer" },
      { label: "1 Electronic Engineer" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "Where do we stand?",
    blocks: [
      {
        kind: "image-grid",
        columns: 2,
        images: [marketingHeroImage, parkingLotImage],
      },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "We realized that Spotfinder had a great opportunity in the standalone parking availability indicator market but that they had a poor hardware design and their mobile application did not have a good user experience, which is vital in the product adoption process.\n\nConsidering that in Puerto Rico (country of implementation) approximately **76% of citizens own a vehicle,** we knew we had to target hardware **optimization and application value for these drivers.**",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "Considering what to focus on",
        body:
          "After hitting the neurons, **we identified 3 opportunities that help us make a positive impact.**",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "User habits:",
            body: "What is the most frequented mall by drivers?",
          },
          {
            label: "Leads acquisition:",
            body: "Do drivers know about free parking tools that will save them time?",
          },
          {
            label: "Social Selling:",
            body:
              "Why would they adopt this product — are they waiting for just a parking app or a super app before they adopt it?",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "Start at the heart of it all",
        body:
          "With permission to break whatever it took, we redesigned from scratch the hardware needed for Spotfinder App to work properly. The rules? It had to be small, with enough autonomy to avoid wires and very economical to reproduce on a large scale.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [prototypePrinterImage, prototype3dImage],
      },
      {
        kind: "caption",
        text:
          "The first prototypes were with a 3D printer and a lot of AutoDesk Inventor while the Electronics Engineer on our team worked on a custom design of the new electronics.",
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "An application with super powers",
        body:
          "We have apps for everything and users didn't want to download just another app. We set out to create a product that offered much more than its promise of value. What is the real value? What is a nice-to-have?",
      },
      { kind: "image", image: appScreensImage },
      {
        kind: "heading",
        heading: "",
        body:
          "Understanding the users' routine was key to develop what was needed for this version. **Our recurring question was: When you go to the mall or the Choliseo PR and you have a magic wand, what would you like to solve?**",
      },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "A result we are proud of",
        body:
          "In 6 months, we redesigned the entire parking space booking experience into a low-cost experience. We invested 2 weeks in hardware iteration to optimize energy usage with the help of 3D printers that allowed us to have control of the whole process. And the app? a cool app with augmented reality.",
      },
      { kind: "image", image: hardwareAndSoftwareImage },
    ],
  },
  result: {
    heading: "A redesigned IoT puck and an AR app drivers actually wanted",
    stats: [
      {
        value: "100",
        label: "parking spaces pilot",
        caption:
          "A pilot rolled out across 100 parking spaces in Puerto Rico shopping malls — the first real-world proof for the redesigned Spotfinder hardware.",
        icon: {
          kind: "illustration",
          scene: "parking",
          alt: "A pilot with 100 parking spaces",
        },
      },
      {
        value: "+52%",
        label: "leads acquisition / retention",
        caption:
          "In the first 3 weeks we achieved +52% retention of users who tried the app — the IoT activation rate that closed the product-adoption loop.",
        icon: {
          kind: "illustration",
          scene: "activate",
          alt: "+52% IoT activation rate — Spotfinder puck connecting to the app",
        },
      },
      {
        value: "AR",
        label: "Social Selling for tourists",
        caption:
          "We focused the experience on tourists who, not knowing the city, downloaded the app and took advantage of augmented reality to find their way.",
        icon: {
          kind: "illustration",
          scene: "wayfind",
          alt: "Social Selling — AR wayfinding arrows guiding tourists to their parking spot",
        },
      },
    ],
  },
};
