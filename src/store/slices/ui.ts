/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UISliceState } from '../types';

const initialState: UISliceState = {
  isPageScrollBlocked: false,
  isMenuOpened: false,
  isSubMenuOpened: false,
  isMobileSearchOpened: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isPageScrollBlocked = action.payload;
      state.isMenuOpened = action.payload;
      state.isSubMenuOpened = false;
      if (action.payload) {
        state.isMobileSearchOpened = false;
      }
    },
    toggleSubMenu: (state, action: PayloadAction<boolean>) => {
      state.isSubMenuOpened = action.payload;
    },
    toggleSearch: (state, action: PayloadAction<boolean>) => {
      state.isPageScrollBlocked = action.payload;
      state.isMobileSearchOpened = action.payload;
      if (action.payload) {
        state.isMenuOpened = false;
        state.isSubMenuOpened = false;
      }
    },
    resetAll: (state) => {
      state.isPageScrollBlocked = false;
      state.isMenuOpened = false;
      state.isSubMenuOpened = false;
      state.isMobileSearchOpened = false;
    },
  },
});

export const { toggleMenu, toggleSubMenu, toggleSearch, resetAll } = uiSlice.actions;

export default uiSlice.reducer;
