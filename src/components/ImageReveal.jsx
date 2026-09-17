import { useRef } from "react";
import { useGsap } from "../hooks/useGsap";
import { gsap, prefersReducedMotion } from "../lib/gsap";

/**
 * Editorial image block: clip-mask reveal on scroll-in, optional scroll
 * parallax drift, optional GSAP-driven hover zoom. All three share one
 * transform target so they compose instead of fighting each other.
 */
export default function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  parallax = false,
  hoverZoom = false,
  priority = false,
}) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const baseScale = parallax ? 1.15 : 1;

  useGsap(
    () => {
      const reduced = prefersReducedMotion();

      if (reduced) {
        gsap.set(imgRef.current, { clipPath: "inset(0% 0% 0% 0%)", scale: baseScale });
      } else {
        gsap.fromTo(
          imgRef.current,
          { clipPath: "inset(100% 0% 0% 0%)", scale: baseScale + 0.1 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: baseScale,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );

        if (parallax) {
          gsap.to(imgRef.current, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }

      if (hoverZoom && !reduced) {
        const el = containerRef.current;
        const zoomTo = gsap.quickTo(imgRef.current, "scale", {
          duration: 0.6,
          ease: "power3.out",
        });
        const enter = () => zoomTo(baseScale * 1.08);
        const leave = () => zoomTo(baseScale);
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        return () => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        };
      }
      return undefined;
    },
    [src, parallax, hoverZoom],
    containerRef,
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`absolute inset-0 h-full w-full object-cover will-change-transform ${imgClassName}`}
      />
    </div>
  );
}
