import { cn } from "~/utils/tailwind";
import type { Project } from "~/types/projects";
import _Link from "~/components/ui/_Link";
import GradientBorder from "~/components/effects/GradientBorder";
import GradientText from "~/components/effects/GradientText";
import { Badge } from "~/components/ui/Badge";

type ProjectCardProps = Omit<Project, "id">;

export default function ProjectCard({ title, href, type }: ProjectCardProps) {
  return (
    <GradientBorder
      className={cn("rounded-5", "md:odd:translate-y-9", "xl:rounded-6")}
    >
      <_Link
        href={href}
        className={cn(
          "bg-background group relative block aspect-[11/7] w-full overflow-hidden rounded-[19px]",
          "xl:rounded-[23px]",
        )}
      >
        <div className="absolute inset-0 bg-linear-(--gradient-card)" />
        <h3
          className={cn(
            "text-6 font-display absolute bottom-5.5 left-5 font-semibold",
            "xl:text-7 xl:bottom-8 xl:left-7",
          )}
        >
          <GradientText>{title}</GradientText>
        </h3>
        <Badge
          variant="outline"
          className={cn(
            "absolute top-4 right-4",
            "xl:text-4 xl:top-6 xl:right-6 xl:h-8 xl:px-3",
          )}
        >
          {type}
        </Badge>
      </_Link>
    </GradientBorder>
  );
}
