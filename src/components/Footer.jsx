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
        <p className="tracked-caps mb-3 text-[10px] tracking-[0.24em] text-muted">Follow along</p>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noreferrer"
          className="font-display text-3xl uppercase tracking-[-0.05em] transition-opacity hover:opacity-60 sm:text-4xl"
        >
          {siteConfig.instagramHandle}
        </a>

        <div className="mt-6 flex justify-center gap-3">
          {siteConfig.socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.label];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                {Icon ? <Icon size={19} strokeWidth={1.5} /> : s.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="px-6 pb-8 pt-16 sm:px-10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-[auto_1.1fr_0.8fr_0.8fr_1.1fr] md:gap-14">
          <Logo className="col-span-2 h-20 w-20 md:col-span-1" />

          <div className="col-span-2 md:col-span-1">
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

          <div className="col-span-2 md:col-span-1">
            <p className="tracked-caps mb-4 text-xs text-muted">Stay up to date</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1600px] border-t border-ink/10 pt-6">
          <div className="grid items-center gap-6 text-center text-[10px] uppercase tracking-[0.18em] text-muted sm:grid-cols-[1fr_auto_1fr] sm:gap-4 sm:text-left">
            <p className="justify-self-center tracking-[0.18em] sm:justify-self-start">
              © {year} {siteConfig.businessName}. All rights reserved.
            </p>

            <a
              href="https://my-portfolio-bkj2rsp0x-vaibhav2482s-projects.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-self-center items-center gap-2 text-center transition-all duration-300 hover:text-ink"
              aria-label="Designed and developed by Vaibhav Nawale"
            >
              <span className="text-[9px] tracking-[0.2em] text-muted">
                Designed &amp; Developed by
              </span>
              <span className="font-display text-[0.8rem] tracking-[0.14em] text-ink sm:text-[0.9rem]">
                <span className="font-medium italic tracking-[0.12em] text-ink/80">Vaibhav Nawale</span>
              </span>
            </a>

            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Back to top"
              className="flex h-8 w-8 justify-self-center items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-ink hover:text-ink sm:justify-self-end"
            >
              <ArrowUp size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
