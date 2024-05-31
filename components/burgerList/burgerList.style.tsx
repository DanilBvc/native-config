import { StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    zIndex: 10,
    paddingTop: 100

  },
  imageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    pointerEvents: 'none',
  },
  menuContent: {
    marginTop: 50,
    marginLeft: 20,
  },
  menuItemText: {
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    lineHeight: 22,
    color: colors.rusty_Copper,
    marginTop: 20,
    marginBottom: 10,
  },
  menuLogOut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: 102,
  },
  menuLogOutText: {
    fontSize: 20,
    lineHeight: 22,
    fontFamily: 'Inter_600SemiBold',
    color: colors.earthy_Brown,
  },
});
