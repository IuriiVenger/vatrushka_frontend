'use client';

import { useRouter } from 'next-nprogress-bar';
import { FC } from 'react';

import Catalog from '../../Catalog/Catalog';

import { CategoriesConnection } from '@/__generated__/graphql';
import { API } from '@/api/types';
import ProductSlider from '@/components/Carousels/ProductSlider';
import PromoCarousel from '@/components/Carousels/PromoCarousel';

import SeoContent from '@/components/SeoContent';

import useCart from '@/hooks/useCart';
// TODO: заполнить акции и тянуть оттуда
import { slides } from '@/mocks';
import { TCard, TProductSliderSlide } from '@/types';
import { conertCategoryRecommendedProductsToCards } from '@/utils/converters';

type THomePageContentProps = {
  categories: CategoriesConnection;
  recomendations?: API.Products.Recomedation[];
};

const HomePageContent: FC<THomePageContentProps> = ({ categories, recomendations }) => {
  const catalogCategories = categories.edges.map((edge) => edge.node);
  const recomendatedProductsData = recomendations && conertCategoryRecommendedProductsToCards(recomendations);
  const { addToCart } = useCart();
  const router = useRouter();

  const buttonHandler = async (item: TCard) => {
    if (!item.productId || !item.sizeId) {
      return;
    }
    await addToCart([{ product_id: item.productId, size_id: item.sizeId, modifiers: [] }]);
  };

  const linkHandler = (item: TCard) => {
    router.push(item.href);
  };

  const onBuyButtonClick = (item: TCard) => async () => {
    if (item.buttonType === 'button') {
      await buttonHandler(item);
    } else {
      linkHandler(item);
    }
  };

  const productSliderSlides: TProductSliderSlide[] =
    recomendatedProductsData?.map((item) => ({
      ...item,
      onBuyButtonClick: onBuyButtonClick(item),
      buyButtonText: 'Купить',
    })) || [];

  return (
    <>
      <PromoCarousel slides={slides} />
      <Catalog categories={catalogCategories} />
      {!!recomendatedProductsData && <ProductSlider title="Рекомендуем" slides={productSliderSlides} />}
      <SeoContent />
    </>
  );
};

export default HomePageContent;
