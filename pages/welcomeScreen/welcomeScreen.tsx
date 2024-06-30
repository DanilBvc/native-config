import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import {
  AiSvg,
  DeliverySvg,
  LockSvg,
  MobilePhoneSvg,
  TechnicalSupportSvg,
} from '../../assets/icons/packageIcons/icons';
import { QrCodeSvg } from '../../assets/icons/qr-code';
import Slider from '../../components/buyPackageSlider/buyPackageSlider';
import Button from '../../components/generall/button/button';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import { colors } from '../../static/colors';

import { type packageCard } from '../../static/types/productTypes/types';
import { styles } from './welcomeScreen.style';

import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import { useAuth } from '../../hooks/useAuth';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import { useTypedNavigation } from '../../hooks/useTypedNavigation';
import BurgerList from '../../components/burgerList/burgerList';
import FamilyEmblem from '../../static/familyEmblem';

const WelcomeScreen = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();
  const cards: packageCard[] = [
    {
      name: 'STANDARD',
      price: t('prices.priceStandard'),
      features: [
        { label: t('prices.firstBenefit'), enabled: true, icon: <TechnicalSupportSvg /> },
        { label: t('prices.mobile'), enabled: true, icon: <MobilePhoneSvg /> },
        { label: t('prices.thirdBenefit'), enabled: false, icon: <DeliverySvg /> },
        { label: t('prices.AI'), enabled: false, icon: <AiSvg /> },
        { label: t('prices.secondBenefit'), enabled: false, icon: <LockSvg /> },
      ],
    },
    {
      name: 'MEDIUM',
      price: t('prices.priceMedium'),
      features: [
        { label: t('prices.firstBenefit'), enabled: true, icon: <TechnicalSupportSvg /> },
        { label: t('prices.mobile'), enabled: true, icon: <MobilePhoneSvg /> },
        { label: t('prices.thirdBenefit'), enabled: true, icon: <DeliverySvg opacity={1} /> },
        { label: t('prices.AI'), enabled: true, icon: <AiSvg opacity={1} /> },
        { label: t('prices.secondBenefit'), enabled: true, icon: <LockSvg opacity={1} /> },
      ],
    },
    {
      name: 'MAX',
      price: t('prices.priceMax'),
      features: [
        { label: t('prices.firstBenefit'), enabled: true, icon: <TechnicalSupportSvg /> },
        { label: t('prices.mobile'), enabled: true, icon: <MobilePhoneSvg /> },
        { label: t('prices.thirdBenefit'), enabled: true, icon: <DeliverySvg opacity={1} /> },
        {
          label: t('prices.AI') + ' + ' + t('prices.personalization'),
          enabled: true,
          icon: <AiSvg opacity={1} />,
        },
        { label: t('prices.secondBenefit'), enabled: true, icon: <LockSvg opacity={1} /> },
      ],
    },
  ];
  const navigation = useTypedNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goBuyPackage = () => {
    navigation.navigate('BuyPackage', { card: cards[currentSlide].name });
  };

  const goScanQrCode = () => {
    navigation.navigate('ScanQrCode');
  };

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
  >
      <EmptyLayout
        additionalControl={
          <View
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
          >
            <LocalizationSwitcher />
            {isAuthenticated ? (
              <BurgerMenu
                isBurgerMenuVisible={isBurgerMenuVisible}
                setBurgerMenuVisible={setBurgerMenuVisible}
                style={{ marginLeft: 20 }}
              />
            ) : (
              <Link to={{ screen: 'SignIn' }} style={{ color: colors.apricot_Blaze }}>
                LOG IN
              </Link>
            )}
          </View>
        }
        footerControl={isAuthenticated && <BottomNavigation />}
        burgerList={
          <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
        }
      >

        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <FamilyEmblem width={140} height={140} />
            </View>
            <Slider
              features={cards}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />
            <Button text={t('prices.buy')} onPress={goBuyPackage} />
            {!isAuthenticated && (
              <Pressable onPress={goScanQrCode}>
                <View style={styles.qrCodeContainer}>
                  <QrCodeSvg />
                  <Text style={styles.qrCodeText}>Scan it QR code</Text>
                </View>
              </Pressable>
            )}
          </ScrollView>
        </SafeAreaView>

      </EmptyLayout>
    </ScrollView>
  );
};

export default WelcomeScreen;
