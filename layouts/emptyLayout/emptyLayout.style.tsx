import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
    position: 'relative',
  },

  headerStyle: {

    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,

  },
  imageSize: { height: 23, width: 125 },
  footer: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    left: 20,
  },
});
