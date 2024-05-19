import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.apricot_Blaze,
    paddingTop: 15,
    paddingBottom: 14,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.earthy_Brown,
    fontSize: 15,
    fontWeight: '500',
  },
});
