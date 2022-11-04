import ProjectIntro from './ProjectIntro';
import ProjectDescription from './ProjectDescription';
import ProjectMockups from './ProjectMockups';
import { PROJECTS } from '../../../constants/constants';

export default function ProjectPage({ idx }) {
  return (
    <main className="m-horizontal-lg">
      <ProjectIntro project={PROJECTS[idx]} />
      <ProjectDescription project={PROJECTS[idx]} />
      <ProjectMockups project={PROJECTS[idx]} />
    </main>
  );
}
