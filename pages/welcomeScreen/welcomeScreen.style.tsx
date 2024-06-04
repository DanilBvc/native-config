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
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
