import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'GreatVibes_400Regular',
    fontSize: 30,
    lineHeight: 33,
    color: colors.earthy_Brown,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    lineHeight: 22,
    color: colors.apricot_Blaze,
  },
  marginTop: {
    marginTop: 20,
  },
});
