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
  CURRENT_ORDERS = 'current-orders',
  ORDER_HISTORY = 'order-history',
  ADDRESSES = 'addresses',
}

export const accountTabs: Record<AccountTabs, TTab> = {
  [AccountTabs.PROFILE]: { value: AccountTabs.PROFILE, label: 'Профиль' },
  [AccountTabs.BONUSES]: { value: AccountTabs.BONUSES, label: 'Бонусы' },
  [AccountTabs.CURRENT_ORDERS]: { value: AccountTabs.CURRENT_ORDERS, label: 'Текущие заказы' },
  [AccountTabs.ORDER_HISTORY]: { value: AccountTabs.ORDER_HISTORY, label: 'История заказов' },
  [AccountTabs.ADDRESSES]: { value: AccountTabs.ADDRESSES, label: 'Мои адреса' },
};

export enum DeliveryTypeOptions {
  COURIER = 'courier',
  PICKUP = 'pickup',
}

export const deliveryTypeOptions: Record<DeliveryTypeOptions, TTab> = {
  [DeliveryTypeOptions.COURIER]: { value: DeliveryTypeOptions.COURIER, label: 'Доставка курьером' },
  [DeliveryTypeOptions.PICKUP]: { value: DeliveryTypeOptions.PICKUP, label: 'Самовывоз' },
};

export enum DeliveryTimeOptions {
  ASAP = 'asap',
  SCHEDULED = 'scheduled',
}

export const deliveryTimeOptions: Record<DeliveryTimeOptions, TTab> = {
  [DeliveryTimeOptions.ASAP]: { value: DeliveryTimeOptions.ASAP, label: 'Как можно скорее' },
  [DeliveryTimeOptions.SCHEDULED]: { value: DeliveryTimeOptions.SCHEDULED, label: 'На точное время' },
};

export enum PaymentOptions {
  ONLINE = 'online',
  CASH = 'cash',
}

export const paymentOptions: Record<PaymentOptions, TTab> = {
  [PaymentOptions.ONLINE]: { value: PaymentOptions.ONLINE, label: 'Онлайн' },
  [PaymentOptions.CASH]: { value: PaymentOptions.CASH, label: 'Наличными' },
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

export enum AuthModalSteps {
  AUTH_ACTION = 0,
  SIGN_IN = 1,
  SIGN_UP = 2,
  CONFIRM_PHONE = 3,
}
