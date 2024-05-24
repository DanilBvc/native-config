export interface userSignInData {
  email: string;
  password: string;
}

interface tokens {
  accessToken: string;
  refreshToken: string;

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
  tokens: tokens;
}
