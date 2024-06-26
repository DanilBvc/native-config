import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import Button from '../../../components/generall/button/button';
import LocalizationSwitcher from '../../../components/generall/localizationSwitcher/localizationSwitcher';
import TextField from '../../../components/generall/textField/textField';
import { useAuth } from '../../../hooks/useAuth';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { AuthUserApi } from '../../../services/authService/authService';
import { emailRegex, passwordRegex } from '../../../static/regex';
import { type userSignInData } from '../../../static/types/userTypes/types';
import FamilyEmblem from '../../../static/familyEmblem';
import useUserStore from '../../../store/user/store';
import { styles } from './signIn.style';

import { storeData } from '../../../utils/localStorage';

const SignIn = () => {
  const { t } = useTranslation();
  const userStore = useUserStore((state) => state);
  const { setIsAuthenticated } = useAuth();
  const navigation = useNavigation();
  const [signInData, setSignInData] = useState<userSignInData>({
    email: 'demouserua@gmail.com',
    password: 'jSvcVlZbiQwlm7n',
  });

  const [error, setError] = useState<boolean>(false);

  const onChange = (name: string, value: string) => {
    setError(false);
    setSignInData({ ...signInData, [name]: value });
  };

  const signIn = async () => {
    try {
      const response = await AuthUserApi.login(signInData);
      await storeData('accessToken', response.tokens.accessToken);
      await storeData('refreshToken', response.tokens.refreshToken);

      setIsAuthenticated(true);
      navigation.navigate('Home' as never);
      const user = await AuthUserApi.checkIsCurrentAccessToken();

      userStore.updateUserData(user.data);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
  >
    <EmptyLayout additionalControl={<LocalizationSwitcher />}>
      <View style={styles.imageContainer}>
        <FamilyEmblem width={226} height={231} />
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
    </ScrollView>
  );
};

export default SignIn;
