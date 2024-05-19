import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import { familyLogoUrl } from '../../static/urls';
import Button from '../../components/generall/button/button';
import {
  AiSvg,
  DeliverySvg,
  LockSvg,
  MobilePhoneSvg,
  TechnicalSupportSvg,
} from '../../assets/icons/packageIcons/icons';
import { type packageCard } from '../../static/types/productTypes/types';
import Slider from '../../components/buyPackageSlider/buyPackageSlider';
import { QrCodeSvg } from '../../assets/icons/qr-code';
import { useTranslation } from 'react-i18next';
import { styles } from './welcomeScreen.style';

const WelcomeScreen = () => {
  const { t } = useTranslation();
  const cards: packageCard[] = [
    {
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

  const goBuyPackage = () => {
    navigation.navigate('Welcome' as never);
  };

  const goScanQrCode = () => {
    navigation.navigate('ScanQr' as never);
  };

  return (
    <EmptyLayout additionalControl={<LocalizationSwitcher />}>
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
      <Pressable onPress={goScanQrCode}>
        <View style={styles.qrCodeContainer}>
          <QrCodeSvg />
          <Text style={styles.qrCodeText}>Scan it QR code</Text>
        </View>
      </Pressable>
    </EmptyLayout>
  );
};

export default WelcomeScreen;
