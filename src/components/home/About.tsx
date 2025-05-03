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
    <section className={cn("mx-container relative mb-24", "xl:mb-40")}>
      <ID id="about" />
      <div className={cn("mx-auto max-w-110", "md:max-w-145")}>
        <Image
          src={headshot}
          alt="Andrew Qiao"
          width={160}
          height={160}
          className={cn(
            "mx-auto mb-8 size-30 rounded-full",
            "md:mb-12 md:size-40",
          )}
        />
        <p
          className={cn(
            "font-display text-4 text-foreground/80 mx-auto mb-12 leading-7 whitespace-pre-line",
            "md:text-4.5 md:mb-16 md:leading-8",
          )}
        >
          {ABOUT}
        </p>
        <div className="flex justify-stretch sm:justify-center">
          <GradientBorder className="w-full rounded-[11px] md:w-auto md:rounded-[13px]">
            <Button
              size="lg"
              variant="outline"
              asChild
              className={cn(
                "font-display w-full border-0 bg-linear-(--gradient-button) font-semibold",
                "md:text-5 md:rounded-3 md:h-15 md:px-5",
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
