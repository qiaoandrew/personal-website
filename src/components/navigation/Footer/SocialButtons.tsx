import GradientBorder from "~/components/effects/GradientBorder";
import { Button } from "~/components/ui/Button";
import { SOCIALS } from "~/constants/socials";

export default function SocialButtons() {
  return (
    <div className="flex gap-3">
      {SOCIALS.map((social) => (
        <GradientBorder className="rounded-[7px]" key={social.id}>
          <Button subject="icon" variant="ghost" size="xs" asChild>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-(--gradient-button) transition-colors [&>svg]:size-4.5"
            >
              <social.Icon />
            </a>
          </Button>
        </GradientBorder>
      ))}
    </div>
  );
}
