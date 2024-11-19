'use client';

import { useRouter } from 'next-nprogress-bar';
import { FC, useEffect, useMemo } from 'react';

import { API } from '@/api/types';
import CategoryPageContent from '@/components/pageContents/CategoryPageContent';
import { defaultPaginationParams, RequestStatus } from '@/constants';
import useCart from '@/hooks/useCart';
import { useAppDispatch, useAppSelector } from '@/store';

import { loadMoreCategoryProducts, setCategoryProducts, selectEntities } from '@/store/slices/entities';
import { CategoryItemsConnectionType, TCard, TProductSliderSlide } from '@/types';
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
  const { addToCart } = useCart();
  const router = useRouter();

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

  const onBuyButtonClick = async (card: TCard) => {
    if (card.buttonType === 'button') {
      await addToCart([{ product_id: card.productId || '', size_id: card.sizeId || '', modifiers: [] }]);
    } else {
      router.push(card.href);
    }
  };

  const categoryRecommendedSlides: TProductSliderSlide[] | undefined = convertedCategoryRecommendedProducts?.map(
    (product) => ({
      ...product,
      onBuyButtonClick: () => onBuyButtonClick(product),
      buyButtonText: product.buttonType === 'button' ? 'В корзину' : 'Перейти',
    }),
  );

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
      loadMoreAvailable={categoryProducts.meta?.isLastPage === false}
      categoryRecommendedSlides={categoryRecommendedSlides}
      onBuyButtonClick={onBuyButtonClick}
    />
  );
};

export default ClientCategoryPage;
