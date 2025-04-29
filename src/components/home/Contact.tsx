import { cn } from "~/utils/tailwind";
import ID from "~/components/navigation/ID";
import GradientText from "~/components/effects/GradientText";
import ContactForm from "~/components/home/ContactForm";

export default function Contact() {
  return (
    <section className="bg-linear-(--gradient-contact)">
      <ID id="contact" />
      <div
        className={cn(
          "mx-container grid gap-y-8 pt-9 pb-24",
          "md:grid-cols-[minmax(0,.9fr)_minmax(0,1fr)] md:gap-x-12 md:pt-20 md:pb-36",
        )}
      >
        <div>
          <h2
            className={cn(
              "font-display text-7 mb-2 font-semibold",
              "md:text-11 md:mb-4",
            )}
          >
            <GradientText>Let&apos;s get in touch.</GradientText>
          </h2>
          <p
            className={cn(
              "text-4 text-foreground/80 leading-7",
              "md:text-5 md:leading-9",
            )}
          >
            Have a question, new opportunity, or just want to have a quick chat?
            Feel free to send me a message.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
