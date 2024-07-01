import { VERCEL_ENV, DEVELOP_BASE_URL, PROD_BASE_URL } from '@env';
export const baseUrl = VERCEL_ENV === 'development' ? DEVELOP_BASE_URL : PROD_BASE_URL;

// user
export const baseUserUrl = `${baseUrl}/users`;
export const currentUserUrl = `${baseUserUrl}/current`;
export const userMeUrl = `${baseUserUrl}/me`;
export const supportUrl = `${baseUserUrl}/support`;

// auth
export const baseAuthUrl = `${baseUrl}/auth`;
export const signInUrl = `${baseAuthUrl}/login`;
export const refreshTokenUrl = `${baseAuthUrl}/refresh-token`;
export const logoutUrl = `${baseAuthUrl}/logout`;
export const checkTokenUrl = `${baseUrl}/users/me`;
// tree
export const baseTreeUrl = `${baseUrl}/tree`;
export const treeTypesUrl = `${baseTreeUrl}/types`;
export const userTreeUrl = `${baseTreeUrl}/me`;
export const oneTreeUrl = `${baseTreeUrl}/one`;
export const slotUrl = (id: string) => `${baseTreeUrl}/slot/${id}`;
export const oneTree = (treeId: string) => `${baseTreeUrl}/one/${treeId}`;
export const addFile = (treeId: string) => `${baseTreeUrl}/slot/${treeId}`;
export const allUserTreeUrl = (userId: string) => `${baseTreeUrl}/all/${userId}`;
export const updateComment = (id: string) => `${baseTreeUrl}/comment/${id}`;
export const getComment = (id: string) => `${baseTreeUrl}/comment/${id}`;

export const allTreeUrl = `${baseTreeUrl}/all`;

// payment
export const basePaymentUrl = `${baseUrl}/payment`;
export const paymentCreateSlot = `${basePaymentUrl}/slots`;
export const paymentValidateToken = (token: string) => `${basePaymentUrl}/validate?token=${token}`;

// openai
export const openAiUrl = 'https://api.openai.com/v1';
export const openAiChat = `${openAiUrl}/chat/completions`;
