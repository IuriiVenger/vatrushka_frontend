import { ApolloClient, InMemoryCache } from '@apollo/client';

import { apikey, graphqlEndpoint, restApiUrl } from '@/config/network';

import { createCustomAxiosInstance } from '@/utils/api';

// eslint-disable-next-line no-constant-condition

export const commonHeaders = {
  apikey,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const apolloClient = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
  headers: commonHeaders,
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

export const { getRequest, postRequest, patchRequest, deleteRequest } = createCustomAxiosInstance(restApiUrl);
export const internalAxiosInstance = createCustomAxiosInstance('/api');
