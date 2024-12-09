'use server';

import { cookies } from 'next/headers';

export const setCookieServerSide = (cookieName: string, cookieValue: string) => cookies().set(cookieName, cookieValue);

export const getCookieServerSide = (cookieName: string) => cookies().get(cookieName);

export const deleteCookieServerSide = (cookieName: string) => cookies().delete(cookieName);
