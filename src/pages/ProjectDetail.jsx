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
  const isAarya = project.slug === "aarya-portrait";

  return (
    <>
      <section className="px-6 pb-10 pt-36 sm:px-10 sm:pt-44">
        <div className="mx-auto max-w-[1600px]">
          <Link to="/portfolio" className="tracked-caps text-[10px] tracking-[0.22em] text-muted hover:text-ink">
            ← All work
          </Link>
          <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[0.94] tracking-[-0.05em] sm:text-6xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            <span>{project.category}</span>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
          <p className="mt-6 max-w-xl text-ink/75">{project.description}</p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-[1600px]">
          <ImageReveal
            src={project.cover}
            alt={project.title}
            imgClassName={isAarya ? "object-[center_25%]" : "object-center"}
            className="aspect-[16/9] overflow-hidden rounded-[1.5rem] shadow-[0_20px_55px_rgba(26,24,21,0.08)]"
            priority
          />
        </div>
      </section>

      <section className="px-6 pb-28 sm:px-10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 sm:grid-cols-2">
          {project.gallery.map((image, i) => (
            <ImageReveal
              key={image}
              src={image}
              alt={`${project.title} — image ${i + 1}`}
              imgClassName={isAarya ? "object-[center_24%]" : "object-center"}
              className={i % 3 === 0 ? "aspect-[4/5] overflow-hidden rounded-[1.3rem] shadow-[0_18px_45px_rgba(26,24,21,0.06)] sm:col-span-2 sm:aspect-[16/9]" : "aspect-[4/5] overflow-hidden rounded-[1.3rem] shadow-[0_18px_45px_rgba(26,24,21,0.06)]"}
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
            <p className="tracked-caps text-[10px] tracking-[0.22em] text-muted">Next project</p>
            <p className="font-display mt-2 text-3xl uppercase tracking-[-0.04em] sm:text-5xl">{next.title}</p>
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
