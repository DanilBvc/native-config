import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    gap: 20,
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
  boxImage: {
    width: '100%',
    height: 230,
    objectFit: 'contain',
  },
  inputTitle: {
    marginBottom: 15,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
    color: colors.earthy_Brown,
    borderRadius: 12,
  },
  option: {
    marginTop: 15,
  },
  footerBtnWrapper: {
    backgroundColor: colors.white,
    height: '100%',
  },
});
