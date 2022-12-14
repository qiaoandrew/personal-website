import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeContext from '../../../store/theme-context';
import ID from '../../navigation/ID';
import Grid from '../../layout/Grid';
import GradientBorder from '../../UI/GradientBorder';
import OpenButton from '../../UI/OpenButton';
import { PROJECTS } from '../../../constants/constants';

/**
 * Projects section on home page.
 */
export default function Projects() {
  return (
    <section className="m-horizontal relative mb-20 2xs:mb-24 xs:mb-32 sm:mb-38 md:mb-44 2xl:mb-48 3xl:mb-64">
      <ID id="projects" />
      <Grid>
        {PROJECTS.map((project, i) => (
          <Link href={project.route} key={`project-${i}`}>
            <div
              className={`transition-300 group cursor-pointer ${
                i % 2 == 1
                  ? `md:translate-y-10 md:hover:translate-y-9`
                  : 'md:hover:-translate-y-1'
              }`}
            >
              <GradientBorder
                borderColor="gradient-main-light dark:gradient-main-dark"
                borderRadius="rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl"
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

/**
 * Card that displayed a proejct.
 *
 * @param project is an Object containing information about a project
 */
function ProjectCard({ project }) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="transition-300 relative aspect-[32/23] overflow-hidden rounded-[11px] bg-beige dark:bg-black 3xs:rounded-[15px] 2xs:rounded-[23px] 2xl:rounded-[35px]">
      <h3 className="gradient-text gradient-main-light dark:gradient-main-dark absolute bottom-4 left-4 z-20 text-xl font-[550] 3xs:bottom-5 3xs:left-5 3xs:text-2xl xs:bottom-8 xs:left-8 xs:text-3xl sm:left-10 sm:bottom-10 sm:text-4xl md:bottom-6 md:left-6 md:text-2xl xl:bottom-8 xl:left-8 2xl:bottom-10 2xl:left-10 2xl:text-4xl 3xl:text-5xl">
        {project.title}
      </h3>
      <div className="gradient-card-light dark:gradient-card-dark absolute inset-0 z-10" />
      <div
        className={`transition-300 absolute group-hover:scale-[1.01]
        ${
          project.title === 'Pethsapp'
            ? 'top-1/2 right-[10%] w-[45%] -translate-y-1/2'
            : ''
        }
        ${project.title === 'CREATE Markham' ? '-top-[5%] w-[110%]' : ''}
        ${project.title === 'AVIEW' ? 'left-[5%] bottom-[10%] w-[130%]' : ''}
        ${
          project.title === 'UW Data Science Club'
            ? 'left-[7%] -top-[10%] w-[90%]'
            : ''
        }
      `}
      >
        <Image
          src={
            themeContext.theme === 'light'
              ? project.mockups[0]
              : project.mockups.length === 6
              ? project.mockups[1]
              : project.mockups[0]
          }
          priority
          alt={project.title}
        />
      </div>
      <OpenButton />
    </div>
  );
}
