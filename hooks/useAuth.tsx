import React, {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { storeData } from '../utils/localStorage';
import { AuthUserApi } from '../services/authService/authService';

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async (): Promise<void> => {
    try {
      const response = await AuthUserApi.checkIsCurrentAccessToken();
      console.log(response, 'response test ');

      setIsAuthenticated(true);
    } catch (error) {
      try {
        const response = await AuthUserApi.refresh();
        setIsAuthenticated(true);
        await storeData('accessToken', response.tokens.accessToken);
        await storeData('refreshToken', response.tokens.refreshToken);
      } catch (refreshError) {
        setIsAuthenticated(false);
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
