import React, { type FC } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { CloseIcon } from '../../assets/icons/drop-down';
import { styles } from './createUser.style';

interface AvatarImageProps {
  avatar: string;
  removeImage: () => void;
}

const AvatarImage: FC<AvatarImageProps> = ({ avatar, removeImage }) => {
  return (
    <TouchableOpacity style={styles.imgContainer} onPress={removeImage}>
      <Image source={{ uri: avatar }} style={styles.placeholder} />
      <View style={{ position: 'absolute', right: 10, top: 60 }}>
        <CloseIcon />
      </View>
    </TouchableOpacity>
  );
};

export default AvatarImage;
