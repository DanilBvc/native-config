import FAQ from '../pages/FAQ/FAQ';
import AboutUs from '../pages/aboutUs/aboutUs';
import SignIn from '../pages/auth/signIn/signIn';
import SignUp from '../pages/auth/signUp/signUp';
import BuyPackage from '../pages/buyPackage/step1/buyPackage';
import BuyPackageStep2 from '../pages/buyPackage/step2/buyPackageStep2';
import ContactUs from '../pages/contactUs/contactUs';
import CreateUser from '../pages/createUser/createUser';
import CustomerSection from '../pages/customerSection/customerSection';
import HomeScreen from '../pages/homeScreen/homeScreen';
import HowItWorks from '../pages/howItWorks/howItWorks';
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
  },
  {
    name: 'ContactUs',
    component: ContactUs,
    isPrivate: true,
    options: { headerShown: false },
  },
  {
    name: 'AboutUs',
    component: AboutUs,
    isPrivate: true,
    options: { headerShown: false },
  },
  {
    name: 'HowItWorks',
    component: HowItWorks,
    isPrivate: true,
    options: { headerShown: false },
  },
  {
    name: 'CustomerSection',
    component: CustomerSection,
    isPrivate: true,
    options: { headerShown: false },
  },
  {
    name: 'CreateUser',
    component: CreateUser,
    isPrivate: true,
    options: { headerShown: false },
  },
];
