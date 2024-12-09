import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export const getCookieClientSide = (cookieName: string) => getCookie(cookieName);

export const setCookieClientSide = (cookieName: string, cookieValue: string) => setCookie(cookieName, cookieValue);

export const deleteCookieClientSide = (cookieName: string) => deleteCookie(cookieName);
