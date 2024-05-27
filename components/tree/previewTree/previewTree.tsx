import React, { type FC, useState, useEffect } from 'react';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import BurgerList from '../../burgerList/burgerList';
import { View, PanResponder, Dimensions } from 'react-native';
import BurgerMenu from '../../burgerMenu/burgerMenu';
import ShareButton from '../../generall/shareButton/shareButton';
import { type Cords, type SlotType, type TreeData } from '../../../static/types/tree/types';
import GlowingSlot from '../glowingSlot/glowingSlot';
import { generateCircularCoords } from '../../../utils/treeUtils';
const windowHeight = Dimensions.get('window').height;

const PreviewTree: FC<{ treeData: TreeData }> = ({ treeData }) => {
  const { id } = treeData;

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const [angles, setAngles] = useState<number[]>([]);
  const [slots, setSlots] = useState<Array<Partial<SlotType> & Cords>>([]);

  useEffect(() => {
    const uniqueCount = 20;
    const count = 20;
    const initialAngles = Array.from(
      { length: uniqueCount },
      (_, i) => (i * 2 * Math.PI) / uniqueCount
    );
    const fullAngles = Array.from({ length: count }, (_, i) => initialAngles[i % uniqueCount]);
    setAngles(fullAngles);
  }, [id]);

  useEffect(() => {
    const baseRadius = 220; // Base radius of the circle
    const radiusVariation = 50; // Variation in radius
    const centerX = 0; // X coordinate of the circle's center
    const centerY = windowHeight / 3.2; // Y coordinate of the circle's center
    const circlesData = generateCircularCoords(
      angles,
      baseRadius,
      radiusVariation,
      centerX,
      centerY,
      treeData.slots
    );
    setSlots(circlesData);
  }, [angles]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const angleDelta = -gestureState.dx / 50; // sensitivity
      setAngles((prevAngles) => prevAngles.map((angle) => angle + angleDelta));
    },
  });

  const renderItem = ({ item }: { item: Partial<SlotType> & Cords }) => {
    return <GlowingSlot url={item.link} key={item.id} cords={item} />;
  };

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1 }}>
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
      <BurgerList isVisible={isBurgerMenuVisible} />
    </View>
  );
};

export default PreviewTree;
