import { API } from './types';

import { getRequest, postRequest } from '.';

export const auth = {
  me: () => getRequest<API.Auth.Me>('/auth/me'),
  signin: {
    email: {
      otp: (email: string) =>
        postRequest<API.Auth.SupabaseGetSessionResponse>('/auth/signin/email/otp', { data: { email } }),
    },
    phone: {
      otp: (phone: string) =>
        postRequest<API.Auth.SupabaseGetSessionResponse>('/auth/signin/phone/otp', { data: { phone } }),
    },
    password: (email: string, password: string) =>
      postRequest<API.Auth.SupabaseGetSessionResponse>('/auth/signin/password', { data: { email, password } }),
    anonymous: () => postRequest<API.Auth.SupabaseGetSessionResponse>('/auth/signin/anonymous'),
  },
  verify: {
    email: {
      otp: (email: string, token: string) =>
        postRequest<API.Auth.VerifyOtp.Response>('/auth/verify/email/otp', { data: { email, token } }),
    },
    phone: {
      otp: (phone: string, token: string) =>
        postRequest<API.Auth.VerifyOtp.Response>('/auth/verify/phone/otp', { data: { phone, token } }),
    },
  },
  refresh: {
    refresh_token: (refresh_token: string) =>
      postRequest<API.Auth.Tokens>('/auth/refresh/refresh_token', { data: { refresh_token } }),
  },
  user_metadata: {
    update: (data: API.Auth.UserMetadata.Update.Request) =>
      postRequest<API.Auth.Me>('/auth/update/user_metadata', { data }),
  },
  telegram: {
    signin: (data: API.Auth.Telegram.Signin) => postRequest<API.Auth.Tokens>('/auth/telegram/signin/tg_id', { data }),

    signup: (data: API.Auth.Telegram.Signup) => postRequest<API.Auth.Tokens>('/auth/telegram/signup/phone', { data }),
  },
};
