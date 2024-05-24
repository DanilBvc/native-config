import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
  },
  orderTitle: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 22,
    color: colors.earthy_Brown,
    marginBottom: 10,
    marginTop: 60,
  },
  cardName: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 22,
    color: colors.rusty_Copper,
    marginTop: 10,
  },
  inputTitle: {
    marginBottom: 15,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
    color: colors.earthy_Brown,
  },
  dateInputs: {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    width: '48%',
  },
  dateTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    color: colors.earthy_Brown,
    marginBottom: 10,
  },
});
