import React, { useState } from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { ShareSvg } from '../../assets/icons/share';
import { colors } from '../../static/colors';
import { styles } from './customerSection.style';
import BurgerList from '../../components/burgerList/burgerList';
import { familyLogoUrl } from '../../static/urls';
import CustomerCard from '../../components/customerCard/customerCard';

const CustomerSection = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const cardData = [
    {
      imageUrl:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Lorem Ipsum',
      date: '05/05/1994 - 05/05/2024',
    },
    null,
    null,
    null,
  ];
  return (
    <>
      <EmptyLayout
        footerControl={<BottomNavigation />}
        additionalControl={
          <View style={styles.headerContainer}>
            <ShareSvg fill={colors.rusty_Copper} />
            <BurgerMenu
              isBurgerMenuVisible={isBurgerMenuVisible}
              setBurgerMenuVisible={setBurgerMenuVisible}
              style={{ marginLeft: 20 }}
            />
          </View>
        }
      >
        <SafeAreaView>
          <ScrollView>
            <View style={styles.cardContainer}>
              {cardData.map((data, index) => (
                <CustomerCard key={index} data={data} />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </EmptyLayout>
      <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
      <View style={styles.container}>
        <Image
          source={{
            uri: familyLogoUrl,
          }}
          style={styles.image}
        />
      </View>
    </>
  );
};

export default CustomerSection;
