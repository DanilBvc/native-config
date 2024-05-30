import React, { type ReactNode, type FC } from 'react'
import { Pressable } from 'react-native';
import { type SlotType, type Cords } from '../../../static/types/tree/types';
import GlowingSlot from '../glowingSlot/glowingSlot';

const PressableSlot: FC<{
  item: Partial<SlotType> & Cords;
  onClick?: (slot: Partial<SlotType> & Cords) => void;
  component?: ReactNode
}> = ({ item, onClick, component }) => (
    <Pressable onPress={() => { onClick?.(item); }}>
      <GlowingSlot url={item.link} key={item.id} cords={item} component={component}/>
    </Pressable>
);

export default PressableSlot
