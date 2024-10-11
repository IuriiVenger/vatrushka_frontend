import { MenuProps } from 'antd';

import { color } from './config/variables';
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
  FULFILLED = 'fulfilled',
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
  // ABOUT = 'about',
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
    isLastPage: undefined,
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

export enum AccountTabsOptions {
  PROFILE = 'profile',
  BONUSES = 'bonuses',
  CURRENT_ORDERS = 'current-orders',
  ORDER_HISTORY = 'order-history',
  ADDRESSES = 'addresses',
}

export const accountTabs: Record<AccountTabsOptions, TTab> = {
  [AccountTabsOptions.PROFILE]: { value: AccountTabsOptions.PROFILE, label: 'Профиль' },
  [AccountTabsOptions.BONUSES]: { value: AccountTabsOptions.BONUSES, label: 'Бонусы' },
  [AccountTabsOptions.CURRENT_ORDERS]: { value: AccountTabsOptions.CURRENT_ORDERS, label: 'Текущие заказы' },
  [AccountTabsOptions.ORDER_HISTORY]: { value: AccountTabsOptions.ORDER_HISTORY, label: 'История заказов' },
  [AccountTabsOptions.ADDRESSES]: { value: AccountTabsOptions.ADDRESSES, label: 'Мои адреса' },
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

export const defaultPlacemarkLayout = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<path
  d="M31.2387 28.9529C32.9219 28.9529 34.2864 27.5884 34.2864 25.9052C34.2864 24.222 32.9219 22.8574 31.2387 22.8574C29.5554 22.8574 28.1909 24.222 28.1909 25.9052C28.1909 27.5884 29.5554 28.9529 31.2387 28.9529Z"
  fill="#A96648" />
<path
  d="M31.2387 10.6665C22.8364 10.6665 16 17.2048 16 25.2385C16 29.0643 17.7439 34.1521 21.1831 40.3609C23.9451 45.3459 27.1404 49.8537 28.8024 52.0966C29.0832 52.4799 29.4504 52.7915 29.8742 53.0064C30.298 53.2212 30.7664 53.3332 31.2415 53.3332C31.7166 53.3332 32.1851 53.2212 32.6089 53.0064C33.0326 52.7915 33.3998 52.4799 33.6807 52.0966C35.3398 49.8537 38.538 45.3459 41.3 40.3609C44.7335 34.154 46.4773 29.0662 46.4773 25.2385C46.4773 17.2048 39.6409 10.6665 31.2387 10.6665ZM31.2387 32.0006C30.0331 32.0006 28.8546 31.6431 27.8522 30.9734C26.8498 30.3036 26.0685 29.3516 25.6072 28.2378C25.1458 27.124 25.0251 25.8984 25.2603 24.716C25.4955 23.5336 26.0761 22.4475 26.9285 21.595C27.781 20.7426 28.8671 20.162 30.0495 19.9268C31.2319 19.6916 32.4575 19.8123 33.5713 20.2737C34.6851 20.735 35.6371 21.5163 36.3069 22.5187C36.9766 23.5211 37.3341 24.6996 37.3341 25.9052C37.3324 27.5212 36.6896 29.0706 35.5469 30.2134C34.4041 31.3561 32.8547 31.9989 31.2387 32.0006Z"
  fill="#A96648" />
<path
  d="M31.2387 28.9529C32.9219 28.9529 34.2864 27.5884 34.2864 25.9052C34.2864 24.222 32.9219 22.8574 31.2387 22.8574C29.5554 22.8574 28.1909 24.222 28.1909 25.9052C28.1909 27.5884 29.5554 28.9529 31.2387 28.9529Z"
  stroke="#A96648" />
<path
  d="M31.2387 10.6665C22.8364 10.6665 16 17.2048 16 25.2385C16 29.0643 17.7439 34.1521 21.1831 40.3609C23.9451 45.3459 27.1404 49.8537 28.8024 52.0966C29.0832 52.4799 29.4504 52.7915 29.8742 53.0064C30.298 53.2212 30.7664 53.3332 31.2415 53.3332C31.7166 53.3332 32.1851 53.2212 32.6089 53.0064C33.0326 52.7915 33.3998 52.4799 33.6807 52.0966C35.3398 49.8537 38.538 45.3459 41.3 40.3609C44.7335 34.154 46.4773 29.0662 46.4773 25.2385C46.4773 17.2048 39.6409 10.6665 31.2387 10.6665ZM31.2387 32.0006C30.0331 32.0006 28.8546 31.6431 27.8522 30.9734C26.8498 30.3036 26.0685 29.3516 25.6072 28.2378C25.1458 27.124 25.0251 25.8984 25.2603 24.716C25.4955 23.5336 26.0761 22.4475 26.9285 21.595C27.781 20.7426 28.8671 20.162 30.0495 19.9268C31.2319 19.6916 32.4575 19.8123 33.5713 20.2737C34.6851 20.735 35.6371 21.5163 36.3069 22.5187C36.9766 23.5211 37.3341 24.6996 37.3341 25.9052C37.3324 27.5212 36.6896 29.0706 35.5469 30.2134C34.4041 31.3561 32.8547 31.9989 31.2387 32.0006Z"
  stroke="#A96648" />
</svg>
`;

export const selectedPlacemarkLayout = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
<path
  d="M31.2387 28.9529C32.9219 28.9529 34.2864 27.5884 34.2864 25.9052C34.2864 24.222 32.9219 22.8574 31.2387 22.8574C29.5554 22.8574 28.1909 24.222 28.1909 25.9052C28.1909 27.5884 29.5554 28.9529 31.2387 28.9529Z"
  fill="#6B8C6E" />
<path
  d="M31.2387 10.6665C22.8364 10.6665 16 17.2048 16 25.2385C16 29.0643 17.7439 34.1521 21.1831 40.3609C23.9451 45.3459 27.1404 49.8537 28.8024 52.0966C29.0832 52.4799 29.4504 52.7915 29.8742 53.0064C30.298 53.2212 30.7664 53.3332 31.2415 53.3332C31.7166 53.3332 32.1851 53.2212 32.6089 53.0064C33.0326 52.7915 33.3998 52.4799 33.6807 52.0966C35.3398 49.8537 38.538 45.3459 41.3 40.3609C44.7335 34.154 46.4773 29.0662 46.4773 25.2385C46.4773 17.2048 39.6409 10.6665 31.2387 10.6665ZM31.2387 32.0006C30.0331 32.0006 28.8546 31.6431 27.8522 30.9734C26.8498 30.3036 26.0685 29.3516 25.6072 28.2378C25.1458 27.124 25.0251 25.8984 25.2603 24.716C25.4955 23.5336 26.0761 22.4475 26.9285 21.595C27.781 20.7426 28.8671 20.162 30.0495 19.9268C31.2319 19.6916 32.4575 19.8123 33.5713 20.2737C34.6851 20.735 35.6371 21.5163 36.3069 22.5187C36.9766 23.5211 37.3341 24.6996 37.3341 25.9052C37.3324 27.5212 36.6896 29.0706 35.5469 30.2134C34.4041 31.3561 32.8547 31.9989 31.2387 32.0006Z"
  fill="#6B8C6E" />
<path
  d="M31.2387 28.9529C32.9219 28.9529 34.2864 27.5884 34.2864 25.9052C34.2864 24.222 32.9219 22.8574 31.2387 22.8574C29.5554 22.8574 28.1909 24.222 28.1909 25.9052C28.1909 27.5884 29.5554 28.9529 31.2387 28.9529Z"
  stroke="#6B8C6E" />
<path
  d="M31.2387 10.6665C22.8364 10.6665 16 17.2048 16 25.2385C16 29.0643 17.7439 34.1521 21.1831 40.3609C23.9451 45.3459 27.1404 49.8537 28.8024 52.0966C29.0832 52.4799 29.4504 52.7915 29.8742 53.0064C30.298 53.2212 30.7664 53.3332 31.2415 53.3332C31.7166 53.3332 32.1851 53.2212 32.6089 53.0064C33.0326 52.7915 33.3998 52.4799 33.6807 52.0966C35.3398 49.8537 38.538 45.3459 41.3 40.3609C44.7335 34.154 46.4773 29.0662 46.4773 25.2385C46.4773 17.2048 39.6409 10.6665 31.2387 10.6665ZM31.2387 32.0006C30.0331 32.0006 28.8546 31.6431 27.8522 30.9734C26.8498 30.3036 26.0685 29.3516 25.6072 28.2378C25.1458 27.124 25.0251 25.8984 25.2603 24.716C25.4955 23.5336 26.0761 22.4475 26.9285 21.595C27.781 20.7426 28.8671 20.162 30.0495 19.9268C31.2319 19.6916 32.4575 19.8123 33.5713 20.2737C34.6851 20.735 35.6371 21.5163 36.3069 22.5187C36.9766 23.5211 37.3341 24.6996 37.3341 25.9052C37.3324 27.5212 36.6896 29.0706 35.5469 30.2134C34.4041 31.3561 32.8547 31.9989 31.2387 32.0006Z"
  stroke="#6B8C6E" />
</svg>
`;

const commonPlacemarkOptions = {
  iconLayout: 'default#image',
  iconImageSize: [64, 64],
  iconImageOffset: [-32, -32],
};

export const defaultPlacemarkOptions = {
  ...commonPlacemarkOptions,
  iconImageHref: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(defaultPlacemarkLayout)}`,
  iconColor: color.primary.default,
};

export const selectedPlacemarkOptions = {
  ...commonPlacemarkOptions,
  iconImageHref: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(selectedPlacemarkLayout)}`,
  iconColor: color.accent.default,
};
