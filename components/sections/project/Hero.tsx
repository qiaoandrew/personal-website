import Image from 'next/image';
import { useSelector } from 'react-redux';

import GradientBorder from '@/components/UI/GradientBorder';

import { RootState } from '@/store/store';
import { Project } from '@/types/types';

type HeroProps = {
  project: Project;
};

export default function Hero({ project }: HeroProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  const darkMockup = project.mockups[0];
  const lightMockup =
    project.mockups.length === 6 ? project.mockups[1] : project.mockups[0];

  return (
    <section className='mb-8 lg:mb-12 2xl:mb-16'>
      <h1 className='mb-5 lg:mb-7 2xl:mb-9'>
        <span className='gradient-text dark-main-gradient dark:light-main-gradient text-4xl font-semibold 2xs:text-6xl md:text-8xl lg:text-9xl 2xl:text-10xl'>
          {project.title}
        </span>
      </h1>
      <GradientBorder
        borderColor='dark-main-gradient dark:light-main-gradient'
        borderRadius='rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl'
        classes='group'
      >
        <div className='light-project-gradient dark:dark-project-gradient relative h-[360px] overflow-hidden rounded-xl 3xs:h-[420px] 3xs:rounded-2xl 2xs:h-[480px] 2xs:rounded-3xl xs:h-[580x] xl:h-[620px] 2xl:rounded-4xl 3xl:h-[640px]'>
          <div
            className={`transition-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:group-hover:scale-[1.02] 
            ${project.id === 'investrack' && 'w-[130%] max-w-[900px]'}
            ${project.id === 'remax' && 'w-[150%] max-w-[1240px]'}
            ${project.id === 'pethsapp' ? 'w-[85%] max-w-[375px]' : ''}
            ${project.id === 'uwdsc' && 'w-[120%] max-w-[1200px]'}
            `}
          >
            <Image
              src={theme === 'light' ? lightMockup : darkMockup}
              alt={`${project.title} mockup`}
            />
          </div>
        </div>
      </GradientBorder>
    </section>
  );
}
