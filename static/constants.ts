import FAQ from '../pages/FAQ/FAQ';
import AboutUs from '../pages/aboutUs/aboutUs';
import SignIn from '../pages/auth/signIn/signIn';
import SignUp from '../pages/auth/signUp/signUp';
import BuyPackage from '../pages/buyPackage/step1/buyPackage';
import BuyPackageStep2 from '../pages/buyPackage/step2/buyPackageStep2';
import BuyPackageStep3 from '../pages/buyPackage/step3/buyPackageStep3';
import BuyPackageStep4 from '../pages/buyPackage/step4/buyPackageStep4';
import ContactUs from '../pages/contactUs/contactUs';
import CreateUser from '../pages/createUser/createUser';
import CustomerSection from '../pages/customerSection/customerSection';
import FirstPage from '../pages/firstPage/firstPage';
import HomeScreen from '../pages/homeScreen/homeScreen';
import HowItWorks from '../pages/howItWorks/howItWorks';
import UserProfile from '../pages/userProfile/userProfile';
import WelcomeScreen from '../pages/welcomeScreen/welcomeScreen';
import { FileEnum } from './types/tree/types';

export const tokens = {
  access_token: 'accessToken',
  refresh_token: 'refreshToken',
};

export const routes = [
  {
    name: 'FirstPage',
    component: FirstPage,
    isPrivate: false,
    options: { headerShown: false },
  },
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
    name: 'BuyPackage3',
    component: BuyPackageStep3,
    isPrivate: false,
    options: { headerShown: false },
  },
  {
    name: 'BuyPackage4',
    component: BuyPackageStep4,
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
  {
    name: 'UserProfile',
    component: UserProfile,
    isPrivate: true,
    options: { headerShown: false },
  },
];

