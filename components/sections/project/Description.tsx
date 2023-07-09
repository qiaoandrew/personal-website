import Button from '@/components/UI/Button';

import { Project } from '@/types/types';

type DescriptionProps = {
  project: Project;
};

export default function Description({ project }: DescriptionProps) {
  return (
    <section className='mb-12 2xs:mb-16 lg:mb-20 2xl:mb-24'>
      <div className='grid gap-9 2xs:gap-12 lg:mb-16 lg:grid-cols-[1fr_2fr] 2xl:mb-24 2xl:grid-cols-[2fr_5fr]'>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-5 2xs:gap-6 xl:gap-8'>
            <div>
              <p className='text-base lg:text-base mb-0.5 font-[550] 2xs:mb-1 sm:mb-2 sm:text-lg lg:mb-1 2xl:mb-2 2xl:text-lg'>
                <span className='gradient-text dark-main-gradient dark:light-main-gradient'>
                  Developed For
                </span>
              </p>
              <p className='text-base lg:text-base text-black dark:text-beige sm:text-lg 2xl:text-lg'>
                {project.developedFor}
              </p>
            </div>
            <div>
              <p className='text-base lg:text-base mb-0.5 font-[550] 2xs:mb-1 sm:mb-2 sm:text-lg lg:mb-1 2xl:mb-2 2xl:text-lg'>
                <span className='gradient-text dark-main-gradient dark:light-main-gradient'>
                  Tech Stack
                </span>
              </p>
              <p className='text-base lg:text-base text-black dark:text-beige sm:text-lg 2xl:text-lg'>
                {project.techStack.join(', ')}
              </p>
            </div>
            <div>
              <p className='text-base lg:text-base mb-0.5 font-[550] 2xs:mb-1 sm:mb-2 sm:text-lg lg:mb-1 2xl:mb-2 2xl:text-lg'>
                <span className='gradient-text dark-main-gradient dark:light-main-gradient'>
                  Roles
                </span>
              </p>
              <p className='text-base lg:text-base text-black dark:text-beige sm:text-lg 2xl:text-lg'>
                {project.roles.join(', ')}
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-5 lg:hidden'>
            {project.links.map((link, i) => (
              <Button
                type='link'
                link={link.url}
                key={`button-${i}`}
                classes='w-full sm:w-auto'
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4 2xs:gap-5 sm:gap-7 lg:gap-5 2xl:gap-7'>
          {project.summary.map((text, i) => (
            <p
              className={`text-base text-black dark:text-beige sm:text-lg ${
                i === 0 ? 'font-medium 2xl:text-xl' : 'lg:text-base 2xl:text-lg'
              }`}
              key={`summary-${i}`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className='hidden flex-row flex-wrap gap-9 lg:flex'>
        {project.links.map((link, i) => (
          <Button
            type='link'
            link={link.url}
            text='md:text-lg text-black dark:text-purple2'
            padding='px-6 py-4 md:px-7 md:py-4'
            key={`button-${i}`}
          >
            {link.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
