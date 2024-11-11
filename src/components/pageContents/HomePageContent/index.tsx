'use client';

import { FC } from 'react';

import Catalog from '../../Catalog/Catalog';

import { CategoriesConnection } from '@/__generated__/graphql';
import { API } from '@/api/types';
import PromoCarousel from '@/components/Carousels/PromoCarousel';
import Slider from '@/components/Carousels/Slider';
import SeoContent from '@/components/SeoContent';

import { slides, products } from '@/mocks';
import { conertCategoryRecommendedProductsToCards } from '@/utils/converters';

type THomePageContentProps = {
  categories: CategoriesConnection;
  recomendations?: API.Products.Recomedation[];
};

const HomePageContent: FC<THomePageContentProps> = ({ categories, recomendations }) => {
  const catalogCategories = categories.edges.map((edge) => edge.node);
  const recomendatedProductsData = recomendations && conertCategoryRecommendedProductsToCards(recomendations);

  return (
    <>
      <PromoCarousel slides={slides} />
      <Catalog categories={catalogCategories} />
      {!!recomendatedProductsData && <Slider title="Рекомендуем" slides={recomendatedProductsData} />}
      <SeoContent />
    </>
  );
};

export default HomePageContent;
