import Image from "next/image";

import Grid from "../../layout/Grid";
import GradientBorder from "../../UI/GradientBorder";

import { EXPERIENCES } from "../../../constants/constants";

import pointIcon from "../../../public/img/icons/point.svg";

export default function Experiences() {
  return (
    <section
      className="m-horizontal mb-10 pt-8 3xs:mb-16 3xs:pt-10 lg:pt-24 2xl:mb-24 3xl:pt-30 4xl:pt-38"
      id="experiences"
    >
      <h2 className="gradient-text gradient-1 dark:gradient-2 mb-4 inline-block text-3xl font-[550] 3xs:text-4xl xs:mb-6 xs:text-6xl lg:text-8xl 3xl:mb-8 3xl:text-9xl">
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
    <div className="relative overflow-hidden rounded-[11px] bg-beige px-4 pt-4 pb-5 dark:bg-black 3xs:rounded-[15px] 3xs:px-5 3xs:pb-6 3xs:pt-5 xs:px-6 xs:pt-6 xs:pb-7 xl:rounded-[23px] xl:px-8 xl:pt-8 xl:pb-9 3xl:px-10 3xl:pt-10 3xl:pb-11">
      <div className="gradient-card-light dark:gradient-card-dark absolute inset-0" />
      <h3 className="gradient-text gradient-1 dark:gradient-2 mb-0.5 inline-block text-xl font-[550]">
        {experience.role}
      </h3>
      <p className="mb-2.5 font-[450] text-darkPurple dark:text-lightPurple">
        {experience.company}
      </p>
      <div className="mb-3 flex gap-3">
        {experience.chips.map((chip, i) => (
          <GradientBorder
            borderColor="gradient-3"
            borderRadius="rounded-full"
            classes="inline-block"
            key={`chip-${i}`}
          >
            <div className="rounded-full bg-beige py-1.5 px-3">
              <p className="dark-purple text-xs">{chip}</p>
            </div>
          </GradientBorder>
        ))}
      </div>
      {experience.description.map((point, i) => (
        <div className="relative" key={`point-${i}`}>
          <Image src={pointIcon} alt="Point icon" />
          <p className="" dangerouslySetInnerHTML={{ __html: point }} />
        </div>
      ))}
    </div>
  );
}
