import { GET_CATEGORIES, GET_PRODUCTS_BY_CATEGORY_SLUG } from './queries';
import { API } from './types';

import { apolloClient } from '.';

import {
  CategoriesConnection,
  ProductByCategorySlugQuery,
  QueryCategoriesCollectionArgs,
} from '@/__generated__/graphql';

export const categories = {
  getAll: (variables?: QueryCategoriesCollectionArgs) =>
    apolloClient.query<{ categoriesCollection: CategoriesConnection }>({ query: GET_CATEGORIES, variables }),
  getCategoryProductsBySlug: ({ slug, offset, first }: API.Categories.GetProductsByCategorySlug.Request) =>
    apolloClient.query<ProductByCategorySlugQuery>({
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
};
