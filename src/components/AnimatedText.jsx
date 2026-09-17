import { useRef } from "react";
import { useGsap } from "../hooks/useGsap";
import { gsap, SplitText, prefersReducedMotion } from "../lib/gsap";

/**
 * Splits `children` (a plain string) into lines/words/chars and reveals them
 * with a staggered mask animation once the element scrolls into view.
 * Screen readers get the untouched original string via a visually-hidden
 * sibling; the animated copy is aria-hidden.
 */
export default function AnimatedText({
  as: Tag = "div",
  children,
  type = "lines",
  className = "",
  delay = 0,
  stagger = 0.08,
  start = "top 88%",
  once = true,
}) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const text = typeof children === "string" ? children : "";

  useGsap(
    () => {
      const el = textRef.current;
      if (!el || !text) return undefined;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1 });
        return undefined;
      }

      const split = new SplitText(el, {
        type,
        mask: type,
        linesClass: "reveal-line",
      });
      const targets = split[type] ?? split.lines;

      gsap.set(targets, { yPercent: 110 });
      gsap.to(targets, {
        yPercent: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: wrapRef.current ?? el,
          start,
          once,
        },
      });

      return () => split.revert();
    },
    [text, type],
    wrapRef,
  );

  return (
    <Tag ref={wrapRef} className={className}>
      <span className="sr-only">{text}</span>
      <span ref={textRef} aria-hidden="true" className="block">
        {text}
      </span>
    </Tag>
  );
}
