import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSize: {
    height: 140,
    width: 140,
    opacity: 0.1,
  },
  faqText: {
    fontSize: 20,
    lineHeight: 22,
    fontFamily: 'Inter_500Medium',
    color: colors.earthy_Brown,
    textAlign: 'left',
  },
  accordionTitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
    marginTop: 20,
    fontFamily: 'Inter_500Medium',
    color: colors.rusty_Copper,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    marginTop: 20,
    color: colors.rusty_Copper,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    marginTop: 16,
    color: colors.earthy_Brown,
    marginLeft: 15.4,
  },
  text: {
    color: colors.rusty_Copper,
    marginLeft: 10,
  },
  dText: {
    color: colors.rusty_Copper,
    marginTop: 10,
  },
  tText: {
    color: colors.rusty_Copper,
    marginBottom: 10,
  },
});
