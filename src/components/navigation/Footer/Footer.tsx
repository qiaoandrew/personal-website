import { cn } from "~/utils/tailwind";
import GradientText from "~/components/effects/GradientText";
import FooterMenu from "~/components/navigation/Footer/FooterMenu";
import SocialButtons from "~/components/navigation/Footer/SocialButtons";

export default function Footer() {
  return (
    <footer
      className={cn(
        "mx-container flex flex-col gap-12 border-t pt-6 pb-9",
        "md:flex-row md:justify-between md:pt-12 md:pb-16",
      )}
    >
      <div>
        <h3 className="font-display text-6 mb-1 font-semibold">
          <GradientText>Andrew Qiao</GradientText>
        </h3>
        <a
          href="mailto:andrew.qiao@uwaterloo.ca"
          className="font-display text-4 text-foreground/80 mb-4 block font-medium"
        >
          andrew.qiao@uwaterloo.ca
        </a>
        <SocialButtons />
      </div>
      <FooterMenu />
    </footer>
  );
}
