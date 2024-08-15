import { Link } from '@react-navigation/native';
import React, { useEffect, useState, type FC, type ReactNode } from 'react';
import { Image, Keyboard, View } from 'react-native';
import { styles } from './emptyLayout.style';

const EmptyLayout: FC<{
  children: ReactNode;
  additionalControl?: ReactNode;
  footerControl?: ReactNode;
  backgroundColor?: string;
  contentMarginBottom?: number;
  burgerList?: ReactNode;
}> = ({
  children,
  additionalControl,
  footerControl,
  backgroundColor = 'transparent',
  contentMarginBottom = 0,
  burgerList,
}) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <View style={{ ...styles.containerStyle, backgroundColor }}>
      <View style={styles.headerStyle}>
        <Link to={{ screen: 'Welcome' }} style={{ height: 29 }}>
          <Image source={require('../../assets/logo.png')} style={styles.imageSize} />
        </Link>
        {additionalControl && <View>{additionalControl}</View>}
      </View>
      <View style={{ marginBottom: contentMarginBottom }}>{children}</View>
      {footerControl && !keyboardOpen && <View style={styles.footer}>{footerControl}</View>}
      {burgerList}
    </View>
  );
};

export default EmptyLayout;
