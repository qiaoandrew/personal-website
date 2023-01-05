import { useContext } from 'react';
import Image from 'next/image';
import ThemeContext from '../../../store/theme-context';
import GradientBorder from '../../UI/GradientBorder';

export default function ProjectMockups({ project }) {
  const themeContext = useContext(ThemeContext);

  const projectMockups =
    project.mockups.length === 3
      ? [
          { light: project.mockups[1], dark: project.mockups[1] },
          { light: project.mockups[2], dark: project.mockups[2] },
        ]
      : [
          { light: project.mockups[2], dark: project.mockups[3] },
          { light: project.mockups[4], dark: project.mockups[5] },
        ];

  return (
    <section className="mb-20 grid gap-9 lg:mb-36 lg:grid-cols-2">
      {projectMockups.map((mockup, i) => (
        <GradientBorder
          borderColor="gradient-main-light dark:gradient-main-dark"
          borderRadius="rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl"
          classes="block group"
          key={`mockup-${i}`}
        >
          <div className="gradient-project-light dark:gradient-project-dark relative aspect-[8/7] overflow-hidden rounded-[11px] 3xs:rounded-[15px] 2xs:rounded-[23px] 2xl:rounded-[35px]">
            <Image
              src={themeContext.theme === 'light' ? mockup.light : mockup.dark}
              alt={project.title}
              priority
              className={`transition-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:group-hover:scale-[1.02]
                ${i === 0 && project.title === 'Pethsapp' && 'w-[60%]'}
                ${i === 1 && project.title === 'Pethsapp' && 'w-[100%]'}
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
