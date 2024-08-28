import { Flex } from 'antd';
import { FC } from 'react';

import { Carousel } from './Carousel';
import { Catalog } from './Catalog';

import { ProductsList } from './ProductsList';

import { products, slides, categories } from '@/constants';

export const Test: FC = () => (
  <Flex vertical className="gap-12">
    <Carousel slides={slides} />
    <ProductsList products={products} />
    <Catalog categories={categories} />
  </Flex>
);
