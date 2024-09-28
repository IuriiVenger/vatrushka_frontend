import { MenuProps } from 'antd';

import { TTab, TTag } from './types';

export enum ResponseStatus {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  VERIFICATION_EXPIRED = 419,
  UNPROCESSABLE_ENTITY = 422,
  USER_BLOCKED = 423,
  SERVER_ERROR = 500,
}

export enum RequestStatus {
  NONE = 'none',
  PENDING = 'pending',
  FULLFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export enum CurrencySymbol {
  RUB = '₽',
}

export enum TagType {
  NEW = 'Новинка',
  RECOMMENDED = 'Рекомендуем',
  HIT = 'Хит',
}

export enum ContactLinks {
  TELEGRAM = 'tg',
  VK = 'vk',
  WHATS_APP = 'whatsapp',
  MAIL = 'mail',
  CHIEF_MAIL = 'chiefMail',
}

export enum NavigationLinks {
  ABOUT = 'about',
  CONTACTS = 'contacts',
  OFFERS = 'offers',
  WHOLESALE = 'wholesale',
  DELIVERY = 'delivery',
  BONUS = 'bonus',
  CONDITIONS = 'conditions',
  // FEEDBACK = 'feedback',
}

export const defaultPaginationParams = {
  first: 30,
  offset: 0,
};

export const emptyStoreDataWithStatus = {
  status: RequestStatus.NONE,
  data: null,
};

export const emptyStoreDataWithStatusAndMeta = {
  ...emptyStoreDataWithStatus,
  meta: {
    ...defaultPaginationParams,
    isLastPage: false,
  },
};

export const TagColorSchema: TTag = {
  Новинка: {
    textColor: '#EB2F96',
    backgroundColor: '#FFF0F6',
  },
  Рекомендуем: {
    textColor: '#2F54EB',
    backgroundColor: '#F0F5FF',
  },
  Хит: {
    textColor: '#722ED1',
    backgroundColor: '#F9F0FF',
  },
  default: {
    textColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
};

export enum SortType {
  MOST_POPULAR = 'mostPopular',
  PRICE_DESCENDING = 'priceDescending',
  PRICE_ASCENDING = 'priceAscending',
}

export const SortTypeTranslation = {
  [SortType.MOST_POPULAR]: 'По популярности',
  [SortType.PRICE_DESCENDING]: 'По убыванию цены',
  [SortType.PRICE_ASCENDING]: 'По возрастанию цены',
};

export enum AddressType {
  FLAT = 'flat',
  HOUSE = 'house',
  OFFICE = 'office',
}

export const addressesTypes: Record<AddressType, { id: string; label: string }> = {
  [AddressType.FLAT]: { id: AddressType.FLAT, label: 'Квартира' },
  [AddressType.HOUSE]: { id: AddressType.HOUSE, label: 'Частный дом' },
  [AddressType.OFFICE]: { id: AddressType.OFFICE, label: 'Офис' },
} as const;

export enum AuthModalProcessType {
  SIGN_IN = 'signIn',
  SIGN_UP = 'signUp',
}

export enum AccountTabs {
  PROFILE = 'profile',
  BONUSES = 'bonuses',
  CURRENT_ORDERS = 'currents-orders',
  ORDER_HISTORY = 'order-history',
  ADDRESSES = 'addresses',
}

export const tabs: Record<AccountTabs, TTab> = {
  [AccountTabs.PROFILE]: { value: 'profile', label: 'Профиль' },
  [AccountTabs.BONUSES]: { value: 'bonuses', label: 'Бонусы' },
  [AccountTabs.CURRENT_ORDERS]: { value: 'currents-orders', label: 'Текущие заказы' },
  [AccountTabs.ORDER_HISTORY]: { value: 'order-history', label: 'История заказов' },
  [AccountTabs.ADDRESSES]: { value: 'addresses', label: 'Мои адреса' },
};

export const sortDropdownItems: MenuProps['items'] = [
  {
    key: SortType.MOST_POPULAR,
    label: SortTypeTranslation[SortType.MOST_POPULAR],
  },
  {
    key: SortType.PRICE_DESCENDING,
    label: SortTypeTranslation[SortType.PRICE_DESCENDING],
  },
  {
    key: SortType.PRICE_ASCENDING,
    label: SortTypeTranslation[SortType.PRICE_ASCENDING],
  },
];

export enum FilterOrdersType {
  ALL = 'all',
  YEAR_2024 = '2024',
  YEAR_2023 = '2023',
}

export const filterOrdersTypeTranslation = {
  [FilterOrdersType.ALL]: 'За все время',
  [FilterOrdersType.YEAR_2024]: '2024 г',
  [FilterOrdersType.YEAR_2023]: '2023 г',
};

export const filterDropdownItems: MenuProps['items'] = [
  {
    key: 'all',
    label: 'За все время',
  },
  {
    key: '2024',
    label: '2024 г',
  },
  {
    key: '2023',
    label: '2023 г',
  },
];
