import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useGsap } from "../hooks/useGsap";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { navLinks, siteConfig } from "../data/siteConfig";

export default function MobileMenu({ open, onClose }) {
  const panelRef = useRef(null);
  const listRef = useRef(null);

  useGsap(
    () => {
      const links = listRef.current?.querySelectorAll("[data-menu-link]");
      if (prefersReducedMotion()) {
        gsap.set(panelRef.current, { autoAlpha: open ? 1 : 0 });
        return;
      }

      const tl = gsap.timeline({ paused: true });
      tl.set(panelRef.current, { autoAlpha: 1 })
        .fromTo(
          panelRef.current,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut" },
        )
        .fromTo(
          links,
          { yPercent: 120 },
          { yPercent: 0, duration: 0.7, ease: "power4.out", stagger: 0.06 },
          "-=0.25",
        );

      if (open) {
        tl.play();
      } else {
        tl.reverse();
        tl.eventCallback("onReverseComplete", () => gsap.set(panelRef.current, { autoAlpha: 0 }));
      }

      return () => tl.kill();
    },
    [open],
    panelRef,
  );

  return (
    <div
      ref={panelRef}
      className="invisible fixed inset-0 flex flex-col justify-between bg-ink px-6 py-24 text-paper sm:px-12"
      style={{ zIndex: 90 }}
      aria-hidden={!open}
    >
      <nav ref={listRef} aria-label="Mobile">
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <li key={link.to} className="reveal-mask">
              <NavLink
                data-menu-link
                to={link.to}
                onClick={onClose}
                className="font-display block text-5xl uppercase leading-tight sm:text-6xl"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-4 text-sm text-paper/70 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="tracked-caps text-xs text-paper/50">Contact</p>
          <a href={`mailto:${siteConfig.email}`} className="block">
            {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="block">
            {siteConfig.phone}
          </a>
        </div>
        <div className="flex gap-4">
          {siteConfig.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="tracked-caps text-xs">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
