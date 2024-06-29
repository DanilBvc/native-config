import { tokens } from '../../static/constants';
import {
  type userSignInData,
  type userData,
  type LoginResponse,
} from '../../static/types/userTypes/types';
import { checkTokenUrl, logoutUrl, refreshTokenUrl, signInUrl } from '../../utils/network';
import { authorizedRequest, unauthorizedRequest } from '../../utils/queries';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AuthUserApi {
  static async login (userSignInData: userSignInData): Promise<userData> {
    return await unauthorizedRequest(signInUrl, 'POST', userSignInData);
  }

  static async refresh (): Promise<{
    tokens: { accessToken: string; refreshToken: string };
    user: userData;
  }> {
    return await authorizedRequest(refreshTokenUrl, 'POST', tokens.refresh_token);
  }

  static async logout (): Promise<{ isSuccess: boolean }> {
    return await authorizedRequest(logoutUrl, 'GET', tokens.access_token);
  }

  static async checkIsCurrentAccessToken (): Promise<LoginResponse> {
    return await authorizedRequest(checkTokenUrl, 'GET', tokens.access_token);
  }
}
