import Hero from '@/components/sections/home/Hero';
import Projects from '@/components/sections/home/Projects';
import Experience from '@/components/sections/home/Experience';
import About from '@/components/sections/home/About';
import Contact from '@/components/sections/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
