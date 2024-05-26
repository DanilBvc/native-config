import React from 'react';
import { View } from 'react-native';
import {
  HomeSvg,
  CaseSvg,
  QuestionSvg,
  QrCodeSvg,
  UserSvg,
} from '../../../assets/icons/bottomNavigationIcon/icons';
import { styles } from './bottomNavigation.style';
import { Link, useRoute } from '@react-navigation/native';

const BottomNavigation = () => {
  const route = useRoute();

  const getIconColor = (routeName: string) => {
    return route.name === routeName ? '#56371A' : '#B37840';
  };

  return (
    <View style={styles.container}>
      <Link to="/Home">
        <HomeSvg stroke={getIconColor('Home')} />
      </Link>
      <UserSvg />
      <View style={styles.qrCode}>
        <QrCodeSvg />
      </View>
      <Link to="/Welcome">
        <CaseSvg stroke={getIconColor('Welcome')} />
      </Link>
      <Link to="/Faq">
        <QuestionSvg fill={getIconColor('Faq')} />
      </Link>
    </View>
  );
};

export default BottomNavigation;
