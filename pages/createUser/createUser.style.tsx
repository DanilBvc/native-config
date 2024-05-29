import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    zIndex: -1,
    opacity: 0.1,
    height: 400,
    width: 400,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  placeholder: {
    marginTop: 50,
    width: '100%',
    height: 240,
    borderRadius: 12,
    backgroundColor: colors.whispering_Gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  date: {
    borderRadius: 7,
    color: colors.rusty_Copper_25_Opacity,
    height: 22,
    paddingHorizontal: 24,
    borderWidth: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 22,
    borderColor: colors.earthy_Brown,
  },
  dateWidth: {
    width: 277,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lines: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    paddingTop: 2,
    paddingBottom: 2,
    height: 36,
    width: '100%',
    marginTop: 22,
  },
  imageContainer: {
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  imgContainer: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    overflow: 'hidden',
    margin: 5,
    position: 'relative',
  },
});
