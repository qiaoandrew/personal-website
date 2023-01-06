import Footer from '../../components/navigation/Footer';
import ProjectPage from '../../components/sections/projects/ProjectPage';
import SEO from '../../components/SEO/SEO';

export default function CREATE() {
  return (
    <>
      <SEO title="CREATE | Andrew Qiao" description="" keywords="" />
      <ProjectPage idx={2} />
      <Footer />
    </>
  );
}
