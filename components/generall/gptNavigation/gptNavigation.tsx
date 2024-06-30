import React, { type FC } from 'react';
import { Image, Pressable, View } from 'react-native';
import { GptIcon, GptComment, GptMusic } from '../../../assets/icons/gptIcons';
import { styles } from './gptNavigation.type';
import { Link } from '@react-navigation/native';

const GptNavigation: FC<{ onCommentPress: () => void }> = ({ onCommentPress }) => {
  return (
    <>
      <Image
        source={require('../../../assets/icons/Subtract.png')}
        style={{ position: 'absolute', width: '100%' }}
      />

      <View style={[styles.container]}>
        <Pressable onPress={onCommentPress}>
          <GptComment />
        </Pressable>
        <Link to="/" style={[styles.qrCode]}>
          <GptIcon />
        </Link>
        <Link to="/">
          <GptMusic />
        </Link>
      </View>
    </>
  );
};

export default GptNavigation;
