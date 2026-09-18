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
    <section className="border-y border-ink/10 bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        {eyebrow ? (
          <p className="tracked-caps mb-6 text-[10px] tracking-[0.24em] text-muted">{eyebrow}</p>
        ) : null}
        <h2 className="font-display text-4xl leading-[0.9] tracking-[-0.04em] sm:text-5xl md:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/75 sm:text-xl">
          {children}
        </p>
      </div>
    </section>
  );
}
