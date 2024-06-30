import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    paddingVertical: 11,
    paddingHorizontal: 30,
    borderRadius: 40,
    zIndex: 2,
  },
  qrCode: {
    padding: 5,
    marginTop: -50,
    borderRadius: 6,
  },
});
