import { createSlice } from '@reduxjs/toolkit';

const saveTheme = (theme: 'dark' | 'light'): void => {
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'dark' as 'dark' | 'light' },
  reducers: {
    toggleTheme: (state): void => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      state.theme = newTheme;
      saveTheme(newTheme);
      console.log(newTheme);
    },
    setTheme: (state, action): void => {
      const newTheme = action.payload;
      state.theme = newTheme;
      saveTheme(newTheme);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
