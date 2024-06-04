import React, { useEffect, useState } from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import { Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ShareSvg } from '../../assets/icons/share';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import FamilyEmblem from '../../static/familyEmblem';
import { styles } from './createUser.style';
import { colors } from '../../static/colors';
import { PlusSvg } from '../../assets/icons/plus';
import TextField from '../../components/generall/textField/textField';
import { nameRegex } from '../../static/regex';
import LineWithCircle from '../../components/lineWithCircle/lineWithCircle';
import Button from '../../components/generall/button/button';

import * as ImagePicker from 'expo-image-picker';
import { useTypedNavigation, useTypedRoute } from '../../hooks/useTypedNavigation';
import { type Tree } from '../../static/types/userTypes/types';
import { TreeService } from '../../services/treeService/treeService';
import BurgerList from '../../components/burgerList/burgerList';
import TextArea from '../../components/generall/textArea/textArea';
import AvatarImage from './AvatarImage';

const CreateUser = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const route = useTypedRoute();
  const navigation = useTypedNavigation();

  const { user } = route.params;

  const [userData, setUserData] = useState<Tree>({
    available_slot: 0,
    avatar: '',
    created_at: '',
    date_of_birth: '',
    date_of_dead: '',
    description: '',
    first_name: '',
    full_name: '',
    id: '',
    last_name: '',
    password: '',
    updated_at: '',
  });

  useEffect(() => {
    setUserData(user);
  }, []);

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
      setUserData({ ...userData, avatar: pickerResult.assets[0].uri });
    }
  };

  const removeImage = () => {
    setUserData({ ...userData, avatar: '' });
  };

  const handleUpdate = () => {
    try {
      TreeService.updateUserTree(userData.id, userData);
      navigation.navigate('UserProfile', { user: userData });
    } catch (error) {}
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
        burgerList={
          <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
        }
        contentMarginBottom={170}
      >
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              {userData.avatar
                ? (
                <AvatarImage avatar={userData.avatar} removeImage={removeImage} />
                  ) : (
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
                value={userData.full_name}
                name="full_name"
                onChange={onChange}
                validation={nameRegex}
              />
              <View style={styles.dateContainer}>
                <View style={styles.dateWidth}>
                  <Text style={styles.date}>{userData.date_of_birth}</Text>
                  <Text style={styles.date}>{userData.date_of_dead}</Text>
                </View>
              </View>
              <View style={styles.lines}>
                <LineWithCircle lineWidth={width} rotate="180deg" />
                <LineWithCircle lineWidth={width} />
              </View>

              <TextArea
                value={userData.description ?? ''}
                onChange={onChange}
                name="description"
                placeholder="Leave a few words about the person"
                placeholderTextColor={colors.rusty_Copper_25_Opacity}
                additionalStyles={{ marginTop: 22, width: '100%' }}
              />
              <Button text="Saved" additionalStyles={styles.buttonStyle} onPress={handleUpdate} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </EmptyLayout>

      <View style={styles.container}>
        <FamilyEmblem additionalStyle={styles.image} />
      </View>
    </>
  );
};

export default CreateUser;
