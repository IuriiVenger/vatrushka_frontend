'use client';

import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import ProductsList from '../../Product/ProductsList';

import Slider from '@/components/Carousels/Slider';
import { TCard } from '@/types';

type TCategoryPageContentProps = {
  categoryName: string;
  products: TCard[];
  loadMoreProducts: () => void;
  isLoading: boolean;
  loadMoreAvalible?: boolean;
  categoryRecommendedProducts?: TCard[];
};

const CategoryPageContent: FC<TCategoryPageContentProps> = (props) => {
  const { categoryName, loadMoreProducts, categoryRecommendedProducts, ...otherProps } = props;

  const breadcrumbs = [{ title: <Link href="/">Главная</Link> }, { title: categoryName }];

  return (
    <section className="flex flex-col gap-8" aria-label={categoryName}>
      <Breadcrumb items={breadcrumbs} />
      <ProductsList title={categoryName} onLoadMore={loadMoreProducts} {...otherProps} />
      {!!categoryRecommendedProducts?.length && <Slider title="Рекомендуем" slides={categoryRecommendedProducts} />}
    </section>
  );
};

export default CategoryPageContent;
