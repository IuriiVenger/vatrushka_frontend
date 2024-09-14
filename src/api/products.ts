import { GET_PRODUCTS } from './queries';

import { apolloClient } from '.';

import { ProductsConnection, QueryProductsCollectionArgs } from '@/__generated__/graphql';

export const products = {
  getAll: (variables?: QueryProductsCollectionArgs) =>
    apolloClient.query<{ productsCollection: ProductsConnection }>({
      query: GET_PRODUCTS,
      variables,
    }),
};
