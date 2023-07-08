import Link from 'next/link';

import DesktopMenu from '@/components/navigation/DesktopMenu';
import ThemeToggle from '@/components/navigation/ThemeToggle';
import MobileMenuToggle from '@/components/navigation/MobileMenuToggle';
import MobileMenu from '@/components/navigation/MobileMenu';

export default function Header() {
  return (
    <header className='fixed inset-x-1 top-6 z-50 flex flex-col 3xs:inset-x-2 sm:inset-x-4 xl:inset-x-16 xl:top-12 3xl:mx-auto 3xl:max-w-[1280px]'>
      <div className='transition-300 flex items-center justify-between rounded-full bg-transparent px-2 py-3 backdrop-blur-md 3xs:px-3 3xs:py-4 xs:px-5 xl:-mx-6 xl:px-6'>
        <Link
          href='/'
          className='gradient-text dark-main-gradient dark:light-main-gradient font-medium md:text-sm 2xl:text-base'
        >
          Andrew Qiao
        </Link>
        <div className='flex items-center gap-6 3xs:gap-9 xl:gap-12'>
          <DesktopMenu />
          <ThemeToggle />
          <MobileMenuToggle />
        </div>
      </div>
      <MobileMenu />
    </header>
  );
}
