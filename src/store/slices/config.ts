/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { ConfigSliceState } from '../types';

const initialState: ConfigSliceState = {
  isWebAppInitialized: false,
};

const confgiSlice = createSlice({
  name: 'config',
  initialState,
  selectors: {
    selectConfig: (state) => state,
  },
  reducers: {
    setWebAppInitialized: (state, action) => {
      state.isWebAppInitialized = action.payload;
    },
  },
});

export const {
  selectors: { selectConfig },
  actions: { setWebAppInitialized },
  reducer: config,
} = confgiSlice;

export default confgiSlice.reducer;
