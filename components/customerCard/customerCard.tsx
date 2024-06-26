import React, { type FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { PlusSvg } from '../../assets/icons/plus';
import { colors } from '../../static/colors';
import { styles } from './customerCard.style';
import { type Tree } from '../../static/types/userTypes/types';
import { useTypedNavigation } from '../../hooks/useTypedNavigation';
import { FormatDate } from '../../utils/formatDate';

interface Props {
  data: Tree
}

const CustomerCard: FC<Props> = ({ data }) => {
  const navigation = useTypedNavigation();

  return (
    <View style={[styles.cardContainer, data && { backgroundColor: colors.rusty_Copper_25_Opacity }]}>
      {data
        ? (
        <TouchableOpacity style={styles.cardContent} onPress={() => { navigation.navigate('UserProfile', { user: data }); }}>
          <Image source={{ uri: data.avatar ? data.avatar : '' }} style={styles.image} />
          <Text style={styles.name}>{data.full_name}</Text>
          <Text style={styles.date}>{FormatDate(data.date_of_birth ? new Date(data.date_of_birth) : new Date())} - {FormatDate(data.date_of_dead ? new Date(data.date_of_dead) : new Date())}</Text>
        </TouchableOpacity>
          )
        : (
        <TouchableOpacity style={styles.placeholder} onPress={() => { navigation.navigate('CreateUser'); }}>
          <PlusSvg/>
        </TouchableOpacity>
          )}
    </View>
  );
};

export default CustomerCard;
