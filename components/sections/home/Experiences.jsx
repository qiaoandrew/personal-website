import Image from "next/image";
import Grid from "../../layout/Grid";
import GradientBorder from "../../UI/GradientBorder";
import { EXPERIENCES } from "../../../constants/constants";
import pointIcon from "../../../public/img/icons/point.svg";

export default function Experiences() {
  return (
    <section
      className="m-horizontal mb-16 3xs:mb-20 2xs:mb-24 xs:mb-32 sm:mb-38 md:mb-44 2xl:mb-48 3xl:mb-64"
      id="experiences"
    >
      <h2 className="gradient-text gradient-1 dark:gradient-2 mb-4 inline-block text-3xl font-[550] 3xs:mb-6 3xs:text-4xl xs:text-6xl lg:text-7xl 2xl:text-8xl 3xl:mb-10 3xl:text-9xl">
        Experiences
      </h2>
      <Grid>
        {EXPERIENCES.map((experience, i) => (
          <div
            className={`transition-300 ${
              i % 2 == 1
                ? `md:translate-y-10 md:hover:translate-y-9`
                : "md:hover:-translate-y-1"
            }`}
            key={`experience-${i}`}
          >
            <GradientBorder
              borderColor="gradient-1 dark:gradient-2"
              borderRadius="rounded-xl 3xs:rounded-2xl xl:rounded-3xl"
            >
              <ExperienceCard experience={experience} />
            </GradientBorder>
          </div>
        ))}
      </Grid>
    </section>
  );
}

function ExperienceCard({ experience }) {
  return (
    <div className="relative h-full overflow-hidden rounded-[11px] bg-beige px-4 pt-4 pb-5 dark:bg-black 3xs:rounded-[15px] 3xs:px-5 3xs:pb-7 3xs:pt-6 xs:px-7 xs:pt-7 xs:pb-8 sm:px-8 sm:pt-8 sm:pb-10 md:px-5 md:pt-5 md:pb-6 xl:rounded-[23px] xl:px-7 xl:pt-7 xl:pb-8 2xl:px-8 2xl:pt-8 2xl:pb-10 3xl:px-10 3xl:pt-10 3xl:pb-12 4xl:px-12 4xl:pt-12 4xl:pb-14">
      <div className="gradient-card-light dark:gradient-card-dark absolute inset-0 z-0" />
      <h3 className="relative mb-1 text-xl font-[550] 3xs:mb-2 3xs:text-2xl xs:mb-2.5 xs:text-3xl sm:text-4xl md:mb-1.5 md:text-xl lg:mb-2 lg:text-2xl xl:text-3xl 3xl:mb-2.5 3xl:text-4xl 4xl:text-5xl">
        <span className="gradient-text gradient-1 dark:gradient-2">
          {experience.role}
        </span>
      </h3>
      <p className="relative mb-2 font-[450] text-darkPurple dark:text-lightPurple 3xs:mb-2.5 3xs:text-lg 2xs:mb-4 xs:text-lg sm:mb-5 sm:text-xl md:mb-3 md:text-base lg:mb-4 lg:text-lg 2xl:mb-5 2xl:text-xl 3xl:mb-6 3xl:text-2xl">
        {experience.company}
      </p>
      <div className="relative mb-4 hidden flex-wrap gap-3 2xs:flex xs:gap-4 sm:mb-5 md:mb-3 md:gap-3 lg:mb-4 xl:gap-4 2xl:mb-6 3xl:mb-6 4xl:gap-5">
        {experience.chips.map((chip, i) => (
          <GradientBorder
            borderColor="gradient-1 dark:gradient-2"
            borderRadius="rounded-full"
            classes="inline-block"
            key={`chip-${i}`}
          >
            <div className="rounded-full bg-beige py-1.5 px-3 dark:bg-black xs:py-2 xs:px-4 md:py-1.5 md:px-3 2xl:px-4 2xl:py-2.5 4xl:px-5">
              <p className="text-xs text-darkPurple dark:text-beige sm:text-sm md:text-xs xl:text-sm 3xl:text-base 4xl:text-lg">
                {chip}
              </p>
            </div>
          </GradientBorder>
        ))}
      </div>
      <div className="relative grid gap-2 xs:gap-2.5 md:gap-1.5 xl:gap-2 2xl:gap-2.5 3xl:gap-3">
        {experience.description.map((point, i) => (
          <div
            className="relative grid 2xs:grid-cols-[1fr_10fr] xs:grid-cols-[1fr_12fr]"
            key={`point-${i}`}
          >
            <div className="dark-purple-filter dark:purple-filter hidden w-5 2xs:block xs:w-6 sm:w-7 md:w-5 xl:w-6 2xl:w-7 3xl:w-8">
              <Image src={pointIcon} alt="Point icon" />
            </div>
            <p
              className="text-sm text-black dark:text-lightPurple xs:text-base sm:text-lg md:text-sm xl:text-base 2xl:text-lg 4xl:text-xl"
              dangerouslySetInnerHTML={{ __html: point }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
