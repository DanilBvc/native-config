import en from '../locales/en/common.json';
import ua from '../locales/ua/common.json';
import pl from '../locales/pl/common.json';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const languageResources = {
  en: { translation: en },
  ua: { translation: ua },
  pl: { translation: pl },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: languageResources,
  lng: 'en',
  fallbackLng: 'en',
});

export default i18next;
