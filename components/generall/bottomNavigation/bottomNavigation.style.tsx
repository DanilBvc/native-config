import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.rusty_Copper_25_Opacity,
    paddingVertical: 11,
    paddingHorizontal: 30,
    borderRadius: 40,
    zIndex: 2,
  },
  qrCode: {
    backgroundColor: colors.white,
    padding: 5,
    marginTop: -50,
    borderRadius: 6,
  },
});