export const demoTreeData = {
  additional_slots: [],
  available_slot: 0,
  avatar:
    'https://remembering-time.s3.eu-central-1.amazonaws.com/tree/c0cb0e02-3551-4b50-906b-a9efa733a9b8.jpeg',
  created_at: '2024-02-20T13:41:19.675Z',
  date_of_birth: '17.08.1968',
  date_of_dead: '02.02.2015',
  description:
    'Український співак, письменник, телеведучий, продюсер, актор. Лідер гурту «Скрябін». Псевдонім — Кузьма́, Кузьма Скрябін.',
  first_name: 'Кузьма',
  full_name: 'Андрі́й Ві́кторович Кузьме́нко',
  id: '257c7e7c-e7bb-4bc9-8153-c81901322adb',
  last_name: 'Скрябін',
  password: 'null',
  slots: [
    {
      comment_text: null,
      comment_title: null,
      created_at: '2024-02-20T14:21:53.679Z',
      id: 'c859c062-2a28-4ec9-af35-a1b87822397c',
      index: 10,
      link: 'https://remember-time.s3.eu-central-1.amazonaws.com/tree/c3d3e273-d292-4f78-a8ed-f982cd6098d7.mp3',
      slot_type: FileEnum.AUDIO,
    },
    {
      comment_text:
        "Твої руки магію творять, Клавіші підпорядковані тобі. Звуки витають, формують мелодію, Кузьма, ти вічно живеш у нашій пам'яті.",
      comment_title: null,
      created_at: '2024-02-20T14:19:48.893Z',
      id: 'c883ce61-0230-49e9-888f-e55cbea81383',
      index: 5,
      link: 'https://remember-time.s3.eu-central-1.amazonaws.com/tree/df75afed-6e10-47e3-82f0-769bc50422d8.png',
      slot_type: FileEnum.PHOTO,
    },
    {
      comment_text: null,
      comment_title: null,
      created_at: '2024-02-20T14:20:37.283Z',
      id: '1ed82268-f1e7-49ac-9c54-2f8863051f77',
      index: 4,
      link: 'https://remember-time.s3.eu-central-1.amazonaws.com/tree/46bd2c45-c677-4cf9-8130-03c31cfd2174.jpeg',
      slot_type: FileEnum.PHOTO,
    },
    {
      comment_text:
        'Жестикуляція жвава, очі горять, В тебе енергія, що заразить міг би світи. Твій запал, неначе вогонь, палить, І спогад про тебе в серцях горить.',
      comment_title: null,
      created_at: '2024-02-20T14:20:01.271Z',
      id: '1b66af3e-7002-46c1-8a3e-d5b4f34dd245',
      index: 4,
      link: 'https://remember-time.s3.eu-central-1.amazonaws.com/tree/ca443cd2-2472-4c5a-81d0-50fde1d43256.jpeg',
      slot_type: FileEnum.PHOTO,
    },
    {
      comment_text:
        'В твоїх очах — історії незгадані, Секрети, що музика тільки знає. Кожен вірш, що ти не доспівав, В наших серцях навіки залишається.',
      comment_title: null,
      created_at: '2024-02-20T14:19:41.862Z',
      id: 'bcf2c0db-b461-431a-bf1e-a8f87557c20c',
      index: 3,
      link: 'https://remember-time.s3.eu-central-1.amazonaws.com/tree/d2d679f1-c60c-43bf-be16-10890cd1f84e.jpeg',
      slot_type: FileEnum.PHOTO,
    },
    {
      comment_text: null,
      comment_title: null,
      created_at: '2024-05-14T06:42:39.589Z',
      id: 'c33e0da4-1c69-4ba0-8b96-2f3ec2ab1cd2',
      index: 2,
      link: 'https://remembering-time.s3.eu-central-1.amazonaws.com/tree/79412a4b-905f-4673-855e-b018d7b14356.mp4',
      slot_type: FileEnum.VIDEO,
    },
    {
      comment_text:
        "Юність твоя в чорно-білому світі, Де кожен крок — до великих мрій. Згадуємо, як все починалось, І пам'ять про тебе в серці гріє.",
      comment_title: null,
      created_at: '2024-04-28T05:17:45.126Z',
      id: '89027b21-1b4c-4200-8aa6-9afb90e4c422',
      index: 8,
      link: 'https://remembering-time.s3.eu-central-1.amazonaws.com/tree/87368cab-d07f-49bf-a497-4cdcc3422642.png',
      slot_type: FileEnum.PHOTO,
    },
    {
      comment_text:
        "Юність твоя в чорно-білому світі, Де кожен крок — до великих мрій. Згадуємо, як все починалось, І пам'ять про тебе в серці гріє.",
      comment_title: null,
      created_at: '2024-02-21T00:43:00.375Z',
      id: 'dd50e995-c7d7-4819-91a3-a08bed41df74',
      index: 7,
      link: 'https://remember-time.s3.eu-central-1.amazonaws.com/tree/8b2b2ee8-e623-48cc-8af8-93484c144288.jpeg',
      slot_type: FileEnum.PHOTO,
    },
    {
      comment_text:
        'В твоєму погляді живе душа, В кожному кадрі ти — не просто образ, В серцях залишився ти назавжди, Кузьма, твоя пісня лунає в нас.',
      comment_title: '1',
      created_at: '2024-02-21T00:48:38.161Z',
      id: 'f8f09aa2-670d-4775-b44a-6f758b38f7ed',
      index: 11,
      link: 'https://remember-time.s3.eu-central-1.amazonaws.com/tree/f80c7364-befe-4f57-bccd-111be53905e7.webp',
      slot_type: FileEnum.PHOTO,
    },
    {
      comment_text: null,
      comment_title: null,
      created_at: '2024-07-25T08:41:29.117Z',
      id: '102ba247-8a85-446d-8634-881703b516bb',
      index: 0,
      link: 'https://r-time.s3.eu-central-1.amazonaws.com/tree/052723fe-940f-403a-b286-704c676d009a',
      slot_type: FileEnum.PHOTO,
    },
    {
      comment_text:
        'Задумливий вигляд, в очах — глибина, Ти мислитель, що серцем співає. В кожній ноті — частка душі, Відлуння твоє не затихає.',
      comment_title: null,
      created_at: '2024-02-20T14:16:43.081Z',
      id: 'dfc1aec8-8d9c-4191-80f1-649ef2f033a6',
      index: 6,
      link: 'https://remember-time.s3.eu-central-1.amazonaws.com/tree/eb344ac2-cb23-4f94-9e28-ab91f6df9e3f.jpeg',
      slot_type: FileEnum.PHOTO,
    },
    {
      comment_text:
        "Веселість твоя, немов промінь сонця, Відгомін сміху в пустелі днів. В пам'яті оживає кожна мить, Де ти із нами, ніби тут і нині.",
      comment_title: null,
      created_at: '2024-02-20T14:26:52.564Z',
      id: '6c334caa-c631-4602-95e5-4b8636efcafc',
      index: 12,
      link: 'https://remember-time.s3.eu-central-1.amazonaws.com/tree/5580ce66-1baa-4bbf-89bb-4deac82007fa.jpg',
      slot_type: FileEnum.PHOTO,
    },
  ],
  type: {
    audio_limit: 1,
    created_at: '2024-02-13T10:09:26.699Z',
    id: 'abcebf77-df1a-4855-ac6c-828d427fa89d',
    name: 'Standard',
    photo_limit: 10,
    video_limit: 1,
  },
  updated_at: '2024-07-02T11:58:54.326Z',
  user: {
    createdAt: '2024-02-20T13:24:31.267Z',
    email: 'demouserua@gmail.com',
    id: '1c9f10cf-2d1e-46ed-b04d-0daf5a16b5e2',
    isAccountDisabled: false,
    langue: 'ua',
    password: '$2b$10$k5XhHCCDQtnRE4uoZMxybOLvUlkFho4lk80tmb9blU80PXXvRHs4G',
    role: 'USER',
    updatedAt: '2024-02-20T13:24:31.267Z',
    username: 'Demo User UA',
  },
};
