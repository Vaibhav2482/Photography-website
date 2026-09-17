// Central place to rebrand the whole site. Replace every value here with the
// real studio's details — nothing else in the codebase needs to change.
import bridalJewelryKiss from "../assets/images/portfolio/bridal-jewelry-kiss.jpg";

export const siteConfig = {
  businessName: "Akash Nawle Films",
  photographerName: "Akash Nawle",
  shortName: "Akash Nawle Films",
  // Adapted from the real Instagram bio ("We promise to turn your moments
  // into memories... Available worldwide for wedding, pre-wedding, wedding
  // films & photography").
  tagline: "Turning your moments into memories — wedding films and photography, available worldwide.",
  location: "India",
  email: "hello@akashnawlefilms.com",
  phone: "+91 85528 35297",
  instagram: "https://www.instagram.com/akash.nawle_photo_films",
  instagramHandle: "@akash.nawle_photo_films",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/akash.nawle_photo_films" },
    { label: "YouTube", href: "https://www.youtube.com/@AkashNawlefilms_1" },
  ],
  // Real client work from the studio's own Instagram.
  heroImage: bridalJewelryKiss,
  founded: 2013,
  yearsActive: new Date().getFullYear() - 2013,
};

export const navLinks = [
  { label: "Work", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
