import ID from '@/components/navigation/ID';
import Grid from '@/components/UI/Grid';
import ExperienceCard from '@/components/cards/ExperienceCard';

import { EXPERIENCES } from '@/constants/experiences';

export default function Experience() {
  return (
    <section className='mx-container relative mb-20 2xs:mb-24 xs:mb-32 sm:mb-36 md:mb-44 2xl:mb-48 3xl:mb-64'>
      <ID id='experience' />
      <h2 className='gradient-text dark-main-gradient dark:light-main-gradient mb-4 inline-block text-3xl font-[550] 3xs:mb-6 3xs:text-4xl xs:text-6xl lg:text-7xl 2xl:text-8xl 3xl:mb-10 3xl:text-10xl'>
        Experiences
      </h2>
      <Grid>
        {EXPERIENCES.map((experience, i) => (
          <div
            className={`transition-300 group ${
              i % 2 == 0
                ? 'md:hover:-translate-y-1'
                : 'md:translate-y-10 md:hover:translate-y-9'
            }`}
            key={experience.id}
          >
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </Grid>
    </section>
  );
}
