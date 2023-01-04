import SEO from '../../components/SEO/SEO';
import ProjectPage from '../../components/sections/projects/ProjectPage';
import Footer from '../../components/navigation/Footer';

export default function Pethsapp() {
  return (
    <>
      <SEO
        title="Pethsapp | Andrew Qiao"
        description="Pethsapp is my former high school's official mobile application. I led a team of developers and designers in revamping it using Flutter and Firebase."
        keywords="Pethsapp,Pierre Elliott Trudeau High School,Flutter,Firebase,Andrew Qiao"
      />
      <ProjectPage idx={0} />
      <Footer />
    </>
  );
}
