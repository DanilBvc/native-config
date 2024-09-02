import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  slider: {
    flexDirection: 'row',
    width: '100%',
    gap: 5,
  },
  lineContainer: { marginTop: 10, marginBottom: 20 },
  additionalContainer: {
    padding: 20,
  },
  additionalText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.rusty_Copper,
    textAlign: 'center',
  },
});
