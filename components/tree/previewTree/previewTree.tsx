import React, { type FC, useState, useEffect } from 'react';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import BurgerList from '../../burgerList/burgerList';
import { View, Dimensions } from 'react-native';
import BurgerMenu from '../../burgerMenu/burgerMenu';
import ShareButton from '../../generall/shareButton/shareButton';
import { type Cords, type SlotType, type TreeData } from '../../../static/types/tree/types';
import GlowingSlot from '../glowingSlot/glowingSlot';
import { generateUUID } from '../../../utils/utils';

const generateCoords = (count: number, slots: SlotType[]): Array<Partial<SlotType> & Cords> => {
  const { width, height } = Dimensions.get('window');
  const minDimension = Math.min(width, height);
  const centerX = -width + width / 1.5;
  const centerY = height / 3.5;
  const angleStep = (2 * Math.PI) / count;
  const circlesData = Array.from({ length: count }, (_, i) => {
    const size = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    const angle = i * angleStep;
    const x = centerX + minDimension * 0.9 * Math.cos(angle); // minDimension radius
    const y = centerY + (minDimension * 1.3 * Math.sin(angle)) / 2;
    return {
      x,
      y,
      width: size,
      height: size,
      id: slots[i] ? slots[i].id : generateUUID(),
      link: slots[i]?.link,
    };
  });

  return circlesData;
};

const PreviewTree: FC<{ treeData: TreeData }> = ({ treeData }) => {
  const { id } = treeData;

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const circlesData = generateCoords(50 - treeData.slots.length, treeData.slots);
  const [slots, setSlots] = useState<Array<Partial<SlotType> & Cords>>([]);
  useEffect(() => {
    setSlots(circlesData);
  }, [id]);
  const renderItem = ({ item }: { item: Partial<SlotType> & Cords }) => {
    return <GlowingSlot url={item.link} key={item.id} cords={item} />;
  };
  return (
    <>
      <EmptyLayout
        additionalControl={
          <View
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
          >
            <ShareButton id={id} />
            <View style={{ marginLeft: 20 }}>
              <BurgerMenu
                isBurgerMenuVisible={isBurgerMenuVisible}
                setBurgerMenuVisible={setBurgerMenuVisible}
              />
            </View>
          </View>
        }
      >
        {slots.map((slot, i) => renderItem({ item: slot }))}
      </EmptyLayout>
      <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
    </>
  );
};

export default PreviewTree;
