import React from 'react';
import { Image, View } from 'react-native';
import { GptIcon, GptComment, GptMusic } from '../../../assets/icons/gptIcons';
import { styles } from './gptNavigation.type';
import { Link } from '@react-navigation/native';

const GptNavigation = () => {
  return (
    <>
      <Image
        source={require('../../../assets/icons/Subtract.png')}
        style={{ position: 'absolute', width: '100%' }}
      />

      <View style={[styles.container]}>
        <Link to="/">
          <GptComment />
        </Link>
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
