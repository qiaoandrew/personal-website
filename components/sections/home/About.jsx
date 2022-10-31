import Image from "next/image";
import GradientBorder from "../../UI/GradientBorder";
import { ABOUT } from "../../../constants/constants";
import andrewPicture from "../../../public/img/graphics/andrew.png";
import Button from "../../UI/Button";

export default function About() {
  return (
    <section
      className="m-horizontal mb-16 text-center 3xs:mb-20 2xs:mb-24 xs:mb-32 sm:mb-38 md:mb-44 2xl:mb-48 3xl:mb-64"
      id="about"
    >
      <div className="mx-auto mb-7 w-36 3xs:mb-9 2xs:w-40 xs:mb-12 sm:w-48 lg:mb-16">
        <GradientBorder
          borderColor="gradient-1 dark:gradient-2"
          borderRadius="rounded-full"
        >
          <Image src={andrewPicture} alt="Andrew Qiao picture" />
        </GradientBorder>
      </div>
      <div className="mx-auto mb-16 flex max-w-[680px] flex-col gap-3 text-left 3xs:gap-5 2xs:mb-20 md:mb-24 xl:max-w-[720px]">
        {ABOUT.map((about, i) => (
          <p
            className="text-base text-black dark:text-lightPurple xs:text-lg md:text-xl"
            key={`about-${i}`}
          >
            {about}
          </p>
        ))}
      </div>
      <Button>Contact Me</Button>
    </section>
  );
}
