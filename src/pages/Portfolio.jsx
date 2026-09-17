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
      <section className="px-6 pb-12 pt-36 sm:px-10 sm:pt-44">
        <div className="mx-auto max-w-[1600px]">
          <p className="tracked-caps mb-6 text-xs text-muted">Portfolio</p>
          <AnimatedText
            as="h1"
            type="lines"
            className="font-display max-w-3xl text-4xl leading-[1.05] sm:text-6xl md:text-7xl"
          >
            Selected work
          </AnimatedText>

          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`tracked-caps rounded-full border px-5 py-2 text-xs transition-colors duration-300 ${
                  active === category
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/20 text-ink/70 hover:border-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 sm:px-10">
        <div className="mx-auto max-w-[1600px]">
          <GalleryGrid key={active} projects={filtered} />
        </div>
      </section>
    </>
  );
}
