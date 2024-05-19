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

const SignIn = () => {
  const { t } = useTranslation();
  const userStore = useUserStore((state) => state);
  const [signInData, setSignInData] = useState<userSignInData>({
    email: '',
    password: '',
  });
  const onChange = (name: string, value: string) => {
    setSignInData({ ...signInData, [name]: value });
  };

  const signIn = async () => {
    const response = await AuthUserApi.login(signInData)
    userStore.updateUserData(response)
  }

  return (
    <EmptyLayout additionalControl={<LocalizationSwitcher />}>
      <View
        style={styles.imageContainer}
      >
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
          errorMessage={'Invalid email'}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextField
          name={'password'}
          value={signInData.password}
          onChange={onChange}
          placeholder={t('auth.password')}
          validation={passwordRegex}
          errorMessage={'Invalid password'}
        />
      </View>
      <Button onPress={signIn} text={t('auth.logIn')} />
      <Text
        style={styles.text}
      >
        Lorem ipsum dolor sit amet consectetur. Suspendisse massa dictum nisl sapien vulputate.
      </Text>
    </EmptyLayout>
  );
};

export default SignIn;
