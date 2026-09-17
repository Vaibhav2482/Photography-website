import { img } from "../lib/img";
import editorialBwSamikshaNikhil from "../assets/images/portfolio/editorial-bw-samiksha-nikhil.jpg";
import coupleClosePortrait from "../assets/images/portfolio/couple-close-portrait.jpg";
import greenFoliageEmbrace from "../assets/images/portfolio/green-foliage-embrace.jpg";
import bwBridalSayali from "../assets/images/portfolio/bw-bridal-sayali.jpg";
import redVeilBride from "../assets/images/portfolio/red-veil-bride.jpg";
import aishwaryaShlok from "../assets/images/portfolio/aishwarya-shlok.jpg";

import nightGardenCouple from "../assets/images/portfolio2/night-garden-couple.jpg";
import nightGardenBrideProfile from "../assets/images/portfolio2/night-garden-bride-profile.jpg";
import nightGardenGroom from "../assets/images/portfolio2/night-garden-groom.jpg";
import nightGardenBrideEarring from "../assets/images/portfolio2/night-garden-bride-earring.jpg";
import aaryaStaircase1 from "../assets/images/portfolio2/aarya-staircase-1.jpg";
import aaryaStaircase2 from "../assets/images/portfolio2/aarya-staircase-2.jpg";
import aaryaStaircase3 from "../assets/images/portfolio2/aarya-staircase-3.jpg";
import shubhamAishwaryaDance from "../assets/images/portfolio2/shubham-aishwarya-dance.jpg";
import sapphireCoupleLaughing from "../assets/images/portfolio2/sapphire-couple-laughing.jpg";
import sapphireCoupleForeheadKiss from "../assets/images/portfolio2/sapphire-couple-forehead-kiss.jpg";
import sapphireCoupleWall from "../assets/images/portfolio2/sapphire-couple-wall.jpg";
import editorialCarShoot1 from "../assets/images/portfolio2/editorial-car-shoot-1.jpg";
import editorialCarShoot2 from "../assets/images/portfolio2/editorial-car-shoot-2.jpg";
import gardenBlessingCouple from "../assets/images/portfolio2/garden-blessing-couple.jpg";

// Each real photo below is used in exactly one place across the whole
// site — check siteConfig.js, services.js, and About.jsx before reusing
// one here, and don't reuse one already used there.

// Portfolio content. Add, remove, or reorder freely — the grid and detail
// pages both read straight from this array.
//
// Everything except Event and Commercial is real client work now. Those
// two still use stock placeholder imagery — there's no real client work
// in those categories yet, so replace them once there is.
export const projects = [
  {
    slug: "shubham-aishwarya-wedding",
    category: "Wedding",
    title: "Shubham & Aishwarya",
    location: "India",
    year: "2026",
    cover: shubhamAishwaryaDance,
    gallery: [shubhamAishwaryaDance],
    description: "A joyful entrance at Shubham & Aishwarya's wedding reception.",
  },
  {
    slug: "aarya-portrait",
    category: "Portrait",
    title: "Aarya",
    location: "India",
    year: "2026",
    cover: aaryaStaircase1,
    gallery: [aaryaStaircase1, aaryaStaircase2, aaryaStaircase3],
    description: "A quiet staircase portrait session with Aarya, shot in natural window light.",
  },
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
    slug: "an-evening-under-the-arches",
    category: "Wedding",
    title: "An Evening Under the Arches",
    location: "India",
    year: "2026",
    cover: nightGardenBrideProfile,
    gallery: [nightGardenCouple, nightGardenBrideProfile, nightGardenGroom, nightGardenBrideEarring],
    description: "Night portraits from a garden wedding, built entirely around the venue's own lighting.",
  },
  {
    slug: "a-quiet-moment",
    category: "Wedding",
    title: "A Quiet Moment",
    location: "India",
    year: "2026",
    cover: sapphireCoupleForeheadKiss,
    gallery: [sapphireCoupleLaughing, sapphireCoupleForeheadKiss, sapphireCoupleWall],
    description: "Reception portraits between a couple who kept forgetting the camera was there.",
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
    slug: "aishwarya-shlok-wedding",
    category: "Wedding",
    title: "Aishwarya & Shlok",
    location: "India",
    year: "2025",
    cover: aishwaryaShlok,
    gallery: [aishwaryaShlok],
    description: "A wedding-day portrait of Aishwarya & Shlok.",
  },
  {
    slug: "off-duty",
    category: "Fashion",
    title: "Off Duty",
    location: "India",
    year: "2026",
    cover: editorialCarShoot1,
    gallery: [editorialCarShoot1, editorialCarShoot2],
    description: "A black-and-white editorial session — sunglasses, an open car door, and late afternoon light.",
  },
  {
    slug: "garden-blessing",
    category: "Wedding",
    title: "A Garden Blessing",
    location: "India",
    year: "2026",
    cover: gardenBlessingCouple,
    gallery: [gardenBlessingCouple],
    description: "A quiet blessing between ceremonies, caught in passing.",
  },
  {
    slug: "real-weddings-real-moments",
    category: "Wedding",
    title: "Real Weddings, Real Moments",
    location: "India",
    year: "2026",
    cover: coupleClosePortrait,
    gallery: [coupleClosePortrait, greenFoliageEmbrace],
    description:
      "A running collection of unscripted moments from real weddings — no two days alike, and no forced poses.",
  },
  {
    slug: "golden-hour-portraits",
    category: "Portrait",
    title: "Golden Hour",
    location: "India",
    year: "2026",
    cover: redVeilBride,
    gallery: [redVeilBride],
    description: "A natural-light bridal portrait, shot in the last hour before sunset.",
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
