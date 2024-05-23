import React, { type ReactNode, type FC } from 'react';
import { Image, View } from 'react-native';
import { rememberingTimeLogo } from '../../static/urls';
import { styles } from './emptyLayout.style';
import { Link } from '@react-navigation/native';

const EmptyLayout: FC<{
  children: ReactNode;
  additionalControl?: ReactNode;
  footerControl?: ReactNode;
}> = ({ children, additionalControl, footerControl }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <Link to={{ screen: 'Welcome' }}>
        <Image
          source={{
            uri: rememberingTimeLogo,
          }}
          style={styles.imageSize}
        /></Link>
        {additionalControl && <View>{additionalControl}</View>}
      </View>
      <View>{children}</View>
      {footerControl && <View style={styles.footer}>{footerControl}</View>}
    </View>
  );
};

export default EmptyLayout;
