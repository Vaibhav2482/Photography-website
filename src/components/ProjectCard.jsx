import { Link } from "react-router-dom";
import ImageReveal from "./ImageReveal";

export default function ProjectCard({ project, className = "" }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      data-cursor="View"
      className={`group block rounded-[1.4rem] border border-ink/10 bg-paper p-2 shadow-[0_14px_35px_rgba(26,24,21,0.04)] transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <ImageReveal
        src={project.cover}
        alt={`${project.title} — ${project.category} photography`}
        className="aspect-[4/5] overflow-hidden rounded-[1rem]"
        hoverZoom
      />
      <div className="mt-4 flex items-baseline justify-between gap-4 px-2 pb-1">
        <h3 className="font-display text-xl sm:text-2xl">{project.title}</h3>
        <span className="tracked-caps whitespace-nowrap text-xs text-muted">{project.category}</span>
      </div>
    </Link>
  );
}
