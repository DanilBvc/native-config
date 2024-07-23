import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';
import { hp } from '../../../utils/percentageSizes';

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
    padding: 20,
    width: '80%',
    height: '80%',
    overflow: 'hidden',
  },
  backText: {
    color: colors.rusty_Copper,
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 16,
  },

  editContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: hp(70),
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
