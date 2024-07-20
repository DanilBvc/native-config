import React, { type FC, useEffect, useRef } from 'react';
import { Animated, Text, View, TouchableOpacity } from 'react-native';
import LineWithCircle from '../lineWithCircle/lineWithCircle';
import { LogOutIcon } from '../../assets/icons/drop-down';
import FamilyEmblem from '../../static/familyEmblem';
import { useTranslation } from 'react-i18next';
import { styles } from './burgerList.style';
import { useAuth } from '../../hooks/useAuth';
import { removeData } from '../../utils/localStorage';
import { AuthUserApi } from '../../services/authService/authService';
import { useTypedNavigation } from '../../hooks/useTypedNavigation';

interface Props {
  isVisible: boolean;
  setBurgerMenuVisible: (item: boolean) => void;
}

const BurgerList: FC<Props> = ({ isVisible, setBurgerMenuVisible }) => {
  const { setIsAuthenticated } = useAuth();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useTypedNavigation();

  const { t } = useTranslation();

  const handleLogOut = async () => {
    try {
      await AuthUserApi.logout();
    } catch (error) {
    } finally {
      setIsAuthenticated(false);
      await removeData('accessToken');
      await removeData('refreshToken');
      setBurgerMenuVisible(false);
      navigation.navigate('/Welcome');
    }
  };

  const listObj = [
    {
      text: t('header.info'),
      width: 140,
      link: 'AboutUs',
    },
    {
      text: t('header.howItWorks'),
      width: 180,
      link: 'HowItWorks',
    },
    {
      text: t('header.prices'),
      width: 220,
      link: 'Test',
    },
    {
      text: t('contactUs.contact'),
      width: 260,
      link: 'ContactUs',
    },
  ];

  useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, fadeAnim]);

  if (!isVisible) return null;

  return (
    <>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <View style={styles.menuContent}>
          {listObj.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate(item.link as never);
                setBurgerMenuVisible(false);
              }}
            >
              <Text style={styles.menuItemText}>{item.text}</Text>
              <LineWithCircle lineWidth={item.width} />
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.menuLogOut} onPress={handleLogOut}>
            <Text style={styles.menuLogOutText}>{t('header.logOut')}</Text>
            <LogOutIcon />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <View style={styles.imageWrapper}>
        <FamilyEmblem height={231} width={226} />
      </View>
    </>
  );
};

export default BurgerList;
