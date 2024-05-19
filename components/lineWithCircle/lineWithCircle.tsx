import React, { type FC } from 'react';
import { View, type DimensionValue } from 'react-native';
import { styles } from './lineWithCircle.style';

const LineWithCircle: FC<{ lineWidth: DimensionValue }> = ({ lineWidth }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.line, width: lineWidth }} />
      <View style={styles.circle} />
    </View>
  );
};

export default LineWithCircle;
