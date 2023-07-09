import SEO from '@/components/SEO/SEO';
import Hero from '@/components/sections/project/Hero';
import Description from '@/components/sections/project/Description';
import Mockups from '@/components/sections/project/Mockups';

import { PROJECTS } from '@/constants/projects';

export default function UWDSC() {
  return (
    <div className='mx-container'>
      <SEO
        title='UWaterloo Data Science Club | Andrew Qiao'
        description={PROJECTS[3].description}
      />
      <Hero project={PROJECTS[3]} />
      <Description project={PROJECTS[3]} />
      <Mockups project={PROJECTS[3]} />
    </div>
  );
}
