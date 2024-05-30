import React, { useState } from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import { Dimensions, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { ShareSvg } from '../../assets/icons/share';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import { colors } from '../../static/colors';
import { styles } from './userProfile.style';
import BurgerList from '../../components/burgerList/burgerList';
import { familyLogoUrl } from '../../static/urls';
import LineWithCircle from '../../components/lineWithCircle/lineWithCircle';
import Button from '../../components/generall/button/button';

interface userData {
  name: string;
  birthDate: string;
  deathDate: string;
  imageUrl: string;
  text: string;
}

const UserProfile = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const width = Dimensions.get('window').width / 2 - 40;

  const [data, setUserData] = useState<userData>({
    name: 'Some One',
    birthDate: '05/05/1940',
    deathDate: '05/05/1940',
    imageUrl: '',
    text: 'Lorem ipsum dolor sit amet consectetur. Eget turpis eget habitant ullamcorper tristique nec. Ac diam orci placerat aenean lectus mattis etiam proin. Id fringilla purus diam sed scelerisque turpis pharetra habitasse viverra. Orci adipiscing gravida amet duis quis diam fringilla amet eu .',
  });

  return (
    <>
      <EmptyLayout
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
        footerControl={<BottomNavigation />}
      >
        <SafeAreaView>
          <ScrollView>
            <View style={styles.cardContainer}>
              <Image source={{ uri: data.imageUrl }} style={styles.placeholder} />
              <Text style={styles.username}>{data.name}</Text>
              <View style={styles.dateContainer}>
                <View style={styles.dateWidth}>
                  <Text style={styles.date}>05/05/1940</Text>
                  <Text style={{ color: colors.rusty_Copper }}>-</Text>
                  <Text style={styles.date}>05/05/2000</Text>
                </View>
              </View>
              <View style={styles.lines}>
                <LineWithCircle lineWidth={width} rotate="180deg" />
                <LineWithCircle lineWidth={width} />
              </View>
              <Text style={styles.text}>{data.text}</Text>
              <Button
                text="Look at the photo"
                additionalStyles={styles.buttonStyle}
                onPress={() => {}}
              />
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

export default UserProfile;
