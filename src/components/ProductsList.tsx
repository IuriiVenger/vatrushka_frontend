'use client';

import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Flex, MenuProps, Pagination, Space } from 'antd';
import { FC, useState } from 'react';

import { ItemCard } from './ItemCard';

import { TCard } from '@/types';

enum SortType {
  mostPopular = 'mostPopular',
  priceDescending = 'priceDescending',
  priceAscending = 'priceAscending',
}

export const SortTypeTranslation = {
  [SortType.mostPopular]: 'По популярности',
  [SortType.priceDescending]: 'По убыванию цены',
  [SortType.priceAscending]: 'По возрастанию цены',
};

type TProps = {
  products: TCard[];
};

export const ProductsList: FC<TProps> = ({ products }) => {
  const [sort, setSort] = useState<SortType>(SortType.priceAscending);

  const onSortClick: MenuProps['onClick'] = ({ key }) => {
    setSort(key as SortType);
  };

  const items: MenuProps['items'] = [
    {
      key: SortType.mostPopular,
      label: SortTypeTranslation[SortType.mostPopular],
    },
    {
      key: SortType.priceDescending,
      label: SortTypeTranslation[SortType.priceDescending],
    },
    {
      key: SortType.priceAscending,
      label: SortTypeTranslation[SortType.priceAscending],
    },
  ];

  return (
    <Flex vertical className="max-w-1200 gap-12">
      <Flex align="end" justify="space-between">
        <Flex vertical className="gap-2">
          <p className="text-3xl font-medium leading-3xl">Каталог продукции</p>
          <p className="text-lg leading-lg">{products.length} товаров</p>
        </Flex>
        <Dropdown menu={{ items, onClick: onSortClick }} placement="bottomRight">
          <div>
            <Space>
              {SortTypeTranslation[sort]}
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      </Flex>
      <Flex vertical align="center" className="max-w-1200 gap-4">
        <Flex className="flex-wrap gap-6">
          {products.map((item, index) => (
            <ItemCard key={index} info={item} />
          ))}
        </Flex>
        <Button className="w-max">Показать ещё</Button>
        <Pagination align="center" defaultCurrent={1} total={100} showSizeChanger={false} />
      </Flex>
    </Flex>
  );
};
