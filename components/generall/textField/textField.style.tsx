import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.earthy_Brown,
    fontSize: 15,
    fontWeight: '500',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 40,
  },
  errorText: {
    color: 'rgb(255, 68, 68)',
    position: 'absolute',
    bottom: -13,
  },
});
