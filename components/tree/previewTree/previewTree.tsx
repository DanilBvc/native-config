import React, { type FC, useState, useRef } from 'react';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { View, PanResponder, Dimensions, Text, Animated, ImageBackground } from 'react-native';
import BurgerMenu from '../../burgerMenu/burgerMenu';
import ShareButton from '../../generall/shareButton/shareButton';
import { type Cords, type SlotType, type TreeData } from '../../../static/types/tree/types';
import { colors } from '../../../static/colors';
import PressableSlot from '../pressableSlot/pressableSlot';
import ActiveSlot from '../activeSlot/activeSlot';
import useAnimatedSlot from '../../../hooks/useAnimatedSlot';
import useSlots from '../../../hooks/useSlots';
import useAngles from '../../../hooks/useAngles';
import { CommentSvg } from '../../../assets/icons/comment';
import BurgerList from '../../burgerList/burgerList';
import glowingCircleBig from '../../../assets/glowingCircleBig.png';
import { styles } from './previewTree.style';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PreviewTree: FC<{ treeData: TreeData }> = ({ treeData }) => {
  const { id } = treeData;
  const rotateValue = useRef(new Animated.Value(0)).current;
  const [isFlipped, setIsFlipped] = useState(false);

  const rotate = () => {
    const toValue = isFlipped ? 0 : 1;
    setIsFlipped(!isFlipped);

    Animated.timing(rotateValue, {
      toValue,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

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
    animateOut(() => {
      setActiveSlot(null);
    });
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
      animateOut(() => {
        selectSlot(nextSlot);
      });
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

  const rotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backRotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: rotateInterpolation }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backRotateInterpolation }],
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backfaceVisibility: 'hidden',
  };

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1 }}>
      <EmptyLayout
        additionalControl={
          <View
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
          >
            <ShareButton id={id} />
            <BurgerMenu
              isBurgerMenuVisible={isBurgerMenuVisible}
              setBurgerMenuVisible={setBurgerMenuVisible}
              style={{ marginLeft: 20 }}
            />
          </View>
        }
        burgerList={
          <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
        }
      >
        {slots.map((slot, i) => (
          <PressableSlot onClick={selectSlot} key={i} item={slot} />
        ))}
        {activeSlot && (
          <View style={{ width: 290, height: 290, position: 'relative' }}>
            <Animated.View style={[styles.card, frontAnimatedStyle]}>
              <ActiveSlot
                activeSlot={activeSlot}
                opacity={opacity}
                transform={transform}
                deselectSlot={deselectSlot}
                handleSlotChange={handleSlotChange}
              />
            </Animated.View>
            <Animated.View
              style={[styles.card, { width: isFlipped ? '100%' : '0%' }, backAnimatedStyle]}
            >
              <ImageBackground
                source={glowingCircleBig}
                style={[styles.backSide, { top: activeSlot.y, left: activeSlot.x }]}
              >
                <View style={styles.backContent}>
                  <Text style={styles.backText}>{activeSlot.comment_text}</Text>
                </View>
              </ImageBackground>
            </Animated.View>
          </View>
        )}
        {activeSlot && (
          <PressableSlot
            onClick={rotate}
            item={{ x: 300, y: 300, height: 23, width: 23 }}
            component={CommentSvg()}
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
    </View>
  );
};

export default PreviewTree;
