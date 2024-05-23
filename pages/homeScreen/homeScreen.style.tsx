import { Dimensions, StyleSheet } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  dropDown: {
    marginLeft: 20,
  },
  videoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
  },
});
