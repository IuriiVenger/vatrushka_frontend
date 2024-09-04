import { ApolloClient, InMemoryCache } from '@apollo/client';

import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { graphqlEndpoint } from '@/config/network';
import { ResponseStatus } from '@/constants';

import {
  deleteTokens,
  // refreshTokens,
  // setTokens,
} from '@/utils/tokensFactory';

// eslint-disable-next-line no-constant-condition
const baseURL = process.env.API_URL;
const apikey = process.env.API_KEY || '';

const commonHeaders = {
  apikey,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const apolloClient = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
  headers: commonHeaders,
  connectToDevTools: true,
});

export const axiosInstance = axios.create({
  baseURL: baseURL || '/api/',
  timeout: 60000,
  headers: commonHeaders,
});

axiosInstance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem('access_token');

  const modifiedHeaders = {
    ...config.headers,
  };

  if (access_token) {
    modifiedHeaders.Authorization = `${access_token}`;
  }

  return { ...config, headers: modifiedHeaders } as unknown as InternalAxiosRequestConfig;
});

// const defaultErrorMessageForUnauthorized = 'You are not authorized. Please log in.'; toDo refresh token

// let isTokenRefreshing = false;
// let requestQueue: (() => void)[] = [];

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === ResponseStatus.UNAUTHORIZED) {
      deleteTokens();
      window.location.href = '/auth/login';

      return Promise.reject(error.response);
      // const { response, config: failedRequest } = error; toDo refresh token
      // const refreshToken = localStorage.getItem('refresh_token');

      // if (response.config?.url.includes('/auth/refresh/refresh_token') || !refreshToken) {
      //   if (typeof window !== 'undefined') {
      //     message.error(error?.response?.data?.message || defaultErrorMessageForUnauthorized);
      //     window.location.href = '/auth/login';
      //   }
      //   deleteTokens();
      //   requestQueue = [];
      //   return Promise.reject(response);
      // }
      // if (!isTokenRefreshing && typeof refreshToken === 'string') {
      //   isTokenRefreshing = true;
      //   refreshTokens(refreshToken)
      //     .then((newTokens) => {
      //       if (newTokens?.access_token) {
      //         setTokens(newTokens);
      //         requestQueue.forEach((request) => request());
      //         requestQueue = [];
      //       }
      //     })
      //     .finally(() => {
      //       isTokenRefreshing = false;
      //     });
      // }
      // return new Promise((resolve) => {
      //   requestQueue.push(() => {
      //     resolve(axiosInstance(failedRequest));
      //   });
      // });
    }

    return Promise.reject(error);
  },
);

interface RequestParams {
  params?: object;
  headers?: object;
}

interface PostRequestParams extends RequestParams {
  data: object;
}

export const patchRequest = async <T>(url: string, reqParams?: PostRequestParams): Promise<AxiosResponse<T>> => {
  const { data = {}, headers = {}, params = {} } = reqParams ?? {};

  const config = {
    headers,
    params,
  };

  const res = await axiosInstance.patch(url, data, config);

  return res;
};

export const postRequest = async <T>(url: string, reqParams?: PostRequestParams): Promise<AxiosResponse<T>> => {
  const { data = {}, headers = {}, params = {} } = reqParams ?? {};

  const config = {
    headers,
    params,
  };

  const res = await axiosInstance.post(url, data, config);

  return res;
};

export const deleteRequest = async (url: string, reqParams?: PostRequestParams) => {
  const { headers = {}, params = {}, data } = reqParams ?? {};

  const config = {
    headers,
    params,
    data,
  };

  const res = await axiosInstance.delete(url, config);

  return res;
};

export const getRequest = async <T>(url: string, reqParams?: RequestParams): Promise<AxiosResponse<T>> => {
  const { params = {}, headers = {} } = reqParams ?? {};

  const config = {
    url,
    params,
    headers,
  };

  const res = await axiosInstance.get(url, config);

  return res;
};
