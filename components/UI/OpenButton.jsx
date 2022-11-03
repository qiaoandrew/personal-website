import Image from 'next/image';
import GradientBorder from './GradientBorder';
import openIcon from '../../public/img/icons/open.svg';

export default function OpenButton() {
  return (
    <div className="absolute top-3 right-3 z-40 3xs:top-4 3xs:right-4 xs:top-6 xs:right-6 2xl:top-8 2xl:right-8">
      <GradientBorder
        borderColor="gradient-1 dark:gradient-2"
        borderRadius="rounded-full"
      >
        <div className="gradient-2 dark:gradient-1 grid h-8 w-8 place-content-center rounded-full 3xs:h-12 3xs:w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-12 md:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16">
          <div className="dark:filter-purple filter-dark-purple relative h-4 w-4 3xs:h-6 3xs:w-6 sm:h-8 sm:w-8 md:h-6 md:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8">
            <Image src={openIcon} alt="Open icon" fill />
          </div>
        </div>
      </GradientBorder>
    </div>
  );
}
