export default function Contact() {
  return (
    <section
      className="bg-gradient-to-b from-translucentLightPurple to-transparent dark:from-translucentDarkPurple"
      id="contact"
    >
      <div className="m-horizontal pt-10 pb-12">
        <h2 className="mb-2 text-2xl font-[550]">
          <span className="gradient-text gradient-main-light dark:gradient-main-dark">
            Let&apos;s get in touch.
          </span>
        </h2>
        <p className="mb-6 text-base text-black dark:text-lightPurple">
          Have a question, new opportunity, or just want to have a quick chat?
          Message me and I&apos;ll make sure to respond ASAP!
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  return <form onSubmit={() => {}}></form>;
}
