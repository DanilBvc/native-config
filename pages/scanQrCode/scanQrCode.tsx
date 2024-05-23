import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import { HomeSvg } from '../../assets/icons/qr-code';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import { colors } from '../../static/colors';
import { Link } from '@react-navigation/native';
import { Camera } from 'expo-camera';
const QRCodeScanner: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState(false);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' + 'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasPermission('granted');
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      await requestCameraPermission();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <EmptyLayout
      additionalControl={
        <Link to={{ screen: 'Welcome' }}>
          <HomeSvg />
        </Link>
      }
    >
      {hasPermission === null
        ? (
        <Button title="request permissions" onPress={requestCameraPermission} />
          )
        : (
        <SafeAreaView style={styles.container}>
          <View style={styles.cameraContainer}>
            <Camera
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
              <Button
                title={'Tap to Scan Again'}
                onPress={() => {
                  setScanned(false);
                }}
              />
            )}
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Scan QR code</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Nec tristique feugiat leo.
            </Text>
          </View>
        </SafeAreaView>
          )}
    </EmptyLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEFE7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'serif',
    color: '#8B5D33',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAEFE7',
  },
  camera: {
    width: '80%',
    height: '60%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 20,
    color: colors.earthy_Brown,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    color: colors.rusty_Copper,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default QRCodeScanner;
