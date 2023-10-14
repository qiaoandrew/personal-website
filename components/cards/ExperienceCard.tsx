import { Fragment } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { ArrowRight } from 'react-feather';

import GradientBorder from '@/components/UI/GradientBorder';
import Chip from '@/components/UI/Chip';

import { RootState } from '@/store/store';
import { COLORS } from '@/constants/colors';
import { Experience } from '@/types/types';

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <GradientBorder
      borderRadius='rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl'
      borderColor='dark:light-main-gradient dark-main-gradient'
    >
      <div className='transition-300 relative h-full overflow-hidden rounded-xl bg-beige px-5 pb-6 pt-5 dark:bg-black 3xs:rounded-2xl 2xs:rounded-3xl xs:px-6 xs:pb-8 xs:pt-6 sm:px-9 sm:pb-10 sm:pt-9 md:px-5 md:pb-6 md:pt-5 lg:px-6 lg:pb-8 lg:pt-6 xl:px-8 xl:pb-10 xl:pt-7 2xl:rounded-4xl 2xl:px-10 2xl:pb-12 2xl:pt-10'>
        <div className='light-card-gradient dark:dark-card-gradient absolute inset-0 z-10' />
        <div className='absolute inset-y-0 right-0 z-10 w-[70%] bg-gradient-to-r from-transparent to-purple1 dark:from-transparent dark:to-purple4' />
        <Image
          src={experience.logo}
          alt={experience.company}
          className={`absolute z-0 
        ${
          experience.id === 'uoft'
            ? 'right-[-12%] top-[60%] -translate-y-1/2'
            : 'bottom-[-5%] right-[-5%]'
        } ${experience.id === 'uhn' ? 'w-[55%]' : 'w-[60%]'} ${
            theme === 'light' ? 'opacity-60' : 'opacity-30'
          }`}
        />
        <h3 className='relative z-20 mb-1 text-xl font-[550] xs:mb-1.5 xs:text-2xl sm:mb-2 sm:text-3xl md:mb-1.5 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
          <span className='gradient-text dark-main-gradient dark:light-main-gradient'>
            {experience.company}
          </span>
        </h3>
        <p className='transition-300 relative z-20 mb-3 text-sm italic text-purple5 dark:text-purple2 xs:mb-4 xs:text-md sm:mb-5 sm:text-lg md:mb-3 md:text-sm lg:mb-4 xl:mb-5 xl:text-md 2xl:text-lg'>
          {experience.title}
        </p>
        <div className='relative z-20 mb-3 hidden flex-wrap gap-3 3xs:flex xs:mb-4 xs:gap-4 sm:mb-5 md:mb-3 lg:mb-4 2xl:mb-6 2xl:gap-5'>
          <Chip>{experience.date}</Chip>
          <Chip>{experience.location}</Chip>
        </div>
        <div className='relative z-20 grid gap-2 3xs:grid-cols-[repeat(2,auto)] xs:gap-3 md:gap-2 lg:gap-3 xl:gap-4'>
          {experience.description.map((point, i) => (
            <Fragment key={`point-${i}`}>
              <ArrowRight
                color={theme === 'light' ? COLORS.purple5 : COLORS.purple2}
                className='transition-300 w-4 xs:w-5 xl:w-6'
              />
              <p
                className='transition-300 mt-0.5 text-sm leading-normal text-black dark:text-purple2 xs:text-md sm:hidden md:block md:text-sm xl:hidden'
                dangerouslySetInnerHTML={{ __html: point.sm }}
              />
              <p
                className='transition-300 hidden text-sm leading-relaxed text-black dark:text-purple2 xs:text-md sm:block md:hidden md:text-sm xl:block xl:text-md'
                dangerouslySetInnerHTML={{ __html: point.lg }}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </GradientBorder>
  );
}
