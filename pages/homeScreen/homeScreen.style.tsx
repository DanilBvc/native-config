import { Dimensions, StyleSheet } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  videoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
    zIndex: -1
  },
});
