import { TagType } from './mock';

type TValueOf<T> = T[keyof T];

export type TTagType = TValueOf<typeof TagType>;

export type TCard = {
  pic: string;
  name: string;
  weight: number;
  timing: string;
  description: string;
  price: number;
  tag: TTagType;
};
