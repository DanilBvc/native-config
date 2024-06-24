import React, { type ReactNode, type FC } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { type Cords } from '../../../static/types/tree/types';
import { styles } from './glowingSlot.style';
import glowingCircleBig from '../../../assets/glowingCircleBig.png';
import glowingCircle from '../../../assets/glowingCircle.png';
import { PlusWithCircle } from '../../../assets/icons/PlusIcon';
const GlowingSlot: FC<{
  url?: string;
  cords: Cords;
  component?: ReactNode;
  handleOpenSlotWindow?: () => void;
}> = ({ url, cords, component, handleOpenSlotWindow }) => {
  const { width, height, x, y } = cords;
  const imageSource = typeof url === 'string' ? { uri: url } : url;
  const glowImage = height > 100 && width > 100 ? glowingCircleBig : glowingCircle;
  return (
    <View style={[styles.container, { width, height, top: y, left: x }]}>
      <Image source={glowImage} style={styles.glow} height={height} width={width} />
      {component && <View style={{ ...styles.photo, width, height }}>{component}</View>}
      {url ?? component ? (
        <Image source={imageSource} style={{ ...styles.photo, width, height }} />
      ) : (
        <TouchableOpacity
          onPress={() => {
            handleOpenSlotWindow && handleOpenSlotWindow();
          }}
        >
          <PlusWithCircle />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GlowingSlot;
