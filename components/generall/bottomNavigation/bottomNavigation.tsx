import React, { useEffect, useState, type FC } from 'react';
import { Image, View } from 'react-native';
import {
  HomeSvg,
  CaseSvg,
  QuestionSvg,
  QrCodeSvg,
  UserSvg,
} from '../../../assets/icons/bottomNavigationIcon/icons';
import { styles } from './bottomNavigation.style';
import { Link, useRoute } from '@react-navigation/native';

interface BottomNavigationProps {
  theme?: 'light' | 'dark';
  centerComponent?: React.ReactNode
}

const BottomNavigation: FC<BottomNavigationProps> = ({ theme = 'dark', centerComponent }) => {
  const route = useRoute();
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const getIconColor = (routeName: string) => {
    if (theme === 'dark') {
      return route.name === routeName ? '#56371A' : '#B37840';
    } else {
      return route.name === routeName ? '#56371A' : '#FFF7F0';
    }
  };

  useEffect(() => {
    setCurrentRoute(route.name);
  }, [route.name]);

  return (
    <>
      {theme === 'light' && (
        <Image
          source={require('../../../assets/icons/Subtract.png')}
          style={{ position: 'absolute', width: '100%' }}
        />
      )}
      <View style={[styles.container, theme === 'light' && styles.containerLight]}>
        <Link to="/FirstPage">
          <HomeSvg stroke={getIconColor('Home')} />
        </Link>
        {currentRoute !== 'Welcome' && currentRoute !== 'Tree' && (
          <Link to="/CustomerSection">
            <UserSvg fill={getIconColor('CustomerSection')} />
          </Link>
        )}

        <Link to="/ScanQrCode" style={[styles.qrCode, theme === 'light' && styles.qrCodeLight]}>
        {centerComponent ?? <QrCodeSvg fill={theme === 'dark' ? '#56371A' : '#FFF7F0'} />}

        </Link>
        {currentRoute !== 'Welcome' && currentRoute !== 'Tree' && (
          <Link to="/Welcome">
            <CaseSvg stroke={getIconColor('Welcome')} />
          </Link>
        )}
        {currentRoute === 'Tree' && (
            <Link to="/CustomerSection">
            <UserSvg fill={getIconColor('CustomerSection')} />
          </Link>
        )}
        {currentRoute !== 'Tree' && (
          <Link to="/Faq">
          <QuestionSvg fill={getIconColor('Faq')} />
        </Link>
        )}

      </View>
    </>
  );
};

export default BottomNavigation;
