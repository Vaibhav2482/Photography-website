import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGsap } from "../hooks/useGsap";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef(null);
  const current = testimonials[index];

  useGsap(
    () => {
      if (prefersReducedMotion()) return undefined;
      gsap.fromTo(
        quoteRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );
      return undefined;
    },
    [index],
    quoteRef,
  );

  const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="px-6 py-28 text-center sm:px-10 sm:py-36">
      <p className="tracked-caps mb-10 text-xs text-muted">Kind words</p>

      <div ref={quoteRef} className="mx-auto max-w-2xl">
        <p className="font-display text-2xl leading-snug sm:text-3xl">&ldquo;{current.quote}&rdquo;</p>
        <p className="mt-5 text-sm text-muted">— {current.name}</p>
      </div>

      <div className="mt-12 flex items-center justify-center gap-8">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="text-ink/50 transition-colors hover:text-ink"
        >
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="text-ink/50 transition-colors hover:text-ink"
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      </div>

      <p className="mt-10 text-xs text-muted/70">
        Placeholder testimonials — replace with real client quotes before launch.
      </p>
    </section>
  );
}
