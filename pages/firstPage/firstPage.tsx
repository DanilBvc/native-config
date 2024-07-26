import React from 'react';
import { Dimensions, Pressable, ScrollView, Text, View } from 'react-native';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import { styles } from './firstPage.style';
import Button from '../../components/generall/button/button';
import { useTypedNavigation } from '../../hooks/useTypedNavigation';
import { QrCodeSvg } from '../../assets/icons/qr-code';
import VideoPlayer from 'expo-video-player';
import { ResizeMode } from 'expo-av';

const FirstPage = () => {
  const width = Dimensions.get('window').width;
  const navigation = useTypedNavigation();

  const SignIn = () => {
    navigation.navigate('SignIn');
  };

  const tryIt = () => {
    navigation.navigate('Tree', { id: 'demo-tree' });
  };

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
          <VideoPlayer
            style={{
              videoBackgroundColor: '#F2F2F2',
              height: 252,
              width,
            }}
            videoProps={{
              shouldPlay: true,
              resizeMode: ResizeMode.CONTAIN,
              isMuted: true,
              source: {
                uri: 'https://remember-time.s3.eu-central-1.amazonaws.com/trailer/rt_en.mp4',
              },
            }}
            defaultControlsVisible={false}
            timeVisible={false}
            slider={{
              visible: false,
            }}
            fullscreen={{
              visible: false,
            }}
            mute={{
              visible: false,
            }}
          />
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
