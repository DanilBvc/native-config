import React, { useState } from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ShareSvg } from '../../assets/icons/share';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import BurgerList from '../../components/burgerList/burgerList';
import { familyLogoUrl } from '../../static/urls';
import { styles } from './createUser.style';
import { colors } from '../../static/colors';
import { PlusSvg } from '../../assets/icons/plus';
import TextField from '../../components/generall/textField/textField';
import { nameRegex } from '../../static/regex';
import LineWithCircle from '../../components/lineWithCircle/lineWithCircle';
import Button from '../../components/generall/button/button';

import * as ImagePicker from 'expo-image-picker';
import { CloseIcon } from '../../assets/icons/drop-down';

interface userData {
  name: string;
  birthDate: string;
  deathDate: string;
  imageUrl: string;
  text: string;
}

const CreateUser = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const [userData, setUserData] = useState<userData>({
    name: '',
    birthDate: '',
    deathDate: '',
    imageUrl: '',
    text: '',
  });

  const onChange = (name: string, value: string) => {
    setUserData({ ...userData, [name]: value });
  };

  const width = Dimensions.get('window').width / 2 - 40;

  const selectImage = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setUserData({ ...userData, imageUrl: pickerResult.assets[0].uri });
    }
  };

  const removeImage = () => {
    setUserData({ ...userData, imageUrl: '' });
  };

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
              {userData.imageUrl
                ? (
                <TouchableOpacity style={styles.imgContainer} onPress={removeImage}>
                  <Image source={{ uri: userData.imageUrl }} style={styles.placeholder} />

                  <View style={{ position: 'absolute', right: 10, top: 60 }}>
                    <CloseIcon />
                  </View>
                </TouchableOpacity>
                  )
                : (
                <TouchableOpacity style={styles.placeholder} onPress={selectImage}>
                  <PlusSvg />
                </TouchableOpacity>
                  )}

              <TextField
                additionalStyles={{
                  width: 277,
                  borderRadius: 12,
                  flex: 1,
                  marginTop: 10,
                  alignSelf: 'center',
                  fontFamily: 'GreatVibes_400Regular',
                  fontSize: 25,
                  lineHeight: 22,
                  textAlign: 'center',
                }}
                placeholder="First name Last name"
                placeholderColor={colors.rusty_Copper_25_Opacity}
                value={userData.name}
                name="name"
                onChange={onChange}
                validation={nameRegex}
              />
              <View style={styles.dateContainer}>
                <View style={styles.dateWidth}>
                  <Text style={styles.date}>05/05/1940</Text>
                  <Text style={styles.date}>05/05/2000</Text>
                </View>
              </View>
              <View style={styles.lines}>
                <LineWithCircle lineWidth={width} rotate="180deg" />
                <LineWithCircle lineWidth={width} />
              </View>
              <TextField
                additionalStyles={{
                  width: '100%',
                  height: 110,
                  borderRadius: 12,
                  flex: 1,
                  marginTop: 22,
                  alignSelf: 'center',
                  fontFamily: 'Inter_500Medium',
                  fontSize: 13,
                  lineHeight: 22,
                  textAlign: 'center',
                }}
                placeholder="Leave a few words about the person"
                placeholderColor={colors.rusty_Copper_25_Opacity}
                value={userData.text}
                name="text"
                onChange={onChange}
                validation={nameRegex}
              />
              <Button text="Saved" additionalStyles={styles.buttonStyle} onPress={() => {}} />
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

export default CreateUser;
