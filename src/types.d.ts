import { ProductByCategorySlugQuery } from './__generated__/graphql';
import { TagType } from './mock';

type TValueOf<T> = T[keyof T];

export type TCard = {
  pic: string;
  name: string;
  weight: string | number;
  timing?: string;
  description: string;
  price: number | string;
  tag?: TagType;
  inStock: boolean;
  href: string;
};

export type TMenuLevelOneOption = {
  value: string;
  label: string;
  children?: TMenuLevelOneOption[];
};

export type TContact = {
  link: string;
  icon: ReactNode;
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
};

export type TTag = {
  [key: string]: { textColor: string; backgroundColor: string };
};

export type CategoryItemsConnectionType = NonNullable<
  ProductByCategorySlugQuery['categoriesCollection']
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

