import React, { type FC, useEffect, useRef } from 'react';
import { Animated, Text, View, TouchableOpacity, Image } from 'react-native';
import LineWithCircle from '../lineWithCircle/lineWithCircle';
import { LogOutIcon } from '../../assets/icons/drop-down';
import { familyLogoUrl } from '../../static/urls';
import { useTranslation } from 'react-i18next';
import { styles } from './burgerList.style';
import { useNavigation } from '@react-navigation/native';

interface Props {
  isVisible: boolean;
  onClose?: () => void;
}

const BurgerList: FC<Props> = ({ isVisible, onClose }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const { t } = useTranslation();

  const listObj = [
    {
      text: t('header.info'),
      width: 140,
      link: 'AboutUs',
    },
    {
      text: t('header.howItWorks'),
      width: 180,
      link: 'Test',
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
              }}
            >
              <Text style={styles.menuItemText}>{item.text}</Text>
              <LineWithCircle lineWidth={item.width} />
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.menuLogOut}>
            <Text style={styles.menuLogOutText}>Log out</Text>
            <LogOutIcon />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: familyLogoUrl,
          }}
          style={{ zIndex: 11, position: 'absolute', opacity: 0.2, top: '50%' }}
          height={231}
          width={226}
        />
      </View>
    </>
  );
};

export default BurgerList;
