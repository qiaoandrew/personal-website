import Image from 'next/image';
import Link from 'next/link';
import mascot from '../public/img/graphics/mascot.png';

export default function Error404() {
  return (
    <Link className="relative block h-screen w-full overflow-hidden" href="/">
      <div className="m-horizontal">
        <h1 className="relative z-10 mt-16 mb-20 max-w-[660px] rounded-3xl bg-beige bg-opacity-80 text-2xl font-[550] text-black dark:bg-black dark:bg-opacity-60 dark:text-lightPurple 2xs:mt-20 2xs:text-3xl xs:text-4xl sm:text-6xl lg:mt-40 lg:text-7xl">
          Uh oh. Looks like you got lost! Click anywhere to return home.
        </h1>
        <Image
          src={mascot}
          alt="Mascot"
          className="absolute left-1/2 top-1/3 -translate-x-1/2 md:left-auto md:right-0 md:-bottom-40 md:mx-0 md:translate-x-0"
        />
      </div>
    </Link>
  );
}
