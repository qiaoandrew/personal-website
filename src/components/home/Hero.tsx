import { cn } from "~/utils/tailwind";
import GradientText from "~/components/effects/GradientText";

export default function Hero() {
  return (
    <section
      className={cn(
        "mx-container mt-21 mb-9",
        "sm:mt-24",
        "md:mb-12",
        "xl:mt-34 xl:mb-16",
      )}
    >
      <h1
        className={cn(
          "font-display text-8 max-w-[318px] leading-11 font-semibold",
          "xs:text-9 xs:max-w-[360px] xs:leading-12",
          "sm:text-10 sm:max-w-[550px] sm:leading-14",
          "xl:text-12 xl:max-w-[670px] xl:leading-16",
        )}
      >
        <GradientText>
          I&apos;m Andrew Qiao. I like building cool things with cool people.
        </GradientText>
      </h1>
    </section>
  );
}
