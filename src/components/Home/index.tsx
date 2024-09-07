import { FC } from 'react';

import { Catalog } from '../Catalog/Catalog';

import { ProductsList } from '../ProductsList';

import { HomeCarousel } from './HomeCarousel';

import { CategoriesConnection } from '@/__generated__/graphql';
import { SeoContent } from '@/components/SeoContent';

import { SliderComponent as Slider } from '@/components/Slider';
import { slides, products } from '@/mocks';

type THomeProps = {
  categories: CategoriesConnection;
};

const Home: FC<THomeProps> = ({ categories }) => {
  const catalogCategories = categories.edges.map((edge) => edge.node);

  return (
    <>
      <HomeCarousel slides={slides} />
      <ProductsList products={products} />
      <Catalog categories={catalogCategories} />
      <Slider title="Рекомендуем" slides={products} />
      <SeoContent />
    </>
  );
};

export default Home;
