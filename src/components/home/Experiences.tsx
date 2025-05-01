import { cn } from "~/utils/tailwind";
import { EXPERIENCES } from "~/constants/experiences";
import GradientText from "~/components/effects/GradientText";
import ID from "~/components/navigation/ID";
import ExperienceCard from "~/components/home/ExperienceCard";

export default function Experiences() {
  return (
    <section className={cn("mx-container mb-24", "xl:mb-40")}>
      <ID id="experiences" />
      <h2
        className={cn(
          "font-display text-7 mb-5 font-semibold",
          "xl:text-10 xl:mb-7",
        )}
      >
        <GradientText>Experiences</GradientText>
      </h2>
      <div className={cn("grid gap-y-16", "md:gap-y-18")}>
        {EXPERIENCES.map((experience) => (
          <ExperienceCard
            position={experience.position}
            company={experience.company}
            date={experience.date}
            location={experience.location}
            points={experience.points}
            icon={experience.icon}
            key={experience.id}
          />
        ))}
      </div>
    </section>
  );
}
