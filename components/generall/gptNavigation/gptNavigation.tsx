import React, { type ReactNode, type FC } from 'react';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { GptIcon, GptComment, GptMusic } from '../../../assets/icons/gptIcons';
import { styles } from './gptNavigation.type';
import { Link } from '@react-navigation/native';

const GptNavigation: FC<{
  onCommentPress: () => void;
  centerComponent?: ReactNode;
  firstComponent: ReactNode;
  thirdComponent?: ReactNode;
}> = ({ onCommentPress, centerComponent, firstComponent, thirdComponent }) => {
  return (
    <>
      <Image
        source={require('../../../assets/icons/Subtract.png')}
        style={{ position: 'absolute', width: '100%' }}
      />

      <View style={[styles.container]}>
        {firstComponent ?? (
          <Pressable onPress={onCommentPress}>
            <GptComment />
          </Pressable>
        )}
        {centerComponent ?? (
          <Link to="/ScanQrCode" style={[styles.qrCode]}>
            <GptIcon />
          </Link>
        )}
        {thirdComponent ?? (
          <TouchableOpacity>
            <GptMusic />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default GptNavigation;
