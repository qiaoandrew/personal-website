import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/store/store';
import { closeMobileMenu } from '@/store/slices/mobileMenuOpenSlice';
import { ROUTES } from '@/constants/routes';

export default function MobileMenu() {
  const dispatch: AppDispatch = useDispatch();
  const { mobileMenuOpen } = useSelector(
    (state: RootState) => state.mobileMenuOpen
  );

  return (
    <nav
      className={`transition-300 absolute top-[calc(100%+24px)] flex w-full flex-col gap-5 rounded-2xl border border-purple2 border-opacity-20 bg-purple2 bg-opacity-20 py-6 text-center backdrop-blur-md dark:border-purple5 dark:border-opacity-20 dark:bg-purple5 dark:bg-opacity-5 3xs:gap-6 3xs:rounded-3xl xl:hidden ${
        mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {ROUTES.map((route, i) =>
        route.text === 'Resume' ? (
          <a
            href={route.link}
            target='_blank'
            rel='noreferrer'
            onClick={() => dispatch(closeMobileMenu())}
            className={
              mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }
            key={`route-${i}`}
          >
            <span className='gradient-text dark-main-gradient dark:light-main-gradient font-medium'>
              {route.text}
            </span>
          </a>
        ) : (
          <Link
            href={route.link}
            onClick={() => dispatch(closeMobileMenu())}
            className={
              mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }
            key={`route-${i}`}
          >
            <span className='gradient-text dark-main-gradient dark:light-main-gradient font-medium'>
              {route.text}
            </span>
          </Link>
        )
      )}
    </nav>
  );
}
