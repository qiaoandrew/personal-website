import { useContext } from 'react';
import Image from 'next/image';
import ThemeContext from '../../store/theme-context';
import linkedinIcon from '../../public/img/icons/linkedin.svg';
import githubIcon from '../../public/img/icons/github.svg';
import instagramIcon from '../../public/img/icons/instagram.svg';

export default function Footer() {
  const themeContext = useContext(ThemeContext);

  const socials = [
    { link: 'https://www.linkedin.com/in/andrewqiao/', icon: linkedinIcon },
    { link: 'https://github.com/qiaoandrew', icon: githubIcon },
    { link: 'https://www.instagram.com/andrew.qiao/', icon: instagramIcon },
  ];

  return (
    <footer className="m-horizontal mb-16">
      <div className="gradient-main-light dark:gradient-main-dark mb-6 h-0.25 w-full xs:mb-8" />
      <div className="flex flex-col items-center justify-between gap-4 2xs:flex-row 2xs:gap-0">
        <div className="text-center 2xs:text-left">
          <p className="mb-0.5 text-xl font-[550] xs:text-2xl">
            <span className="gradient-main-light dark:gradient-main-dark gradient-text">
              Andrew Qiao
            </span>
          </p>
          <a
            href="mailto:andrewqiao2004@gmail.com"
            className="text-sm text-black dark:text-lightPurple xs:text-base"
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
                className={`w-6 ${
                  themeContext.theme === 'light'
                    ? 'filter-dark-purple'
                    : 'filter-purple'
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
