import React, { useState, useRef, useEffect, type FC } from 'react';
import { TextInput, View, Animated } from 'react-native';
import { styles } from './textField.style';
import { type textFieldProps } from './textField.type';
import { colors } from '../../../static/colors';

const TextField: FC<textFieldProps> = ({
  placeholder,
  value,
  name,
  onChange,
  validation,
  error,
  additionalStyles,
  errorMessage,
  placeholderColor = colors.rusty_Copper,
}) => {
  const [errorValidation, setErrorValidation] = useState(false);
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const handleInput = (name: string, value: string) => {
    if (validation.test(value)) {
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
          }}
          placeholderTextColor={colors.rusty_Copper}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => {
            handleInput(name, text);
          }}
        />
      </Animated.View>
      <TextInput
        style={{ ...styles.input, borderColor: error ? 'red' : colors.earthy_Brown, ...additionalStyles }}
        placeholderTextColor={placeholderColor}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => {
          handleInput(name, text);
        }}
      />

      {/* {error ? <Text style={styles.errorText}>{errorMessage}</Text> : null} */}
    </View>
  );
};

export default TextField;
