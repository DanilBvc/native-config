// export const baseUrl = VERCEL_ENV === 'development' ? DEVELOP_BASE_URL : PROD_BASE_URL;
export const baseUrl = 'http://192.168.88.34:4000';

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
export const treeTypesUrl = `${baseTreeUrl}/types`;
export const userTreeUrl = `${baseTreeUrl}/me`;
export const oneTreeUrl = `${baseTreeUrl}/one`;
export const slotUrl = (id: string) => `${baseTreeUrl}/slot/${id}`;
export const oneTree = (treeId: string) => `${baseTreeUrl}/one/${treeId}`;
export const addFile = (treeId: string) => `${baseTreeUrl}/slot/${treeId}`;
export const allUserTreeUrl = (userId: string) => `${baseTreeUrl}/all/${userId}`;

export const allTreeUrl = `${baseTreeUrl}/all`;
