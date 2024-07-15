import React, { useState, type FC } from 'react';
import { Animated, Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { styles } from './uploadFile.style';
import Audio from '../../../assets/audio.png';
import Video from '../../../assets/video.png';

import * as ImagePicker from 'expo-image-picker';
import PressableSlot from '../pressableSlot/pressableSlot';
import { CheckSvg } from '../../../assets/icons/CheckSvg';
import { TreeService } from '../../../services/treeService/treeService';
import { TrashSvg } from '../../../assets/icons/comment';
import { type SlotType } from '../../../static/types/tree/types';

interface UploadFileProps {
  opacity: Animated.Value;
  transform: Animated.Value;
  windowWidth: number;
  deselectSlot: () => void;
  id: string;
  newFileIndex: number | null;
  addSlot: (obj: SlotType) => void;
}

const UploadFile: FC<UploadFileProps> = ({
  opacity,
  transform,
  windowWidth,
  deselectSlot,
  id,
  newFileIndex,
  addSlot,
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
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!pickerResult.canceled) {
      const { uri, type } = pickerResult.assets[0];

      const fileType = type?.startsWith('image')
        ? 'PHOTO'
        : type?.startsWith('video')
          ? 'VIDEO'
          : 'AUDIO';
      setUserData((prevState) => ({
        ...prevState,
        file: {
          uri,
          name: 'file',
          type:
            fileType === 'PHOTO' ? 'image/jpeg' : fileType === 'VIDEO' ? 'video/mp4' : 'audio/mpeg',
        },
        slot_type: fileType,
      }));
      setUri(uri);
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
    formData.append('index', userData.index?.toString() ?? '');
    formData.append('slot_type', userData.slot_type);

    try {
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
        return <Image source={{ uri }} style={{ ...styles.photo, width: 290, height: 290 }} />;
      case 'VIDEO':
        return <Image source={Video} style={{ ...styles.photo, width: 290, height: 290 }} />;
      case 'AUDIO':
        return <Image source={Audio} style={{ ...styles.photo, width: 290, height: 290 }} />;
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
