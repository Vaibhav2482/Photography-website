import { img } from "../lib/img";

// Portfolio content. Add, remove, or reorder freely — the grid and detail
// pages both read straight from this array.
export const projects = [
  {
    slug: "amalfi-coast-wedding",
    category: "Wedding",
    title: "Amalfi Coast Wedding",
    location: "Positano, Italy",
    year: "2025",
    cover: img("1583939003579-730e3918a45a", { w: 1800 }),
    gallery: [
      img("1583939003579-730e3918a45a", { w: 1800 }),
      img("1519741497674-611481863552", { w: 1800 }),
      img("1606800052052-a08af7148866", { w: 1800 }),
      img("1509927083803-4bd519298ac4", { w: 1800 }),
    ],
    description:
      "Three days on the Amalfi coastline, following an intimate ceremony from a clifftop villa through to a torch-lit reception on the water.",
  },
  {
    slug: "founder-portraits-milan",
    category: "Portrait",
    title: "Founder Portraits",
    location: "Milan, Italy",
    year: "2025",
    cover: img("1519699047748-de8e457a634e", { w: 1800 }),
    gallery: [
      img("1519699047748-de8e457a634e", { w: 1800 }),
      img("1548142813-c348350df52b", { w: 1800 }),
      img("1508214751196-bcfd4ca60f91", { w: 1800 }),
    ],
    description:
      "A portrait series for a Milan-based venture studio, shot across three founders' working spaces to keep the imagery grounded and specific.",
  },
  {
    slug: "atelier-noir-ss25",
    category: "Fashion",
    title: "Atelier Noir — SS25",
    location: "Paris, France",
    year: "2025",
    cover: img("1470259078422-826894b933aa", { w: 1800 }),
    gallery: [
      img("1470259078422-826894b933aa", { w: 1800 }),
      img("1529626455594-4ff0802cfb7e", { w: 1800 }),
      img("1503341504253-dff4815485f1", { w: 1800 }),
    ],
    description:
      "Lookbook imagery for Atelier Noir's Spring/Summer 2025 collection, shot on location across three Parisian studios over two days.",
  },
  {
    slug: "lakeside-product-launch",
    category: "Event",
    title: "Lakeside Product Launch",
    location: "Lake Como, Italy",
    year: "2024",
    cover: img("1470753937643-efeb931202a9", { w: 1800 }),
    gallery: [
      img("1470753937643-efeb931202a9", { w: 1800 }),
      img("1492684223066-81342ee5ff30", { w: 1800 }),
      img("1519744792095-2f2205e87b6f", { w: 1800 }),
    ],
    description:
      "Full-day coverage of a private product launch on Lake Como — guest arrivals, the presentation, and the evening reception.",
  },
  {
    slug: "de-luca-hospitality-group",
    category: "Commercial",
    title: "De Luca Hospitality Group",
    location: "Lake Garda, Italy",
    year: "2024",
    cover: img("1445019980597-93fa8acb246c", { w: 1800 }),
    gallery: [
      img("1445019980597-93fa8acb246c", { w: 1800 }),
      img("1487958449943-2429e8be8625", { w: 1800 }),
      img("1497366216548-37526070297c", { w: 1800 }),
      img("1441984904996-e0b6ba687e04", { w: 1800 }),
    ],
    description:
      "Interior and architectural photography for a boutique hospitality group's flagship property, shot for web and print collateral.",
  },
  {
    slug: "tuscan-vineyard-wedding",
    category: "Wedding",
    title: "Tuscan Vineyard Wedding",
    location: "Chianti, Italy",
    year: "2024",
    cover: img("1502635385003-ee1e6a1a742d", { w: 1800 }),
    gallery: [
      img("1502635385003-ee1e6a1a742d", { w: 1800 }),
      img("1523438885200-e635ba2c371e", { w: 1800 }),
      img("1550005809-91ad75fb315f", { w: 1800 }),
    ],
    description:
      "An autumn wedding among the vineyards of Chianti — golden hour ceremony, long-table dinner, and dancing until the early hours.",
  },
  {
    slug: "studio-portrait-series",
    category: "Portrait",
    title: "Studio Portrait Series",
    location: "Milan, Italy",
    year: "2024",
    cover: img("1524504388940-b1c1722653e1", { w: 1800 }),
    gallery: [
      img("1524504388940-b1c1722653e1", { w: 1800 }),
      img("1517841905240-472988babdf9", { w: 1800 }),
      img("1508214751196-bcfd4ca60f91", { w: 1800 }),
    ],
    description:
      "A personal studio series exploring hard directional light and negative space — an ongoing body of work between commissioned projects.",
  },
  {
    slug: "riviera-campaign",
    category: "Fashion",
    title: "Riviera Campaign",
    location: "Nice, France",
    year: "2023",
    cover: img("1533105079780-92b9be482077", { w: 1800 }),
    gallery: [
      img("1533105079780-92b9be482077", { w: 1800 }),
      img("1503341504253-dff4815485f1", { w: 1800 }),
      img("1529626455594-4ff0802cfb7e", { w: 1800 }),
    ],
    description:
      "A summer campaign for an independent swimwear label, shot along the Riviera coastline over a single golden-hour session.",
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
