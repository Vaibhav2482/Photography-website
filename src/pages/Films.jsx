import AnimatedText from "../components/AnimatedText";
import FilmCard from "../components/FilmCard";
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

      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8">
          {films.map((film) => (
            <FilmCard key={film.title} {...film} />
          ))}
        </div>
      </section>

      <CTASection eyebrow="Have a story to film?" title="Let's make something that moves." />
    </>
  );
}
