import React, { type FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './button.style';
import { type buttonType } from './button.type';

const Button: FC<buttonType> = ({ onPress, text, additionalStyles }) => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, additionalStyles]} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
