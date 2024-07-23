import React, { type FC } from 'react';
import { Animated } from 'react-native';
import { type SlotType, type Cords } from '../../../static/types/tree/types';
import PressableSlot from '../pressableSlot/pressableSlot';
const ActiveSlot: FC<{
  activeSlot: Partial<SlotType> & Cords;
  opacity: Animated.Value;
  edit: boolean;
  transform: Animated.Value;
  deselectSlot: () => void;
  handleSlotChange: (direction: number) => void;
}> = ({ activeSlot, opacity, transform, deselectSlot, handleSlotChange, edit }) => {
  return (
    <Animated.View
      style={{
        opacity,
        transform: [{ scale: transform }],
        position: 'absolute',
        height: activeSlot.height,
        width: activeSlot.width,
      }}
    >
      <PressableSlot item={activeSlot} onClick={deselectSlot} />
    </Animated.View>
  );
};
export default ActiveSlot;
