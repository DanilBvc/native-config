import React, { useState } from 'react';
import { View } from 'react-native';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import { DropDown } from '../../assets/icons/drop-down';
import { styles } from './homeScreen.style';
import { VideoPlayer } from '../../components/generall/VideoPlayer/VideoPlayer';

const HomeScreen = () => {
  const [dropDown] = useState<boolean>(true);
  return (
    <EmptyLayout
      additionalControl={
        <View
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
        >
          <LocalizationSwitcher dropDown={dropDown} />
          <View style={styles.dropDown}>
            <DropDown />
          </View>
        </View>
      }
      footerControl={<BottomNavigation />}
    >
      <VideoPlayer locale="https://remember-time.s3.eu-central-1.amazonaws.com/trailer/rt_en.mp4" />
    </EmptyLayout>
  );
};

export default HomeScreen;
