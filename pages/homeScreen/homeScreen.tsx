import React, { useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import { styles } from './homeScreen.style';
import VideoPlayer from 'expo-video-player';
import { ResizeMode } from 'expo-av';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import BurgerList from '../../components/burgerList/burgerList';

const HomeScreen = () => {
  const width = Dimensions.get('window').width;

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  return (
    <>
      <EmptyLayout
        additionalControl={
          <View
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
          >
            <LocalizationSwitcher />
            <BurgerMenu
              isBurgerMenuVisible={isBurgerMenuVisible}
              setBurgerMenuVisible={setBurgerMenuVisible}
              style={{ marginLeft: 20 }}
            />
          </View>
        }
        footerControl={<BottomNavigation />}
        burgerList={
          <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
        }
      >
        <></>
      </EmptyLayout>
      <View style={styles.videoContainer}>
        <VideoPlayer
          style={{
            videoBackgroundColor: '#F2F2F2',
            height: 252,
            width,
          }}
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.CONTAIN,
            isMuted: true,
            source: {
              uri: 'https://remember-time.s3.eu-central-1.amazonaws.com/trailer/rt_en.mp4',
            },
          }}
          defaultControlsVisible={false}
          timeVisible={false}
          slider={{
            visible: false,
          }}
          fullscreen={{
            visible: false,
          }}
          mute={{
            visible: false,
          }}
        />
        <Image
          source={require('../../assets/emblem.png')}
          style={{ zIndex: -1, position: 'absolute' }}
          height={550}
          width={550}
        />
      </View>
    </>
  );
};

export default HomeScreen;
