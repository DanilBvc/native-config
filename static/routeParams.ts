import { type RouteProp, type ParamListBase } from '@react-navigation/native';
import { type Tree } from './types/userTypes/types';

export interface RootStackParamList extends ParamListBase {
  BuyPackage: { card: string };
  UserProfile: { user: Tree };
}

export type UserProfileRouteProp = RouteProp<RootStackParamList, 'UserProfile'>;
