import React, { type FC } from 'react';
import { View, type DimensionValue } from 'react-native';
import { styles } from './lineWithCircle.style';

const LineWithCircle: FC<{ lineWidth: DimensionValue; rotate?: string }> = ({
  lineWidth,
  rotate = '0deg',
}) => {
  return (
    <View style={[styles.container, { transform: [{ rotate }] }]}>
      <View style={{ ...styles.line, width: lineWidth }} />
      <View style={styles.circle} />
    </View>
  );
};

export default LineWithCircle;
