import React, { useState, type FC } from 'react';
import {
  ScrollView,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  Dimensions,
} from 'react-native';
import { type packageCard } from '../../static/types';
import BuyPackageCard from '../buyPackageCard/buyPackageCard';
import AnimatedLine from '../animateLine/animateLine';
import { styles } from './buyPackageSlider.style';
const width = Dimensions.get('window').width;
const Slider: FC<{ features: packageCard[] }> = ({ features }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideWidth = width * 0.85;
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / slideWidth);
    setCurrentSlide(index);
  };
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.slider}>
          {features.map((card, index) => (
            <BuyPackageCard key={index} card={card} />
          ))}
        </View>
      </ScrollView>
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <AnimatedLine activeIndex={currentSlide} />
      </View>
    </>
  );
};

export default Slider;
