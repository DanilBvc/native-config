import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { style } from './checkbox.style';
import { type CheckBoxProps } from './chrckbox.type';
import { colors } from '../../../static/colors';

const Checkbox = ({ checked, setChecked, label, additionalStyles }: CheckBoxProps) => {
  return (
    <Pressable onPress={setChecked} style={[style.checkboxWrapper, additionalStyles]}>
      {label && (
        <Text
          style={{
            fontFamily: 'Inter_500Medium',
            fontSize: 15,
            lineHeight: 22,
            color: colors.earthy_Brown,
            maxWidth: '90%',
          }}
        >
          {label}
        </Text>
      )}
      <TouchableOpacity onPress={setChecked}>
        <View
          style={{
            ...style.checkbox,
            ...(checked ? style.checkboxActive : {}),
          }}
        />
      </TouchableOpacity>
    </Pressable>
  );
};

export default Checkbox;
