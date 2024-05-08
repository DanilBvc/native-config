import React from 'react';
import { StyleSheet, View, Dimensions, Animated, Pressable, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const data = [
  { color: 'blue', x: width / 4, },
  { color: 'green', x: width / 2 },
  { color: 'red', x: (3 * width) / 4 },
];

const App = () => {
  const scale = React.useRef(new Animated.Value(1)).current;
  const translationX = React.useRef(new Animated.Value(0)).current;
  const [currentCircle, setCurrentCircle] = React.useState<null | number>(null);

  const handleCircleClick = (targetX: number) => {
    if (currentCircle === targetX) {
      // If clicking on the same circle, zoom out
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(translationX, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start(() => { setCurrentCircle(null); }); // Set after animation completion
    } else {
      // If clicking on a different circle, zoom in and translate
      const translationTarget = (width / 2) - targetX;

      Animated.parallel([
        Animated.timing(scale, {
          toValue: 2,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(translationX, {
          toValue: translationTarget,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start(() => { setCurrentCircle(targetX); }); // Set after animation completion
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            transform: [{ scale }, { translateX: translationX }],
          },
        ]}
      >
        <Svg height={height} width={width}>
          {data.map((item) => (
            <Circle key={item.color} cx={item.x} cy={height / 2} r={40} fill={item.color} />
          ))}

        </Svg>

      </Animated.View>
      {/* Touch areas aligned with circles */}
      <Animated.View style={{
        position: 'absolute',
        width: 80,
        height: 80,
        top: (height / 2 - 40),
        left: 0,
      }}>
      {data.map((item) => (
             <Pressable
             key={Math.random()}
             style={[styles.touchArea, { left: item.x - 40, top: height / 2 - 40 }]}
             onPress={() => { handleCircleClick(item.x); }}
           />
      ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchArea: {
    position: 'absolute',
    top: height / 2 - 40,
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundColor: '#00FFFF33', // Transparent cyan
  },
});

export default App;
