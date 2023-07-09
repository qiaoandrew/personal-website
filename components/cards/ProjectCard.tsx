import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import GradientBorder from '@/components/UI/GradientBorder';

import { RootState } from '@/store/store';
import { Project } from '@/types/types';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <GradientBorder
      borderRadius='rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl'
      borderColor='dark:light-main-gradient dark-main-gradient'
    >
      <Link
        href={`/projects/${project.id}`}
        className='transition-300 relative block aspect-[32/23] overflow-hidden rounded-xl bg-beige dark:bg-black 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl'
      >
        <h3 className='gradient-text dark-main-gradient dark:light-main-gradient absolute bottom-4 left-4 z-20 text-xl font-[550] 3xs:bottom-5 3xs:left-5 3xs:text-2xl xs:bottom-8 xs:left-8 xs:text-3xl sm:bottom-10 sm:left-10 sm:text-4xl md:bottom-6 md:left-6 md:text-2xl xl:bottom-8 xl:left-8 2xl:bottom-10 2xl:left-10 2xl:text-4xl 3xl:text-5xl'>
          {project.title}
        </h3>
        <div
          className={`transition-300 absolute z-0 group-hover:scale-[1.01]
        ${
          project.id === 'pethsapp'
            ? 'right-[10%] top-1/2 w-[45%] -translate-y-1/2'
            : ''
        }
        ${project.id === 'investrack' ? '-right-[10%] -top-[5%] w-[100%]' : ''}
        ${project.id === 'remax' ? '-bottom-[20%] -right-[23%] w-[130%]' : ''}
        ${project.id === 'uwdsc' ? '-right-[25%] -top-[10%] w-[120%]' : ''}
      `}
        >
          <Image
            src={
              theme === 'light'
                ? project.mockups.length === 6
                  ? project.mockups[1]
                  : project.mockups[0]
                : project.mockups[0]
            }
            priority
            alt={project.title}
          />
        </div>
        <div className='light-card-gradient dark:dark-card-gradient absolute inset-0 z-10' />
      </Link>
    </GradientBorder>
  );
}
