import ProjectCard from "./ProjectCard";

const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export default function GalleryGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-16">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} className={SPANS[i % SPANS.length]} />
      ))}
    </div>
  );
}
