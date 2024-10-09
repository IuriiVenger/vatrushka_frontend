'use client';

import { FC, useEffect, useMemo } from 'react';

import { API } from '@/api/types';
import CategoryPageContent from '@/components/pageContents/CategoryPageContent';
import { defaultPaginationParams, RequestStatus } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectEntities } from '@/store/selectors';
import { loadMoreCategoryProducts, setCategoryProducts } from '@/store/slices/entities';
import { CategoryItemsConnectionType, TCard } from '@/types';
import { convertCategoryItemsQueryProductsToCards, conertCategoryRecommendedProductsToCards } from '@/utils/converters';

type ClientCategoryPageProps = {
  categoryName: string;
  categorySlug: string;
  categoryItems: CategoryItemsConnectionType;
  categoryRecommendedProducts?: API.Products.Recomedation[];
};

const ClientCategoryPage: FC<ClientCategoryPageProps> = (props) => {
  const { categoryName, categoryItems, categorySlug, categoryRecommendedProducts } = props;
  const dispatch = useAppDispatch();
  const { categoryProducts } = useAppSelector(selectEntities);

  const productsOffset = categoryProducts.meta?.offset || 0;
  const initialProducts: TCard[] = useMemo(
    () => convertCategoryItemsQueryProductsToCards(categoryItems),
    [categoryItems],
  );
  const convertedCategoryRecommendedProducts = useMemo(
    () => categoryRecommendedProducts && conertCategoryRecommendedProductsToCards(categoryRecommendedProducts),
    [categoryRecommendedProducts],
  );
  const products = categoryProducts.data || initialProducts;
  const isProductsPending = categoryProducts.status === RequestStatus.PENDING;

  const loadMoreProducts = async () => {
    dispatch(
      loadMoreCategoryProducts({ slug: categorySlug, offset: productsOffset, first: defaultPaginationParams.first }),
    );
  };

  useEffect(() => {
    dispatch(
      setCategoryProducts({
        data: initialProducts,
        meta: { offset: categoryItems?.edges.length || 0, isLastPage: categoryItems?.pageInfo.hasNextPage === false },
      }),
    );
  }, []);

  return (
    <CategoryPageContent
      categoryName={categoryName}
      products={products}
      isLoading={isProductsPending}
      loadMoreProducts={loadMoreProducts}
      loadMoreAvalible={categoryProducts.meta?.isLastPage === false}
      categoryRecommendedProducts={convertedCategoryRecommendedProducts}
    />
  );
};

export default ClientCategoryPage;
