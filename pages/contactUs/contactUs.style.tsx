import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  imageSize: {
    height: 140,
    width: 140,
    opacity: 0.2,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    lineHeight: 22,
    color: colors.earthy_Brown,
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 22,
    color: colors.apricot_Blaze,
    maxWidth: 274,
    marginTop: 20,
  },
  technicalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 42,
  },
  businessText: {
    textAlign: 'right',
  },
  category: {
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
    lineHeight: 22,
    color: '#000000',
    opacity: 0.5,
  },
  categoryActive: {
    color: colors.earthy_Brown,
    opacity: 1,
  },
  input: {
    borderRadius: 12,
  },
  formContainer: {
    marginTop: 50,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
