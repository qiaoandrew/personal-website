import Image from 'next/image';
import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import GradientBorder from '../../UI/GradientBorder';

export default function ProjectIntro({ project }) {
  const themeContext = useContext(ThemeContext);

  const lightMockup = project.mockups[0];
  const darkMockup =
    project.mockups.length === 3 ? project.mockups[0] : project.mockups[1];

  return (
    <section>
      <h1 className="mb-5 lg:mb-7 2xl:mb-9">
        <span className="gradient-text gradient-main-light dark:gradient-main-dark text-4xl font-semibold 2xs:text-6xl md:text-8xl lg:text-9xl 2xl:text-10xl">
          {project.title}
        </span>
      </h1>
      <GradientBorder
        borderColor="gradient-main-light dark:gradient-main-dark"
        borderRadius="rounded-2xl 3xs:rounded-3xl"
        classes="group mb-9"
      >
        <div className="gradient-project-intro-light dark:gradient-project-intro-dark relative h-[360px] overflow-hidden rounded-2xl 3xs:h-[420px] 3xs:rounded-3xl 2xs:h-[480px] xs:h-[580x] xl:h-[620px] 3xl:h-[640px]">
          <div
            className={`transition-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:group-hover:scale-[1.02] 
            ${project.title === 'Pethsapp' && 'w-[85%] max-w-[375px]'}
            ${project.title === 'TSAC' && 'w-[150%] max-w-[1000px]'}
            ${project.title === 'CREATE Markham' && 'w-[150%] max-w-[1000px]'}
            ${project.title === 'AVIEW' && 'w-[140%] max-w-[1200px]'}
            `}
          >
            <Image
              src={themeContext.theme === 'light' ? lightMockup : darkMockup}
              alt={`${project.title} mockup`}
            />
          </div>
        </div>
      </GradientBorder>
    </section>
  );
}
