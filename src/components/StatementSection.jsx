import { useRef } from "react";
import { useGsap } from "../hooks/useGsap";
import { gsap, prefersReducedMotion } from "../lib/gsap";

/** Centered editorial statement, e.g. a philosophy line with inline accent phrases. */
export default function StatementSection({ eyebrow, title, children }) {
  const ref = useRef(null);

  useGsap(
    () => {
      if (prefersReducedMotion()) return undefined;
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        },
      );
      return undefined;
    },
    [],
    ref,
  );

  return (
    <section className="border-y border-ink/10 bg-paper px-6 py-24 sm:px-10 sm:py-32">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        {eyebrow ? <p className="tracked-caps mb-6 text-xs text-muted">{eyebrow}</p> : null}
        <h2 className="font-display text-4xl leading-[0.95] sm:text-5xl md:text-6xl">{title}</h2>
        <p className="mt-8 text-lg leading-relaxed text-ink/80">{children}</p>
      </div>
    </section>
  );
}
