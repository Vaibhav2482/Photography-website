import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../lib/gsap";
import { services } from "../data/services";

/**
 * Editorial list of services; on desktop, hovering a row floats a matching
 * image thumbnail beside the cursor. Touch/small screens just get the list.
 */
export default function ServicesPreviewList({ theme = "light" }) {
  const imgWrapRef = useRef(null);
  const quickRef = useRef({ x: null, y: null });
  const [activeIndex, setActiveIndex] = useState(null);
  const isDark = theme === "dark";

  const handleMove = (e) => {
    if (!quickRef.current.x) {
      quickRef.current.x = gsap.quickTo(imgWrapRef.current, "x", { duration: 0.5, ease: "power3.out" });
      quickRef.current.y = gsap.quickTo(imgWrapRef.current, "y", { duration: 0.5, ease: "power3.out" });
    }
    quickRef.current.x(e.clientX);
    quickRef.current.y(e.clientY);
  };

  return (
    <div onMouseMove={handleMove} className="relative">
      <ul
        className={`divide-y border-y ${
          isDark ? "divide-paper/15 border-paper/15" : "divide-ink/10 border-ink/10"
        }`}
      >
        {services.map((service, i) => (
          <li key={service.slug}>
            <Link
              to="/services"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group flex items-baseline justify-between gap-6 py-7 transition-colors duration-300 hover:text-maroon"
            >
              <span className="flex items-baseline gap-5 sm:gap-8">
                <span className={`tracked-caps text-xs ${isDark ? "text-paper/50" : "text-muted"}`}>
                  {service.number}
                </span>
                <span className="font-display text-2xl uppercase sm:text-4xl">{service.title}</span>
              </span>
              <span
                aria-hidden="true"
                className="hidden text-lg transition-transform duration-300 group-hover:translate-x-1 sm:block"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={imgWrapRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-56 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xs sm:block"
        style={{ opacity: activeIndex === null ? 0 : 1, transition: "opacity 0.35s ease" }}
      >
        {services.map((service, i) => (
          <img
            key={service.slug}
            src={service.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
            style={{ opacity: activeIndex === i ? 1 : 0 }}
          />
        ))}
      </div>
    </div>
  );
}
