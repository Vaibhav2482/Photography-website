import { Briefcase, Camera, Clapperboard } from "lucide-react";
import Logo from "./Logo";
import { navLinks, siteConfig } from "../data/siteConfig";

// lucide-react no longer ships trademarked brand marks, so these are
// generic stand-ins — swap for real brand SVGs if that matters to you.
const SOCIAL_ICONS = { Instagram: Camera, Vimeo: Clapperboard, LinkedIn: Briefcase };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper px-6 pb-8 pt-20 sm:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-[auto_1.2fr_1fr_1fr]">
        <Logo className="h-16 w-16" />

        <div>
          <p className="font-display text-2xl uppercase">{siteConfig.businessName}</p>
          <p className="mt-4 max-w-xs text-sm text-muted">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="tracked-caps mb-4 text-xs text-muted">Navigate</p>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <a href={link.to} className="text-sm transition-opacity hover:opacity-60">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tracked-caps mb-4 text-xs text-muted">Contact</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-opacity hover:opacity-60">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="transition-opacity hover:opacity-60"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="text-muted">{siteConfig.location}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1600px] flex-col gap-4 border-t border-ink/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.businessName}. All rights reserved.
        </p>
        <div className="flex gap-5">
          {siteConfig.socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.label];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="transition-colors hover:text-ink"
              >
                {Icon ? <Icon size={16} strokeWidth={1.5} /> : s.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
