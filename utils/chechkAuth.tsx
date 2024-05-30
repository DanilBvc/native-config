import { AuthUserApi } from '../services/authService/authService';
import { storeData } from './localStorage';

type SetIsAuthenticated = (value: boolean) => void;

export const checkAuth = async (setIsAuthenticated: SetIsAuthenticated): Promise<void> => {
  try {
    setIsAuthenticated(true);
    await AuthUserApi.checkIsCurrentAccessToken();

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
