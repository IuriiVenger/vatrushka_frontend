/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { UserSliceState } from '../types';

import { RequestStatus } from '@/constants';
import { deleteTokens } from '@/utils/tokensFactory';

const initialState: UserSliceState = {
  user: null,
  userData: null,
  userLoadingStatus: RequestStatus.NONE,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userLoadingStatus = RequestStatus.FULFILLED;
      state.user = action.payload;
    },
    setUserLoadingStatus: (state, action) => {
      state.userLoadingStatus = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.userData = null;
      state.userLoadingStatus = RequestStatus.NONE;
    },
  },
});

export const { setUser, setUserLoadingStatus, setUserData, logout } = userSlice.actions;

export default userSlice.reducer;
