import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: colors.amberwood_Brown,
    paddingTop: 20,
    paddingBottom: 20,
  },
  price: {
    color: colors.earthy_Brown,
    fontSize: 30,
    paddingLeft: 30,
    fontFamily: 'Inter_800ExtraBold',
    fontWeight: '800',
  },
  featureContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },
  feature: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.rusty_Copper,
  },
  disabledFeature: {
    color: colors.rusty_Copper_25_Opacity,
    textDecorationLine: 'line-through',
  },
  container: { gap: 30, paddingLeft: 30, paddingTop: 30 },
});
