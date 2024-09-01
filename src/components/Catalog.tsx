import { Flex } from 'antd';
import { FC } from 'react';

import { CatalogItem } from './CatalogItem';

export type TItem = {
  name: string;
  pic: string;
  count?: number;
};

type TProps = {
  categories: TItem[];
  subCatalogName?: string;
};

export const Catalog: FC<TProps> = ({ categories, subCatalogName }) => (
  <Flex vertical align="start" className="max-xs:max-w-82 mx-auto max-w-320 gap-12 p-10 max-xs:gap-6 max-xs:px-0">
    <p className="text-3xl font-medium leading-3xl max-xs:text-2xl max-xs:leading-2xl">
      {subCatalogName ?? 'Каталог продукции'}
    </p>
    <div className="w-full grid grid-cols-4 gap-6 max-sm:grid-cols-2 max-md:gap-4 max-lg:grid-cols-3">
      {categories.map((item, index) => (
        <CatalogItem key={index} item={item} subCatalog={!!subCatalogName} />
      ))}
    </div>
  </Flex>
);
