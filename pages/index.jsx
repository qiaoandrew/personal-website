import SEO from '../components/SEO/SEO';
import Landing from '../components/sections/home/Landing';
import Projects from '../components/sections/home/Projects';
import Experiences from '../components/sections/home/Experiences';
import About from '../components/sections/home/About';
import Contact from '../components/sections/home/Contact';
import Footer from '../components/navigation/Footer';

export default function Home() {
  return (
    <>
      <SEO
        title="Andrew Qiao"
        description="Hi! I'm Andrew, a first year CS student at the University of Waterloo. Welcome to my personal website."
        keywords="Andrew Qiao,University of Waterloo,Computer Science,Pethsapp,TSAC,CREATE Markham,AVIEW International,Software Engineer"
      />
      <Landing />
      <Projects />
      <Experiences />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
