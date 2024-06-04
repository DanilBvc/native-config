import React, { useEffect, useRef, useState, type FC } from 'react';
import { Animated, TextInput, View } from 'react-native';
import { colors } from '../../../static/colors';
import { styles } from './textField.style';
import { type textFieldProps } from './textField.type';

const TextField: FC<textFieldProps> = ({
  placeholder,
  value,
  name,
  onChange,
  validation,
  error = false,
  additionalStyles,
  errorMessage,
  placeholderColor = colors.rusty_Copper,
}) => {
  const [errorValidation, setErrorValidation] = useState(false);
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const handleInput = (name: string, value: string) => {
    if (!validation) { onChange(name, value); return; }

    if (validation?.test(value)) {
      setErrorValidation(false);
    } else {
      setErrorValidation(true);
    }
    onChange(name, value);
  };

  useEffect(() => {
    if (error || errorValidation) {
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [error, errorValidation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
        <TextInput
          style={{
            ...styles.input,
            borderColor: error || errorValidation ? 'red' : colors.earthy_Brown,
            color: error || errorValidation ? 'red' : '#000',
            ...additionalStyles,
          }}
          placeholderTextColor={placeholderColor}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => {
            handleInput(name, text);
          }}
        />
      </Animated.View>
      {/* {error ? <Text style={styles.errorText}>{errorMessage}</Text> : null} */}
    </View>
  );
};

export default TextField;
