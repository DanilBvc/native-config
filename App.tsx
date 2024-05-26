import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
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
import ScanQrCode from './pages/scanQrCode/scanQrCode';
import { AuthProvider } from './hooks/useAuth';
import { checkAuth } from './utils/chechkAuth';
import Tree from './pages/tree/tree';
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
  });

  useEffect(() => {
    checkAuth();
  }, []);

  if (!loaded) {
    return null;
  }

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
              component={ScanQrCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='Tree' component={Tree} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
