import React, { useState } from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { ShareSvg } from '../../assets/icons/share';
import { colors } from '../../static/colors';
import { styles } from './customerSection.style';
import BurgerList from '../../components/burgerList/burgerList';
import CustomerCard from '../../components/customerCard/customerCard';
import useUserStore from '../../store/user/store';
import BackgroundEmblem from '../../static/backgroundEmblem';

const CustomerSection = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const treeData = useUserStore((state) => state.user?.trees);

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
        burgerList={
          <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
        }
      >
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              {treeData?.map((data, index) => <CustomerCard key={index} data={data} />)}
            </View>
          </ScrollView>
        </SafeAreaView>
      </EmptyLayout>

      <BackgroundEmblem width={350} height={350} />
    </>
  );
};

export default CustomerSection;
