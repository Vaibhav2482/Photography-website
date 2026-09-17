import { ArrowUp, Camera, SquarePlay } from "lucide-react";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import { navLinks, siteConfig } from "../data/siteConfig";

// lucide-react no longer ships trademarked brand marks, so these are
// generic stand-ins — swap for real brand SVGs if that matters to you.
const SOCIAL_ICONS = { Instagram: Camera, YouTube: SquarePlay };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="border-b border-ink/10 px-6 py-10 text-center sm:px-10">
        <p className="tracked-caps mb-3 text-xs text-muted">Follow along</p>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noreferrer"
          className="font-display text-3xl uppercase transition-opacity hover:opacity-60 sm:text-4xl"
        >
          {siteConfig.instagramHandle}
        </a>
      </div>

      <div className="px-6 pb-8 pt-16 sm:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-[auto_1.1fr_0.8fr_0.8fr_1.1fr]">
          <Logo className="h-20 w-20" />

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

          <div>
            <p className="tracked-caps mb-4 text-xs text-muted">Stay up to date</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-[1600px] flex-col gap-4 border-t border-ink/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
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
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-ink hover:text-ink"
            >
              <ArrowUp size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
