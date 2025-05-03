import { cn } from "~/utils/tailwind";
import { PROJECTS } from "~/constants/projects";
import ProjectCard from "~/components/home/ProjectCard";
import ID from "~/components/navigation/ID";

export default function Projects() {
  return (
    <section
      className={cn(
        "mx-container relative mb-24 grid gap-6",
        "md:grid-cols-2 md:pb-9",
        "xl:mb-40 xl:gap-12",
      )}
    >
      <ID id="projects" />
      {PROJECTS.map((project) => (
        <ProjectCard {...project} key={project.id} />
      ))}
    </section>
  );
}
