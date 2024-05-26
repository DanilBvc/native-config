import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: colors.earthy_Brown,
  },
  circle: {
    width: 6,
    height: 6,
    backgroundColor: colors.earthy_Brown,
    borderRadius: 6,
  },
});
