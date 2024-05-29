import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  qrCodeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    gap: 7,
  },
  qrCodeText: { color: colors.rusty_Copper_25_Opacity },
  imageSize: {
    height: 140,
    width: 140,
    opacity: 0.1,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
