import React, { useState, type FC } from 'react';
import { Animated, Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { styles } from './uploadFile.style';
import Audio from '../../../assets/audio.png';
import Video from '../../../assets/video.png';

import ImagePicker from 'react-native-image-crop-picker';
import PressableSlot from '../pressableSlot/pressableSlot';
import { CheckSvg } from '../../../assets/icons/CheckSvg';
import { TreeService } from '../../../services/treeService/treeService';
import { TrashSvg } from '../../../assets/icons/comment';
import { type Cords, FileEnum, type SlotType } from '../../../static/types/tree/types';

interface UploadFileProps {
  opacity: Animated.Value;
  transform: Animated.Value;
  windowWidth: number;
  isDemo: boolean;
  deselectSlot: () => void;
  id: string;
  newFileIndex: number | null;
  addSlot: (obj: SlotType) => void;
  activeSlot: Partial<SlotType> & Cords
}

const UploadFile: FC<UploadFileProps> = ({
  opacity,
  transform,
  windowWidth,
  deselectSlot,
  id,
  isDemo,
  newFileIndex,
  addSlot,
  activeSlot
}) => {
  const [userData, setUserData] = useState<{
    file: { uri: string; name: string; type: string } | null;
    index: number | null;
    slot_type: 'PHOTO' | 'VIDEO' | 'AUDIO';
  }>({
    file: null,
    index: newFileIndex,
    slot_type: 'PHOTO',
  });
  const [uri, setUri] = useState('');

  const selectMedia = async () => {
    try {
      const result = await ImagePicker.openPicker({
        mediaType: 'any',
      });

      if (result) {
        const { path, mime } = result;

        const fileType = mime?.startsWith('image')
          ? 'PHOTO'
          : mime?.startsWith('video')
            ? 'VIDEO'
            : 'AUDIO';

        if (fileType === 'PHOTO') {
          const croppedResult = await ImagePicker.openCropper({
            path: result.path,
            width: 290,
            height: 290,
            cropping: true,
            cropperCircleOverlay: true,
            mediaType: 'photo',
          });

          setUserData((prevState) => ({
            ...prevState,
            file: {
              uri: croppedResult.path,
              name: 'file',
              type: 'image/jpeg',
            },
            slot_type: 'PHOTO',
          }));
          setUri(croppedResult.path);
        } else {
          setUserData((prevState) => ({
            ...prevState,
            file: {
              uri: path,
              name: 'file',
              type: fileType === 'VIDEO' ? 'video/mp4' : 'audio/mpeg',
            },
            slot_type: fileType,
          }));
          setUri(path);
        }
      }
    } catch (error) {
      alert('Error selecting media');
    }
  };

  const removeMedia = () => {
    setUserData((prevState) => ({ ...prevState, file: null }));
    setUri('');
  };
  const sendFile = async () => {
    if (userData.file === null) return;
    const formData = new FormData();

    formData.append('file', {
      uri: userData.file.uri,
      name: userData.file.name,
      type: userData.file.type,
    } as any);
    formData.append('index', activeSlot.index?.toString() ?? '');
    formData.append('slot_type', userData.slot_type);

    try {
      if (isDemo) {
        addSlot({
          id,
          index: activeSlot.index ?? 1,
          slot_type: (userData.slot_type as FileEnum) ?? FileEnum.PHOTO,
          comment_text: 'Demo comment text',
          comment_title: 'Demo comment title',
          created_at: new Date().toISOString(),
          link: uri,
        });
        deselectSlot();
        return;
      }
      const response = await TreeService.addFileSlot(id, formData);
      if (response) {
        deselectSlot();
        addSlot(response);
      }
    } catch (error) {
      alert('Error uploading file');
    }
  };

  const mediaElement = () => {
    if (!uri) return <PlusIcon />;
    switch (userData.slot_type) {
      case 'PHOTO':
        return (
          <Image
            source={{ uri }}
            style={{ ...styles.photo, width: 290, height: 290, borderRadius: 145 }}
          />
        );
      case 'VIDEO':
        return (
          <Image
            source={Video}
            style={{ ...styles.photo, width: 290, height: 290, borderRadius: 145 }}
          />
        );
      case 'AUDIO':
        return (
          <Image
            source={Audio}
            style={{ ...styles.photo, width: 290, height: 290, borderRadius: 145 }}
          />
        );
      default:
        return <PlusIcon />;
    }
  };

  return (
    <View style={{ width: 290, height: 290, position: 'relative' }}>
      <Animated.View
        style={{
          opacity,
          transform: [{ scale: transform }],
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      >
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              selectMedia();
            }}
          >
            <ImageBackground
              source={require('../../../assets/glowingCircleBig.png')}
              style={{
                width: windowWidth - 52,
                height: windowWidth - 52,
              }}
            >
              <View style={styles.backContent}>{mediaElement()}</View>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <PressableSlot
              onClick={() => {
                sendFile();
              }}
              item={{ x: 300, y: 60, height: 23, width: 23 }}
              component={CheckSvg()}
            />
          </View>
          {uri && (
            <View>
              <PressableSlot
                onClick={removeMedia}
                item={{ x: 40, y: 52, height: 23, width: 23 }}
                component={TrashSvg()}
              />
            </View>
          )}
        </View>
      </Animated.View>
    </View>
  );
};

export default UploadFile;
