import React from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import { Image, Text, View } from 'react-native';
import { familyLogoUrl } from '../../static/urls';
import Button from '../../components/generall/button/button';
import { useNavigation } from '@react-navigation/native';
import { styles } from './notFound.style';

const NotFound = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const goHome = () => {
    navigation.navigate('Welcome' as never);
  };

  return (
    <EmptyLayout>
      <View style={styles.container}>
        <Image
          source={{
            uri: familyLogoUrl,
          }}
          style={styles.logo}
        />
      </View>
      <View style={styles.notFoundContainer}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.subtitle}>No page found</Text>
        <Text style={styles.description}>
          We can&apos;t find the page that you&apos;re looking for...
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={goBack} text={'Previous Page'} />
        <Button onPress={goHome} text={'Home Page'} />
      </View>
    </EmptyLayout>
  );
};

export default NotFound;
