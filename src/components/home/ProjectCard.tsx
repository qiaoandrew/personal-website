import Image from "next/image";

import { cn } from "~/utils/tailwind";
import type { Project } from "~/types/projects";
import _Link from "~/components/ui/_Link";
import GradientBorder from "~/components/effects/GradientBorder";
import GradientText from "~/components/effects/GradientText";
import { Badge } from "~/components/ui/Badge";

type ProjectCardProps = Project;

export default function ProjectCard({
  id,
  title,
  href,
  type,
  mockupLight,
  mockupDark,
}: ProjectCardProps) {
  const mockupStyles = cn(
    "absolute group-hover:scale-105 transition-transform",
    id === "pethsapp" && "-top-[13%] right-[10%] w-1/2",
    (id === "snowflake-notebooks" || id === "quadratic-ui") && "inset-0",
    id === "slope" && "w-2/3 right-[6%] -bottom-[15%]",
  );

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
        <Image
          src={mockupLight}
          alt={title}
          className={cn("dark:hidden", mockupStyles)}
        />
        <Image
          src={mockupDark}
          alt={title}
          className={cn("hidden dark:block", mockupStyles)}
        />
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
            "bg-background absolute top-4 right-4",
            "xl:text-4 xl:top-5 xl:right-5 xl:h-8 xl:px-3",
          )}
        >
          {type}
        </Badge>
      </_Link>
    </GradientBorder>
  );
}
