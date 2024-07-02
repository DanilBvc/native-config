import React, { useState } from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import { Dimensions, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { ShareSvg } from '../../assets/icons/share';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import { colors } from '../../static/colors';
import { styles } from './userProfile.style';
import FamilyEmblem from '../../static/familyEmblem';
import LineWithCircle from '../../components/lineWithCircle/lineWithCircle';
import { useTypedNavigation, useTypedRoute } from '../../hooks/useTypedNavigation';
import Button from '../../components/generall/button/button';
import BurgerList from '../../components/burgerList/burgerList';

const UserProfile = () => {
  const route = useTypedRoute();
  const navigation = useTypedNavigation();

  const { user } = route.params;

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const width = Dimensions.get('window').width / 2 - 40;

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
        burgerList={
          <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
        }
        contentMarginBottom={170}
      >
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              <Image source={{ uri: user.avatar ? user.avatar : '' }} style={styles.placeholder} />
              <Text style={styles.username}>{user.full_name}</Text>
              <View style={styles.dateContainer}>
                <View style={styles.dateWidth}>
                  <Text style={styles.date}>{user.date_of_birth}</Text>
                  <Text style={{ color: colors.rusty_Copper }}>-</Text>
                  <Text style={styles.date}>{user.date_of_dead}</Text>
                </View>
              </View>
              <View style={styles.lines}>
                <LineWithCircle lineWidth={width} rotate="180deg" />
                <LineWithCircle lineWidth={width} />
              </View>
              <Text style={styles.text}>{user.description}</Text>
              <View style={styles.buttons}>
                <Button
                  text="Look at the tree"
                  additionalStyles={styles.buttonStyle}
                  onPress={() => {
                    navigation.navigate('Tree', { id: user.id });
                  }}
                />
                <Button
                  text="Edit profile"
                  additionalStyles={styles.buttonStyle}
                  onPress={() => {
                    navigation.navigate('CreateUser', { user });
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </EmptyLayout>

      <View style={styles.container}>
        <FamilyEmblem height={400} width={400} />
      </View>
    </>
  );
};

export default UserProfile;
