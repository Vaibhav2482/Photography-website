import { img } from "../lib/img";
import editorialBwSamikshaNikhil from "../assets/images/portfolio/editorial-bw-samiksha-nikhil.jpg";
import coupleClosePortrait from "../assets/images/portfolio/couple-close-portrait.jpg";
import bwRingExchange from "../assets/images/portfolio/bw-ring-exchange.jpg";
import greenFoliageEmbrace from "../assets/images/portfolio/green-foliage-embrace.jpg";
import familyChandelier from "../assets/images/portfolio/family-chandelier.jpg";
import confettiCelebration from "../assets/images/portfolio/confetti-celebration.jpg";
import bwBridalSayali from "../assets/images/portfolio/bw-bridal-sayali.jpg";
import sunsetSareePortrait from "../assets/images/portfolio/sunset-saree-portrait.jpg";
import redVeilBride from "../assets/images/portfolio/red-veil-bride.jpg";

// Portfolio content. Add, remove, or reorder freely — the grid and detail
// pages both read straight from this array.
//
// The Wedding and Portrait entries below use real client work pulled from
// the studio's own Instagram. Fashion, Event, and Commercial still use
// stock placeholder imagery — there's no real client work in those
// categories yet, so replace them once there is.
export const projects = [
  {
    slug: "samiksha-nikhil-wedding",
    category: "Wedding",
    title: "Samiksha & Nikhil",
    location: "India",
    year: "2026",
    cover: editorialBwSamikshaNikhil,
    gallery: [editorialBwSamikshaNikhil],
    description: "An editorial portrait from Samiksha & Nikhil's wedding day.",
  },
  {
    slug: "sayali-bridal-portrait",
    category: "Portrait",
    title: "Sayali",
    location: "India",
    year: "2026",
    cover: bwBridalSayali,
    gallery: [bwBridalSayali],
    description: "A bridal portrait session with Sayali.",
  },
  {
    slug: "real-weddings-real-moments",
    category: "Wedding",
    title: "Real Weddings, Real Moments",
    location: "India",
    year: "2026",
    cover: confettiCelebration,
    gallery: [confettiCelebration, coupleClosePortrait, bwRingExchange, greenFoliageEmbrace, familyChandelier],
    description:
      "A running collection of unscripted moments from real weddings — no two days alike, and no forced poses.",
  },
  {
    slug: "golden-hour-portraits",
    category: "Portrait",
    title: "Golden Hour",
    location: "India",
    year: "2026",
    cover: sunsetSareePortrait,
    gallery: [sunsetSareePortrait, redVeilBride],
    description: "Natural-light portraits, shot in the last hour before sunset.",
  },
  {
    slug: "atelier-noir-ss25",
    category: "Fashion",
    title: "Atelier Noir — SS25",
    location: "Location on request",
    year: "2025",
    cover: img("1470259078422-826894b933aa", { w: 1800 }),
    gallery: [
      img("1470259078422-826894b933aa", { w: 1800 }),
      img("1529626455594-4ff0802cfb7e", { w: 1800 }),
      img("1503341504253-dff4815485f1", { w: 1800 }),
    ],
    description:
      "Placeholder — stock imagery standing in until there's real fashion client work to show here.",
  },
  {
    slug: "lakeside-product-launch",
    category: "Event",
    title: "Lakeside Product Launch",
    location: "Location on request",
    year: "2025",
    cover: img("1470753937643-efeb931202a9", { w: 1800 }),
    gallery: [
      img("1470753937643-efeb931202a9", { w: 1800 }),
      img("1492684223066-81342ee5ff30", { w: 1800 }),
      img("1519744792095-2f2205e87b6f", { w: 1800 }),
    ],
    description:
      "Placeholder — stock imagery standing in until there's real event client work to show here.",
  },
  {
    slug: "de-luca-hospitality-group",
    category: "Commercial",
    title: "De Luca Hospitality Group",
    location: "Location on request",
    year: "2025",
    cover: img("1445019980597-93fa8acb246c", { w: 1800 }),
    gallery: [
      img("1445019980597-93fa8acb246c", { w: 1800 }),
      img("1487958449943-2429e8be8625", { w: 1800 }),
      img("1497366216548-37526070297c", { w: 1800 }),
      img("1441984904996-e0b6ba687e04", { w: 1800 }),
    ],
    description:
      "Placeholder — stock imagery standing in until there's real commercial client work to show here.",
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
