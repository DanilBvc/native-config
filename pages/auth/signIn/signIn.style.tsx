import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: 47,
    paddingBottom: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSize: { width: 226, height: 231, opacity: 0.1 },
  emailContainer: { paddingBottom: 31 },
  passwordContainer: { paddingBottom: 134 },
  text: {
    color: colors.rusty_Copper_25_Opacity,
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    maxWidth: 279,
    alignSelf: 'center',
    paddingTop: 10,
  },
});
