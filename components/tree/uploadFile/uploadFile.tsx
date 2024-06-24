import React, { useState, type FC } from 'react';
import { Animated, Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { styles } from './uploadFile.style';

import * as ImagePicker from 'expo-image-picker';
import { useClickOutside } from 'react-native-click-outside';
import PressableSlot from '../pressableSlot/pressableSlot';
import { CheckSvg } from '../../../assets/icons/CheckSvg';
import { TreeService } from '../../../services/treeService/treeService';

interface UploadFileProps {
  opacity: Animated.Value;
  transform: Animated.Value;
  windowWidth: number;
  deselectSlot: () => void;
  id: string;
}

const UploadFile: FC<UploadFileProps> = ({ opacity, transform, windowWidth, deselectSlot, id }) => {
  const [userData, setUserData] = useState<{
    file: File | null;
    index: number;
    slot_type: string;
  }>({
    file: null,
    index: 0,
    slot_type: 'PHOTO',
  });

  const [uri, setUri] = useState('');

  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const ref = useClickOutside<any>(() => {
    if (!isPickerOpen) {
      deselectSlot();
    }
  });

  const selectImage = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert('Permission to access camera roll is required!');
      return;
    }

    setIsPickerOpen(true);

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    setIsPickerOpen(false);

    if (!pickerResult.canceled) {
      const { uri } = pickerResult.assets[0];
      const response = await fetch(uri);
      const blob = await response.blob();
      const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' });
      setUserData({ ...userData, file });
      setUri(uri);
    }
  };

  const removeImage = () => {
    setUserData({ ...userData, file: null });
    setUri('');
  };

  const sendFile = () => {
    if (userData.file === null) return;
    const formData = new FormData();

    formData.append('file', userData.file);
    formData.append('index', userData.index.toString());
    formData.append('slot_type', userData.slot_type);

    TreeService.addFileSlot(id, formData)
      .then(() => {
        deselectSlot();
      })
      .catch((e) => {
        alert('Error uploading file: ' + e.message);
      });
  };

  const imageSource = uri ? { uri } : null;

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
        transform: [{ scale: transform }],
      }}
    >
      <TouchableOpacity
        onPress={(e) => {
          e.stopPropagation();
          selectImage();
        }}
        ref={ref}
      >
        <ImageBackground
          source={require('../../../assets/glowingCircleBig.png')}
          style={{
            width: windowWidth - 52,
            height: windowWidth - 52,
          }}
        >
          <View style={styles.backContent}>
            {uri ? (
              <Image source={imageSource} style={{ ...styles.photo, width: 290, height: 290 }} />
            ) : (
              <PlusIcon />
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View>
        <PressableSlot
          onClick={() => {
            sendFile();
          }}
          item={{ x: 120, y: 60, height: 23, width: 23 }}
          component={CheckSvg()}
        />
      </View>
    </Animated.View>
  );
};

export default UploadFile;
