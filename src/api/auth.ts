import { API } from './types';

import { postRequest } from '.';

export const auth = {
  signUp: (email: string, password: string) =>
    postRequest<API.Auth.SupabaseGetSessionResponse>('/auth/v1/signup', { data: { email, password } }),
  signIn: (email: string, password: string) =>
    postRequest<API.Auth.SupabaseGetSessionResponse>('/auth/v1/signin', { data: { email, password } }),
};
