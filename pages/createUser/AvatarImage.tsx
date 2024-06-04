import React, { type FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { CloseIcon } from '../../assets/icons/drop-down';
import { styles } from './createUser.style';

interface AvatarImageProps {
  avatar: string;
  removeImage: () => void;
}

const AvatarImage: FC<AvatarImageProps> = ({ avatar, removeImage }) => {
  return (
    <View style={styles.imgContainer} >
      <Image source={{ uri: avatar }} style={styles.placeholder} />
      <TouchableOpacity style={{ position: 'absolute', right: 10, top: 60 }} onPress={removeImage}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default AvatarImage;
