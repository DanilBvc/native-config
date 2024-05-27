import React, { type FC } from 'react';
import { View, Image } from 'react-native';
import { type Cords } from '../../../static/types/tree/types';
import { styles } from './glowingSlot.style';

const GlowingSlot: FC<{
  url?: string;
  cords: Cords;
}> = ({ url, cords }) => {
  const { width, height, x, y } = cords;
  return (
    <View style={[styles.container, { width, height, top: y, left: x }]}>
      <Image source={require('../../../assets/glowingCircle.png')} style={styles.glow} />
      {url && (
        <Image
          source={{ uri: url }}
          style={{ ...styles.photo, width: width * 0.9, height: height * 0.9 }}
        />
      )}
    </View>
  );
};

export default GlowingSlot;
