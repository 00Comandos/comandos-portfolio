import type { CaseStudyContent, ContentImage } from "./types";
import { stadioImages, requireImage } from "~/lib/image-map";

const img = (filename: string) => requireImage(stadioImages, filename);

// ———— Hero ————
const heroImage: ContentImage = {
  kind: "image",
  image: img("stadio-app-runners.png"),
  alt: "Stadio My racing feed on iPhone — Last Week tab with Mon Feb 14 2021 and Sat Feb 13 2021 race cards, distance, time and podium-style bar chart per runner",
};

// ———— Challenge ————
const challengeImage: ContentImage = {
  kind: "image",
  image: img("comandos-stadio-app-mainpicture.png"),
  alt: "Stadio running app on Apple Watch — red-sleeve runner with the live race leaderboard showing Orlando Espinoza, Sally Price and Emily Warner, pace per km and elapsed time 00:10:22",
};

// ———— Adventure ————
const sketchesImage: ContentImage = {
  kind: "image",
  image: img("stadio-runners-first-draw-comandos-studio.png"),
  alt: "Stadio first low-resolution paper sketches — handwritten Apple Watch race flow from onboarding to live leaderboard and confirm screen, drafted during the 2020 pandemic",
  caption:
    "The very first Stadio sketches on paper — low-resolution, fast to iterate, built during lockdown.",
};

const testing01Image: ContentImage = {
  kind: "image",
  image: img("stadio-testing-01-comandos-project.png"),
  alt: "Stadio Apple Watch beta test — Building Stadio online virtual races with live race screen showing Orlando Espinoza 0.14 km at 5 m/s vs Javier Flores Ledesma 0.00 km and elapsed 00:01:22",
};

const testing02Image: ContentImage = {
  kind: "image",
  image: img("stadio-testing-02-comandos-project.png"),
  alt: "Stadio Apple Watch WELL DONE celebration — post-race podium on watchOS listing Orlando Espinoza, Adrian Aguilar and Juan Carlos Garza with a Skip action",
};

const userJourneyImage: ContentImage = {
  kind: "image",
  image: img("stadio-runners-userJourney-comandos-project.png"),
  alt: "Stadio user journey map — Free Account, Create Room, Share Room, Running, Results and Satisfaction stages connected as a single loop for Data Analyst instrumentation",
};

const meetingImage: ContentImage = {
  kind: "image",
  image: img("stadio-runners-meeting-comandos-project.png"),
  alt: "Stadio running-app rooms interface on iPhone — Mon Mar 21 2021 scheduled race at 5:00 am with 2 min/km pace and 9 km distance, Orlando Espinoza, Martín Echeverría and +9 international runners invited",
  caption:
    "The rooms interface — where runners schedule a race, set the pace and invite friends across borders.",
};

// ———— Worth ————
const podiumImage: ContentImage = {
  kind: "image",
  image: img("stadio-runners-podium-comandos-project.png"),
  alt: "Stadio post-race leaderboard — You win! podium on iPhone with Orlando Espinoza (Ecuador), Antonio Watle (México), Federico Forestieri (Italia), Isabel Garmendia (USA) and José Bianchi (Chile)",
  caption:
    "The gamified podium after each race — international runners competing head-to-head on a single Stadio room.",
};

const finalDeliveryImage: ContentImage = {
  kind: "image",
  image: img("stadio-runners-finalDelivery-comandos-project.png"),
  alt: "Stadio final Apple Watch delivery — live race screen on the wrist with Orlando Espi., Sally Price and Emily Warner ranked 01/02/03 and 00:10:22 elapsed",
};

