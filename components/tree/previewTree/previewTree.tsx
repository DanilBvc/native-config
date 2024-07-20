import React, { type FC, useState, useRef, useEffect } from 'react';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import {
  View,
  PanResponder,
  Dimensions,
  Text,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import BurgerMenu from '../../burgerMenu/burgerMenu';
import ShareButton from '../../generall/shareButton/shareButton';
import {
  FileEnum,
  type Cords,
  type SlotType,
  type TreeData,
} from '../../../static/types/tree/types';
import PressableSlot from '../pressableSlot/pressableSlot';
import ActiveSlot from '../activeSlot/activeSlot';
import useAnimatedSlot from '../../../hooks/useAnimatedSlot';
import useSlots from '../../../hooks/useSlots';
import useAngles from '../../../hooks/useAngles';
import { AddCommentSvg, CommentSvg, TrashSvg } from '../../../assets/icons/comment';
import BurgerList from '../../burgerList/burgerList';
import { styles } from './previewTree.style';
import { useAuth } from '../../../hooks/useAuth';
import { ArrowBack } from '../../../assets/icons/arrow-back';
import { useNavigation } from '@react-navigation/native';
import { EditSvg } from '../../../assets/icons/EditSvg';
import { CloseIcon } from '../../../assets/icons/drop-down';
import useUserStore from '../../../store/user/store';
import UploadFile from '../uploadFile/uploadFile';
import { TreeService } from '../../../services/treeService/treeService';
import TextArea from '../../generall/textArea/textArea';
import GptNavigation from '../../generall/gptNavigation/gptNavigation';
import BottomNavigation from '../../generall/bottomNavigation/bottomNavigation';
import { OpenAIService } from '../../../services/openAIService/openAIService';
import Loader from '../../generall/loader/loader';
import { hp, wp } from '../../../utils/percentageSizes';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PreviewTree: FC<{
  treeData: TreeData;
  removeById: (id: string) => void;
  addSlot: (obj: SlotType) => void;
}> = ({ treeData, removeById, addSlot }) => {
  const { id } = treeData;
  const rotateValue = useRef(new Animated.Value(0)).current;
  const [isFlipped, setIsFlipped] = useState(false);
  const [newFileIndex, setNewFileIndex] = useState<null | number>(null);
  const [commentText, setCommentText] = useState('');
  const [editTree, setEditTree] = useState(false);

  const userTrees = useUserStore((state) => state.user.trees);
  const userTreesIds = userTrees.map((item) => item.id);
  const isOwner = userTreesIds.includes(id);

  const rotate = () => {
    const toValue = isFlipped ? 0 : 1;
    setIsFlipped(!isFlipped);

    Animated.timing(rotateValue, {
      toValue,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const { isAuthenticated } = useAuth();
  const navigate = useNavigation();

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const [activeSlot, setActiveSlot] = useState<null | (Partial<SlotType> & Cords)>(null);
  const [isGenerationProgress, setIsGenerationProgress] = useState(false);
  const { angles, setAngles } = useAngles(id);
  const slots = useSlots(angles, treeData);
  const { opacity, transform, animateIn, animateOut } = useAnimatedSlot();

  const onChange = (name: string, value: string) => {
    setCommentText(value);
  };

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

  const handleOpenSlotWindow = (index: number) => {
    animateIn();

    setNewFileIndex(index);
    setActiveSlot({
      comment_text: '',
      comment_title: '',
      created_at: '',
      id: 'setNewImage',
      index: 0,
      link: '',
      slot_type: FileEnum.PHOTO,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    });
  };

  useEffect(() => {
    setCommentText(activeSlot?.title as string);
  }, [activeSlot?.title]);

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
    const nextSlot = findNextSlotWithLink(activeSlot as Partial<SlotType> & Cords, direction);
    if (nextSlot) {
      animateOut(() => {
        selectSlot(nextSlot);
      });
    }
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const angleDelta = -gestureState.dx / 50;
      if (!activeSlot) {
        setAngles((prevAngles) => prevAngles.map((angle) => angle + angleDelta));
      }
    },
  });

  const handleDelete = async () => {
    try {
      const response = await TreeService.deleteFileSlot(activeSlot?.id ?? '');

      if (response) {
        deselectSlot();
        removeById(activeSlot?.id ?? '');
      }
    } catch (error) {
      alert(error);
    }
  };

  const sendComment = async () => {
    TreeService.updateComment(activeSlot?.id ?? '', {
      comment_title: commentText,
    }).then(() => {
      setEditTree(false);
    });
  };
  const generateDescription = async () => {
    try {
      const imageLink = activeSlot?.link;
      if (!imageLink) return;

      setIsGenerationProgress(true);
      const res = await OpenAIService.getDescriptionByImage(imageLink);

      rotate();

      setCommentText(res.choices[0].message.content);
    } catch (err) {
    } finally {
      setIsGenerationProgress(false);
    }
  };

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
            <View style={{ flex: 1 }}>
              {isGenerationProgress && (
                <View style={{ position: 'absolute', bottom: hp(80), left: wp(50) - 30 }}>
                  <Loader />
                </View>
              )}
              <EmptyLayout
                additionalControl={
                  <View
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
                  >
                    <ShareButton id={id} />
                    {activeSlot ? (
                      <TouchableOpacity style={{ marginLeft: 20, zIndex: 10 }} onPress={deselectSlot}>
                        <CloseIcon stroke="#fff" />
                      </TouchableOpacity>
                    ) : (
                      <>
                        {isAuthenticated ? (
                          <BurgerMenu
                            isBurgerMenuVisible={isBurgerMenuVisible}
                            setBurgerMenuVisible={setBurgerMenuVisible}
                            style={{ marginLeft: 20 }}
                          />
                        ) : (
                          <TouchableOpacity style={{ marginLeft: 20 }} onPress={navigate.goBack}>
                            <ArrowBack />
                          </TouchableOpacity>
                        )}
                      </>
                    )}
                  </View>
                }
                burgerList={
                  <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
                }
                footerControl={
                  isAuthenticated && !activeSlot && isOwner ? (
                    <BottomNavigation theme="light" />
                  ) : (
                    <GptNavigation onCommentPress={generateDescription} />
                  )
                }
              >
                <View {...panResponder.panHandlers }>
                {slots.map((slot, i) => {
                  return (
                    <PressableSlot
                      onClick={selectSlot}
                      key={i}
                      activeSlot={activeSlot}
                      item={slot}
                      style={activeSlot && { display: 'none' }}
                      handleOpenSlotWindow={() => {
                        handleOpenSlotWindow(i);
                      }}
                      editTree={editTree}
                    />
                  );
                })}
        </View>
                {activeSlot && activeSlot.id !== 'setNewImage' && (
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

                    <Animated.View style={[styles.card, backAnimatedStyle]}>
                      <ImageBackground
                        source={require('../../../assets/glowingCircleBig.png')}
                        style={[styles.backSide, { top: activeSlot.y, left: activeSlot.x }]}
                      >
                        <View style={styles.backContent}>
                          <Text style={styles.backText}>{activeSlot.comment_text}</Text>
                          <TextArea
                            name="commentText"
                            placeholder={editTree ? 'Enter comment' : 'Your comment can be here '}
                            value={commentText}
                            onChange={onChange}
                            editable={editTree}
                            additionalStyles={{
                              borderWidth: 0,
                              maxWidth: 160,
                              maxHeight: 160,
                              textAlign: 'center',
                            }}
                          />
                        </View>
                      </ImageBackground>
                    </Animated.View>
                  </View>
                )}

                {activeSlot && activeSlot?.id === 'setNewImage' && (
                  <UploadFile
                    opacity={opacity}
                    transform={transform}
                    windowWidth={windowWidth}
                    id={id}
                    newFileIndex={newFileIndex}
                    deselectSlot={deselectSlot}
                    addSlot={addSlot}
                  />
                )}
                {activeSlot && activeSlot.id !== 'setNewImage' && (
                  <>
                    {commentText && editTree && isFlipped ? (
                      <PressableSlot
                        onClick={sendComment}
                        item={{ x: 300, y: 300, height: 23, width: 23 }}
                        component={AddCommentSvg()}
                      />
                    ) : (
                      <PressableSlot
                        onClick={rotate}
                        item={{ x: wp(78), y: hp(25), height: 23, width: 23 }}
                        component={CommentSvg()}
                      />
                    )}
                  </>
                )}
                {activeSlot && activeSlot.id !== 'setNewImage' && editTree && (
                  <PressableSlot
                    onClick={handleDelete}
                    item={{ x: wp(40), y: hp(25), height: 23, width: 23 }}
                    component={TrashSvg()}
                  />
                )}

                <TouchableOpacity style={styles.editContainer}>
                  {isOwner && !editTree ? (
                    <TouchableOpacity
                      style={styles.editButton}
                      onPress={() => {
                        setEditTree(true);
                      }}
                    >
                      <EditSvg />
                      <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setEditTree(false);
                      }}
                    >
                      <Text style={styles.editText}>click on the circle</Text>
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              </EmptyLayout>
            </View>
  );
};

export default PreviewTree;
