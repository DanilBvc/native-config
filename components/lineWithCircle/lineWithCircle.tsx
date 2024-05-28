import React, { type FC } from 'react';
import { Text, View, type DimensionValue } from 'react-native';
import { colors } from '../../static/colors';
import { styles } from './lineWithCircle.style';

const LineWithCircle: FC<{
  lineWidth: DimensionValue;
  rotate?: string;
  backgroundColor?: string;
  withNumber?: number;
}> = ({ lineWidth, rotate = '0deg', backgroundColor = colors.earthy_Brown, withNumber }) => {
  return (
    <View style={[styles.container, { transform: [{ rotate }] }]}>
      <View style={{ ...styles.line, width: lineWidth, backgroundColor }} />
      <View
        style={
          withNumber
            ? { ...styles.bigCircle, backgroundColor }
            : { ...styles.circle, backgroundColor }
        }
      >
        {withNumber && (
          <Text style={[styles.number, rotate === '180deg' && styles.rotate]}>{withNumber}</Text>
        )}
      </View>
    </View>
  );
};

export default LineWithCircle;
