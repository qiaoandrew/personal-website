import { useSelector } from 'react-redux';
import { Linkedin, GitHub, Instagram } from 'react-feather';

import { RootState } from '@/store/store';
import { COLORS } from '@/constants/colors';

export default function Footer() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const SOCIALS = [
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/andrewqiao/',
      icon: (
        <Linkedin
          size={24}
          color={theme === 'light' ? COLORS.purple4 : COLORS.purple2}
          className='transition-300'
        />
      ),
    },
    {
      id: 'github',
      url: 'https://github.com/qiaoandrew',
      icon: (
        <GitHub
          size={24}
          color={theme === 'light' ? COLORS.purple4 : COLORS.purple2}
          className='transition-300'
        />
      ),
    },
    {
      id: 'instagram',
      url: 'https://www.instagram.com/andrew.qiao/',
      icon: (
        <Instagram
          size={24}
          color={theme === 'light' ? COLORS.purple4 : COLORS.purple2}
          className='transition-300'
        />
      ),
    },
  ];

  return (
    <footer className='mx-container mb-16'>
      <div className='dark-main-gradient dark:light-main-gradient mb-6 h-0.25 w-full xs:mb-8' />
      <div className='flex flex-col items-center justify-between gap-4 2xs:flex-row 2xs:gap-0'>
        <div className='text-center 2xs:text-left'>
          <p className='mb-2 text-xl font-[550] xs:text-2xl'>
            <span className='dark-main-gradient dark:light-main-gradient gradient-text'>
              Andrew Qiao
            </span>
          </p>
          <a
            href='mailto:andrewqiao2004@gmail.com'
            className='text-sm text-black dark:text-purple2 xs:text-md'
          >
            andrewqiao2004@gmail.com
          </a>
        </div>
        <div className='flex gap-4'>
          {SOCIALS.map((social, i) => (
            <a
              href={social.url}
              target='_blank'
              rel='noreferrer'
              className='transition-300 lg:hover:-translate-y-0.5'
              key={social.id}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
