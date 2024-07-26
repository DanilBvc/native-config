import React, { useMemo } from 'react';
import { View, Animated, Image, StyleSheet, Dimensions } from 'react-native';
import leaf from '../../assets/leaf.png';

const LeafDrops = () => {
  const { width, height } = Dimensions.get('window');

  const createAnimation = () => {
    const animation = new Animated.Value(0);
    const duration = 10000 + Math.random() * 5000;
    const delay = Math.random() * 5000;
    const size = 20 + Math.random() * 80;
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration,
          useNativeDriver: true,
          delay,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return { animation, size };
  };

  const animations = useMemo(() => Array.from({ length: 10 }).map(createAnimation), []);

  return (
    <View style={styles.container}>
      {animations.map(({ animation, size }, index) => {
        const translateY = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, height],
        });
        const translateX = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [Math.random() * width, Math.random() * width],
        });
        const rotate = animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        });
        const opacity = animation.interpolate({
          inputRange: [0, 0.8, 1],
          outputRange: [1, 1, 0],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.leaf,
              {
                width: size,
                height: size,
                transform: [{ translateY }, { translateX }, { rotate }],
                opacity,
              },
            ]}
          >
            <Image source={leaf} style={styles.image} />
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E20',
  },
  leaf: {
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default React.memo(LeafDrops);
