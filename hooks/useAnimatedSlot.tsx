import { useRef } from 'react';
import { Animated } from 'react-native';

const useAnimatedSlot = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const transform = useRef(new Animated.Value(0)).current;

  const animateIn = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(transform, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateOut = (callback: () => void) => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(transform, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(callback);
  };

  return { opacity, transform, animateIn, animateOut };
};
export default useAnimatedSlot;
