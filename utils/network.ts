import Config from 'react-native-config';
export const baseUrl =
  Config.VERCEL_ENV === 'development' ? Config.DEVELOP_BASE_URL : Config.PROD_BASE_URL;

// user
export const baseUserUrl = `${baseUrl}/user`;

// auth
export const loginUrl = `${baseUrl}/auth/login`;
export const registerUrl = `${baseUrl}/auth/register`;
export const whoAmI = `${baseUserUrl}/me`;
export const logoutUrl = `${baseUrl}/auth/logout`;

// files
export const saveAvatar = `${baseUrl}/files/upload/`;
