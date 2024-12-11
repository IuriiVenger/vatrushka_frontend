import { message } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { deleteTokens, getTokens, refreshTokens, setTokens } from './tokensFactory';

import { isString } from './typeguards';

import { commonHeaders } from '@/api';
import { ResponseStatus } from '@/constants';
import { logout } from '@/store/slices/user';

export const createCustomAxiosInstance = (baseUrl: string) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    headers: commonHeaders,
  });

  let isTokenRefreshing = false;
  let requestQueue: (() => void)[] = [];

  axiosInstance.interceptors.request.use(async (config) => {
    const { access_token } = await getTokens();

    const modifiedHeaders = {
      ...config.headers,
    };

    if (access_token) {
      modifiedHeaders.Authorization = `${access_token}`;
    }

    return { ...config, headers: modifiedHeaders } as unknown as InternalAxiosRequestConfig;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error?.response?.status === ResponseStatus.UNAUTHORIZED) {
        const { response, config: failedRequest } = error;
        const { refresh_token } = await getTokens();

        const defaultErrorMessageForUnauthorized = 'You are not authorized. Please log in.';

        if (response.config?.url.includes('/auth/refresh/refresh_token') || !refresh_token) {
          if (typeof window !== 'undefined') {
            message.error(error?.response?.data?.message || defaultErrorMessageForUnauthorized);
            const { store } = await import('@/store');
            store.dispatch(logout());
          }
          deleteTokens();
          requestQueue = [];
          return Promise.reject(response);
        }
        if (!isTokenRefreshing && typeof refresh_token === 'string') {
          isTokenRefreshing = true;
          refreshTokens(refresh_token)
            .then((newTokens) => {
              if (newTokens?.access_token) {
                setTokens(newTokens);
                requestQueue.forEach((request) => request());
                requestQueue = [];
              }
            })
            .finally(() => {
              isTokenRefreshing = false;
            });
        }
        return new Promise((resolve) => {
          requestQueue.push(() => {
            resolve(axiosInstance(failedRequest));
          });
        });
      }

      const errorMessage =
        error?.response?.data?.message ||
        (isString(error?.response?.data?.error) && error?.response?.data?.error) ||
        (isString(error?.response?.data) && error?.response?.data) ||
        error?.message ||
        'Something went wrong';

      message.error(errorMessage);
      return Promise.reject(error);
    },
  );

  const patchRequest = async <T>(url: string, reqParams?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const { data = {}, headers = {}, params = {} } = reqParams ?? {};

    const config = {
      headers,
      params,
    };

    const res = await axiosInstance.patch(url, data, config);

    return res;
  };

  const postRequest = async <T>(url: string, reqParams?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const { data = {}, headers = {}, params = {} } = reqParams ?? {};

    const config = {
      headers,
      params,
    };

    const res = await axiosInstance.post(url, data, config);

    return res;
  };

  const deleteRequest = async (url: string, reqParams?: AxiosRequestConfig) => {
    const { headers = {}, params = {}, data } = reqParams ?? {};

    const config = {
      headers,
      params,
      data,
    };

    const res = await axiosInstance.delete(url, config);

    return res;
  };

  const getRequest = async <T>(url: string, reqParams?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const { params = {}, headers = {} } = reqParams ?? {};

    const config = {
      url,
      params,
      headers,
    };

    const res = await axiosInstance.get(url, config);

    return res;
  };

  return {
    patchRequest,
    postRequest,
    deleteRequest,
    getRequest,
  };
};
