import ProjectCard from "~/components/home/ProjectCard";
import ID from "~/components/navigation/ID";
import { PROJECTS } from "~/constants/projects";

export default function Projects() {
  return (
    <section className="mx-container grid gap-y-6 md:grid-cols-2 md:gap-12 md:pb-9">
      <ID id="projects" />
      {PROJECTS.map((project) => (
        <ProjectCard
          title={project.title}
          href={project.href}
          type={project.type}
          key={project.id}
        />
      ))}
    </section>
  );
}
