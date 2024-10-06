/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { API } from '@/api/types';
import { RequestStatus } from '@/constants';
import { SupabaseUser } from '@/types';

type InitialState = {
  user: SupabaseUser | null;
  userData: API.Auth.UserData | null;
  userLoadingStatus: RequestStatus;
};

const initialState: InitialState = {
  user: null,
  userData: null,
  userLoadingStatus: RequestStatus.NONE,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userLoadingStatus = RequestStatus.FULLFILLED;
      state.user = action.payload;
    },
    setUserLoadingStatus: (state, action) => {
      state.userLoadingStatus = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUser, setUserLoadingStatus, setUserData } = userSlice.actions;

export default userSlice.reducer;
