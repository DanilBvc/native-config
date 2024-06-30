import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Loader = () => {
  const dots = [
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
  ];

  useEffect(() => {
    dots.forEach((dot, index) => {
      dot.value = withRepeat(
        withTiming(-5, {
          duration: 500,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      );
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: dots.map((dot, index) => ({ translateY: dot.value })),
  }));

  return (
    <View style={styles.container}>
      {dots.map((dot, index) => (
        <Animated.View
          key={index}
          style={[styles.dot, animatedStyle, { backgroundColor: getColor(index) }]}
        />
      ))}
    </View>
  );
};

const getColor = (index: number) => {
  switch (index) {
    case 0:
      return 'red';
    case 1:
      return 'green';
    case 2:
      return 'blue';
    case 3:
      return 'yellow';
    default:
      return 'black';
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default Loader;
