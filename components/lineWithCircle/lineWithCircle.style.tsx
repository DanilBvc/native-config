import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 1,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 6,
  },
  bigCircle: {
    width: 23,
    height: 23,
    borderRadius: 23,
  },
  number: {
    color: colors.whispering_Gray,
    alignSelf: 'center',
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
    lineHeight: 22,
  },
  rotate: {
    transform: [{ rotate: '180deg' }],
  },
});
