export default function Landing() {
  return (
    <section className="m-horizontal relative mb-8 lg:mb-14 3xl:mb-24">
      <h1 className="transition-300 mb-4 text-2xl font-semibold text-black dark:text-beige 3xs:mb-5 3xs:text-3xl xs:text-4xl sm:mb-7 sm:text-5xl md:text-7xl lg:text-8xl xl:mb-10 xl:text-9xl 2xl:text-10xl 3xl:mb-12 3xl:text-11xl">
        <div>
          Hi. I&apos;m{' '}
          <span className="gradient-text gradient-main-light dark:gradient-main-dark">
            Andrew Qiao
          </span>
          .
        </div>
        <div>
          As a{' '}
          <span className="gradient-text gradient-main-light dark:gradient-main-dark">
            Software Engineer
          </span>
          , I develop{' '}
          <span className="gradient-text gradient-main-light dark:gradient-main-dark">
            inclusive
          </span>{' '}
          user experiences.
        </div>
      </h1>
      <p className="max-w-[931px] text-base font-[450] text-black dark:text-lightPurple xl:text-xl 2xl:text-2xl">
        Currently, I&apos;m a CS student @&nbsp;
        <span className="gradient-text gradient-uwaterloo dark:gradient-uwaterloo-dark">
          University of Waterloo
        </span>
        , Software Engineer @&nbsp;
        <a href="https://www.aviewint.com" target="_blank" rel="noreferrer">
          <span className="gradient-text gradient-aview">AVIEW</span>
        </a>
        , and Research Assistant @&nbsp;
        <span className="gradient-text gradient-uoft dark:gradient-uoft-dark">
          University of Toronto
        </span>
        . Here&apos;s some of my work.
      </p>
    </section>
  );
}
