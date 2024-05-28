import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

const width = Dimensions.get('window').width / 2 - 40;
const fullWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    marginTop: 320,
  },
  imgContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    zIndex: 1,
    pointerEvents: 'none',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoContainer: {
    position: 'absolute',
    top: 150,
  },
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    lineHeight: 22,
    color: colors.earthy_Brown,
  },
  subTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    lineHeight: 22,
    color: colors.earthy_Brown,
    maxWidth: width - 20,
  },
  text: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 22,
    color: colors.apricot_Blaze,
    marginTop: 2,
  },
  sectionsContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  alightRight: {
    textAlign: 'right',
    marginLeft: 40,
  },
  imageSize: {
    width: fullWidth,
    height: fullWidth,
    opacity: 0.1,
  },
});
