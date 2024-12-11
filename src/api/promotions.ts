import { GET_ALL_PROMOTIONS, GET_MAINPAGE_PROMOBANNERS, GET_PROMOTION_BY_ID } from './queries';

import { apolloClient } from '.';

import {
  GetAllPromotionsQuery,
  GetAllPromotionsQueryVariables,
  GetMainpagePromoBannersQuery,
  GetPromotionByIdQuery,
} from '@/__generated__/graphql';

export const promotions = {
  getAll: (variables: GetAllPromotionsQueryVariables) =>
    apolloClient.query<GetAllPromotionsQuery>({
      query: GET_ALL_PROMOTIONS,
      variables,
    }),
  getById: (id: string) =>
    apolloClient.query<GetPromotionByIdQuery>({
      query: GET_PROMOTION_BY_ID,
      variables: {
        filter: {
          id: { eq: id },
        },
      },
    }),
  getMainpagePromoBanners: () =>
    apolloClient.query<GetMainpagePromoBannersQuery>({
      query: GET_MAINPAGE_PROMOBANNERS,
    }),
};
