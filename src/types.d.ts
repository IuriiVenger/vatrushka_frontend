import { ProductByCategorySlugQuery } from './__generated__/graphql';
import { TagType } from './mock';

type TValueOf<T> = T[keyof T];

export type TCard = {
  pic: string;
  name: string;
  weight: number;
  timing?: string;
  description: string;
  price: number;
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
  price: number;
  count: number;
};

export type TTag = {
  [key: string]: { textColor: string; backgroundColor: string };
};

export type CategoryItemsConnectionType = NonNullable<
  ProductByCategorySlugQuery['categoriesCollection']
>['edges'][0]['node']['categoryitemsCollection'];
