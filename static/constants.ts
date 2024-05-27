import FAQ from '../pages/FAQ/FAQ';
import SignIn from '../pages/auth/signIn/signIn';
import SignUp from '../pages/auth/signUp/signUp';
import BuyPackage from '../pages/buyPackage/step1/buyPackage';
import BuyPackageStep2 from '../pages/buyPackage/step2/buyPackageStep2';
import HomeScreen from '../pages/homeScreen/homeScreen';
import WelcomeScreen from '../pages/welcomeScreen/welcomeScreen';

export const tokens = {
  access_token: 'accessToken',
  refresh_token: 'refreshToken',
};

export const routes = [
  {
    name: 'Welcome',
    component: WelcomeScreen,
    isPrivate: false,
    options: { headerShown: false },
  },
  {
    name: 'SignIn',
    component: SignIn,
    isPrivate: false,
    options: { headerShown: false },
  },
  {
    name: 'SignUp',
    component: SignUp,
    isPrivate: false,
    options: { headerShown: false },
  },
  {
    name: 'Home',
    component: HomeScreen,
    isPrivate: true,
    options: { headerShown: false },
  },
  {
    name: 'BuyPackage',
    component: BuyPackage,
    isPrivate: false,
    options: { headerShown: false },
  },
  {
    name: 'BuyPackage2',
    component: BuyPackageStep2,
    isPrivate: false,
    options: { headerShown: false },
  },
  {
    name: 'Faq',
    component: FAQ,
    isPrivate: true,
    options: { headerShown: false },
  }

];
