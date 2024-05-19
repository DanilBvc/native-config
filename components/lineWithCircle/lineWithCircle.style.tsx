import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 2,
    backgroundColor: colors.earthy_Brown,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: colors.earthy_Brown,
    borderRadius: 10,
  },
});
