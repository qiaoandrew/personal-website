import Hero from '@/components/sections/project/Hero';
import Description from '@/components/sections/project/Description';
import Mockups from '@/components/sections/project/Mockups';

import { PROJECTS } from '@/constants/projects';

export default function Remax() {
  return (
    <div className='mx-container'>
      <Hero project={PROJECTS[1]} />
      <Description project={PROJECTS[1]} />
      <Mockups project={PROJECTS[1]} />
    </div>
  );
}
