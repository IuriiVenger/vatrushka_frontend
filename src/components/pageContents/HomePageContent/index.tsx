import { FC } from 'react';

import Catalog from '../../Catalog/Catalog';

import { CategoriesConnection } from '@/__generated__/graphql';
import PromoCarousel from '@/components/Carousels/PromoCarousel';
import Slider from '@/components/Carousels/Slider';
import SeoContent from '@/components/SeoContent';

import { slides, products } from '@/mocks';

type THomePageContentProps = {
  categories: CategoriesConnection;
};

const HomePageContent: FC<THomePageContentProps> = ({ categories }) => {
  const catalogCategories = categories.edges.map((edge) => edge.node);

  return (
    <>
      <PromoCarousel slides={slides} />
      <Catalog categories={catalogCategories} />
      <Slider title="Рекомендуем" slides={products} />
      <SeoContent />
    </>
  );
};

export default HomePageContent;
