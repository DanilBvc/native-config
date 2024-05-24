import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: unknown) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

export const getData = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const removeData = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
