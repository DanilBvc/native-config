import React, { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import TextField from '../generall/textField/textField';
import { generateMathProblem, type MathProblem } from '../../utils/generateMathProblem';
import { numberOnlyRegex } from '../../static/regex';
import { colors } from '../../static/colors';
import Button from '../generall/button/button';
import { styles } from './Captcha.style';

interface MathCaptchaProps {
  onVerify: (isHuman: boolean) => void;
}

const Captcha: FC<MathCaptchaProps> = ({ onVerify }) => {
  const [problem, setProblem] = useState<MathProblem | null>(null);
  const [userInput, setUserInput] = useState({
    value: '',
  });

  const verifyAnswer = () => {
    if (problem && parseInt(userInput.value) === problem.answer) {
      onVerify(true);
      setProblem(generateMathProblem());
      setUserInput({ value: '' });
    } else {
      onVerify(false);
      setUserInput({ value: '' });
    }
  };

  const onChange = (name: string, value: string) => {
    setUserInput({ ...userInput, [name]: value });
  };

  useEffect(() => {
    setProblem(generateMathProblem());
  }, []);
  const { t } = useTranslation();
  return (
    <View>
      <Text style={styles.text}>
        {t('contactUs.captcha')}: {problem?.question}
      </Text>
      <TextField
        additionalStyles={{ borderRadius: 12, paddingLeft: 14, height: 50, marginTop: 20 }}
        value={userInput.value}
        placeholderColor={colors.amberwood_Brown}
        onChange={onChange}
        name="value"
        placeholder="Your answer"
        validation={numberOnlyRegex}
      />
      <Button
        text={t('contactUs.verify')}
        onPress={verifyAnswer}
        additionalStyles={{ width: 158, marginTop: 20, borderRadius: 12 }}
      />
    </View>
  );
};

export default Captcha;
