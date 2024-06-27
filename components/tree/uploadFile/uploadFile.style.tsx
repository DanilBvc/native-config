import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  container: {
    position: 'absolute',
    top: '50%',
    zIndex: 1,
  },
  backSide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  backContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  backText: {
    color: colors.rusty_Copper,
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
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
});
