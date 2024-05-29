import { useState, useEffect } from 'react';
import { type TreeData, type SlotType, type Cords } from '../static/types/tree/types';
import { generateSlots } from '../utils/treeUtils';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const useSlots = (angles: number[], treeData: TreeData) => {
  const [slots, setSlots] = useState<Array<Partial<SlotType> & Cords>>([]);

  useEffect(() => {
    const baseRadius = 220;
    const radiusVariation = 50;
    const centerX = 0;
    const centerY = windowHeight / 3.2;
    setSlots(generateSlots(angles, baseRadius, radiusVariation, centerX, centerY, treeData.slots));
  }, [angles, treeData.slots]);

  return slots;
};
export default useSlots;
