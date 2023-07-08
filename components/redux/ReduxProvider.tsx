import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

import { AppDispatch, store } from '@/store/store';
import { setTheme } from '@/store/slices/themeSlice';

type Props = { children: React.ReactNode };

export default function ReduxProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <ThemeInitialState>{children}</ThemeInitialState>
    </Provider>
  );
}

function ThemeInitialState({ children }: Props) {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme) {
      dispatch(setTheme(theme));
    }
  }, [dispatch]);

  return <>{children}</>;
}
