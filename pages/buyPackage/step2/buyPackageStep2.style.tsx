import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const style = StyleSheet.create({
  layout: {
    display: 'flex',
    gap: 50,
    flexDirection: 'column',
  },
  orderTitle: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 22,
    color: colors.earthy_Brown,
    marginBottom: 10,
    marginTop: 60,
  },
  imageSize: {
    alignSelf: 'center',
    position: 'absolute',
    top: '100%',
    height: 130,
    width: 130,
    opacity: 0.1,
  },
  spaceBetween: {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
  },
  spaceBetweenItem: {
    width: '48%',
  },
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.41,
    marginBottom: 10,
  },
});
