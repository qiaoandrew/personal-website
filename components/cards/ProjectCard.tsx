import Link from 'next/link';

import { Project } from '@/types/types';
import GradientBorder from '../UI/GradientBorder';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GradientBorder
      borderRadius='rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl'
      borderColor='dark:light-main-gradient dark-main-gradient'
    >
      <Link
        href={`/projects/${project.id}`}
        className='transition-300 light-card-gradient dark:dark-card-gradient relative block aspect-[32/23] overflow-hidden rounded-xl bg-beige dark:bg-black 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl'
      >
        <h3 className='gradient-text dark-main-gradient dark:light-main-gradient absolute bottom-4 left-4 z-20 text-xl font-[550] 3xs:bottom-5 3xs:left-5 3xs:text-2xl xs:bottom-8 xs:left-8 xs:text-3xl sm:bottom-10 sm:left-10 sm:text-4xl md:bottom-6 md:left-6 md:text-2xl xl:bottom-8 xl:left-8 2xl:bottom-10 2xl:left-10 2xl:text-4xl 3xl:text-5xl'>
          {project.title}
        </h3>
      </Link>
    </GradientBorder>
  );
}
