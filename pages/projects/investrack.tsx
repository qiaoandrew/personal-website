import Hero from '@/components/sections/project/Hero';
import Description from '@/components/sections/project/Description';
import Mockups from '@/components/sections/project/Mockups';

import { PROJECTS } from '@/constants/projects';

export default function Investrack() {
  return (
    <div className='mx-container'>
      <Hero project={PROJECTS[0]} />
      <Description project={PROJECTS[0]} />
      <Mockups project={PROJECTS[0]} />
    </div>
  );
}
