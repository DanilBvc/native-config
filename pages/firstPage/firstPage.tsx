import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import { styles } from './firstPage.style';
import FamilyEmblem from '../../static/familyEmblem';
import Button from '../../components/generall/button/button';
import { useTypedNavigation } from '../../hooks/useTypedNavigation';
import { QrCodeSvg } from '../../assets/icons/qr-code';

const FirstPage = () => {
  const navigation = useTypedNavigation();

  const SignIn = () => {
    navigation.navigate('SignIn');
  };

  const tryIt = () => {};

  const BuyPackage = () => {
    navigation.navigate('Welcome');
  };

  const goScanQrCode = () => {
    navigation.navigate('ScanQrCode');
  };

  return (
    <EmptyLayout additionalControl={<LocalizationSwitcher />}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <FamilyEmblem width={226} height={231} />
        </View>
        <View style={{ gap: 20 }}>
          <Button onPress={tryIt} text={'Try it'} />
          <Button onPress={BuyPackage} text={'Buy Package'} />
          <Button onPress={SignIn} text={'Log in'} />
        </View>
        <Pressable onPress={goScanQrCode}>
          <View style={styles.qrCodeContainer}>
            <QrCodeSvg />
            <Text style={styles.qrCodeText}>Scan it QR code</Text>
          </View>
        </Pressable>
      </ScrollView>
    </EmptyLayout>
  );
};

export default FirstPage;
