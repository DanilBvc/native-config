import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { style } from './checkbox.style';
import { type CheckBoxProps } from './chrckbox.type';

const Checkbox = ({ checked, setChecked, label }: CheckBoxProps) => {
  return (
    <Pressable onPress={setChecked} style={style.checkboxWrapper}>
      {label && <Text>{label}</Text>}
      <TouchableOpacity>
        <View style={{ ...style.checkbox, ...(checked ? style.checkboxActive : {}) }} />
      </TouchableOpacity>
    </Pressable>
  );
};

export default Checkbox;
