import { GET_CATEGORIES } from './fragments';

import { apolloClient } from '.';

import { CategoriesConnection, QueryCategoriesCollectionArgs } from '@/__generated__/graphql';

export const categories = {
  getAll: (variables?: QueryCategoriesCollectionArgs) =>
    apolloClient.query<{ categoriesCollection: CategoriesConnection }>({ query: GET_CATEGORIES, variables }),
};
