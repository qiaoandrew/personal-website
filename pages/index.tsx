import SEO from '@/components/SEO/SEO';
import Hero from '@/components/sections/home/Hero';
import Projects from '@/components/sections/home/Projects';
import Experience from '@/components/sections/home/Experience';
import About from '@/components/sections/home/About';
import Contact from '@/components/sections/home/Contact';

export default function Home() {
  return (
    <>
      <SEO
        title='Andrew Qiao'
        description="Hi, I'm Andrew Qiao, a CS student @ UWaterloo. Welcome to my personal website."
      />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
