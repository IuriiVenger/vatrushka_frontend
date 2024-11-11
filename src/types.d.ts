import { ReactNode } from 'react';

import { GetProductsByCategorySlugQuery } from './__generated__/graphql';
import { TagType } from './mock';

type TValueOf<T> = T[keyof T];

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
  count?: never;
};

export type TTag = {
  [key: string]: { textColor: string; backgroundColor: string };
};

export type CategoryItemsConnectionType = NonNullable<
  GetProductsByCategorySlugQuery['categoriesCollection']
>['edges'][0]['node']['categoryitemsCollection'];

export type Sluggable<T> = T & { slug: string };

type THours = { open: string; close: string };

type TBusinessHours = Record<string, THours>;

type TBranch = {
  id: string;
  name: string;
  address: string;
  phone: string;
  businessHours: TBusinessHours;
  coords?: number[];
};

type TCompanyInfo = {
  fullName: string;
  legalName: string;
  mainPhone: string;
  wholesaleManagerPhone: string;
  wholesaleManagerEmail: string;
  telegramBot: string;
  branches: TBranch[];
  partners: TBranch[];
};

type TPromotion = {
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
};

export type TOrderStatus = {
  time: string;
  status: string;
  completed: boolean;
};

export type SupabaseUser = {
  id: string;
  app_metadata: UserAppMetadata;
  user_metadata: UserMetadata;
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
  identities?: UserIdentity[];
  factors?: Factor[];
};
