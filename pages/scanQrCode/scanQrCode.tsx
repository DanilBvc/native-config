import React, { useEffect, useState } from 'react';
import { HomeSvg } from '../../assets/icons/qr-code';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import { Link } from '@react-navigation/native';
import { Camera, useCameraPermission, useCodeScanner, type CameraDevice } from 'react-native-vision-camera';
const ScanQrCode: React.FC = () => {
  const [device, setDevice] = useState(undefined as CameraDevice | undefined);
  const { hasPermission, requestPermission } = useCameraPermission()
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
    }
  })
  useEffect(() => {
    if (!hasPermission) {
      requestPermission()
      const devices = Camera.getAvailableCameraDevices();
      setDevice(devices.find((d) => d.position === 'back'));
    }
  }, []);
  if (!device) return null
  return (
    <EmptyLayout
      additionalControl={
        <Link to={{ screen: 'Welcome' }}>
          <HomeSvg />
        </Link>
      }
    >
      {hasPermission && device && <Camera
      device={device}
      isActive={true}
      codeScanner={codeScanner}
    />}

    </EmptyLayout>
  );
};

export default ScanQrCode;
