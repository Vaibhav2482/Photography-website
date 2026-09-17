import ImageReveal from "./ImageReveal";
import AnimatedText from "./AnimatedText";
import Button from "./Button";

/** Alternating showcase rows — a khaki text panel paired with a full-bleed image. */
export default function FeaturedWork({ projects }) {
  return (
    <div className="flex flex-col">
      {projects.map((project, i) => {
        const reverse = i % 2 === 1;
        return (
          <div key={project.slug} className="grid md:grid-cols-2">
            <div
              className={`order-2 flex flex-col justify-center gap-6 bg-khaki/25 px-8 py-16 sm:px-14 sm:py-20 ${
                reverse ? "md:order-2" : "md:order-1"
              }`}
            >
              <p className="tracked-caps text-xs text-ink/60">Featured project</p>
              <AnimatedText
                as="h3"
                type="lines"
                className="font-display text-3xl leading-[0.95] sm:text-4xl"
              >
                {project.title}
              </AnimatedText>
              <p className="max-w-sm text-sm text-ink/70">{project.description}</p>
              <Button to={`/portfolio/${project.slug}`} className="mt-2">
                View story
              </Button>
            </div>
            <ImageReveal
              src={project.cover}
              alt={project.title}
              hoverZoom
              className={`order-1 aspect-[4/3] md:aspect-auto md:h-full ${
                reverse ? "md:order-1" : "md:order-2"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
