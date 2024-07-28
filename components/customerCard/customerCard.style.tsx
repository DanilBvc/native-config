import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../static/colors';

const widthCard = Dimensions.get('window').width / 2 - 40;

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: widthCard,
    height: 'auto',
    margin: 10,
    marginTop: 30,
    paddingBottom: 4,
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: widthCard - 16,
    height: 214,
    borderRadius: 12,
    marginTop: 8,
  },
  name: {
    marginTop: 2,
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
    color: colors.earthy_Brown,
  },
  date: {
    marginTop: 5,
    fontSize: 10,
    color: colors.rusty_Copper,
  },
  placeholder: {
    width: widthCard,
    height: 280,
    borderRadius: 12,
    backgroundColor: colors.whispering_Gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
