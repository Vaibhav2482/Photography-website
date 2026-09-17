import { Link, Navigate, useParams } from "react-router-dom";
import ImageReveal from "../components/ImageReveal";
import CTASection from "../components/CTASection";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return <Navigate to="/portfolio" replace />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="px-6 pb-10 pt-36 sm:px-10 sm:pt-44">
        <div className="mx-auto max-w-[1600px]">
          <Link to="/portfolio" className="tracked-caps text-xs text-muted hover:text-ink">
            ← All work
          </Link>
          <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            <span>{project.category}</span>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
          <p className="mt-6 max-w-xl">{project.description}</p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-[1600px]">
          <ImageReveal src={project.cover} alt={project.title} className="aspect-[16/9]" priority />
        </div>
      </section>

      <section className="px-6 pb-28 sm:px-10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 sm:grid-cols-2">
          {project.gallery.map((image, i) => (
            <ImageReveal
              key={image}
              src={image}
              alt={`${project.title} — image ${i + 1}`}
              className={i % 3 === 0 ? "aspect-[4/5] sm:col-span-2 sm:aspect-[16/9]" : "aspect-[4/5]"}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-16 sm:px-10">
        <Link
          to={`/portfolio/${next.slug}`}
          className="group mx-auto flex max-w-[1600px] items-center justify-between gap-6"
        >
          <div>
            <p className="tracked-caps text-xs text-muted">Next project</p>
            <p className="font-display mt-2 text-3xl uppercase sm:text-5xl">{next.title}</p>
          </div>
          <span
            aria-hidden="true"
            className="text-2xl transition-transform duration-300 group-hover:translate-x-2"
          >
            →
          </span>
        </Link>
      </section>

      <CTASection />
    </>
  );
}
