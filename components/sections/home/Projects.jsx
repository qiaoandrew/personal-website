import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import ThemeContext from "../../../store/theme-context";

import Grid from "../../layout/Grid";
import GradientBorder from "../../UI/GradientBorder";

import { PROJECTS } from "../../../constants/constants";

import openIcon from "../../../public/img/icons/open.svg";

export default function Projects() {
  return (
    <section
      className="m-horizontal mb-10 pt-8 3xs:mb-16 3xs:pt-10 lg:pt-14 2xl:mb-24 3xl:pt-20 4xl:pt-28"
      id="projects"
    >
      <Grid>
        {PROJECTS.map((project, i) => (
          <Link href={project.route} key={`project-${i}`}>
            <div
              className={`transition-300 cursor-pointer ${
                i % 2 == 1
                  ? `md:translate-y-10 md:hover:translate-y-9`
                  : "md:hover:-translate-y-1"
              }`}
            >
              <GradientBorder
                borderColor="gradient-1 dark:gradient-2"
                borderRadius="rounded-xl 3xs:rounded-2xl xl:rounded-3xl"
              >
                <ProjectCard project={project} />
              </GradientBorder>
            </div>
          </Link>
        ))}
      </Grid>
    </section>
  );
}

function ProjectCard({ project }) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="transition-300 relative aspect-[32/21] overflow-hidden rounded-[11px] bg-beige dark:bg-black 3xs:rounded-[15px] xl:rounded-[23px]">
      <h3 className="gradient-text gradient-1 dark:gradient-2 absolute bottom-4 left-4 z-20 font-medium 3xs:bottom-5 3xs:left-5 3xs:text-2xl xs:bottom-6 xs:left-6 xl:bottom-8 xl:left-8 2xl:text-4xl 3xl:bottom-10 3xl:left-10 3xl:text-5xl 3xl:font-[550]">
        {project.title}
      </h3>
      <div className="gradient-card-light dark:gradient-card-dark absolute inset-0 z-10" />
      <div
        className={`absolute
        ${
          project.title === "Pethsapp" &&
          "top-1/2 right-[10%] w-[45%] -translate-y-1/2"
        }
        ${project.title === "CREATE Markham" && "-top-[5%] w-[110%]"}
        ${project.title === "AVIEW" && "left-[5%] bottom-[10%] w-[130%]"}
        ${project.title === "TSAC" && "left-[5%] w-[95%]"}
      `}
      >
        <Image
          src={
            themeContext.theme === "light"
              ? project.mockups[0]
              : project.mockups.length === 6
              ? project.mockups[1]
              : project.mockups[0]
          }
          priority
          alt={project.title}
        />
      </div>
      <div className="absolute top-3 right-3 3xs:top-4 3xs:right-4 xs:top-5 xs:right-5 xl:right-6 xl:top-6 2xl:top-8 2xl:right-8">
        <GradientBorder
          borderColor="gradient-1 dark:gradient-2"
          borderRadius="rounded-full"
        >
          <div className="gradient-2 dark:gradient-1 grid h-10 w-10 place-content-center rounded-full 3xs:h-12 3xs:w-12 xl:h-16 xl:w-16">
            <div className="dark:purple-filter dark-purple-filter relative h-6 w-6 xl:h-8 xl:w-8">
              <Image
                src={openIcon}
                alt="Open icon"
                fill
                sizes="(max-width: 1024px) 24px, 32px"
              />
            </div>
          </div>
        </GradientBorder>
      </div>
    </div>
  );
}
