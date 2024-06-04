import React, { type FC } from 'react';
import { Dimensions, Image, type StyleProp, StyleSheet, View, type ViewStyle } from 'react-native';

interface Props {
  width?: number;
  height?: number;
  additionalStyle?: StyleProp<ViewStyle>;
}

const size = Dimensions.get('window').width;

const BackgroundEmblem: FC<Props> = ({ width = size - 40, height = size - 40 }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/emblem.png')}
        style={{
          zIndex: -1,
          height,
          width,
          opacity: 0.4,
        }}
      />
    </View>
  );
};

export default BackgroundEmblem;

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
});
