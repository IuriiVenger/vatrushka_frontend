'use client';

import { Button, Flex, Grid, Pagination } from 'antd';
import { FC, useState } from 'react';

import { ItemCard } from './ItemCard';

import { Dropdown } from './ui/Dropdown';

import { SortType } from '@/constants';
import { TCard } from '@/types';
import { getNounWithDeclension } from '@/utils/getNounWithDeclension';

type TProps = {
  products: TCard[];
};

const { useBreakpoint } = Grid;

export const ProductsList: FC<TProps> = ({ products }) => {
  const [sort, setSort] = useState<SortType>(SortType.priceAscending);

  const screens = useBreakpoint();

  return (
    <Flex vertical className="max-xs:max-w-82 mx-auto max-w-320 gap-12 p-10 max-xs:px-0 max-md:gap-4">
      <Flex justify="space-between" className="max-md:w-full items-end max-md:flex-col max-md:items-start max-md:gap-6">
        <Flex vertical className="gap-2">
          <p className="text-3xl font-medium leading-3xl">Каталог продукции</p>
          <p className="text-lg leading-lg">
            {products.length} {getNounWithDeclension(products.length, 'товар', 'товара', 'товаров')}
          </p>
        </Flex>
        <Dropdown sort={sort} setSort={setSort} />
      </Flex>
      <Flex vertical align="center" className="max-xs:max-w-82 max-w-320 gap-6">
        <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-md:gap-4 max-lg:grid-cols-2">
          {products.map((item, index) => (
            <ItemCard key={index} info={item} />
          ))}
        </div>
        <Button size={screens.md ? 'middle' : 'small'} className="w-max">
          Показать ещё
        </Button>
        <Pagination align="center" defaultCurrent={1} total={100} showSizeChanger={false} />
      </Flex>
    </Flex>
  );
};
