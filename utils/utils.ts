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
}
