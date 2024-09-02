import { Flex } from 'antd';
import { FC } from 'react';

import { Carousel } from './Carousel';
import { Catalog } from './Catalog';

import { Footer } from './Footer/Footer';
import { ProductsList } from './ProductsList';
import { SliderComponent as Slider } from './Slider';

import { products, slides, categories } from '@/mocks';

export const Test: FC = () => (
  <Flex vertical className="w-full gap-12 max-xs:gap-6">
    <Carousel slides={slides} />
    <ProductsList products={products} />
    <Catalog categories={categories} />
    <Catalog subCatalogName="Еда на каждый день, бизнес ланчи" categories={categories} />
    <Slider title="Рекомендуем" slides={products} />
    <Footer />
  </Flex>
);
