import React, { type FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './textField.style';
import { type textFieldProps } from './textField.type';
import { colors } from '../../../static/colors';

const TextField: FC<textFieldProps> = ({
  placeholder,
  value,
  name,
  onChange,
  validation,
  errorMessage,
}) => {
  const [error, setError] = useState(false);
  const handleInput = (name: string, value: string) => {
    if (validation.test(value)) {
      setError(false);
    } else {
      setError(true);
    }
    onChange(name, value);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{ ...styles.input, borderColor: error ? 'red' : colors.earthy_Brown }}
        placeholderTextColor={colors.rusty_Copper}
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
