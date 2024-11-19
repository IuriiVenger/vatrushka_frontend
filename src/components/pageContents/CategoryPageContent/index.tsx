'use client';

import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import ProductsList from '../../Product/ProductsList';

import ProductSlider from '@/components/Carousels/ProductSlider';
import { TCard, TProductSliderSlide } from '@/types';

type TCategoryPageContentProps = {
  categoryName: string;
  products: TCard[];
  loadMoreProducts: () => void;
  isLoading: boolean;
  loadMoreAvailable?: boolean;
  categoryRecommendedSlides?: TProductSliderSlide[];
  onBuyButtonClick: (card: TCard) => Promise<void>;
};

const CategoryPageContent: FC<TCategoryPageContentProps> = (props) => {
  const { categoryName, loadMoreProducts, categoryRecommendedSlides, onBuyButtonClick, ...otherProps } = props;

  const breadcrumbs = [{ title: <Link href="/">Главная</Link> }, { title: categoryName }];

  return (
    <section className="flex flex-col gap-8" aria-label={categoryName}>
      <Breadcrumb items={breadcrumbs} />
      <ProductsList
        title={categoryName}
        onLoadMore={loadMoreProducts}
        onBuyButtonClick={onBuyButtonClick}
        {...otherProps}
      />
      {!!categoryRecommendedSlides?.length && <ProductSlider title="Рекомендуем" slides={categoryRecommendedSlides} />}
    </section>
  );
};

export default CategoryPageContent;
