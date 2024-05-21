import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import i18next, { languageResources } from '../../../services/i18nextjs';
import { getLocalizations } from '../../../utils/utils';
import { styles } from './localizationSwitcher.style';
import { colors } from '../../../static/colors';

const LocalizationSwitcher = () => {
  const [currentLng, setCurrentLng] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLng(lng);
    };

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng);
  };

  const getLocalizationItem = (item: string) => {
    return getLocalizations()[item].nativeName;
  };

  const isLocalizationActive = (lng: string) => {
    return getLocalizationItem(currentLng) === lng;
  };

  return (
      <FlatList
        data={Object.keys(languageResources)}
        numColumns={Object.keys(getLocalizations()).length}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => {
              changeLng(item);
            }}
          >
            <Text
              style={{
                ...styles.lngName,
                color: isLocalizationActive(getLocalizationItem(item))
                  ? colors.rusty_Copper_25_Opacity
                  : colors.apricot_Blaze,
              }}
            >
              {getLocalizationItem(item)}
            </Text>
          </TouchableOpacity>
        )}
      />
  );
};

export default LocalizationSwitcher;
