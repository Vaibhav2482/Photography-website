import { img } from "../lib/img";
import confettiCelebration from "../assets/images/portfolio/confetti-celebration.jpg";
import sunsetSareePortrait from "../assets/images/portfolio/sunset-saree-portrait.jpg";
import editorialCarShoot from "../assets/images/portfolio2/editorial-car-shoot-1.jpg";

// Edit freely — title, description, and the four `details` bullets are the
// only copy that needs to change to reflect real service offerings.
export const services = [
  {
    slug: "wedding",
    number: "01",
    title: "Wedding Photography",
    short: "Documentary coverage of the day as it actually unfolds.",
    description:
      "A full day of unobtrusive, editorial coverage — from the first quiet hours of getting ready through the last dance. No forced poses, no interrupted moments.",
    details: [
      "Full-day or multi-day coverage",
      "Second shooter available",
      "Private online gallery",
      "Fine-art album on request",
    ],
    image: confettiCelebration,
  },
  {
    slug: "portrait",
    number: "02",
    title: "Portrait Photography",
    short: "Personal and professional portraits with a cinematic edge.",
    description:
      "Studio or on-location sessions built around natural light and genuine expression — for individuals, founders, and creative professionals.",
    details: [
      "Studio or on-location",
      "Wardrobe & posing guidance",
      "Retouched high-res files",
      "Print-ready exports",
    ],
    image: sunsetSareePortrait,
  },
  {
    slug: "fashion",
    number: "03",
    title: "Fashion Photography",
    short: "Editorial imagery for designers, brands, and collections.",
    description:
      "Concept-driven shoots for lookbooks, campaigns, and editorials — built in close collaboration with stylists, MUAs, and creative directors.",
    details: [
      "Studio & location scouting",
      "Creative direction support",
      "Team coordination",
      "Usage-ready delivery formats",
    ],
    image: editorialCarShoot,
  },
  {
    slug: "event",
    number: "04",
    title: "Event Photography",
    short: "Discreet, thorough coverage of the moments that matter.",
    description:
      "From product launches to private celebrations — coverage that captures atmosphere, guests, and detail without ever getting in the way.",
    details: [
      "Corporate & private events",
      "Rapid-turnaround previews",
      "On-site backup equipment",
      "Same-week gallery delivery",
    ],
    image: img("1492684223066-81342ee5ff30", { w: 1600 }),
  },
  {
    slug: "commercial",
    number: "05",
    title: "Commercial Photography",
    short: "Product, interior, and brand imagery for modern businesses.",
    description:
      "High-production imagery for advertising, hospitality, architecture, and product brands — shot to spec for web, print, and campaign use.",
    details: [
      "Product & interior photography",
      "Full usage licensing",
      "Art direction & mood boards",
      "Fast commercial turnaround",
    ],
    image: img("1487958449943-2429e8be8625", { w: 1600 }),
  },
];
