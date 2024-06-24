import React, { type FC } from 'react';
import {
  ScrollView,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { type packageCard } from '../../static/types/productTypes/types';
import AnimatedLine from '../animateLine/animateLine';
import BuyPackageCard from '../buyPackageCard/buyPackageCard';
import { styles } from './buyPackageSlider.style';
import { wp } from '../../utils/percentageSizes';

const Slider: FC<{
  features: packageCard[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}> = ({ features, currentSlide, setCurrentSlide }) => {
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideWidth = wp(80);
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
      <View style={styles.lineContainer}>
        <AnimatedLine activeIndex={currentSlide} />
      </View>
    </>
  );
};

export default Slider;
