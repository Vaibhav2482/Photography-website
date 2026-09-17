import { Link } from "react-router-dom";
import ImageReveal from "./ImageReveal";

export default function ProjectCard({ project, className = "" }) {
  return (
    <Link to={`/portfolio/${project.slug}`} data-cursor="View" className={`group block ${className}`}>
      <ImageReveal
        src={project.cover}
        alt={`${project.title} — ${project.category} photography`}
        className="aspect-[4/5]"
        hoverZoom
      />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl sm:text-2xl">{project.title}</h3>
        <span className="tracked-caps whitespace-nowrap text-xs text-muted">{project.category}</span>
      </div>
    </Link>
  );
}
