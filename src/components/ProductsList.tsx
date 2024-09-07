'use client';

import { Button, Pagination } from 'antd';
import { FC, useMemo, useState } from 'react';

import { ItemCard } from './ItemCard';

import { Dropdown } from './ui/Dropdown';

import { SortType } from '@/constants';
import { TCard } from '@/types';
import { getNounWithDeclension } from '@/utils/formatters';

type TProductsListProps = {
  products: TCard[];
};

export const ProductsList: FC<TProductsListProps> = ({ products }) => {
  const [sort, setSort] = useState<SortType>(SortType.PRICE_ASCENDING);

  const productsCount = useMemo(
    () => `${products.length} ${getNounWithDeclension(products.length, 'товар', 'товара', 'товаров')}`,
    [products.length],
  );

  return (
    <div className="mx-auto flex max-w-320 flex-col gap-12 px-10 max-lg:gap-8 max-md:gap-4 max-xs:max-w-82 max-xs:px-0">
      <div className="flex items-end justify-between max-md:w-full max-md:flex-col max-md:items-start max-md:gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-medium leading-3xl max-sm:text-2xl max-sm:leading-2xl">Каталог продукции</p>
          <p className="text-lg leading-lg">{productsCount}</p>
        </div>
        <Dropdown sort={sort} setSort={setSort} />
      </div>
      <div className="flex max-w-320 flex-col items-center gap-6 max-xs:max-w-82">
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1">
          {products.map((item, index) => (
            <ItemCard key={index} info={item} />
          ))}
        </div>
        <Button className="w-max max-md:h-10 max-md:text-base">Показать ещё</Button>
        <Pagination
          align="center"
          defaultCurrent={1}
          total={100}
          showSizeChanger={false}
          className="max-md:small text-lg max-md:text-base"
        />
      </div>
    </div>
  );
};
