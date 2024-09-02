import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { languageResources } from '../../../services/i18nextjs';
import { getLocalizations } from '../../../utils/utils';
import { colors } from '../../../static/colors';
import { styles } from './localizationSwitcher.style';
import useLocalization from '../../../hooks/useLocalization';

const LocalizationSwitcher: React.FC = () => {
  const { currentLng, changeLng } = useLocalization();
  const [showAll, setShowAll] = useState<boolean>(false);

  const changeLngHandler = (lng: string) => {
    changeLng(lng);
    setTimeout(() => {
      setShowAll(false);
    }, 300);
  };

  const getLocalizationItem = (item: string): string => {
    return getLocalizations()[item].nativeName;
  };

  const isLocalizationActive = (lng: string): boolean => {
    return getLocalizationItem(currentLng) === lng;
  };

  const renderLanguageButton = (item: string) => (
    <TouchableOpacity
      style={styles.languageButton}
      onPress={() => {
        changeLngHandler(item);
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
  );

  const languageKeys = Object.keys(languageResources);
  const displayLanguages = showAll ? languageKeys : [currentLng];

  return (
    <View>
      {!showAll && (
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => {
            setShowAll(true);
          }}
        >
          <Text style={styles.lngName}>{getLocalizationItem(currentLng)}</Text>
        </TouchableOpacity>
      )}
      {showAll && (
        <FlatList
          data={displayLanguages}
          numColumns={Object.keys(getLocalizations()).length}
          keyExtractor={(item) => item}
          renderItem={({ item }) => renderLanguageButton(item)}
        />
      )}
    </View>
  );
};

export default LocalizationSwitcher;
