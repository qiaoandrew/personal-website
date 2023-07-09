import Image from 'next/image';

import ID from '@/components/navigation/ID';
import GradientBorder from '@/components/UI/GradientBorder';
import Button from '@/components/UI/Button';

import { ABOUT } from '@/constants/about';

import andrewPicture from '@/public/img/graphics/andrew.png';

/**
 * About section of homepage.
 */
export default function About() {
  return (
    <section className='mx-container relative mb-16 text-center 3xs:mb-20 2xs:mb-24 xs:mb-32 sm:mb-38 md:mb-44 2xl:mb-48 3xl:mb-64'>
      <ID id='about' />
      <div className='mx-auto mb-7 w-30 3xs:mb-9 2xs:mb-10 2xs:w-40 xs:mb-12 sm:w-44 lg:mb-16'>
        <Image src={andrewPicture} alt='Andrew Qiao picture' />
      </div>
      <div className='mx-auto mb-12 flex max-w-[680px] flex-col gap-5 text-left 2xs:mb-20 md:mb-24 xl:mb-32 xl:gap-8'>
        {ABOUT.map((about, i) => (
          <p
            className='text-black dark:text-purple2 md:text-xl'
            key={`about-${i}`}
          >
            {about}
          </p>
        ))}
      </div>
      <Button
        type='route'
        route='/#contact'
        text='md:text-xl text-black dark:text-purple2'
        padding='px-6 py-4 md:px-8 md:py-5'
      >
        Contact Me
      </Button>
    </section>
  );
}
