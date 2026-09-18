import { useMemo, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import GalleryGrid from "../components/GalleryGrid";
import { projects, categories } from "../data/projects";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <section className="px-6 pb-10 pt-28 sm:px-10 sm:pt-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="tracked-caps mb-6 text-[10px] tracking-[0.24em] text-muted">Portfolio</p>
          <AnimatedText
            as="h1"
            type="lines"
            className="font-display max-w-4xl text-4xl leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl"
          >
            Selected work
          </AnimatedText>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`tracked-caps rounded-full border px-5 py-2 text-[10px] tracking-[0.18em] transition-all duration-300 ${
                  active === category
                    ? "border-ink bg-ink text-paper shadow-[0_10px_25px_rgba(26,24,21,0.1)]"
                    : "border-ink/15 bg-paper text-ink/70 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-[1600px]">
          <GalleryGrid key={active} projects={filtered} />
        </div>
      </section>
    </>
  );
}
