import { Fragment, useContext } from 'react';
import Image from 'next/image';
import ThemeContext from '../../../store/theme-context';
import ID from '../../navigation/ID';
import Grid from '../../layout/Grid';
import GradientBorder from '../../UI/GradientBorder';
import { EXPERIENCES } from '../../../constants/constants';
import pointIcon from '../../../public/img/icons/point.svg';

/**
 * Experiences section on homepage.
 */
export default function Experiences() {
  return (
    <section className="m-horizontal relative mb-20 2xs:mb-24 xs:mb-32 sm:mb-38 md:mb-44 2xl:mb-48 3xl:mb-64">
      <ID id="experiences" />
      <h2 className="gradient-text gradient-main-light dark:gradient-main-dark mb-4 inline-block text-3xl font-[550] 3xs:mb-6 3xs:text-4xl xs:text-6xl lg:text-7xl 2xl:text-8xl 3xl:mb-10 3xl:text-9xl">
        Experiences
      </h2>
      <Grid>
        {EXPERIENCES.map((experience, i) => (
          <div
            className={`transition-300 h-full ${
              i % 2 == 1
                ? `md:translate-y-10 md:hover:translate-y-9`
                : 'md:hover:-translate-y-1'
            }`}
            key={`project-${i}`}
          >
            <GradientBorder
              borderColor="gradient-main-light dark:gradient-main-dark"
              borderRadius="rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl"
            >
              <ExperienceCard experience={experience} />
            </GradientBorder>
          </div>
        ))}
      </Grid>
    </section>
  );
}

/**
 * Card displaying an experience.
 *
 * @param experience is an Object containing information about the experience
 */
function ExperienceCard({ experience }) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="transition-300 relative h-full overflow-hidden rounded-[11px] bg-beige px-5 pt-5 pb-6 dark:bg-black 3xs:rounded-[15px] 2xs:rounded-[23px] xs:px-6 xs:pt-6 xs:pb-8 sm:px-9 sm:pt-9 sm:pb-10 md:px-5 md:pt-5 md:pb-6 lg:px-6 lg:pt-6 lg:pb-8 xl:px-8 xl:pt-7 xl:pb-10 2xl:px-10 2xl:pt-10 2xl:pb-12">
      <div className="gradient-card-light dark:gradient-card-dark absolute inset-0 z-10" />
      <div className="absolute inset-y-0 right-0 z-10 w-[70%] bg-gradient-to-r from-transparent to-translucentLightPurple dark:from-transparent dark:to-translucentDarkPurple" />
      <div
        className={`absolute opacity-20 
        ${
          experience.company === 'University of Toronto' &&
          'right-[-12%] top-[60%] w-[60%] -translate-y-1/2'
        }
        ${
          experience.company === 'AVIEW International' &&
          'right-[-10%] bottom-[-10%] w-[60%]'
        }
        ${
          experience.company === 'PETHS Student Council' &&
          'right-[-10%] bottom-[-5%] w-[50%]'
        }
        ${
          experience.company === 'Unionville Tennis Club' &&
          'right-[-10%] bottom-[-5%] w-[60%]'
        }
        `}
      >
        <Image src={experience.logo} alt={experience.company} />
      </div>
      <h3 className="relative z-20 mb-1 text-xl font-semibold xs:mb-1.5 xs:text-2xl sm:mb-2 sm:text-3xl md:mb-1.5 md:text-xl lg:text-2xl xl:text-3xl">
        <span className="gradient-text gradient-main-light dark:gradient-main-dark">
          {experience.role}
        </span>
      </h3>
      <p className="relative z-20 mb-3 text-sm italic text-darkPurple dark:text-lightPurple xs:mb-4 xs:text-base sm:mb-5 sm:text-lg md:mb-3 md:text-sm lg:mb-4 xl:mb-5 xl:text-base 2xl:text-lg">
        {experience.company}
      </p>
      <div className="relative z-20 mb-3 hidden flex-wrap gap-2 3xs:flex xs:mb-4 xs:gap-4 sm:mb-5 md:mb-3 lg:mb-4 2xl:mb-6 2xl:gap-5">
        <GradientBorder
          borderRadius="rounded-full"
          borderColor="gradient-main-light dark:gradient-main-dark"
          classes="inline-block"
        >
          <div className="inline-block rounded-full bg-beige px-3 py-1.5 last:mr-0 dark:bg-black xs:px-4 md:px-3 md:py-1.5 xl:px-4">
            <p className="text-xs text-darkPurple dark:text-lightPurple xs:text-sm md:text-xs xl:text-sm">
              {experience.duration}
            </p>
          </div>
        </GradientBorder>
        <GradientBorder
          borderRadius="rounded-full"
          borderColor="gradient-main-light dark:gradient-main-dark"
          classes="inline-block"
        >
          <div className="inline-block rounded-full bg-beige px-3 py-1.5 last:mr-0 dark:bg-black xs:px-4 md:px-3 md:py-1.5 xl:px-4">
            <p className="text-xs text-darkPurple dark:text-lightPurple xs:text-sm md:text-xs xl:text-sm">
              {experience.location}
            </p>
          </div>
        </GradientBorder>
      </div>
      <div className="relative z-20 grid gap-2 3xs:grid-cols-[repeat(2,auto)] xs:gap-3 md:gap-2 lg:gap-3 xl:gap-4">
        {experience.description.map((point, i) => (
          <Fragment key={`point-${i}`}>
            <Image
              src={pointIcon}
              alt="Point icon"
              className={`mt-0.5 hidden w-4 3xs:inline xs:mt-1 xs:w-5 md:mt-0.5 md:w-4 lg:mt-1 lg:w-5 2xl:mt-0 2xl:w-6 ${
                themeContext.theme === 'light'
                  ? 'filter-black'
                  : 'filter-purple'
              }`}
            />
            <p
              className="text-sm text-black dark:text-lightPurple xs:text-base sm:hidden md:block md:text-sm xl:hidden"
              dangerouslySetInnerHTML={{ __html: point.sm }}
            />
            <p
              className="hidden text-sm text-black dark:text-lightPurple xs:text-base sm:block md:hidden md:text-sm xl:block xl:text-base"
              dangerouslySetInnerHTML={{ __html: point.lg }}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
