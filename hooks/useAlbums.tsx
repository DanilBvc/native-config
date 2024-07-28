import { useMemo } from 'react';
import { type TreeData, type SlotType } from '../static/types/tree/types';

const useAlbums = (treeData: TreeData) => {
  const albums = useMemo(() => {
    const slotMap: Record<number, SlotType[]> = {};

    treeData.slots.forEach((slot) => {
      if (!slotMap[slot.index]) {
        slotMap[slot.index] = [];
      }
      slotMap[slot.index].push(slot);
    });

    return Object.values(slotMap);
  }, [treeData]);

  return albums;
};

export default useAlbums;
