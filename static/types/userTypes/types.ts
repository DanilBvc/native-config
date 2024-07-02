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

export interface Tree {
  available_slot: number;
  avatar: string | null;
  created_at: string;
  date_of_birth: string | null;
  date_of_dead: string | null;
  description: string | null;
  first_name: string;
  full_name: string;
  id: string;
  last_name: string;
  password: string | null;
  updated_at: string;
}

export interface User {
  createdAt: string;
  email: string;
  id: string;
  isAccountDisabled: boolean;
  langue: string;
  password: string;
  role: string;
  trees: Tree[];
  updatedAt: string;
  username: string;
}

export interface LoginResponse {
  data: User;
}

export interface TContactForm {
  category: 'technical' | 'business';
  email: string;
  message: string;
}
