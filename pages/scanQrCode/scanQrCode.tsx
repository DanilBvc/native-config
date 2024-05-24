import React from 'react';
import { HomeSvg, QrCodeFrame } from '../../assets/icons/qr-code';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import { Link } from '@react-navigation/native';
import {
  Button,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { type BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import { styles } from './scanQrCode.style';

const ScanQrCode: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const { width } = useWindowDimensions();
  const height = Math.round((width * 4) / 3);

  const handleScanQrCode = (data: BarcodeScanningResult) => {
    return null
  }
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
    >
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

         <View style={styles.textContainer}>
         <Text style={styles.title}>Scan QR code</Text>
          <Text style={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur. Nec tristique feugiat leo lorem ipsum nibh.
          </Text>
         </View>
      </View>
    </EmptyLayout>
  );
};

export default ScanQrCode;
