import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeContext from '../../store/theme-context';
import GradientBorder from './GradientBorder';
import openIcon from '../../public/img/icons/open.svg';

/**
 * Text button.
 *
 * @param purpose
 * @param link
 * @param onClick
 * @param size
 * @param mobileFullWidth
 * @param children
 */
export default function Button({
  purpose,
  link,
  onClick,
  size,
  mobileFullWidth,
  showOpenIcon,
  children,
}) {
  const themeContext = useContext(ThemeContext);

  const buttonContent = (
    <div
      className={`transition-300 inline-block cursor-pointer text-center md:hover:-translate-y-1 ${
        mobileFullWidth && 'w-full lg:w-auto'
      }`}
    >
      <GradientBorder
        borderColor="gradient-main-light dark:gradient-main-dark"
        borderRadius="rounded-full"
      >
        <div
          className={`transition-300 relative rounded-full bg-beige dark:bg-black lg:flex lg:gap-2 ${
            size === 'sm'
              ? `px-5 py-3 md:px-7 md:py-3.5 ${
                  showOpenIcon && 'lg:pl-6 lg:pr-5.5'
                }`
              : 'px-7 py-3.5 md:px-8'
          }`}
        >
          <p
            className={`gradient-text gradient-main-light dark:gradient-main-dark text-base font-[450] md:font-[450] ${
              size === 'sm' ? 'xl:text-lg' : '2xs:text-lg md:text-xl'
            }`}
          >
            {children}
          </p>
          {showOpenIcon && (
            <Image
              src={openIcon}
              alt="Open icon"
              className={`absolute top-1/2 right-5 w-6 -translate-y-1/2 lg:relative lg:top-auto lg:right-auto lg:w-7 lg:translate-x-0 lg:translate-y-0 ${
                themeContext.theme === 'light'
                  ? 'filter-dark-purple'
                  : 'filter-purple'
              }`}
            />
          )}
        </div>
      </GradientBorder>
    </div>
  );

  if (purpose === 'route') {
    return <Link href={link}>{buttonContent}</Link>;
  } else if (purpose === 'link') {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {buttonContent}
      </a>
    );
  } else if (purpose === 'submit') {
    return (
      <button className={mobileFullWidth && 'w-full lg:w-auto'} type="submit">
        {buttonContent}
      </button>
    );
  } else {
    return <div onClick={onClick}>{buttonContent}</div>;
  }
}
