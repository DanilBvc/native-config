import React, { type FC } from 'react';
import { Dimensions, Text, View } from 'react-native';
import LineWithCircle from '../lineWithCircle/lineWithCircle';
import { type packageCard } from '../../static/types';
import { styles } from './buyPackageCard.style';
const width = Dimensions.get('window').width;

const BuyPackageCard: FC<{ card: packageCard }> = ({ card }) => {
  const { price, features } = card;
  return (
    <View style={{ ...styles.card, width: width * 0.85 }}>
      <Text style={styles.price}>{price}</Text>
      <LineWithCircle lineWidth={'40%'} />
      <View style={styles.container}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureContainer}>
            {feature.icon}
            <Text style={[styles.feature, feature.enabled ? {} : styles.disabledFeature]}>
              {feature.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BuyPackageCard;
