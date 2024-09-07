import { FC } from 'react';

import { CatalogItem } from './CatalogItem';

import { Categories } from '@/__generated__/graphql';

type TCatalogProps = {
  categories: Categories[];
  subCatalogName?: string;
};

export const Catalog: FC<TCatalogProps> = ({ categories, subCatalogName }) => (
  <div className="mx-auto flex max-w-320 flex-col items-start gap-12 px-10 max-lg:gap-8 max-sm:gap-6 max-xs:max-w-82 max-xs:px-0">
    <h2 className="text-3xl font-medium leading-3xl max-sm:text-2xl max-sm:leading-2xl">
      {subCatalogName ?? 'Каталог продукции'}
    </h2>
    <div className="grid w-full grid-cols-4 gap-6 max-lg:grid-cols-3 max-md:gap-4 max-sm:grid-cols-2">
      {categories.map((item) => (
        <CatalogItem key={item.id} item={item} subCatalog={!!subCatalogName} />
      ))}
    </div>
  </div>
);
