export interface userSignInData {
  email: string;
  password: string;
}

export interface userData {
  id: string;
  username: string;
  role: string;
  isAccountDisabled: boolean;
  email: string;
  createdAt: string;
  updatedAt: string;
  langue: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}
