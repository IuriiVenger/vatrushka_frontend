import { TypedUseSelectorHook } from 'react-redux';

import { store } from '.';

import { API } from '@/api/types';
import { RequestStatus } from '@/constants';

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

type UISliceState = {
  isPageScrollBlocked: boolean;
  isMenuOpened: boolean;
  isSubMenuOpened: boolean;
  isMobileSearchOpened: boolean;
};

type EntitiesSliceState = {
  categories: StoreDataWithStatus<Categories[] | null>;
  categoryProducts: StoreDataWithStatusAndMeta<TCard[] | null>;
};

type UserSliceState = {
  user: SupabaseUser | null;
  userData: API.Auth.UserData | null;
  userLoadingStatus: RequestStatus;
};

type ConfigSliceState = {
  isWebAppInitialized: boolean;
};

type CartSliceState = {
  activeCart: StoreDataWithStatus<API.Cart.Cart | null>;
  isCartInitialized: boolean;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppSelector = TypedUseSelectorHook<RootState>;
export type AppDispatch = typeof store.dispatch;
export type AppAction<T, P> = {
  readonly type: T;
  readonly payload?: P;
};
