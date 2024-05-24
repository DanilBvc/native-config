import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { HomeSvg } from '../../../assets/icons/qr-code';
import LineWithCircle from '../../../components/lineWithCircle/lineWithCircle';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { colors } from '../../../static/colors';
import { familyLogoUrl } from '../../../static/urls';
import { style } from './buyPackageStep2.style';

const BuyPackageStep2 = () => {
  const [selectedOption, setSelectedOption] = useState<'Free box' | 'Exclusive box'>('Free box');

  return (
    <EmptyLayout
      additionalControl={
        <Link to={{ screen: 'Welcome' }}>
          <HomeSvg />
        </Link>
      }
    >
      <View style={style.layout}>
        <View style={{ marginBottom: 52 }}>
          <Text style={style.orderTitle}>Make your order individual</Text>
          <LineWithCircle lineWidth={'80%'} />
          <Image
            source={{
              uri: familyLogoUrl,
            }}
            style={style.imageSize}
          />
        </View>
        <View style={style.spaceBetween}>
          <Pressable
            onPress={() => {
              setSelectedOption('Free box');
            }}
            style={style.spaceBetweenItem}
          >
            <Text
              style={{
                ...style.title,
                color: selectedOption !== 'Free box' ? colors.amberwood_Brown : colors.earthy_Brown,
              }}
            >
              Free Box
            </Text>
            <LineWithCircle
              backgroundColor={
                selectedOption !== 'Free box' ? colors.amberwood_Brown : colors.earthy_Brown
              }
              lineWidth={'80%'}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              setSelectedOption('Exclusive box');
            }}
            style={style.spaceBetweenItem}
          >
            <Text
              style={{
                ...style.title,
                textAlign: 'right',
                color:
                  selectedOption !== 'Exclusive box' ? colors.amberwood_Brown : colors.earthy_Brown,
              }}
            >
              Exclusive box
            </Text>
            <LineWithCircle
              backgroundColor={
                selectedOption !== 'Exclusive box' ? colors.amberwood_Brown : colors.earthy_Brown
              }
              rotate="180deg"
              lineWidth={'80%'}
            />
          </Pressable>
        </View>
      </View>
    </EmptyLayout>
  );
};

export default BuyPackageStep2;
