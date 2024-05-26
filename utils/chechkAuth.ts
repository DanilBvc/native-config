import { useAuth } from '../hooks/useAuth';
import { AuthUserApi } from '../services/authService/authService';
import { storeData } from './localStorage';

export const checkAuth = async () => {
  const { setIsAuthenticated } = useAuth()
  try {
    await AuthUserApi.checkIsCurrentAccessToken();
    setIsAuthenticated(true);
  } catch (error) {
    try {
      const response = await AuthUserApi.refresh();
      setIsAuthenticated(true);
      storeData('tokens', { accessToken: response.tokens.accessToken, refreshToken: response.tokens.refreshToken });
    } catch (refreshError) {
      setIsAuthenticated(false);
    }
  }
};
