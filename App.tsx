import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NotFound from './pages/notFound/notFound';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { View } from 'react-native';
import PrivateRoute from './utils/privateRoute';
import { routes } from './static/constants';
import { colors } from './static/colors';
import QRCodeScanner from './pages/scanQrCode/scanQrCode';
import { AuthProvider } from './hooks/useAuth';
const Stack = createNativeStackNavigator();

const App = () => {
  useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  return (
    <NavigationContainer>
      <AuthProvider>
      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        <Stack.Navigator>
          {routes.map((route, index) => {
            const { name, component, isPrivate, options } = route;
            return (
              <Stack.Screen
                key={index}
                name={name}
                component={isPrivate ? () => <PrivateRoute component={component} /> : component}
                options={options}
              />
            );
          })}
          <Stack.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
          <Stack.Screen name="*" component={NotFound} options={{ headerShown: false }} />
          <Stack.Screen
            name="ScanQrCode"
            component={QRCodeScanner}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
