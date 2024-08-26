import { TypedUseSelectorHook } from 'react-redux';

import { store } from '.';

export type RootState = ReturnType<typeof store.getState>;
export type AppSelector = TypedUseSelectorHook<RootState>;
export type AppDispatch = typeof store.dispatch;
export type AppAction<T, P> = {
  readonly type: T;
  readonly payload?: P;
};

export type SupabasePaginationParams = {
  meta: {
    offset: number;
    limit: number;
    isLastPage?: boolean;
  };
};

export type StoreDataWithStatus<T> = {
  status: RequestStatus;
  data: T;
};

export type StoreDataWithStatusAndMeta<T> = StoreDataWithStatus<T> & SupabasePaginationParams;
