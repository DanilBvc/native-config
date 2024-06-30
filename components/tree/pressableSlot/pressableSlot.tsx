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
  editTree?: boolean;
}> = ({ item, onClick, component, handleOpenSlotWindow, style, editTree = false }) => {
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
        editTree={editTree}
      />
    </Pressable>
  );
};

export default PressableSlot;
