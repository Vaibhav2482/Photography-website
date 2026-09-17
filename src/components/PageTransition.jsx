import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap, prefersReducedMotion } from "../lib/gsap";

/**
 * A curtain that snaps into place the instant a route changes (before the
 * browser paints, via useLayoutEffect) so the new page never flashes in,
 * then wipes away to reveal it.
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  const overlayRef = useRef(null);
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (prefersReducedMotion()) return;

    const el = overlayRef.current;
    gsap.set(el, { yPercent: 0 });
    gsap.to(el, {
      yPercent: -100,
      duration: 0.85,
      ease: "power4.inOut",
      delay: 0.05,
    });
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[80] bg-ink"
        style={{ transform: "translateY(-100%)" }}
      />
      {children}
    </>
  );
}
