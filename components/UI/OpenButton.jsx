import Image from 'next/image';
import GradientBorder from './GradientBorder';
import openIcon from '../../public/img/icons/open.svg';

/**
 * Open button that displays on each project and experience card.
 */
export default function OpenButton() {
  return (
    <div className="absolute top-3 right-3 z-40 3xs:top-4 3xs:right-4 xs:top-6 xs:right-6 2xl:top-8 2xl:right-8">
      <GradientBorder
        borderColor="gradient-main-light dark:gradient-main-dark"
        borderRadius="rounded-full"
      >
        <div className="gradient-main-dark dark:gradient-main-light grid h-8 w-8 place-content-center rounded-full 3xs:h-10 3xs:w-10 2xs:h-12 2xs:w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-12 md:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16">
          <div className="dark:filter-purple filter-dark-purple relative h-4 w-4 3xs:h-5 3xs:w-5 2xs:h-6 2xs:w-6 sm:h-8 sm:w-8 md:h-6 md:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8">
            <Image src={openIcon} alt="Open icon" fill />
          </div>
        </div>
      </GradientBorder>
    </div>
  );
}
