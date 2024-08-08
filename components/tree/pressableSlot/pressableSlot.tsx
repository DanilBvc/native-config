import React, { type ReactNode, type FC } from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import { type SlotType, type Cords } from '../../../static/types/tree/types';
import GlowingSlot from '../glowingSlot/glowingSlot';

const PressableSlot: FC<{
  item: Partial<SlotType> & Cords;
  onClick?: (slot: Partial<SlotType> & Cords) => void;
  component?: ReactNode;
  handleOpenSlotWindow?: () => void;
  style?: StyleProp<ViewStyle>;
  editTree?: boolean;
  musicPlaying?: boolean;
  activeSlot?: null | (Partial<SlotType> & Cords);
}> = ({
  item,
  onClick,
  component,
  handleOpenSlotWindow,
  style,
  editTree = false,
  activeSlot,
  musicPlaying,
}) => {
  const handlePress = () => {
    if (!item) return;
    onClick?.(item);
  };

  return (
    <>
      <View style={style}>
        <GlowingSlot
          url={item.link}
          key={item.id}
          onPress={handlePress}
          cords={item}
          musicPlaying={musicPlaying}
          component={component}
          handleOpenSlotWindow={handleOpenSlotWindow}
          editTree={editTree}
          activeSlot={activeSlot}
        />
      </View>
    </>
  );
};

export default PressableSlot;
