import React, { type FC } from 'react'
import { Pressable } from 'react-native';
import { type SlotType, type Cords } from '../../../static/types/tree/types';
import GlowingSlot from '../glowingSlot/glowingSlot';

const PressableSlot: FC<{
  item: Partial<SlotType> & Cords;
  onClick?: (slot: Partial<SlotType> & Cords) => void;
}> = ({ item, onClick }) => (
    <Pressable onPress={() => { onClick?.(item); }}>
      <GlowingSlot url={item.link} key={item.id} cords={item} />
    </Pressable>
);

export default PressableSlot
