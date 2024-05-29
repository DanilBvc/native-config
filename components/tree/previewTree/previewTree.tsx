import React, { type FC, useState } from 'react';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import BurgerList from '../../burgerList/burgerList';
import { View, PanResponder, Dimensions, Text } from 'react-native';
import BurgerMenu from '../../burgerMenu/burgerMenu';
import ShareButton from '../../generall/shareButton/shareButton';
import { type Cords, type SlotType, type TreeData } from '../../../static/types/tree/types';
import { colors } from '../../../static/colors';
import PressableSlot from '../pressableSlot/pressableSlot';
import ActiveSlot from '../activeSlot/activeSlot';
import useAnimatedSlot from '../../../hooks/useAnimatedSlot';
import useSlots from '../../../hooks/useSlots';
import useAngles from '../../../hooks/useAngles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PreviewTree: FC<{ treeData: TreeData }> = ({ treeData }) => {
  const { id } = treeData;

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const [activeSlot, setActiveSlot] = useState<null | (Partial<SlotType> & Cords)>(null);

  const { angles, setAngles } = useAngles(id);
  const slots = useSlots(angles, treeData);
  const { opacity, transform, animateIn, animateOut } = useAnimatedSlot();

  const selectSlot = (slot: Partial<SlotType> & Cords) => {
    if (slot.link) {
      setActiveSlot({
        ...slot,
        x: windowWidth / 9,
        y: windowHeight / 5,
        height: 290,
        width: 290,
      });
      animateIn();
    }
  };

  const deselectSlot = () => {
    animateOut(() => { setActiveSlot(null); });
  };

  const findNextSlotWithLink = (currentSlot: Partial<SlotType> & Cords, direction: number) => {
    if (!currentSlot) return null;
    const currentIndex = slots.findIndex((slot) => slot.id === currentSlot.id);
    if (currentIndex === -1) return null;

    for (let i = 1; i < slots.length; i++) {
      const nextIndex = (currentIndex + i * direction + slots.length) % slots.length;
      if (slots[nextIndex].link) {
        return slots[nextIndex];
      }
    }
    return null;
  };

  const handleSlotChange = (direction: number) => {
    const nextSlot = findNextSlotWithLink(activeSlot, direction);
    if (nextSlot) {
      animateOut(() => { selectSlot(nextSlot); });
    }
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const angleDelta = -gestureState.dx / 50;
      if (!activeSlot) {
        setAngles((prevAngles) => prevAngles.map((angle) => angle + angleDelta));
      }
    },
  });

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1 }}>
      <EmptyLayout
        additionalControl={
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
            <ShareButton id={id} />
            <View style={{ marginLeft: 20 }}>
              <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
            </View>
          </View>
        }
      >
        {slots.map((slot, i) => (
          <PressableSlot onClick={selectSlot} key={i} item={slot} />
        ))}
        {activeSlot && (
          <ActiveSlot
            activeSlot={activeSlot}
            opacity={opacity}
            transform={transform}
            deselectSlot={deselectSlot}
            handleSlotChange={handleSlotChange}
          />
        )}
        <Text
          style={{
            color: colors.fullWite,
            fontFamily: 'Inter_400Regular',
            fontSize: 15,
            position: 'absolute',
            top: windowHeight / 1.25,
            left: windowWidth / 4,
          }}
        >
          press the cross to collapse
        </Text>
      </EmptyLayout>
      <BurgerList isVisible={isBurgerMenuVisible} />
    </View>
  );
};

export default PreviewTree;
