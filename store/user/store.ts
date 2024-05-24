import { create } from 'zustand';
import { type userData } from '../../static/types/userTypes/types';

interface userStore {
  user: userData;
  updateUserData: (userData: userData) => void;
}
const useUserStore = create<userStore>((set) => ({
  user: {
    id: '',
    username: '',
    role: '',
    isAccountDisabled: false,
    email: '',
    createdAt: '',
    updatedAt: '',
    langue: '',
    tokens: {
      accessToken: '',
      refreshToken: '',
    },
  },
  updateUserData: (userData: userData) => {
    set({
      user: userData,
    });
  },
}));

export default useUserStore;
