import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  card: {
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
    position: 'absolute',
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

  editContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: windowHeight / 1.4,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editText: {
    color: colors.fullWite,
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    marginLeft: 10,
  },
  editButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
