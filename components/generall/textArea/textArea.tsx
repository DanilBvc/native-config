import React, { useState, type FC } from 'react';
import { type StyleProp, TextInput, type TextStyle, StyleSheet } from 'react-native';
import { styles } from './textArea.style';
import { colors } from '../../../static/colors';

interface Props {
  placeholder?: string;
  additionalStyles?: StyleProp<TextStyle>;
  numberOfLines?: number;
  validation?: RegExp;
  value: string;
  onChange: (name: string, value: string) => void;
  name: string;
  error?: boolean;
  placeholderTextColor?: string;
  editable?: boolean;
  maxLength?: number;
}

const TextArea: FC<Props> = ({
  placeholder,
  additionalStyles,
  numberOfLines = 5,
  validation,
  onChange,
  value,
  name,
  error,
  placeholderTextColor = colors.rusty_Copper_25_Opacity,
  editable = false,
  maxLength,
}) => {
  const [errorValidation, setErrorValidation] = useState(false);

  const handleInput = (name: string, value: string) => {
    if (!validation) {
      onChange(name, value);
      return;
    }
    if (validation?.test(value)) {
      setErrorValidation(false);
    } else {
      setErrorValidation(true);
    }
    onChange(name, value);
  };

  return (
    <TextInput
      multiline={true}
      numberOfLines={numberOfLines}
      maxLength={maxLength ?? 133}
      style={[
        styles.input,
        { overflow: 'scroll' },
        additionalStyles,
        {
          borderColor: error ?? errorValidation ? 'red' : colors.earthy_Brown,
          color:
            error ?? errorValidation
              ? 'red'
              : (StyleSheet.flatten(additionalStyles)?.color as string) ?? '#000',
        },
      ]}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => {
        handleInput(name, text);
      }}
      placeholderTextColor={placeholderTextColor}
      editable={editable}
      scrollEnabled={true}
      pointerEvents={editable ? 'auto' : 'none'}
    ></TextInput>
  );
};

export default TextArea;
