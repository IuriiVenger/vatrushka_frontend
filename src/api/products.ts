import {
  GetProductSizeImagesQueryVariables,
  GetProductSizeModifiersQuery,
  ProductByNameQuery,
  ProductByNameQueryVariables,
  ProductBySlugQueryVariables,
} from '../__generated__/graphql';

import {
  GET_PRODUCT_BY_NAME,
  GET_PRODUCT_SIZE_IMAGES,
  GET_PRODUCT_SIZE_MODIFIERS,
  GET_PROUCT_BY_SLUG,
} from './queries';

import { apolloClient } from '.';

import { ProductBySlugQuery, GetProductSizeImagesQuery } from '@/__generated__/graphql';

export const products = {
  getBySlug: (slug: string) =>
    apolloClient.query<ProductBySlugQuery, ProductBySlugQueryVariables>({
      query: GET_PROUCT_BY_SLUG,
      variables: {
        filter: {
          slug: { eq: slug },
        },
      },
    }),
  getByName: (name: string) =>
    apolloClient.query<ProductByNameQuery, ProductByNameQueryVariables>({
      query: GET_PRODUCT_BY_NAME,
      variables: {
        filter: { name: { ilike: `%${name}%` } },
      },
    }),
  productSizes: {
    images: {
      getBySizeAndProductId: (productSizeId: string, productId: string) =>
        apolloClient.query<GetProductSizeImagesQuery, GetProductSizeImagesQueryVariables>({
          query: GET_PRODUCT_SIZE_IMAGES,
          variables: {
            filter: {
              productsize_id: { eq: productSizeId },
              product_id: { eq: productId },
            },
          },
        }),
    },
    modifiers: {
      getBySizeAndProductId: (productSizeId: string, productId: string) =>
        apolloClient.query<GetProductSizeModifiersQuery, GetProductSizeImagesQueryVariables>({
          query: GET_PRODUCT_SIZE_MODIFIERS,
          variables: {
            filter: {
              productsize_id: { eq: productSizeId },
              product_id: { eq: productId },
            },
          },
        }),
    },
  },
};
