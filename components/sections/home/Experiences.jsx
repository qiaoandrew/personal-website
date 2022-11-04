import Image from 'next/image';
import Link from 'next/link';
import Grid from '../../layout/Grid';
import GradientBorder from '../../UI/GradientBorder';
import OpenButton from '../../UI/OpenButton';
import { EXPERIENCES } from '../../../constants/constants';
import clockIcon from '../../../public/img/icons/clock.svg';
import locationIcon from '../../../public/img/icons/location.svg';

/**
 * Experiences section on homepage.
 */
export default function Experiences() {
  return (
    <section
      className="m-horizontal-sm mb-20 2xs:mb-24 xs:mb-32 sm:mb-38 md:mb-44 2xl:mb-48 3xl:mb-64"
      id="experiences"
    >
      <h2 className="gradient-text gradient-main-light dark:gradient-main-dark mb-4 inline-block text-3xl font-[550] 3xs:mb-6 3xs:text-4xl xs:text-6xl lg:text-7xl 2xl:text-8xl 3xl:mb-10 3xl:text-9xl">
        Experiences
      </h2>
      <Grid>
        {EXPERIENCES.map((experience, i) => (
          <Link href={experience.route} key={`project-${i}`}>
            <div
              className={`transition-300 group h-full cursor-pointer ${
                i % 2 == 1
                  ? `md:translate-y-10 md:hover:translate-y-9`
                  : 'md:hover:-translate-y-1'
              }`}
            >
              <GradientBorder
                borderColor="gradient-main-light dark:gradient-main-dark"
                borderRadius="rounded-xl 3xs:rounded-2xl xl:rounded-3xl"
              >
                <ExperienceCard experience={experience} />
              </GradientBorder>
            </div>
          </Link>
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
  return (
    <div className="transition-300 relative h-full overflow-hidden rounded-[11px] bg-beige px-4 py-4 dark:bg-black 3xs:rounded-[15px] 3xs:px-5 3xs:py-5 xs:px-7 xs:py-7 sm:px-10 sm:py-10 md:px-6 md:py-6 xl:rounded-[23px] xl:px-8 xl:py-8 2xl:px-10 2xl:py-10">
      <div className="gradient-card-light dark:gradient-card-dark absolute inset-0 z-10" />
      <div className="absolute inset-y-0 right-0 z-10 w-[70%] bg-gradient-to-r from-transparent to-translucentLightPurple dark:from-transparent dark:to-translucentDarkPurple" />
      <h3 className="relative z-20 mb-1 text-xl font-[550] 3xs:mb-0.5 3xs:text-2xl xs:mb-1 xs:text-3xl sm:mb-2.5 sm:text-4xl md:mb-1 md:text-2xl xl:mb-1.5 xl:text-3xl 2xl:mb-2.5 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
        <span className="gradient-text gradient-main-light dark:gradient-main-dark">
          {experience.role}
        </span>
      </h3>
      <p className="relative z-20 mb-4 text-sm font-[450] text-darkPurple dark:text-purple 3xs:text-base xs:mb-5 xs:text-lg sm:mb-6 sm:text-xl md:mb-4 md:text-base xl:mb-5 xl:text-lg 2xl:mb-7 2xl:text-xl 3xl:mb-8 3xl:text-2xl 4xl:text-3xl">
        {experience.company}
      </p>
      <div className="relative z-20 hidden flex-wrap gap-x-4 gap-y-3 3xs:flex sm:gap-x-6 md:gap-x-4 2xl:gap-x-5 3xl:gap-x-6">
        <div className="flex items-center gap-2 rounded-xl border border-purple bg-beige bg-opacity-40 py-1.5 px-3 dark:border-darkPurple dark:bg-black dark:bg-opacity-30 sm:gap-2.5 sm:rounded-2xl sm:py-2.5 sm:pl-4 sm:pr-4.5 md:gap-2 md:rounded-xl md:py-1.5 md:px-3 2xl:rounded-2xl 2xl:py-2.5 2xl:pl-4 2xl:pr-4.5 3xl:gap-3 3xl:py-3 3xl:pl-4.5 3xl:pr-6">
          <div className="filter-black dark:filter-purple hidden h-4.5 w-4.5 xs:block sm:h-5 sm:w-5 md:h-4.5 md:w-4.5 2xl:h-5 2xl:w-5 4xl:h-5.5 4xl:w-5.5">
            <Image src={clockIcon} alt="Clock icon" />
          </div>
          <p className="text-sm text-black dark:text-lightPurple xs:text-base sm:text-lg md:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">
            {experience.duration}
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-purple bg-beige bg-opacity-40 py-1.5 px-3 dark:border-darkPurple dark:bg-black dark:bg-opacity-30 sm:gap-2.5 sm:rounded-2xl sm:py-2.5 sm:pl-4 sm:pr-4.5 md:gap-2 md:rounded-xl md:py-1.5 md:px-3 2xl:rounded-2xl 2xl:py-2.5 2xl:pl-4 2xl:pr-4.5 3xl:gap-3 3xl:py-3 3xl:pl-4.5 3xl:pr-6">
          <div className="filter-black dark:filter-purple hidden h-4.5 w-4.5 xs:block sm:h-5 sm:w-5 md:h-4.5 md:w-4.5 2xl:h-5 2xl:w-5 4xl:h-5.5 4xl:w-5.5">
            <Image src={locationIcon} alt="Clock icon" />
          </div>
          <p className="text-sm text-black dark:text-lightPurple xs:text-base sm:text-lg md:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">
            {experience.location}
          </p>
        </div>
      </div>
      <OpenButton />
      <div
        className={`absolute z-0 opacity-50
      ${
        experience.company === 'University of Toronto' &&
        'top-1/2 right-[5%] w-[50%] max-w-[180px] -translate-y-1/2'
      }
      ${
        (experience.company === 'AVIEW International' ||
          experience.company === 'Unionville Tennis Club') &&
        '-right-[5%] -bottom-[20%] w-[40%]'
      }
      ${
        experience.company === 'Waterloo Data Science Club' &&
        '-bottom-[20%] -right-[8%] w-[40%] -scale-x-[1]'
      }
      ${
        experience.company === 'PETHS Student Council' &&
        '-right-[2%] -bottom-[10%] w-[30%]'
      }
      ${
        experience.company === 'CREATE Markham' &&
        'right-[2%] -bottom-[10%] w-[40%]'
      }
      `}
      >
        <Image src={experience.logo} alt={`${experience.company}-logo`} />
      </div>
    </div>
  );
}
