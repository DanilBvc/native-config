import React, { type FC } from 'react';
import { Image, type ImageStyle, type StyleProp } from 'react-native';

interface Props {
  height?: number;
  width?: number;
  additionalStyle?: StyleProp<ImageStyle>;
}

const FamilyEmblem: FC<Props> = ({ height = 140, width = 140, additionalStyle }) => {
  return (
    <Image style={[{ height, width }, additionalStyle]} source={require('../assets/emblem.png')} />
  );
};

export default FamilyEmblem;
