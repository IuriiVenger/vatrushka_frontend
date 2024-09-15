import { TypedUseSelectorHook } from 'react-redux';

import { store } from '.';

import { RequestStatus } from '@/constants';

export type RootState = ReturnType<typeof store.getState>;
export type AppSelector = TypedUseSelectorHook<RootState>;
export type AppDispatch = typeof store.dispatch;
export type AppAction<T, P> = {
  readonly type: T;
  readonly payload?: P;
};

export type StoreDataWithStatus<T> = {
  status: RequestStatus;
  data: T;
};

export type StorePaginationParams = {
  meta: {
    offset: number;
    first?: number;
    isLastPage?: boolean;
  };
};

export type StoreDataWithStatusAndMeta<T> = StoreDataWithStatus<T> & StorePaginationParams;
