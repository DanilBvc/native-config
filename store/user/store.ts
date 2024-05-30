import { create } from 'zustand';
import { type User } from '../../static/types/userTypes/types';

interface userStore {
  user: User;
  updateUserData: (userData: User) => void;
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
    password: '',
    trees: [],

  },
  updateUserData: (userData: User) => {
    set({
      user: userData,
    });
  },
}));

export default useUserStore;
