'use client';

import { FC } from 'react';

import { ProductsList } from '../ProductsList';

import { TCard } from '@/types';

type TCategoryPageContentProps = {
  categoryName: string;
  products: TCard[];
  loadMoreProducts: () => void;
  isLoading: boolean;
  loadMoreAvalible?: boolean;
};

const CategoryPageContent: FC<TCategoryPageContentProps> = (props) => {
  const { categoryName, loadMoreProducts, ...otherProps } = props;

  return (
    <section>
      <ProductsList title={categoryName} onLoadMore={loadMoreProducts} {...otherProps} />
    </section>
  );
};

export default CategoryPageContent;
