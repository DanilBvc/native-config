import React, { type FC } from 'react';
import { Animated, ImageBackground, TouchableOpacity, View } from 'react-native';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { styles } from './uploadFile.style';

interface UploadFileProps {
  opacity: Animated.Value;
  transform: Animated.Value;
  windowWidth: number;
}

const UploadFile: FC<UploadFileProps> = ({ opacity, transform, windowWidth }) => {
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
        pointerEvents: 'none',
      }}
    >
      <TouchableOpacity>
        <ImageBackground
          source={require('../../../assets/glowingCircleBig.png')}
          style={{
            width: windowWidth - 52,
            height: windowWidth - 52,
          }}
        >
          <View style={styles.backContent}>
            <PlusIcon />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default UploadFile;
