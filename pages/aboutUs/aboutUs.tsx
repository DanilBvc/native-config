import React from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import { styles } from './aboutUs.style';
import { familyLogoUrl } from '../../static/urls';
import { useTranslation } from 'react-i18next';
import { ArrowBack } from '../../assets/icons/arrow-back';
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigation();
  return (
    <EmptyLayout
      contentMarginBottom={170}
      additionalControl={
        <View style={styles.header}>
          <LocalizationSwitcher />
          <TouchableOpacity style={{ marginLeft: 5 }} onPress={navigate.goBack}>
            <ArrowBack />
          </TouchableOpacity>
        </View>
      }
      footerControl={<BottomNavigation />}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{
                uri: familyLogoUrl,
              }}
              style={styles.imageSize}
            />
          </View>
          <Text style={styles.title}>{t('landingPage.greetingsSection.helloFriend')}</Text>
          <Image
            source={require('../../assets/icons/landing-photo.png')}
            style={{
              height: 335,
              alignSelf: 'center',
              objectFit: 'contain',
              marginTop: 20,
              marginBottom: 30,
            }}
          />
          <Text style={styles.subTitle}>{t('landingPage.greetingsSection.greetingText')}</Text>

          <Text style={[styles.subTitle, styles.marginTop]}>
            {t('landingPage.greetingsSection.bestWishes')}
          </Text>
          <Text style={styles.subTitle}>{t('landingPage.greetingsSection.team')}</Text>
        </ScrollView>
      </SafeAreaView>
    </EmptyLayout>
  );
};

export default AboutUs;
