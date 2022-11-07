import Button from '../../UI/Button';

export default function ProjectDescription({ project }) {
  return (
    <section className="mb-12">
      <div className="grid gap-9 2xs:gap-12 lg:mb-16 lg:grid-cols-[1fr_2fr] 2xl:mb-24 2xl:grid-cols-[2fr_5fr]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5 2xs:gap-6">
            {project.points.map((point, i) => (
              <div className="" key={`point-${i}`}>
                <p className="mb-0.5 text-base font-[550] 2xs:mb-1 sm:mb-2 sm:text-lg lg:mb-1 lg:text-base 2xl:mb-2 2xl:text-lg">
                  <span className="gradient-text gradient-main-light dark:gradient-main-dark">
                    {point.title}
                  </span>
                </p>
                <p className="text-base text-black dark:text-beige sm:text-lg lg:text-base 2xl:text-lg">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 lg:hidden">
            {project.buttons.map((button, i) => (
              <Button
                purpose="link"
                link={button.link}
                size="sm"
                mobileFullWidth={true}
                showOpenIcon={true}
                key={`button-${i}`}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 2xs:gap-5 sm:gap-7 lg:gap-5 2xl:gap-7">
          {project.summary.map((text, i) => (
            <p
              className={`text-base text-black dark:text-beige sm:text-lg ${
                i === 0 ? 'font-medium 2xl:text-xl' : 'lg:text-base 2xl:text-lg'
              }`}
              key={`summary-${i}`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="hidden flex-row gap-9 lg:flex">
        {project.buttons.map((button, i) => (
          <Button
            purpose="link"
            link={button.link}
            size="sm"
            mobileFullWidth={false}
            showOpenIcon={true}
            key={`button-${i}`}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </section>
  );
}
