import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';
export const styles = StyleSheet.create({
  container: {
    paddingTop: 47,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: 231,
    width: 226,
    opacity: 0.2,

  },
  title: {
    color: colors.earthy_Brown,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '500',
  },
  subtitle: {
    color: colors.rusty_Copper,
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 15,
    fontWeight: '500',
  },
  description: {
    color: colors.earthy_Brown,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    display: 'flex',
    gap: 20,
  },
  notFoundContainer: { paddingBottom: 80, alignItems: 'center' },
});
