import React from 'react';
import { View } from 'react-native';
import {
  HomeSvg,
  MobilePhoneSvg,
  QuestionSvg,
  QrCodeSvg,
  UserSvg,
} from '../../../assets/icons/bottomNavigationIcon/icons';
import { styles } from './bottomNavigation.style';
import { useRoute } from '@react-navigation/native';

const BottomNavigation = () => {
  const route = useRoute();

  const getIconColor = (routeName: string) => {
    return route.name === routeName ? '#56371A' : '#B37840';
  };

  return (
    <View style={styles.container}>
      <HomeSvg stroke={getIconColor('Home')} />
      <UserSvg />
      <View style={styles.qrCode}>
        <QrCodeSvg />
      </View>
      <MobilePhoneSvg />
      <QuestionSvg />
    </View>
  );
};

export default BottomNavigation;
