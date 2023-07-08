import ID from '@/components/navigation/ID';
import Grid from '@/components/UI/Grid';
import ProjectCard from '@/components/cards/ProjectCard';

import { PROJECTS } from '@/constants/projects';

export default function Projects() {
  return (
    <section className='mx-container relative mb-20 2xs:mb-24 xs:mb-32 sm:mb-36 md:mb-44 2xl:mb-48 3xl:mb-64'>
      <ID id='projects' />
      <Grid>
        {PROJECTS.map((project, i) => (
          <div
            className={`transition-300 group cursor-pointer ${
              i % 2 == 0
                ? 'md:hover:-translate-y-1'
                : 'md:translate-y-10 md:hover:translate-y-9'
            }`}
            key={project.id}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </Grid>
    </section>
  );
}
