import React, { type FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { PlusSvg } from '../../assets/icons/plus';
import { colors } from '../../static/colors';
import { styles } from './customerCard.style';
import { useNavigation } from '@react-navigation/native';

interface Props {
  data: {
    imageUrl: string;
    name: string;
    date: string;
  } | null;
}

const CustomerCard: FC<Props> = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cardContainer, data && { backgroundColor: colors.rusty_Copper_25_Opacity }]}>
      {data
        ? (
        <TouchableOpacity style={styles.cardContent} onPress={() => { navigation.navigate('UserProfile' as never); }}>
          <Image source={{ uri: data.imageUrl }} style={styles.image} />
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.date}>{data.date}</Text>
        </TouchableOpacity>
          )
        : (
        <TouchableOpacity style={styles.placeholder} onPress={() => { navigation.navigate('CreateUser' as never); }}>
          <PlusSvg/>
        </TouchableOpacity>
          )}
    </View>
  );
};

export default CustomerCard;
