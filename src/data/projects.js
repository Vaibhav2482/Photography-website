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
import shubhamAishwaryaSignage from "../assets/images/portfolio2/shubham-aishwarya-signage.jpg";
import sapphireCoupleLaughing from "../assets/images/portfolio2/sapphire-couple-laughing.jpg";
import sapphireCoupleForeheadKiss from "../assets/images/portfolio2/sapphire-couple-forehead-kiss.jpg";
import sapphireCoupleWall from "../assets/images/portfolio2/sapphire-couple-wall.jpg";
import editorialCarShoot1 from "../assets/images/portfolio2/editorial-car-shoot-1.jpg";
import editorialCarShoot2 from "../assets/images/portfolio2/editorial-car-shoot-2.jpg";
import gardenBlessingCouple from "../assets/images/portfolio2/garden-blessing-couple.jpg";

// Each real photo below is used in exactly one place across the whole
// site — check siteConfig.js, services.js, and About.jsx before reusing
// one here, and don't reuse one already used there.

// Portfolio content — every entry here is real client work, grouped into
// a handful of substantial galleries rather than scattered single-photo
// cards. Add, remove, or reorder freely; the grid and detail pages both
// read straight from this array. There's no Event or Commercial work yet
// (see the Services page for those as offerings, not portfolio proof) —
// add entries for those categories here once there's real work to show.
export const projects = [
  {
    slug: "shubham-aishwarya-wedding",
    category: "Wedding",
    title: "Shubham & Aishwarya",
    location: "India",
    year: "2026",
    cover: shubhamAishwaryaDance,
    gallery: [shubhamAishwaryaDance, shubhamAishwaryaSignage],
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
    slug: "real-weddings-real-moments",
    category: "Wedding",
    title: "Real Weddings, Real Moments",
    location: "India",
    year: "2026",
    cover: editorialBwSamikshaNikhil,
    gallery: [
      editorialBwSamikshaNikhil,
      aishwaryaShlok,
      gardenBlessingCouple,
      coupleClosePortrait,
      greenFoliageEmbrace,
    ],
    description:
      "A running collection of unscripted moments from real weddings — no two days alike, and no forced poses.",
  },
  {
    slug: "portrait-sessions",
    category: "Portrait",
    title: "Portrait Sessions",
    location: "India",
    year: "2026",
    cover: bwBridalSayali,
    gallery: [bwBridalSayali, redVeilBride],
    description: "Individual portrait sessions — studio discipline, natural light, no two alike.",
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
