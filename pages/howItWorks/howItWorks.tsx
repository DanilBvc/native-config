import React from 'react';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View, // Import Animated from react-native
} from 'react-native';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import { ArrowBack } from '../../assets/icons/arrow-back';
import { styles } from './howItWorks.style';
import { useNavigation } from '@react-navigation/native';
import VideoPlayer from 'expo-video-player';
import { ResizeMode } from 'expo-av';
import { useTranslation } from 'react-i18next';
import LineWithCircle from '../../components/lineWithCircle/lineWithCircle';
import FamilyEmblem from '../../static/familyEmblem';
import { SlideInView } from '../../components/slideInView/slideInView';

const HowItWorks = () => {
  const width = Dimensions.get('window').width / 2;
  const navigate = useNavigation();
  const { t } = useTranslation();
  const fullWidth = Dimensions.get('window').width;

  const Agreement = [
    {
      title: t('landingPage.howItWorks.points.first.title'),
      sections: [
        { subTitle: t('landingPage.howItWorks.points.first.subpoints.a') },
        { subTitle: t('landingPage.howItWorks.points.first.subpoints.b') },
        { subTitle: t('landingPage.howItWorks.points.first.subpoints.c') },
      ],
      left: true,
      number: 1,
    },
    {
      title: t('landingPage.howItWorks.points.second.title'),
      sections: [
        { subTitle: t('landingPage.howItWorks.points.second.subpoints.a') },
        { subTitle: t('landingPage.howItWorks.points.second.subpoints.b') },
      ],
      left: false,
      number: 2,
    },
    {
      title: t('landingPage.howItWorks.points.third.title'),
      sections: [{ subTitle: t('landingPage.howItWorks.points.third.subpoints.a') }],
      left: true,
      number: 3,
    },
  ];

  return (
    <>
      <EmptyLayout
        contentMarginBottom={170}
        footerControl={<BottomNavigation />}
        additionalControl={
          <View style={styles.header}>
            <LocalizationSwitcher />
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={navigate.goBack}>
              <ArrowBack />
            </TouchableOpacity>
          </View>
        }
      >
        <View style={styles.container}>
          <SafeAreaView>
            <ScrollView>
              <Text style={styles.title}>{t('landingPage.howItWorks.howItWorks')}</Text>
              {Agreement.map((item) => {
                return (
                  <View key={item.number} style={item.left && styles.sectionsContainer}>
                    <TouchableOpacity>
                      <Text style={[styles.subTitle, item.left && styles.alightRight]}>
                        {item.title}
                      </Text>
                      <LineWithCircle
                        lineWidth={width - 60}
                        withNumber={item.number}
                        rotate={item.left ? '180deg' : '0deg'}
                      />
                    </TouchableOpacity>
                    {item.sections?.map((section, secIndex) => (
                      <SlideInView key={secIndex} left={item.left}>
                        {section.subTitle && <Text style={[styles.text]}>{section.subTitle}</Text>}
                      </SlideInView>
                    ))}
                  </View>
                );
              })}
            </ScrollView>
          </SafeAreaView>
        </View>
      </EmptyLayout>
      <View style={styles.imgContainer}>
        <FamilyEmblem height={fullWidth} width={fullWidth} />
      </View>
      <View style={styles.videoContainer}>
        <VideoPlayer
          style={{
            videoBackgroundColor: '#F2F2F2',
            height: 250,
          }}
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.COVER,
            isMuted: true,
            source: {
              uri: 'https://remembering-time.s3.eu-central-1.amazonaws.com/assets/tutorials/demo_en.mp4',
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
      </View>
    </>
  );
};

export default HowItWorks;
