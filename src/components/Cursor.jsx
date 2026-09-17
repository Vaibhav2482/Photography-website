import { useEffect, useRef, useState } from "react";
import { gsap, isTouchDevice, prefersReducedMotion } from "../lib/gsap";

/**
 * Mix-blend-difference dot that follows the pointer and expands into a
 * labelled ring over anything carrying data-cursor="Label". Disabled
 * entirely on touch devices and under prefers-reduced-motion.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  // Resolved synchronously on the very first render (not in an effect) so
  // that when this is true, the ref'd div below exists in the DOM *before*
  // the effect runs and hands its node to gsap.quickTo. Gating the JSX
  // behind a state flip set inside the effect was the actual bug: on that
  // first render `enabled` was still false, the div didn't exist yet,
  // quickTo bound to a null target, and every following mousemove animated
  // nothing — "GSAP target null not found" was firing silently.
  const [enabled] = useState(() => typeof window !== "undefined" && !isTouchDevice() && !prefersReducedMotion());
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!enabled) return undefined;
    document.documentElement.classList.add("cursor-active");

    const xTo = gsap.quickTo(dotRef.current, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(dotRef.current, "y", { duration: 0.45, ease: "power3.out" });

    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    const onOver = (e) => {
      const target = e.target.closest?.("[data-cursor]");
      if (!target) return;
      setActive(true);
      setLabel(target.getAttribute("data-cursor") || "");
    };
    const onOut = (e) => {
      const target = e.target.closest?.("[data-cursor]");
      if (!target) return;
      setActive(false);
      setLabel("");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[100]" aria-hidden="true">
      {/*
        No mix-blend-mode here on purpose: it's the common approach for an
        adaptive cursor, but it silently breaks over <video> — most browsers
        composite video in its own GPU layer that CSS blend modes can't see
        through, so the cursor effectively vanishes over any video hero.
        A dot that carries its own contrast (dark ring + soft shadow) stays
        visible over photos, video, and solid color alike.
      */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-ink/70 bg-paper/95 shadow-[0_2px_14px_rgba(0,0,0,0.35)] transition-[width,height] duration-300 ease-out ${
          active ? "h-20 w-20" : "h-3 w-3"
        }`}
      >
        {active && label ? (
          <span className="tracked-caps text-ink text-[10px] font-medium">{label}</span>
        ) : null}
      </div>
    </div>
  );
}
