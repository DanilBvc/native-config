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
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import { View } from 'react-native';
import PrivateRoute from './utils/privateRoute';
import { routes } from './static/constants';
import { colors } from './static/colors';
import ScanQrCode from './pages/scanQrCode/scanQrCode';
import { AuthProvider } from './hooks/useAuth';
import Tree from './pages/tree/tree';
import { ClickOutsideProvider } from 'react-native-click-outside';
const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    GreatVibes_400Regular,
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ClickOutsideProvider>
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
                component={ScanQrCode}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Tree" component={Tree} options={{ headerShown: false }} />
            </Stack.Navigator>
          </View>
        </AuthProvider>
      </ClickOutsideProvider>
    </NavigationContainer>
  );
};

export default App;
