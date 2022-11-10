import Landing from '../components/sections/home/Landing';
import Projects from '../components/sections/home/Projects';
import Experiences from '../components/sections/home/Experiences';
import About from '../components/sections/home/About';
import Contact from '../components/sections/home/Contact';

export default function Home() {
  return (
    <>
      <Landing />
      <Projects />
      <Experiences />
      <About />
      <Contact />
    </>
  );
}
