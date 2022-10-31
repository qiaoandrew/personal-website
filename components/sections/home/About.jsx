import Image from "next/image";
import GradientBorder from "../../UI/GradientBorder";
import andrewPicture from "../../../public/img/graphics/andrew.png";

export default function About() {
  return (
    <section
      className="m-horizontal mb-10 pt-8 3xs:mb-16 3xs:pt-10 lg:pt-14 2xl:mb-24 3xl:pt-20 4xl:pt-28"
      id="about"
    >
      <div className="mx-auto w-36 2xs:w-44 sm:w-48 xl:w-56 2xl:w-60 3xl:w-64">
        <GradientBorder
          borderColor="gradient-1 dark:gradient-2"
          borderRadius="rounded-full"
        >
          <Image src={andrewPicture} alt="Andrew Qiao picture" />
        </GradientBorder>
      </div>
    </section>
  );
}
