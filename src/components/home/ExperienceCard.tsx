import Image from "next/image";
import GradientBorder from "~/components/effects/GradientBorder";
import type { Experience } from "~/types/experiences";

type ExperienceCardProps = Omit<Experience, "id">;

export default function ExperienceCard({
  company,
  position,
  date,
  location,
  points,
  icon,
  buttons,
}: ExperienceCardProps) {
  return (
    <div className="flex items-start gap-7">
      <div className="hidden w-50 md:block">
        <p className="font-display text-5 leading-9 font-semibold">{date}</p>
        <p className="font-display text-foreground/80 text-4.5">{location}</p>
      </div>
      <hr className="md:text-ring hidden md:my-4.5 md:block md:flex-grow" />
      <div className="flex grow flex-col gap-4 md:w-[420px]">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-6 font-display md:text-7 font-semibold">
              {company}
            </h3>
            <p className="font-display text-3.5 text-muted-foreground md:text-4.5 font-medium">
              {position}
            </p>
          </div>
          <GradientBorder className="rounded-2">
            <Image src={icon} alt={company} className="size-9 rounded-[7px]" />
          </GradientBorder>
        </div>
        <ul className="flex flex-col gap-1 md:gap-1.5">
          {points.map((point) => (
            <li
              dangerouslySetInnerHTML={{ __html: point }}
              className="text-3.5 text-foreground/80 md:text-4"
              key={point}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
