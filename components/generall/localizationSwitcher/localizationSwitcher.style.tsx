import { StyleSheet } from 'react-native';
import { colors } from '../../../static/colors';

export const styles = StyleSheet.create({
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6258e8',
  },

  languageButton: {
    padding: 10,
  },
  lngName: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.apricot_Blaze,
  },
});
