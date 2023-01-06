import SEO from '../../components/SEO/SEO';
import ProjectPage from '../../components/sections/projects/ProjectPage';
import Footer from '../../components/navigation/Footer';

export default function AVIEW() {
  return (
    <>
      <SEO
        title="AVIEW International | Andrew Qiao"
        description="As Technology Chairperson on my high school's student council during my senior year, I revamped the council's website using React.js, Next.js, and Firebase."
        keywords="TSAC,Pierre Elliott Trudeau High School,Next.js,Firebase,Andrew Qiao"
      />
      <ProjectPage idx={3} />
      <Footer />
    </>
  );
}
