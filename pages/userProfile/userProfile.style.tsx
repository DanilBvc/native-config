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
    color: colors.rusty_Copper,
    height: 22,
    paddingHorizontal: 30,
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 22,
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
  username: {
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'GreatVibes_400Regular',
    fontSize: 30,
    lineHeight: 40,
    color: colors.rusty_Copper,
  },
  text: {
    fontFamily: 'Inter_400Medium',
    fontSize: 13,
    lineHeight: 22,
    color: colors.rusty_Copper,
    marginTop: 10,
  },

  buttons: {
    marginTop: 10,

    width: '100%',
  },
  buttonStyle: {
    paddingTop: 2,
    paddingBottom: 2,
    height: 36,
    marginTop: 22,
  },
});
