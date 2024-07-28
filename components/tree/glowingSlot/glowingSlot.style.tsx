import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow: {
    position: 'absolute',
  },
  photo: {
    borderRadius: 150,
    position: 'absolute',
    zIndex: 1,
    shadowColor: colors.black25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  videoContainer: {
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  audioControlContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlIcon: {
    width: 50,
    height: 50, // Set appropriate size for the control icon
  },
});
