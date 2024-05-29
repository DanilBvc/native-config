import React, { useState } from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import { View } from 'react-native';
import { ShareSvg } from '../../assets/icons/share';
import { colors } from '../../static/colors';
import { styles } from './customerSection.style';

const CustomerSection = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  return (
    <EmptyLayout
      footerControl={<BottomNavigation />}
      additionalControl={
        <View style={styles.headerContainer}>
          <ShareSvg fill={colors.rusty_Copper} />
          <BurgerMenu
            isBurgerMenuVisible={isBurgerMenuVisible}
            setBurgerMenuVisible={setBurgerMenuVisible}
          />
        </View>
      }
    >
      <></>
    </EmptyLayout>
  );
};

export default CustomerSection;
