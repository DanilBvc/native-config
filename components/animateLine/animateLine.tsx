import React, { type FC, useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { styles } from './animateLine.style';

const AnimatedLine: FC<{ activeIndex: number }> = ({ activeIndex }) => {
  const lineWidths = [
    useRef(new Animated.Value(10)).current,
    useRef(new Animated.Value(10)).current,
    useRef(new Animated.Value(10)).current,
  ];

  useEffect(() => {
    lineWidths.forEach((lineWidth, index) => {
      Animated.timing(lineWidth, {
        toValue: index === activeIndex ? 45 : 12,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      {lineWidths.map((lineWidth, index) => (
        <Animated.View
          key={index}
          style={[styles.line, { width: lineWidth }, index !== activeIndex && styles.nonActiveLine]}
        />
      ))}
    </View>
  );
};

export default AnimatedLine;
