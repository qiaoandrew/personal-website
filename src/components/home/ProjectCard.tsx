import type { Project } from "~/types/projects";
import _Link from "~/components/ui/_Link";
import GradientBorder from "~/components/effects/GradientBorder";

type ProjectCardProps = Omit<Project, "id">;

export default function ProjectCard({ title, href, type }: ProjectCardProps) {
  return (
    <GradientBorder className="rounded-5 md:odd:translate-y-9">
      <_Link
        href={href}
        className="bg-background rounded-4.5 block aspect-[11/7] w-full"
      ></_Link>
    </GradientBorder>
  );
}
