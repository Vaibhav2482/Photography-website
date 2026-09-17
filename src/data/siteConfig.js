// Central place to rebrand the whole site. Replace every value here with the
// real studio's details — nothing else in the codebase needs to change.
import { img } from "../lib/img";

export const siteConfig = {
  businessName: "Akash Nawle Films",
  photographerName: "Akash Nawle",
  shortName: "Akash Nawle Films",
  // Adapted from the real Instagram bio ("We promise to turn your moments
  // into memories... Available worldwide for wedding, pre-wedding, wedding
  // films & photography").
  tagline: "Turning your moments into memories — wedding films and photography, available worldwide.",
  // Location and email are still placeholder — waiting on the real details.
  location: "India — available worldwide",
  email: "hello@akashnawlefilms.example",
  phone: "+91 85528 35297",
  instagram: "https://www.instagram.com/akash.nawle_photo_films",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/akash.nawle_photo_films" },
    { label: "YouTube", href: "https://www.youtube.com/@AkashNawlefilms_1" },
  ],
  heroImage: img("1465495976277-4387d4b0b4c6", { w: 2400 }),
  heroSlides: [
    img("1465495976277-4387d4b0b4c6", { w: 2400 }),
    img("1583939003579-730e3918a45a", { w: 2400 }),
    img("1502635385003-ee1e6a1a742d", { w: 2400 }),
    img("1519741497674-611481863552", { w: 2400 }),
    img("1523438885200-e635ba2c371e", { w: 2400 }),
  ],
  founded: 2013,
  yearsActive: new Date().getFullYear() - 2013,
};

export const navLinks = [
  { label: "Work", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
