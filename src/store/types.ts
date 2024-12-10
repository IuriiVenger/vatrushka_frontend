import { TypedUseSelectorHook } from 'react-redux';

import { store } from '.';

import { Categories } from '@/__generated__/graphql';
import { API } from '@/api/types';
import { TOrderPaymentStatusModalProps } from '@/components/modals/OrderPaymentStatusModal';
import { GlobalModalNames, RequestStatus } from '@/constants';
import { TCard, TOrderStoreData } from '@/types';

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
  userAddresses: StoreDataWithStatusAndMeta<API.Address.Address[] | null>;
  organizationAddresses: StoreDataWithStatusAndMeta<API.Address.TerminalAddress[] | null>;
};

export type UISliceState = {
  isPageScrollBlocked: boolean;
  isMenuOpened: boolean;
  isSubMenuOpened: boolean;
  isMobileSearchOpened: boolean;
  modalVisibility: {
    [GlobalModalNames.ORDER_PAYMENT_STATUS]: boolean;
  };
};

export type EntitiesSliceState = {
  categories: StoreDataWithStatus<Categories[] | null>;
  categoryProducts: StoreDataWithStatusAndMeta<TCard[] | null>;
};

export type UserSliceState = {
  user: API.Auth.Me | null;
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
  activeOrders: TOrderStoreData;
  inactiveOrders: TOrderStoreData;
  paymentStatusModalParams: Pick<TOrderPaymentStatusModalProps, 'isPaymentSuccessful' | 'phoneNumber' | 'orderNumber'>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppSelector = TypedUseSelectorHook<RootState>;
export type AppDispatch = typeof store.dispatch;
export type AppAction<T, P> = {
  readonly type: T;
  readonly payload?: P;
};
