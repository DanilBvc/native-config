import React, { useState } from 'react';
import { View } from 'react-native';
import TextField from '../../../components/generall/textField/textField';
import { emailRegex, passwordRegex } from '../../../static/regex';
import Button from '../../../components/generall/button/button';
interface signInData {
  email: string;
  password: string;
}
const SignIn = () => {
  const [signInData, setSignInData] = useState<signInData>({
    email: '',
    password: '',
  });
  const onChange = (name: string, value: string) => {
    setSignInData({ ...signInData, [name]: value });
  };

  return (
    <View>
      <TextField
        name={'email'}
        value={signInData.email}
        onChange={onChange}
        placeholder={'Email'}
        validation={emailRegex}
        errorMessage={'Invalid email'}
      />
      <TextField
        name={'password'}
        value={signInData.password}
        onChange={onChange}
        placeholder={'Password'}
        validation={passwordRegex}
        errorMessage={'Invalid password'}
      />
      <Button onPress={() => {}} text={'Log in'} />
    </View>
  );
};

export default SignIn;
