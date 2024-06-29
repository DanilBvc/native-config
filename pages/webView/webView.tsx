import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { WebView, type WebViewNavigation } from 'react-native-webview';
import useOrderStore from '../../store/order/store';

export interface WebViewScreenProps {
  route: {
    params: {
      url: string;
    };
  };
}

const WebViewScreen = ({ route }: WebViewScreenProps) => {
  const { url } = route.params;
  const navigation = useNavigation();
  const clearOrderData = useOrderStore((state) => state.clearOrderData);
  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    if (navState.url.includes('/payload/success')) {
      clearOrderData()
      navigation.navigate('Welcome' as never);
    }
  };
  return <WebView source={{ uri: url }} style={{ flex: 1 }}onNavigationStateChange={handleNavigationStateChange} />;
};

export default WebViewScreen;
