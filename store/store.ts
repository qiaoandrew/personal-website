import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '@/store/slices/themeSlice';
import mobileMenuOpenReducer from '@/store/slices/mobileMenuOpenSlice';

export const store = configureStore({
  reducer: { theme: themeReducer, mobileMenuOpen: mobileMenuOpenReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
