// import { auth } from '@/api/auth';
import { API } from '@/api/types';

export function setTokens({ access_token, refresh_token }: API.Auth.Tokens) {
  if (access_token && refresh_token) {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  }
}
export function deleteTokens() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
}

// export async function refreshTokens(refreshToken: string) {
//   const { data } = await auth.refresh.refresh_token(refreshToken);

//   return data;
// }
