export const baseUrl = 'http://192.168.88.31:4000';
// Config.VERCEL_ENV === 'development' ? Config.DEVELOP_BASE_URL : Config.PROD_BASE_URL;

// user
export const baseUserUrl = `${baseUrl}/users`;
export const currentUserUrl = `${baseUserUrl}/current`;
export const userMeUrl = `${baseUserUrl}/me`;

// auth
export const baseAuthUrl = `${baseUrl}/auth`;
export const signInUrl = `${baseAuthUrl}/login`;
export const refreshTokenUrl = `${baseAuthUrl}/refresh-token`;
export const logoutUrl = `${baseAuthUrl}/logout`;
export const checkTokenUrl = `${baseAuthUrl}/check-token`;
// tree
export const baseTreeUrl = `${baseUrl}/tree`;
export const allTreeUrl = `${baseTreeUrl}/all`;
