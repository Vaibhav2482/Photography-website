import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { navLinks } from "../data/siteConfig";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const threshold = isHome ? window.innerHeight * 0.7 : 24;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;
  const textClass = transparent ? "text-paper" : "text-ink";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent ? "bg-transparent" : "border-b border-ink/10 bg-paper/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 sm:px-10 sm:py-5 lg:py-6">
          <NavLink to="/" aria-label="Home" className={`transition-colors duration-300 ${textClass}`}>
            <Logo className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20" light={transparent} />
          </NavLink>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className={`flex items-center gap-8 lg:gap-10 transition-colors duration-300 ${textClass}`}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `tracked-caps relative pb-1 text-[10px] tracking-[0.24em] transition-all duration-300 hover:opacity-100 ${
                        isActive ? "opacity-100" : "opacity-70"
                      } after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 ${
                        isActive ? "after:scale-x-100" : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`relative z-10 flex h-8 w-9 flex-col items-end justify-center gap-[6px] transition-colors duration-300 md:hidden ${
              menuOpen ? "text-paper" : textClass
            }`}
          >
            <span
              className={`h-px bg-current transition-all duration-300 ${
                menuOpen ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"
              }`}
            />
            <span
              className={`h-px bg-current transition-all duration-300 ${
                menuOpen ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"
              }`}
            />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
