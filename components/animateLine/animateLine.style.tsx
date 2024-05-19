import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '20%',
    alignSelf: 'center',
  },
  line: {
    height: 5,
    borderRadius: 12,
    backgroundColor: colors.apricot_Blaze,
    marginHorizontal: 5,
  },
  nonActiveLine: {
    backgroundColor: colors.rusty_Copper_25_Opacity,
  },
});
