import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/store/store';
import { toggleMobileMenu } from '@/store/slices/mobileMenuOpenSlice';

export default function MobileMenuToggle() {
  const dispatch: AppDispatch = useDispatch();
  const { mobileMenuOpen } = useSelector(
    (state: RootState) => state.mobileMenuOpen
  );

  return (
    <button
      type='button'
      onClick={() => dispatch(toggleMobileMenu())}
      className='flex cursor-pointer flex-col gap-1.25 xl:hidden'
    >
      <div
        className={`transition-300 h-1.25 w-5 rounded-full bg-black dark:bg-purple2 3xs:h-1.5 3xs:w-6 ${
          mobileMenuOpen ? 'translate-x-1/2' : 'translate-x-0'
        }`}
      />
      <div className='transition-300 h-1.25 w-8 rounded-full bg-black dark:bg-purple2 3xs:h-1.5 3xs:w-9' />
      <div
        className={`transition-300 h-1.25 w-5 rounded-full bg-black dark:bg-purple2 3xs:h-1.5 3xs:w-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-1/2'
        }`}
      />
    </button>
  );
}
