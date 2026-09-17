import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { markAppLoaded } from "../lib/appLoad";
import { siteConfig } from "../data/siteConfig";

const SESSION_KEY = "lm-loader-shown";

/** Full-screen curtain shown once per browser session, then lifted for good. */
export default function Loader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem(SESSION_KEY);
  });
  const panelRef = useRef(null);
  const wordRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    if (!visible) {
      markAppLoaded();
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");

    if (prefersReducedMotion()) {
      setVisible(false);
      markAppLoaded();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        markAppLoaded();
      },
    });

    tl.set(barRef.current, { scaleX: 0, transformOrigin: "left" })
      .to(barRef.current, { scaleX: 1, duration: 1, ease: "power2.inOut" })
      .to(wordRef.current, { opacity: 0, y: -12, duration: 0.4, ease: "power2.in" }, "-=0.15")
      .to(panelRef.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" });

    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-ink text-paper"
      role="status"
      aria-label="Site loading"
    >
      <span ref={wordRef} className="font-display text-2xl uppercase tracking-wide">
        {siteConfig.shortName}
      </span>
      <div className="h-px w-40 overflow-hidden bg-paper/25">
        <div ref={barRef} className="h-full w-full bg-paper" />
      </div>
    </div>
  );
}
