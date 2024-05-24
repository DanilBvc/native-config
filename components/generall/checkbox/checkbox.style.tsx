import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const style = StyleSheet.create({
  checkboxWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: colors.earthy_Brown,
    borderRadius: 14,
  },
  checkboxActive: {
    backgroundColor: colors.apricot_Blaze,
  },
  label: {
    lineHeight: 22,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
});
