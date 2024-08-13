import React from 'react';
import { HomeSvg, QrCodeFrame } from '../../assets/icons/qr-code';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import { Link, useNavigation } from '@react-navigation/native';
import { Button, SafeAreaView, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { type BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import { styles } from './scanQrCode.style';

const ScanQrCode: React.FC = () => {
  const navigation = useNavigation();
  const [permission, requestPermission] = useCameraPermissions();
  const { width } = useWindowDimensions();
  const height = Math.round((width * 4) / 3);

  const handleScanQrCode = (data: BarcodeScanningResult) => {
    if (!data.data || !data) {
      return;
    }
    const id = data.data?.match(/[^/]+$/)?.[0];
    if (!id) return;
    const route: { name: string; params: { id: string } } = { name: 'Tree', params: { id } };
    navigation.navigate(route as never);
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <EmptyLayout
      additionalControl={
        <Link to={{ screen: 'Welcome' }}>
          <HomeSvg />
        </Link>
      }
      footerControl={
        <View style={styles.textContainer}>
          <Text style={styles.title}>Scan QR code</Text>
          <Text style={styles.subTitle}>Please scan the {"tree's"} QR code.</Text>
        </View>
      }
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <CameraView
              style={{ height, width: '100%' }}
              barcodeScannerSettings={{
                barcodeTypes: ['qr'],
              }}
              onBarcodeScanned={handleScanQrCode}
            >
              <View style={styles.frameContainer}>
                <QrCodeFrame />
              </View>
            </CameraView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </EmptyLayout>
  );
};

export default ScanQrCode;
