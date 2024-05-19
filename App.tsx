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
import { Text } from 'react-native';
import PrivateRoute from './utils/privateRoute';
import { routes } from './static/constants';
const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
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

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
