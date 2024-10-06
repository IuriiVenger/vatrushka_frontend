import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import config from './slices/config';
import entities from './slices/entities';
import user from './slices/user';

import { AppDispatch, AppSelector } from './types';

export const store = configureStore({
  reducer: {
    config,
    entities,
    user,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: AppSelector = useSelector;
