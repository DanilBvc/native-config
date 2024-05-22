import React, { type ReactNode, type FC } from 'react';
import { Image, View } from 'react-native';
import { rememberingTimeLogo } from '../../static/urls';
import { styles } from './emptyLayout.style';

const EmptyLayout: FC<{
  children: ReactNode;
  additionalControl?: ReactNode;
  footerControl?: ReactNode;
}> = ({ children, additionalControl, footerControl }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <Image
          source={{
            uri: rememberingTimeLogo,
          }}
          style={styles.imageSize}
        />
        {additionalControl && <View>{additionalControl}</View>}
      </View>
      <View>{children}</View>
      {footerControl && <View style={styles.footer}>{footerControl}</View>}
    </View>
  );
};

export default EmptyLayout;
