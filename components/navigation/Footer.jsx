import Image from 'next/image';
import linkedinIcon from '../../public/img/icons/linkedin.svg';
import githubIcon from '../../public/img/icons/github.svg';
import instagramIcon from '../../public/img/icons/instagram.svg';

export default function Footer() {
  const socials = [
    { link: '', icon: linkedinIcon },
    { link: '', icon: githubIcon },
    { link: '', icon: instagramIcon },
  ];

  return (
    <footer className="m-horizontal mb-12">
      <div className="gradient-main-light dark:gradient-main-dark mb-8 h-0.25 w-full" />
      <div className="flex flex-col items-center justify-between gap-6 2xs:flex-row 2xs:gap-0">
        <div className="text-center 2xs:text-left">
          <p className="mb-0.5 text-2xl font-[550]">
            <span className="gradient-main-light dark:gradient-main-dark gradient-text">
              Andrew Qiao
            </span>
          </p>
          <a
            href="mailto:andrewqiao2004@gmail.com"
            className="text-base text-black dark:text-lightPurple"
          >
            andrewqiao2004@gmail.com
          </a>
        </div>
        <div className="flex gap-4">
          {socials.map((social, i) => (
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="transition-300 lg:hover:-translate-y-0.5"
              key={`icon-${i}`}
            >
              <Image
                src={social.icon}
                alt="Social icon"
                className="filter-dark-purple dark:filter-purple w-6"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
