import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import ThemeContext from "../../store/theme-context";

const ROUTES = [
  { link: "/#", text: "Home" },
  { link: "/#projects", text: "Projects" },
  { link: "/#experiences", text: "Experiences" },
  { link: "/#about", text: "About" },
  { link: "/#contact", text: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed left-2 right-2 z-30 flex flex-col pt-9 sm:left-4 sm:right-4 xl:left-10 xl:right-10">
      <header className="transition-300 flex items-center justify-between overflow-hidden rounded-full bg-lightPurple bg-opacity-20 px-3 py-3 backdrop-blur-md dark:bg-darkPurple dark:bg-opacity-5 3xs:py-4 xs:px-5 xl:px-6">
        <Link
          href="/"
          className="gradient-text gradient-1 dark:gradient-2 font-medium"
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

function DesktopMenu() {
  return (
    <nav className="hidden gap-16 font-[450] text-black dark:text-lightPurple xl:flex">
      {ROUTES.map((route, i) => (
        <Link className="" href={route.link} key={`route-${i}`}>
          {route.text}
        </Link>
      ))}
    </nav>
  );
}

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

function MobileMenuButton({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className="flex cursor-pointer flex-col gap-1.25 xl:hidden"
      onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
    >
      <div
        className={`transition-300 h-1.25 w-5 rounded-full bg-black dark:bg-lightPurple 3xs:h-1.5 3xs:w-6 ${
          isMenuOpen && "translate-x-1/2"
        }`}
      />
      <div className="transition-300 h-1.25 w-8 rounded-full bg-black dark:bg-lightPurple 3xs:h-1.5 3xs:w-9" />
      <div
        className={`transition-300 h-1.25 w-5 translate-x-1/2 rounded-full bg-black dark:bg-lightPurple 3xs:h-1.5 3xs:w-6 ${
          isMenuOpen && "translate-x-0"
        }`}
      />
    </div>
  );
}

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav
      className={`transition-300 relative mt-4 flex w-full flex-col gap-8 rounded-2xl bg-lightPurple bg-opacity-20 py-6 text-center font-medium backdrop-blur-md dark:bg-darkPurple dark:bg-opacity-5 xl:hidden ${
        isMenuOpen ? "flex" : "hidden"
      }`}
    >
      {ROUTES.map((route, i) => (
        <Link
          href={route.link}
          onClick={() => setIsMenuOpen(false)}
          className={!isMenuOpen && "pointer-events-none"}
          key={`route-${i}`}
        >
          <span className="gradient-text gradient-1 dark:gradient-2">
            {route.text}
          </span>
        </Link>
      ))}
    </nav>
  );
}
