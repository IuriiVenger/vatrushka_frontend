import { FC } from 'react';

import { CategoriesConnection } from '@/__generated__/graphql';
import { Carousel } from '@/components/Carousel';
import { Catalog } from '@/components/Catalog';
import { ProductsList } from '@/components/ProductsList';
import { SeoContent } from '@/components/SeoContent';

import { SliderComponent as Slider } from '@/components/Slider';
import { slides, products } from '@/mocks';

type HomeProps = {
  categories: CategoriesConnection;
};

const Home: FC<HomeProps> = ({ categories }) => {
  const catalogCategories = categories.edges.map((edge) => edge.node);

  return (
    <>
      <Carousel slides={slides} />
      <ProductsList products={products} />
      <Catalog categories={catalogCategories} />
      <Slider title="Рекомендуем" slides={products} />
      <SeoContent />
    </>
  );
};

export default Home;
