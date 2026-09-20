import AnimatedText from "../components/AnimatedText";
import FeaturedVideoRow from "../components/FeaturedVideoRow";
import CTASection from "../components/CTASection";
import { films } from "../data/films";

export default function Films() {
  return (
    <>
      <section className="px-6 pb-12 pt-28 sm:px-10 sm:pt-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="tracked-caps mb-6 text-[10px] tracking-[0.24em] text-muted">
            Cinematic films
          </p>
          <AnimatedText
            as="h1"
            type="lines"
            className="font-display max-w-4xl text-4xl leading-[0.94] tracking-[-0.05em] sm:text-6xl md:text-7xl"
          >
            Stories in motion
          </AnimatedText>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Wedding films built from the quiet details, the big entrances, and everything that
            happened between them.
          </p>
        </div>
      </section>

      <div className="flex flex-col">
        {films.map((film, i) => (
          <FeaturedVideoRow
            key={film.title}
            video={film.video}
            poster={film.poster}
            title={film.title}
            description={film.description}
            aspectClass={film.aspectClass}
            eyebrow="Wedding film"
            ctaLabel="Enquire about this shoot"
            reverse={i % 2 === 1}
          />
        ))}
      </div>

      <CTASection eyebrow="Have a story to film?" title="Let's make something that moves." />
    </>
  );
}
