import { type FC, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface Props {
  children: React.ReactNode;
  left: boolean;
}

export const SlideInView: FC<Props> = ({ children, left }) => {
  const slideAnim = useRef(new Animated.Value(left ? 100 : -100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
      <Animated.View
        style={{
          transform: [{ translateX: slideAnim }],
        }}
      >
        {children}
      </Animated.View>
  );
};
