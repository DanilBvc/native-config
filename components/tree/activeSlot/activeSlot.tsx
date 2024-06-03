import React, { type FC } from 'react'
import { Animated, Dimensions, Pressable } from 'react-native';
import { ArrowDownIcon } from '../../../assets/icons/faq';
import { colors } from '../../../static/colors';
import { type SlotType, type Cords } from '../../../static/types/tree/types';
import PressableSlot from '../pressableSlot/pressableSlot';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const ActiveSlot: FC<{
  activeSlot: Partial<SlotType> & Cords;
  opacity: Animated.Value;
  transform: Animated.Value;
  deselectSlot: () => void;
  handleSlotChange: (direction: number) => void;
}> = ({ activeSlot, opacity, transform, deselectSlot, handleSlotChange }) => (
    <Animated.View
      style={{
        opacity,
        transform: [{ scale: transform }],
        position: 'absolute',
        height: activeSlot.height,
        width: activeSlot.width,
      }}
    >
      <Pressable
        style={{
          transform: [{ rotate: '180deg' }],
          position: 'absolute',
          left: windowWidth / 2.3,
          top: windowHeight / 6,
          zIndex: 1
        }}
        onPress={() => { handleSlotChange(-1); }}
      >
        <ArrowDownIcon color={colors.white} />
      </Pressable>

      <PressableSlot item={activeSlot} onClick={deselectSlot} />

      <Pressable
        style={{ position: 'absolute', left: windowWidth / 2.3, top: windowHeight / 1.8 }}
        onPress={() => { handleSlotChange(1); }}
      >
        <ArrowDownIcon color={colors.white} />
      </Pressable>
    </Animated.View>
);

export default ActiveSlot
