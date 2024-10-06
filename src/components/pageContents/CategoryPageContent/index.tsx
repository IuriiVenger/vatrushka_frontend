'use client';

import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import ProductsList from '../../Product/ProductsList';

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

  const breadcrumbs = [{ title: <Link href="/">Главная</Link> }, { title: categoryName }];

  return (
    <section className="flex flex-col gap-8">
      <Breadcrumb items={breadcrumbs} />
      <ProductsList title={categoryName} onLoadMore={loadMoreProducts} {...otherProps} />
    </section>
  );
};

export default CategoryPageContent;
