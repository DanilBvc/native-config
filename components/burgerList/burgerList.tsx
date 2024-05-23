import React, { type FC, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Text, View, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../static/colors';
import LineWithCircle from '../lineWithCircle/lineWithCircle';
import { LogOutIcon } from '../../assets/icons/drop-down';
import { familyLogoUrl } from '../../static/urls';

interface Props {
  isVisible: boolean;
  onClose?: () => void;
}

const listObj = [
  {
    text: 'About Us',
    width: 140,
  },
  {
    text: 'How it works',
    width: 180,
  },
  {
    text: 'Demo version',
    width: 220,
  },
  {
    text: 'Contact us',
    width: 260,
  },
];

const BurgerList: FC<Props> = ({ isVisible, onClose }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
            <TouchableOpacity key={index}>
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

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.bg_white,
    zIndex: 10,
  },
  imageWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -113 }, { translateY: -115.5 }],
    zIndex: 11,
  },
  menuContent: {
    marginTop: 50,
    marginLeft: 20,
  },
  menuItemText: {
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    lineHeight: 22,
    color: colors.rusty_Copper,
    marginTop: 20,
    marginBottom: 10,
  },
  menuLogOut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: 102,
  },
  menuLogOutText: {
    fontSize: 20,
    lineHeight: 22,
    fontFamily: 'Inter_600SemiBold',
    color: colors.earthy_Brown,
  },
});

export default BurgerList;
