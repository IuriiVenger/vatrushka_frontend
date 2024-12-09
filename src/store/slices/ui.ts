/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UISliceState } from '../types';

import { GlobalModalNames } from '@/constants';

const defaultGlobalModalVisibility = Object.values(GlobalModalNames).reduce(
  (acc: Record<GlobalModalNames, boolean>, name) => ({ ...acc, [name]: false }),
  {} as Record<GlobalModalNames, boolean>,
);

const initialState: UISliceState = {
  isPageScrollBlocked: false,
  isMenuOpened: false,
  isSubMenuOpened: false,
  isMobileSearchOpened: false,
  modalVisibility: defaultGlobalModalVisibility,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  selectors: {
    selectUI: (state) => state,
  },
  reducers: {
    setModalVisible: (state, action: PayloadAction<GlobalModalNames>) => {
      state.modalVisibility[action.payload] = true;
    },
    setModalHidden: (state, action: PayloadAction<GlobalModalNames>) => {
      state.modalVisibility[action.payload] = false;
    },
    toogleModalVisibility: (state, action: PayloadAction<GlobalModalNames>) => {
      state.modalVisibility[action.payload] = !state.modalVisibility[action.payload];
    },
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

export const {
  selectors: { selectUI },
  actions: {
    toggleMenu,
    toggleSubMenu,
    toggleSearch,
    resetAll,
    setModalVisible,
    setModalHidden,
    toogleModalVisibility,
  },
  reducer: ui,
} = uiSlice;
