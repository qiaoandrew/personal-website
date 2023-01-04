import SEO from '../../components/SEO/SEO';
import ProjectPage from '../../components/sections/projects/ProjectPage';
import Footer from '../../components/navigation/Footer';

export default function CREATEMarkham() {
  return (
    <>
      <SEO
        title="CREATE Markham | Andrew Qiao"
        description="As Technology Chairperson of CREATE Markham, I revamped their website using React.js, Next.js, and Firebase to enhance the organization's digital presence."
        keywords="CREATE Markham,React.js,Next.js,Firebase,Andrew Qiao"
      />
      <ProjectPage idx={1} />
      <Footer />
    </>
  );
}
