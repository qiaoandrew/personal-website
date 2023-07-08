import { createSlice } from '@reduxjs/toolkit';

export const mobileMenuOpenSlice = createSlice({
  name: 'mobileMenuOpen',
  initialState: { mobileMenuOpen: false },
  reducers: {
    toggleMobileMenu: (state): void => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    openMobileMenu: (state): void => {
      state.mobileMenuOpen = true;
    },
    closeMobileMenu: (state): void => {
      state.mobileMenuOpen = false;
    },
  },
});

export const { toggleMobileMenu, openMobileMenu, closeMobileMenu } =
  mobileMenuOpenSlice.actions;
export default mobileMenuOpenSlice.reducer;
