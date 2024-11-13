/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { ConfigSliceState } from '../types';

const initialState: ConfigSliceState = {
  isWebAppInitialized: false,
};

const confgiSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setWebAppInitialized: (state, action) => {
      state.isWebAppInitialized = action.payload;
    },
  },
});

export const { setWebAppInitialized } = confgiSlice.actions;

export default confgiSlice.reducer;
