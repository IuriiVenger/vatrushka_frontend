// import { auth } from '@/api/auth';

import { deleteCookieClientSide, getCookieClientSide, setCookieClientSide } from './common';

import { auth } from '@/api/auth';
import { API } from '@/api/types';

export async function getTokens() {
  return {
    access_token: await getCookieClientSide('access_token'),
    refresh_token: await getCookieClientSide('refresh_token'),
  };
}

export function setTokens({ access_token, refresh_token }: API.Auth.Tokens) {
  if (access_token && refresh_token) {
    setCookieClientSide('access_token', access_token);
    setCookieClientSide('refresh_token', refresh_token);
  }
}
export function deleteTokens() {
  deleteCookieClientSide('access_token');
  deleteCookieClientSide('refresh_token');
}

export async function refreshTokens(refreshToken: string) {
  const { data } = await auth.refresh.refresh_token(refreshToken);

  return data;
}
