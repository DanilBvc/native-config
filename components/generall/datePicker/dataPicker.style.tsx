import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  dataPicker: {
    borderWidth: 1,
    borderColor: colors.earthy_Brown,
    borderRadius: 12,
    height: 54,
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
  },
  date: {
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
    lineHeight: 22,
    letterSpacing: -0.41,
    color: colors.amberwood_Brown
  },
});
