import SEO from '@/components/SEO/SEO';
import Hero from '@/components/sections/project/Hero';
import Description from '@/components/sections/project/Description';
import Mockups from '@/components/sections/project/Mockups';

import { PROJECTS } from '@/constants/projects';

export default function Remax() {
  return (
    <div className='mx-container'>
      <SEO title='REMAX | Andrew Qiao' description={PROJECTS[1].description} />
      <Hero project={PROJECTS[1]} />
      <Description project={PROJECTS[1]} />
      <Mockups project={PROJECTS[1]} />
    </div>
  );
}
