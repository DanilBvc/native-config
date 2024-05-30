import React, { type ReactNode, type FC } from 'react';
import { View, Image } from 'react-native';
import { type Cords } from '../../../static/types/tree/types';
import { styles } from './glowingSlot.style';
import glowingCircleBig from '../../../assets/glowingCircleBig.png';
import glowingCircle from '../../../assets/glowingCircle.png';
const GlowingSlot: FC<{
  url?: string;
  cords: Cords;
  component?: ReactNode
}> = ({ url, cords, component }) => {
  const { width, height, x, y } = cords;
  const imageSource = typeof url === 'string' ? { uri: url } : url;
  const glowImage = height > 100 && width > 100 ? glowingCircleBig : glowingCircle;
  return (
    <View style={[styles.container, { width, height, top: y, left: x }]}>
      <Image source={glowImage} style={styles.glow} height={height} width={width} />
      {component && <View style={{ ...styles.photo, width: width * 0.9, height: height * 0.9 }}>{component}</View>}
      {url && (
        <Image
          source={imageSource}
          style={{ ...styles.photo, width, height }}
        />
      )}
    </View>
  );
};

export default GlowingSlot;
