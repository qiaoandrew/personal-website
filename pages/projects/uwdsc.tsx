import Hero from '@/components/sections/project/Hero';
import Description from '@/components/sections/project/Description';
import Mockups from '@/components/sections/project/Mockups';

import { PROJECTS } from '@/constants/projects';

export default function UWDSC() {
  return (
    <div className='mx-container'>
      <Hero project={PROJECTS[3]} />
      <Description project={PROJECTS[3]} />
      <Mockups project={PROJECTS[3]} />
    </div>
  );
}
