import Image from "next/image";
import GradientBorder from "~/components/effects/GradientBorder";
import { Badge } from "~/components/ui/Badge";
import type { Experience } from "~/types/experiences";

type ExperienceCardProps = Omit<Experience, "id">;

export default function ExperienceCard({
  company,
  position,
  date,
  location,
  icon,
  team,
  emoji,
}: ExperienceCardProps) {
  return (
    <div className="flex items-start gap-7">
      <div className="hidden w-52 md:block">
        <p className="font-display text-5 leading-9 font-semibold">{date}</p>
        <p className="font-display text-foreground/80 text-4.5 font-medium">
          {location}
        </p>
      </div>
      <hr className="md:text-ring hidden md:my-4.5 md:block md:flex-grow" />
      <div className="flex grow flex-col gap-5 md:w-[420px]">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-6 font-display md:text-7 font-semibold">
              {company}
            </h3>
            <p className="font-display text-4 text-muted-foreground md:text-4.5 font-medium">
              {position}
            </p>
          </div>
          <GradientBorder className="rounded-2">
            <Image src={icon} alt={company} className="size-9 rounded-[7px]" />
          </GradientBorder>
        </div>
        <Badge variant="outline" className="h-9 gap-1.5 self-start px-3">
          <span className="text-3.5">{emoji}</span>
          <span className="text-4">{team}</span>
        </Badge>
      </div>
    </div>
  );
}
