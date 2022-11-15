import Image from 'next/image';
import Button from '../components/UI/Button';
import mascot from '../public/img/graphics/mascot.png';

export default function Success() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-1/2 w-full -translate-y-[60%] rounded-3xl text-center">
        <div className="flex w-full justify-center">
          <div className="rounded-3xl bg-beige bg-opacity-80 px-8 py-10 dark:bg-black dark:bg-opacity-60">
            <h1 className="mb-1.5 text-6xl font-semibold 2xs:text-8xl sm:mb-2.5 sm:text-9xl md:mb-3 xl:mb-5">
              <span className="gradient-text gradient-main-light dark:gradient-main-dark">
                Thank you!
              </span>
            </h1>
            <p className="mx-5 mb-8 max-w-[420px] text-base text-black dark:text-lightPurple 3xs:text-lg xs:mx-auto xs:mb-10 sm:text-xl xl:mb-14 xl:max-w-[480px] xl:text-2xl">
              Message delivered! I will get back to you as soon as possible.
            </p>
            <Button purpose="route" link="/" size="lg">
              Return Home
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={mascot}
        alt="Mascot"
        className="absolute -bottom-[20%] -z-10 md:-bottom-[40%] md:-right-[5%] lg:-bottom-[30%]"
      />
    </div>
  );
}
