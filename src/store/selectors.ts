import { RootState } from './types';

export const selectConfig = (state: RootState) => state.config;
export const selectEntities = (state: RootState) => state.entities;
