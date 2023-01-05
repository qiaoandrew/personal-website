import SEO from '../../components/SEO/SEO';
import ProjectPage from '../../components/sections/projects/ProjectPage';
import Footer from '../../components/navigation/Footer';

export default function UWDSC() {
  return (
    <>
      <SEO
        title="UWaterloo Data Science Club"
        description="As the current VP of Web Development at the University of Waterloo's Data Science Club, I am leading a team of developers and designers in devloping the club's website."
        keyword="UWaterloo Data Science Club,University of Waterloo,Next.js,React.js,Tailwind CSS,Firebase,Andrew Qiao"
      />
      <ProjectPage idx={1} />
      <Footer />
    </>
  );
}
