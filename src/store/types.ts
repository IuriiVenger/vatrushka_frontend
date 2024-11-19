import { TypedUseSelectorHook } from 'react-redux';

import { store } from '.';

import { Categories } from '@/__generated__/graphql';
import { API } from '@/api/types';
import { RequestStatus } from '@/constants';
import { SupabaseUser, TCard } from '@/types';

export type StoreDataWithStatus<T> = {
  status: RequestStatus;
  data: T;
};

export type StorePaginationParams = {
  meta: {
    offset: number;
    first: number;
    isLastPage?: boolean;
  };
};

export type StoreDataWithStatusAndMeta<T> = StoreDataWithStatus<T> & StorePaginationParams;

export type AddressSliceState = {
  addresses: StoreDataWithStatusAndMeta<API.Address.Address[] | null>;
};

export type UISliceState = {
  isPageScrollBlocked: boolean;
  isMenuOpened: boolean;
  isSubMenuOpened: boolean;
  isMobileSearchOpened: boolean;
};

export type EntitiesSliceState = {
  categories: StoreDataWithStatus<Categories[] | null>;
  categoryProducts: StoreDataWithStatusAndMeta<TCard[] | null>;
};

export type UserSliceState = {
  user: SupabaseUser | null;
  userData: API.Auth.UserData | null;
  userLoadingStatus: RequestStatus;
};

export type ConfigSliceState = {
  isWebAppInitialized: boolean;
};

export type CartSliceState = {
  activeCart: StoreDataWithStatus<API.Cart.Cart | null>;
  isCartInitialized: boolean;
};

export type OrdersSliceState = {
  orders: StoreDataWithStatusAndMeta<API.Orders.Order[] | null>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppSelector = TypedUseSelectorHook<RootState>;
export type AppDispatch = typeof store.dispatch;
export type AppAction<T, P> = {
  readonly type: T;
  readonly payload?: P;
};
