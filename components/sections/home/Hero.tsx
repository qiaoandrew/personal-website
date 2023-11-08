export default function Hero() {
  return (
    <section className='mx-container relative mb-8 lg:mb-14 3xl:mb-24'>
      <h1 className='transition-300 mb-4 text-2xl font-semibold leading-[1.5] text-black dark:text-beige 3xs:mb-5 3xs:text-3xl xs:text-4xl sm:mb-7 sm:text-5xl md:text-7xl lg:text-8xl xl:mb-10 xl:text-10xl 2xl:text-13xl 3xl:text-15xl'>
        <div>
          Hi. I&apos;m{' '}
          <span className='gradient-text dark-main-gradient dark:light-main-gradient'>
            Andrew Qiao
          </span>
          .
        </div>
        <div>
          As a{' '}
          <span className='gradient-text dark-main-gradient dark:light-main-gradient'>
            Software Engineer
          </span>
          , I develop{' '}
          <span className='gradient-text dark-main-gradient dark:light-main-gradient'>
            innovative
          </span>{' '}
          user experiences.
        </div>
      </h1>
      <p className='max-w-[720px] font-[450] leading-loose text-black dark:text-purple2 xs:text-lg sm:text-xl xl:max-w-[931px] 2xl:text-2xl'>
        Currently, I&apos;m a CS student @&nbsp;
        <span className='gradient-text dark-uwaterloo-gradient dark:light-uwaterloo-gradient'>
          University of Waterloo
        </span>
        . I&apos;ve worked @&nbsp;
        <span className='gradient-text dark-td-gradient dark:light-td-gradient'>
          TD Bank
        </span>{' '}
        ,{' '}
        <span className='gradient-text dark-uoft-gradient dark:light-uoft-gradient'>
          University of Toronto
        </span>
        , and{' '}
        <span className='gradient-text dark-uoft-gradient dark:light-uoft-gradient'>
          UHN
        </span>
        . Here&apos;s some of my work.
      </p>
    </section>
  );
}
