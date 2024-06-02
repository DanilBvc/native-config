import { useNavigation, useRoute } from '@react-navigation/native';
import { type StackNavigationProp } from '@react-navigation/stack';
import { type UserProfileRouteProp, type RootStackParamList } from '../static/routeParams';

export const useTypedNavigation = () => useNavigation<StackNavigationProp<RootStackParamList>>()

export const useTypedRoute = () => useRoute<UserProfileRouteProp>()
