import { useRef } from "react";
import { useGsap } from "../hooks/useGsap";
import { gsap, SplitText, prefersReducedMotion } from "../lib/gsap";
import { onAppLoaded } from "../lib/appLoad";
import { siteConfig } from "../data/siteConfig";

import dhiralMadhuvanti from "../assets/video/hero-dhiral-madhuvanti.mp4";
import dhiralMadhuvantiPoster from "../assets/video/hero-dhiral-madhuvanti-poster.jpg";
import vaibhaviMandar from "../assets/video/hero-vaibhavi-mandar.mp4";
import vaibhaviMandarPoster from "../assets/video/hero-vaibhavi-mandar-poster.jpg";
import portraitForest from "../assets/video/hero-portrait-forest.mp4";
import portraitForestPoster from "../assets/video/hero-portrait-forest-poster.jpg";
import fashionJewelry from "../assets/video/hero-fashion-jewelry.mp4";
import fashionJewelryPoster from "../assets/video/hero-fashion-jewelry-poster.jpg";

// The first two are real client work; the last two are licensed royalty-free
// stock footage (Coverr) filling in until there's enough real footage to
// replace them too. See src/data/projects.js for where the other two real
// clips (hero-wedding-beach / hero-portrait-park, now retired from Hero)
// went — they moved to FeaturedVideoRow instead of sitting unused.
const slides = [
  { src: dhiralMadhuvanti, poster: dhiralMadhuvantiPoster },
  { src: vaibhaviMandar, poster: vaibhaviMandarPoster },
  { src: portraitForest, poster: portraitForestPoster },
  { src: fashionJewelry, poster: fashionJewelryPoster },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const slideRefs = useRef([]);
  const headingRef = useRef(null);
  const eyebrowRef = useRef(null);
  const cueRef = useRef(null);

  useGsap(
    () => {
      const reduced = prefersReducedMotion();

      if (reduced) {
        gsap.set(stageRef.current, { clipPath: "inset(0% 0% 0% 0%)", scale: 1 });
        gsap.set(slideRefs.current[0], { autoAlpha: 1 });
        gsap.set([eyebrowRef.current, cueRef.current], { autoAlpha: 1, y: 0 });
        return undefined;
      }

      gsap.set(stageRef.current, { clipPath: "inset(100% 0% 0% 0%)", scale: 1.22 });
      gsap.set(slideRefs.current[0], { autoAlpha: 1, scale: 1.04 });
      gsap.set(slideRefs.current.slice(1), { autoAlpha: 0, scale: 1.08 });
      gsap.set(eyebrowRef.current, { autoAlpha: 0, y: 18 });
      gsap.set(cueRef.current, { autoAlpha: 0, y: 10 });

      const split = new SplitText(headingRef.current, { type: "lines", mask: "lines" });
      gsap.set(split.lines, { yPercent: 110 });

      const unsubscribe = onAppLoaded(() => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .to(stageRef.current, { clipPath: "inset(0% 0% 0% 0%)", scale: 1.08, duration: 1.7 })
          .to(split.lines, { yPercent: 0, duration: 1.2, stagger: 0.09 }, "-=1.35")
          .to(eyebrowRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.95")
          .to(cueRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.5");
      });

      // Load each clip's real src only shortly before it's due on screen,
      // so we don't pull ~4MB of video up front on a slow connection.
      const loadSlide = (i) => {
        const el = slideRefs.current[i];
        if (el && !el.src) {
          el.src = slides[i].src;
          el.load();
          el.play().catch(() => {});
        }
      };
      loadSlide(0);

      const slideshow = gsap.timeline({ repeat: -1, delay: 2 });
      const holdTime = 4.5;
      const fadeTime = 1.5;
      slides.forEach((_, i) => {
        const next = (i + 1) % slides.length;
        slideshow
          .call(() => loadSlide(next))
          .to(slideRefs.current[i], { autoAlpha: 0, scale: 1.08, duration: fadeTime, ease: "power2.inOut" }, `+=${holdTime}`)
          .to(slideRefs.current[next], { autoAlpha: 1, scale: 1.04, duration: fadeTime, ease: "power2.inOut" }, "<");
      });

      gsap.to(stageRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        unsubscribe();
        split.revert();
        slideshow.kill();
      };
    },
    [],
    sectionRef,
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[560px] items-end overflow-hidden bg-ink"
    >
      <div ref={stageRef} className="absolute inset-0">
        {slides.map((slide, i) => (
          <video
            key={slide.poster}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            poster={slide.poster}
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "none"}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
          />
        ))}
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,24,21,0.34)_0%,rgba(26,24,21,0.18)_28%,rgba(26,24,21,0.7)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full flex-col gap-6 px-6 pb-16 sm:px-10 sm:pb-20">
        <p ref={eyebrowRef} className="tracked-caps text-[10px] tracking-[0.28em] text-paper/75">
          {siteConfig.location}
        </p>
        <h1
          ref={headingRef}
          className="font-display max-w-[10ch] text-[13vw] leading-[0.9] tracking-[-0.05em] text-paper sm:text-[9vw] lg:text-[7.2vw]"
        >
          Editorial Photography,
          <br />
          Honestly Told.
        </h1>
      </div>

      <div
        ref={cueRef}
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-paper/70 sm:right-10 md:flex"
      >
        <span className="tracked-caps text-[10px] tracking-[0.24em]">Scroll</span>
        <span className="h-8 w-px bg-paper/40" />
      </div>
    </section>
  );
}
