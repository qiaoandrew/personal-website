import { useContext, useState } from 'react';
import Link from 'next/link';
import ThemeContext from '../../store/theme-context';

const ROUTES = [
  { link: '/#', text: 'Home' },
  { link: '/#projects', text: 'Projects' },
  { link: '/#experiences', text: 'Experiences' },
  { link: '/#about', text: 'About' },
  { link: '/#contact', text: 'Contact' },
  {
    link: '/resume.pdf',
    text: 'Resume',
  },
];

/**
 * Website header, includes navigation links and theme toggle.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-1 top-6 z-50 flex flex-col 3xs:inset-x-2 sm:inset-x-4 xl:inset-x-16 xl:top-12 3xl:mx-auto 3xl:max-w-[1280px]">
      <header className="transition-300 flex items-center justify-between rounded-full bg-transparent px-2 py-3 backdrop-blur-md 3xs:py-4 3xs:px-3 xs:px-5 xl:-mx-6 xl:px-6">
        <Link
          href="/"
          className="gradient-text gradient-main-light dark:gradient-main-dark font-medium md:text-sm 2xl:text-base"
        >
          Andrew Qiao
        </Link>
        <div className="flex items-center gap-6 3xs:gap-9 xl:gap-12">
          <DesktopMenu />
          <ThemeToggle />
          <MobileMenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </header>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

/**
 * Navigation menu for desktop devices.
 */
function DesktopMenu() {
  return (
    <nav className="hidden gap-14 xl:flex 2xl:gap-16">
      {ROUTES.map((route, i) =>
        route.text === 'Resume' ? (
          <a
            href={route.link}
            target="_blank"
            rel="noreferrer"
            className="transition-300 text-sm font-[450] text-black hover:text-darkPurple dark:text-lightPurple dark:hover:text-beige 2xl:text-base"
            key={`route-${i}`}
          >
            {route.text}
          </a>
        ) : (
          <Link
            href={route.link}
            className="transition-300 text-sm font-[450] text-black hover:text-darkPurple dark:text-lightPurple dark:hover:text-beige 2xl:text-base"
            key={`route-${i}`}
          >
            {route.text}
          </Link>
        )
      )}
    </nav>
  );
}

/**
 * Toggle to switch between light and dark theme.
 */
function ThemeToggle() {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className="transition-300 relative h-5 w-5 cursor-pointer rounded-full border border-black bg-purple dark:rotate-180 dark:border-purple 3xs:h-6 3xs:w-6"
      onClick={themeContext.changeTheme}
    >
      <div className="absolute inset-y-0 left-0 w-1/2 rounded-l-full bg-black"></div>
    </div>
  );
}

/**
 * Button to toggle mobile menu.
 *
 * @param isMenuOpen is a state variable determining whether or not the mobile is showing.
 * @param setIsMenu function that changes state variable.
 */
function MobileMenuButton({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className="flex cursor-pointer flex-col gap-1.25 xl:hidden"
      onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
    >
      <div
        className={`transition-300 h-1.25 w-5 rounded-full bg-black dark:bg-lightPurple 3xs:h-1.5 3xs:w-6 ${
          isMenuOpen && 'translate-x-1/2'
        }`}
      />
      <div className="transition-300 h-1.25 w-8 rounded-full bg-black dark:bg-lightPurple 3xs:h-1.5 3xs:w-9" />
      <div
        className={`transition-300 h-1.25 w-5 translate-x-1/2 rounded-full bg-black dark:bg-lightPurple 3xs:h-1.5 3xs:w-6 ${
          isMenuOpen && 'translate-x-0'
        }`}
      />
    </div>
  );
}

/**
 * Mobile navigation menu.
 *
 * @param isMenuOpen is a state variable determining whether or not the mobile is showing.
 * @param setIsMenu function that changes state variable.
 */
function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav
      className={`transition-300 absolute top-[calc(100%+24px)] flex w-full flex-col gap-5 rounded-2xl border border-purple border-opacity-20 bg-lightPurple bg-opacity-20 py-6 text-center backdrop-blur-md dark:border-darkPurple dark:border-opacity-20 dark:bg-darkPurple dark:bg-opacity-5 3xs:gap-6 3xs:rounded-3xl xl:hidden ${
        isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {ROUTES.map((route, i) =>
        route.text === 'Resume' ? (
          <a
            href={route.link}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className={
              isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }
            key={`route-${i}`}
          >
            <span className="gradient-text gradient-main-light dark:gradient-main-dark font-medium">
              {route.text}
            </span>
          </a>
        ) : (
          <Link
            href={route.link}
            onClick={() => setIsMenuOpen(false)}
            className={
              isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }
            key={`route-${i}`}
          >
            <span className="gradient-text gradient-main-light dark:gradient-main-dark font-medium">
              {route.text}
            </span>
          </Link>
        )
      )}
    </nav>
  );
}
