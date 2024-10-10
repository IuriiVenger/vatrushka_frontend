import { RootState } from './types';

export const selectConfig = (state: RootState) => state.config;
export const selectEntities = (state: RootState) => state.entities;
export const selectUI = (state: RootState) => state.ui;
export const selectUser = (state: RootState) => state.user;
export const selectIsUserLoggedIn = (state: RootState) => !!state.user.user?.id;
