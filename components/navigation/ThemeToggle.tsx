import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/store/store';
import { toggleTheme } from '@/store/slices/themeSlice';

export default function ThemeToggle() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <button
      type='button'
      onClick={() => dispatch(toggleTheme())}
      className='transition-300 relative h-5 w-5 cursor-pointer rounded-full border border-black bg-purple3 dark:rotate-180 dark:border-purple3 3xs:h-6 3xs:w-6'
    >
      <div className='absolute inset-y-0 left-0 w-1/2 rounded-l-full bg-black' />
    </button>
  );
}