export const stadioAppleWatch: CaseStudyContent = {
  slug: "stadio-apple-watch",
  kicker: "Sport — SaaS",
  brandLogo: {
    kind: "public",
    src: "/images/stadio-logo.svg",
    alt: "Stadio",
    height: 32,
  },
  hero: {
    image: heroImage,
    intro:
      "Stadio brings together everything people needed during the pandemic 2020: a place where everyone could be together. Friends who always met up to run together could no longer do so because they were in different countries. What if we created something to run together?",
  },
  challenge: {
    heading: "A product born of the pandemic",
    body:
      "A pandemic, friends who were in different countries and a fervent desire to keep training. How do you get friends and strangers to agree to run for a while? How do you know who completes the challenge first?",
    ctaLabel: "I want to grow as Stadio",
    results: [
      "+30% of registration in the first 2 weeks.",
      "+45% retention after the first race.",
    ],
    team: [
      { label: "1 iOS developers" },
      { label: "1 product designer", badge: "by Comandos" },
    ],
    image: challengeImage,
  },
  adventure: {
    heading: "How do we start this adventure in a pandemic?",
    blocks: [
      { kind: "image", image: sketchesImage },
      {
        kind: "heading",
        heading: "Getting ready: Where are we? and What will we need?",
        body:
          "We started by taking a piece of paper to understand this idea. It was something totally new of a product from scratch. Our first steps were through very low resolution sketches to understand the problem the founders were looking to solve. We focused on acquisition and retention and set a goal to do the first tests in 2 weeks.",
      },
      { kind: "divider" },
      { kind: "chip", icon: "seeing-mountain", label: "Seeing the mountain" },
      {
        kind: "heading",
        heading: "What is the focus of this product?",
        body:
          "Curious about this new product, we focused on 3 key opportunities:",
      },
      {
        kind: "checklist",
        items: [
          {
            label: "Product adoption:",
            body: "Apple Watch or Strava, always ready to run.",
          },
          {
            label: "Retention:",
            body: "How to make the race more exciting?",
          },
          {
            label: "Refer:",
            body:
              "Make a memorable race so that runners would recommend it by word of mouth.",
          },
        ],
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 01",
        heading: "A North Star Metric for Run",
        body:
          "In just 2 weeks we went running with several friends to test a first prototype with some broken things and a couple of bugs. We discovered interesting things the need for runners to create \"something\" where they could create a room and invite acquaintances and strangers.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [testing01Image, testing02Image],
      },
      {
        kind: "caption",
        text:
          "It was quite a magical result. Although the beta testers knew the limitations of the application, they adopted it as part of their daily routine.",
      },
      { kind: "divider", variant: "line" },
      {
        kind: "step",
        step: "STEP 02",
        heading: "Fine-tuning details",
        body:
          "We created and improved a very simple user journey to establish Data Analyst events that would allow us to have control and certainty over the massive use of Stadio. We also started to develop an app to create rooms for brokers and encourage product recommendation.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [userJourneyImage, meetingImage],
      },
      {
        kind: "caption",
        text:
          "We achieved this after 5 weeks of constant iterations and many exhausted runners after their daily workout.",
      },
    ],
  },
  worth: {
    blocks: [
      { kind: "divider" },
      { kind: "chip", icon: "making-top", label: "Making top" },
      {
        kind: "intro",
        heading: "A product developed for Apple and Strava",
        body:
          "We managed to get Stadio up and running in less than the stipulated time thanks to the constant and open collaboration of a growing group of beta testers. The result amazed us all, 30% of new customers in the first 2 weeks.",
      },
      {
        kind: "image-grid",
        columns: 2,
        images: [podiumImage, finalDeliveryImage],
      },
      {
        kind: "caption",
        text:
          "We created additional interfaces to reinforce the gamification process. Who was on the podium for the day?",
      },
    ],
  },
  result: {
    heading: "A multi-platform running app earned by word-of-mouth",
    stats: [
      {
        value: "2",
        label: "platforms shipped",
        caption: "Stadio launched on Apple Watch and Strava from day one.",
        icon: {
          kind: "illustration",
          scene: "sync",
          alt: "Apple Watch and Strava platforms",
        },
      },
      {
        value: "+30%",
        label: "word-of-mouth leads",
        caption:
          "Lead acquisition reached +30% in the first few weeks — all driven by runners recommending Stadio to friends and strangers.",
        icon: {
          kind: "illustration",
          scene: "whisper",
          alt: "Word-of-mouth leads",
        },
      },
      {
        value: "45%",
        label: "retention after first room",
        caption:
          "Runners stayed with Stadio after trying a first race inside an organized room with friends.",
        icon: {
          kind: "illustration",
          scene: "magnet",
          alt: "Retention after first room race",
        },
      },
    ],
  },
};
