import React, { type FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import { type buttonType } from './button.type';
import { styles } from './button.style';

const Button: FC<buttonType> = ({ onPress, text }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
