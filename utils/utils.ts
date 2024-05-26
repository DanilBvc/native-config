import languagesList from '../services/languagesList.json';
type LanguageList = Record<
string,
{
  name: string;
  nativeName: string;
}
>;
export const getLocalizations = () => {
  return languagesList as LanguageList;
};

export const generateUUID = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};
