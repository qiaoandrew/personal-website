export default function Landing() {
  return (
    <section className="m-horizontal relative pt-30 2xs:pt-36 xs:pt-40 2xl:pt-48">
      <h1 className="transition-300 mb-4 text-2xl font-[550] text-black dark:text-beige 3xs:mb-6 3xs:text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:mb-10 xl:text-9xl 2xl:text-10xl 3xl:mb-12 3xl:text-11xl 3xl:font-semibold">
        <div>
          Hi. I&apos;m{" "}
          <span className="gradient-text gradient-1 dark:gradient-2">
            Andrew Qiao
          </span>
          .
        </div>
        <div>
          As a{" "}
          <span className="gradient-text gradient-1 dark:gradient-2">
            Software Engineer
          </span>
          , I develop{" "}
          <span className="gradient-text gradient-1 dark:gradient-2">
            inclusive
          </span>{" "}
          user experiences.
        </div>
      </h1>
      <p className="max-w-[931px] font-[450] text-black dark:text-lightPurple 2xs:text-lg xl:text-xl 2xl:text-2xl">
        Currently, I&apos;m a CS student @{" "}
        <span className="gradient-text gradient-uwaterloo dark:gradient-uwaterloo-dark">
          University of Waterloo
        </span>
        , Software Engineer @{" "}
        <span className="gradient-text gradient-aview">AVIEW</span>, and
        Research Intern @{" "}
        <span className="gradient-text gradient-uoft dark:gradient-uoft-dark">
          University of Toronto
        </span>
        . Here&apos;s some of my work.
      </p>
    </section>
  );
}
