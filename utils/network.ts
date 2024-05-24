// export const baseUrl = VERCEL_ENV === 'development' ? DEVELOP_BASE_URL : PROD_BASE_URL;
export const baseUrl = 'http://192.168.88.39:4000';

// user
export const baseUserUrl = `${baseUrl}/users`;
export const currentUserUrl = `${baseUserUrl}/current`;
export const userMeUrl = `${baseUserUrl}/me`;

// auth
export const baseAuthUrl = `${baseUrl}/auth`;
export const signInUrl = `${baseAuthUrl}/login`;
export const refreshTokenUrl = `${baseAuthUrl}/refresh-token`;
export const logoutUrl = `${baseAuthUrl}/logout`;
export const checkTokenUrl = `${baseUrl}/users/me`;
// tree
export const baseTreeUrl = `${baseUrl}/tree`;
export const allTreeUrl = `${baseTreeUrl}/all`;
