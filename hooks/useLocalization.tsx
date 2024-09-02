import i18next from 'i18next';
import { useEffect, useState } from 'react';

const useLocalization = () => {
  const [currentLng, setCurrentLng] = useState<string>(i18next.language);
  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng);
    setCurrentLng(lng);
  };
  const isUa = currentLng === 'ua';
  const isEn = currentLng === 'en';
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLng(lng);
    };

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);
  return { currentLng, changeLng, isUa, isEn };
};

export default useLocalization;
