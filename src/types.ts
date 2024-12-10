import dayjs from 'dayjs';
import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

import { FieldValues, Validate } from 'react-hook-form';

import { GetProductsByCategorySlugQuery } from './__generated__/graphql';
import { API } from './api/types';
import { TagType } from './constants';
import { StoreDataWithStatusAndMeta } from './store/types';

export type TValueOf<T> = T[keyof T];

export type TCard = {
  id: string;
  pic: string;
  name: string;
  weight?: string | number;
  timing?: string;
  description: string;
  price: number | string;
  tag?: TagType;
  inStock: boolean;
  href: string;
  quantity: number;
  onClick?: () => void;
  buttonType: 'button' | 'link';
  sizeId: string | null;
  productId: string | null;
};

export type TMenuLevelOneOption = {
  value: string;
  label: ReactNode;
  children?: TMenuLevelOneOption[];
};

export type TContact = {
  link: string;
  icon: ReactElement;
  transliteration: string;
};

export type TNavigationLink = {
  link: string;
  title: string;
};

export type TCartListItem = {
  name: string;
  pic: string;
  price: number | string;
  count: number;
  onClick?: () => void;
};

export type TSearchListItem = {
  name: string;
  pic: string;
  price: number | string;
  onClick?: () => void;
  quantity?: never;
};

export type TTag = {
  [key: string]: { textColor: string; backgroundColor: string };
};

export type CategoryItemsConnectionType = NonNullable<
  GetProductsByCategorySlugQuery['categoriesCollection']
>['edges'][0]['node']['categoryitemsCollection'];

export type Sluggable<T> = T & { slug: string };

export type THours = { open: string; close: string };

export type TBusinessHours = Record<string, THours>;

export type TBranch = {
  id: string;
  name: string;
  address: string;
  phone: string;
  businessHours: TBusinessHours;
  coords?: string[];
};

export type TCompanyInfo = {
  fullName: string;
  legalName: string;
  mainPhone: string;
  wholesaleManagerPhone: string;
  wholesaleManagerEmail: string;
  telegramBot: string;
  branches: TBranch[];
  partners: TBranch[];
  minSumForCourierDelivery: number;
};

export type TPromotion = {
  id: string;
  name: string;
  pic: string;
  shortDescription: string;
  text: ReactNode;
  start?: string;
  end?: string;
};

export type TModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type TValidate = Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>> | undefined;

export type Pattern = {
  value: RegExp;
  message: string;
};

export type TAddress = {
  id: string;
  address: string;
  entrance: string;
  floor: string;
  apartment: string;
  type: { id: string; label: string };
};

export type TUserInfo = {
  name: string;
  email: string;
  phone: string;
  addresses: TAddress[];
  points: number;
};

export type TTab = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type TOrderStatus = {
  time: string;
  status: string;
  completed: boolean;
};

export type SupabaseUser = {
  id: string;
  app_metadata: any;
  user_metadata: any;
  aud: string;
  confirmation_sent_at?: string;
  recovery_sent_at?: string;
  email_change_sent_at?: string;
  new_email?: string;
  new_phone?: string;
  invited_at?: string;
  action_link?: string;
  email?: string;
  phone?: string;
  created_at: string;
  confirmed_at?: string;
  email_confirmed_at?: string;
  phone_confirmed_at?: string;
  last_sign_in_at?: string;
  role?: string;
  updated_at?: string;
  identities?: any[];
  factors?: any[];
  is_anonymous?: boolean;
};

export type TRecCategoryEdge = {
  node: {
    products?: {
      productsizesCollection?: {
        edges: {
          node: {
            button_image_url?: string | null;
            nodeId: string;
            price?: string | null;
            is_default?: boolean | null | undefined;
            id?: string;
            size_id?: string;
            products?: {
              id?: string;
              short_description?: any;
              slug?: string | null;
              name?: string;
            } | null;
          };
        }[];
      } | null;
      categoryitemsCollection?: {
        edges: {
          node: {
            categories: { name?: string; slug?: string | null };
          };
        }[];
      } | null;
    } | null;
  };
};

export type GroupedCartItem = API.Cart.CartItem.CartItem & {
  group_id: string;
  quantity: number;
  total_price: number;
  rawCartItems: API.Cart.CartItem.CartItem[];
};

export type TProductSliderSlide = TCard & {
  onBuyButtonClick: () => Promise<void>;
  buyButtonText: string;
};

export type TAddressForm = {
  cityStreetBuildingFlat: string;
  entrance: string;
  floor: string;
  doorphone: string;
};

export type TCheckoutForm = {
  userAddress: TAddressForm;
  branchAddress: string | null;
  name: string;
  phone: string;
  message: string;
  date: dayjs.Dayjs | null;
  time: string | null;
  change: number | null;
  onlinePaymentType: string | null;
};

export type NextPageParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export type TOrderWithTerminalAddress = API.Orders.Order & {
  terminal_address: API.Address.TerminalAddress | null;
};

export type TOrderListWithTerminalAddress = {
  total: number;
  has_more: boolean;
  data: TOrderWithTerminalAddress[];
};

export type TOrderStoreData = StoreDataWithStatusAndMeta<TOrderListWithTerminalAddress | null>;
export type TAddToCardDataItem = API.Cart.CartItem.Create.RequestItem & { label: string };

export type TAddToCardData = Array<TAddToCardDataItem>;
