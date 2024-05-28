import { Link } from '@react-navigation/native';
import React, { type FC, type ReactNode } from 'react';
import { Image, View } from 'react-native';
import { rememberingTimeLogo } from '../../static/urls';
import { styles } from './emptyLayout.style';

const EmptyLayout: FC<{
  children: ReactNode;
  additionalControl?: ReactNode;
  footerControl?: ReactNode;
  backgroundColor?: string;
  contentMarginBottom?: number;
}> = ({
  children,
  additionalControl,
  footerControl,
  backgroundColor = 'transparent',
  contentMarginBottom = 0,
}) => {
  return (
    <View style={{ ...styles.containerStyle, backgroundColor }}>
      <View style={styles.headerStyle}>
        <Link to={{ screen: 'Welcome' }}>
          <Image
            source={{
              uri: rememberingTimeLogo,
            }}
            style={styles.imageSize}
          />
        </Link>
        {additionalControl && <View>{additionalControl}</View>}
      </View>
      <View style={{ marginBottom: contentMarginBottom }}>{children}</View>
      {footerControl && <View style={styles.footer}>{footerControl}</View>}
    </View>
  );
};

export default EmptyLayout;
