import { cn } from "~/utils/tailwind";
import ID from "~/components/navigation/ID";
import Image from "next/image";
import headshot from "../../../public/img/headshot.png";
import { ABOUT } from "~/constants/about";
import GradientBorder from "~/components/effects/GradientBorder";
import { Button } from "~/components/ui/Button";
import Link from "next/link";

export default function About() {
  return (
    <section className={cn("mx-container mb-24", "xl:mb-40")}>
      <ID id="about" />
      <div className="mx-auto max-w-110 md:max-w-145">
        <Image
          src={headshot}
          alt="Andrew Qiao"
          width={160}
          height={160}
          className="mx-auto mb-8 size-30 rounded-full md:mb-12 md:size-40"
        />
        <p className="font-display text-4 md:text-4.5 mx-auto mb-12 whitespace-pre-line md:mb-16">
          {ABOUT}
        </p>
        <div className="flex justify-stretch sm:justify-center">
          <GradientBorder className="w-full rounded-[11px] md:w-auto">
            <Button
              size="lg"
              variant="outline"
              asChild
              className={cn(
                "font-display w-full border-0 bg-linear-(--gradient-button) font-semibold",
                "md:text-5 md:h-15 md:px-5",
              )}
            >
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </GradientBorder>
        </div>
      </div>
    </section>
  );
}
