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
  GetProductsAndRecommendedProductsByCategorySlugQueryVariables,
} from '@/__generated__/graphql';

export const categories = {
  getAll: (variables?: QueryCategoriesCollectionArgs) =>
    apolloClient.query<{ categoriesCollection: CategoriesConnection }>({ query: GET_CATEGORIES, variables }),
  getAllWithoutPagination: async (): Promise<{ categoriesCollection: CategoriesConnection }> => {
    const edges: CategoriesConnection['edges'] = [];
    const pageInfo = { hasNextPage: false, hasPreviousPage: false, offset: 0 };

    do {
      // eslint-disable-next-line no-await-in-loop
      const { data } = await categories.getAll({
        offset: pageInfo.offset,
      });

      edges.push(...data.categoriesCollection.edges);
      pageInfo.hasNextPage = data.categoriesCollection.pageInfo.hasNextPage;
      pageInfo.hasPreviousPage = data.categoriesCollection.pageInfo.hasPreviousPage;
      pageInfo.offset += data.categoriesCollection.edges.length;
    } while (pageInfo.hasNextPage);

    return { categoriesCollection: { edges, pageInfo } };
  },
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
  getCategoryRecommendedProductsAndProductsBySlug: ({
    filter,
    offset,
    first,
  }: GetProductsAndRecommendedProductsByCategorySlugQueryVariables) =>
    apolloClient.query<GetProductsAndRecommendedProductsByCategorySlugQuery>({
      query: GET_PRODUCTS_AND_RECOMMENDED_PRODUCTS_BY_CATEGORY_SLUG,
      variables: {
        filter,
        offset,
        first,
      },
    }),
};
