import { message } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { deleteTokens, refreshTokens, setTokens } from './tokensFactory';

import { commonHeaders } from '@/api';
import { ResponseStatus } from '@/constants';

export const createCustomAxiosInstance = (baseUrl: string) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    headers: commonHeaders,
  });

  let isTokenRefreshing = false;
  let requestQueue: (() => void)[] = [];

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

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === ResponseStatus.UNAUTHORIZED) {
        deleteTokens();
        window.location.href = '/auth/login';

        const { response, config: failedRequest } = error;
        const refreshToken = localStorage.getItem('refresh_token');
        const defaultErrorMessageForUnauthorized = 'You are not authorized. Please log in.';

        if (response.config?.url.includes('/auth/refresh/refresh_token') || !refreshToken) {
          if (typeof window !== 'undefined') {
            message.error(error?.response?.data?.message || defaultErrorMessageForUnauthorized);
            window.location.href = '/auth/login';
          }
          deleteTokens();
          requestQueue = [];
          return Promise.reject(response);
        }
        if (!isTokenRefreshing && typeof refreshToken === 'string') {
          isTokenRefreshing = true;
          refreshTokens(refreshToken)
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
        error?.response?.data?.message || error?.response?.data?.error || error?.message || 'Something went wrong';

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
