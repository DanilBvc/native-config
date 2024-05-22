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

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <HomeSvg />
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
