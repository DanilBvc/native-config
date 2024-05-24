import React, { type FC } from 'react';
import { View, type DimensionValue } from 'react-native';
import { colors } from '../../static/colors';
import { styles } from './lineWithCircle.style';

const LineWithCircle: FC<{
  lineWidth: DimensionValue;
  rotate?: string;
  backgroundColor?: string;
}> = ({ lineWidth, rotate = '0deg', backgroundColor = colors.earthy_Brown }) => {
  return (
    <View style={[styles.container, { transform: [{ rotate }] }]}>
      <View style={{ ...styles.line, width: lineWidth, backgroundColor }} />
      <View style={{ ...styles.circle, backgroundColor }} />
    </View>
  );
};

export default LineWithCircle;
