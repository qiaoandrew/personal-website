import Hero from "~/components/home/Hero";
import Projects from "~/components/home/Projects";
import Experiences from "~/components/home/Experiences";
import About from "~/components/home/About";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Experiences />
      <About />
    </>
  );
}
