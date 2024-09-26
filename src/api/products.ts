import { GET_PROUCT_BY_SLUG } from './queries';

import { apolloClient } from '.';

import { ProductBySlugQuery } from '@/__generated__/graphql';

export const products = {
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
