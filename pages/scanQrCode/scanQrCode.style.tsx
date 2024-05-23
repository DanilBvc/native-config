import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../static/colors';
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 59,
  },

  frameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: { position: 'absolute', top: windowHeight * 0.7, right: 10 },
  title: { color: colors.earthy_Brown, textAlign: 'center', fontFamily: 'Inter_600SemiBold', fontSize: 20 },
  subTitle: { color: colors.rusty_Copper, textAlign: 'center', fontFamily: 'Inter_500Medium', fontSize: 16, paddingTop: 10 }
});
