import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { Project } from '@/types/types';
import Image from 'next/image';
import GradientBorder from '@/components/UI/GradientBorder';

type MockupsProps = {
  project: Project;
};

export default function Mockups({ project }: MockupsProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  const mockups =
    project.mockups.length === 6
      ? [
          { dark: project.mockups[2], light: project.mockups[3] },
          { dark: project.mockups[4], light: project.mockups[5] },
        ]
      : [
          { dark: project.mockups[1], light: project.mockups[1] },
          { dark: project.mockups[2], light: project.mockups[2] },
        ];

  return (
    <section className='mb-20 grid gap-9 lg:mb-36 lg:grid-cols-2'>
      {mockups.map((mockup, i) => (
        <GradientBorder
          borderColor='dark-main-gradient dark:light-main-gradient'
          borderRadius='rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl'
          classes='block group'
          key={`mockup-${i}`}
        >
          <div className='light-project-gradient dark:dark-project-gradient relative aspect-[8/7] overflow-hidden rounded-[11px] 3xs:rounded-[15px] 2xs:rounded-[23px] 2xl:rounded-[35px]'>
            <Image
              src={theme === 'light' ? mockup.light : mockup.dark}
              alt={project.title}
              priority
              className={`transition-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:group-hover:scale-[1.02]
                ${i === 0 && project.id === 'pethsapp' ? 'w-[60%]' : ''}
                ${i === 1 && project.id === 'pethsapp' ? 'w-[100%]' : ''}
                ${i === 0 && project.title === 'CREATE Markham' && 'w-[80%]'}
                ${i === 1 && project.title === 'CREATE Markham' && 'w-[40%]'}
                ${i === 0 && project.title === 'AVIEW' && 'w-[45%]'}
                ${i === 1 && project.title === 'AVIEW' && 'w-[80%]'}
                ${i === 0 && project.title === 'TSAC' && 'w-[80%]'}
                ${i === 1 && project.title === 'TSAC' && 'w-[70%]'}
                ${
                  i === 0 &&
                  project.title === 'UW Data Science Club' &&
                  'w-[80%]'
                }
                ${
                  i === 1 &&
                  project.title === 'UW Data Science Club' &&
                  'w-[98%]'
                }
              `}
            />
          </div>
        </GradientBorder>
      ))}
    </section>
  );
}
