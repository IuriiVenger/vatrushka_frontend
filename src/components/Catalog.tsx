import { Flex } from 'antd';
import { FC } from 'react';

import { CatalogItem } from './CatalogItem';

export type TItem = {
  name: string;
  pic: string;
};

type TProps = {
  categories: TItem[];
};

export const Catalog: FC<TProps> = ({ categories }) => (
  <Flex vertical align="start" className="max-w-1200 gap-12">
    <p className="text-3xl font-medium leading-3xl">Каталог продукции</p>
    <Flex className="flex-wrap gap-6">
      {categories.map((item, index) => (
        <CatalogItem key={index} item={item} />
      ))}
    </Flex>
  </Flex>
);
