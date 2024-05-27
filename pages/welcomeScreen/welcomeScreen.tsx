import React, { useState } from 'react';
import { Link, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, Text, View } from 'react-native';
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
import { familyLogoUrl } from '../../static/urls';
import { styles } from './welcomeScreen.style';

import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import { useAuth } from '../../hooks/useAuth';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import BurgerList from '../../components/burgerList/burgerList';


const WelcomeScreen = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();
  const cards: packageCard[] = [
    {
      name: 'STANDARD',
      price: '300 $',
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
      price: '300 $',
      features: [
        { label: t('prices.firstBenefit'), enabled: true, icon: <TechnicalSupportSvg /> },
        { label: t('prices.mobile'), enabled: true, icon: <MobilePhoneSvg /> },
        { label: t('prices.thirdBenefit'), enabled: false, icon: <DeliverySvg /> },
        { label: t('prices.AI'), enabled: false, icon: <AiSvg /> },
        { label: t('prices.secondBenefit'), enabled: false, icon: <LockSvg /> },
      ],
    },
    {
      name: 'MAX',
      price: '300 $',
      features: [
        { label: t('prices.firstBenefit'), enabled: true, icon: <TechnicalSupportSvg /> },
        { label: t('prices.mobile'), enabled: true, icon: <MobilePhoneSvg /> },
        { label: t('prices.thirdBenefit'), enabled: false, icon: <DeliverySvg /> },
        { label: t('prices.AI'), enabled: false, icon: <AiSvg /> },
        { label: t('prices.secondBenefit'), enabled: false, icon: <LockSvg /> },
      ],
    },
  ];
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goBuyPackage = () => {
    navigation.navigate('BuyPackage' as never, { card: cards[currentSlide].name });
  };

  const goScanQrCode = () => {
    navigation.navigate('ScanQrCode' as never);
  };

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  return (
 <>
      <EmptyLayout
        additionalControl={
          <View
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
          >
            <LocalizationSwitcher />
            {isAuthenticated
              ? (
              <View style={{ marginLeft: 20 }}>
                <BurgerMenu
                  isBurgerMenuVisible={isBurgerMenuVisible}
                  setBurgerMenuVisible={setBurgerMenuVisible}
                />
              </View>
                )
              : (
              <Link to={{ screen: 'SignIn' }} style={{ color: colors.apricot_Blaze }}>
                LOG IN
              </Link>
                )}
          </View>
        }
        footerControl={isAuthenticated && <BottomNavigation />}
      >
        <View style={styles.container}>
          <Image
            source={{
              uri: familyLogoUrl,
            }}
            style={styles.imageSize}
          />
        </View>
        <Slider features={cards} />
        <Button text={t('prices.buy')} onPress={goBuyPackage} />
        {!isAuthenticated && (
          <Pressable onPress={goScanQrCode}>
            <View style={styles.qrCodeContainer}>
              <QrCodeSvg />
              <Text style={styles.qrCodeText}>Scan it QR code</Text>
            </View>
          </Pressable>
        )}
      </EmptyLayout>
      <BurgerList isVisible={isBurgerMenuVisible} />
    </>
  );
};

export default WelcomeScreen;
