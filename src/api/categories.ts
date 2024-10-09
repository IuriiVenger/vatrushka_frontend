import {
  GET_CATEGORIES,
  GET_RECOMMENDED_PRODUCTS_BY_CATEGORY_SLUG,
  GET_PRODUCTS_BY_CATEGORY_SLUG,
  GET_PRODUCTS_AND_RECOMMENDED_PRODUCTS_BY_CATEGORY_SLUG,
} from './queries';
import { API } from './types';

import { apolloClient } from '.';

import {
  CategoriesConnection,
  GetRecomendedProductsByCategorySlugQuery,
  GetProductsByCategorySlugQuery,
  QueryCategoriesCollectionArgs,
  GetProductsAndRecommendedProductsByCategorySlugQuery,
} from '@/__generated__/graphql';

export const categories = {
  getAll: (variables?: QueryCategoriesCollectionArgs) =>
    apolloClient.query<{ categoriesCollection: CategoriesConnection }>({ query: GET_CATEGORIES, variables }),
  getCategoryProductsBySlug: ({ slug, offset, first }: API.Categories.GetProductsByCategorySlug.Request) =>
    apolloClient.query<GetProductsByCategorySlugQuery>({
      query: GET_PRODUCTS_BY_CATEGORY_SLUG,
      variables: {
        filter: {
          slug: { eq: slug },
        },
        offset,
        first,
        productsizesCollectionFilter2: {
          is_default: { eq: true },
        },
      },
    }),
  getCategoryRecomendedProductsBySlug: (slug: string) =>
    apolloClient.query<GetRecomendedProductsByCategorySlugQuery>({
      query: GET_RECOMMENDED_PRODUCTS_BY_CATEGORY_SLUG,
      variables: {
        filter: {
          slug: { eq: slug },
        },
      },
    }),
  getCategoryRecommendedProductsAndProductsBySlug: (slug: string) =>
    apolloClient.query<GetProductsAndRecommendedProductsByCategorySlugQuery>({
      query: GET_PRODUCTS_AND_RECOMMENDED_PRODUCTS_BY_CATEGORY_SLUG,
      variables: {
        filter: {
          slug: { eq: slug },
        },
      },
    }),
};
