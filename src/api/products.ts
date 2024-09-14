import { GET_PRODUCTS, GET_PROUCT_BY_SLUG } from './queries';

import { apolloClient } from '.';

import { GetProductsQuery, ProductBySlugQuery, QueryProductsCollectionArgs } from '@/__generated__/graphql';

export const products = {
  getAll: (variables?: QueryProductsCollectionArgs) =>
    apolloClient.query<GetProductsQuery>({
      query: GET_PRODUCTS,
      variables,
    }),
  getBySlug: (slug: string) =>
    apolloClient.query<ProductBySlugQuery>({
      query: GET_PROUCT_BY_SLUG,
      variables: {
        filter: {
          slug: { eq: slug },
        },
      },
    }),
};
