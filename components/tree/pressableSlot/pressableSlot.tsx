import React, { type ReactNode, type FC } from 'react';
import { Pressable, type StyleProp, type ViewStyle } from 'react-native';
import { type SlotType, type Cords } from '../../../static/types/tree/types';
import GlowingSlot from '../glowingSlot/glowingSlot';

const PressableSlot: FC<{
  item: Partial<SlotType> & Cords;
  onClick?: (slot: Partial<SlotType> & Cords) => void;
  component?: ReactNode;
  handleOpenSlotWindow?: () => void;
  style?: StyleProp<ViewStyle>;
}> = ({ item, onClick, component, handleOpenSlotWindow, style }) => {
  return (
    <Pressable
      onPress={() => {
        if (!item) return;
        onClick?.(item);
      }}
      collapsable={false}
      style={style}
    >
      <GlowingSlot
        url={item.link}
        key={item.id}
        cords={item}
        component={component}
        handleOpenSlotWindow={handleOpenSlotWindow}
      />
    </Pressable>
  );
};

export default PressableSlot;
