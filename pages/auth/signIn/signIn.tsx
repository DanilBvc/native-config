import React, { useState } from 'react';
import TextField from '../../../components/generall/textField/textField';
import { emailRegex, passwordRegex } from '../../../static/regex';
import Button from '../../../components/generall/button/button';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import LocalizationSwitcher from '../../../components/generall/localizationSwitcher/localizationSwitcher';
import { Image, Text, View } from 'react-native';
import { familyLogoUrl } from '../../../static/urls';
import { AuthUserApi } from '../../../services/authService/authService';
import useUserStore from '../../../store/user/store';
import { type userSignInData } from '../../../static/types/userTypes/types';
import { styles } from './signIn.style';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { storeData } from '../../../utils/localStorage';

const SignIn = () => {
  const { t } = useTranslation();
  const userStore = useUserStore((state) => state);
  const { setIsAuthenticated } = useAuth();
  const navigation = useNavigation();
  const [signInData, setSignInData] = useState<userSignInData>({
    email: 'denyskotyara@gmail.com',
    password: 'Den199777@',
  });

  const [error, setError] = useState(false);

  const onChange = (name: string, value: string) => {
    setError(false);
    setSignInData({ ...signInData, [name]: value });
  };

  const signIn = async () => {
    try {
      const response = await AuthUserApi.login(signInData);
      await storeData('tokens', { accessToken: response.tokens.accessToken, refreshToken: response.tokens.refreshToken });
      setIsAuthenticated(true);
      navigation.navigate('Home' as never);
      userStore.updateUserData(response);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <EmptyLayout additionalControl={<LocalizationSwitcher />}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: familyLogoUrl,
          }}
          style={styles.imageSize}
        />
      </View>
      <View style={styles.emailContainer}>
        <TextField
          name={'email'}
          value={signInData.email}
          onChange={onChange}
          placeholder={t('auth.email')}
          validation={emailRegex}
          error={error}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextField
          name={'password'}
          value={signInData.password}
          onChange={onChange}
          placeholder={t('auth.password')}
          validation={passwordRegex}
          error={error}
        />
      </View>
      <Button onPress={signIn} text={t('auth.logIn')} />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur. Suspendisse massa dictum nisl sapien vulputate.
      </Text>
    </EmptyLayout>
  );
};

export default SignIn;
