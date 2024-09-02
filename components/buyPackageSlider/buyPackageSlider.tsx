import React, { type FC } from 'react';
import {
  ScrollView,
  Text,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { type packageCard } from '../../static/types/productTypes/types';
import AnimatedLine from '../animateLine/animateLine';
import BuyPackageCard from '../buyPackageCard/buyPackageCard';
import { styles } from './buyPackageSlider.style';
import { wp } from '../../utils/percentageSizes';
import useLocalization from '../../hooks/useLocalization';

const Slider: FC<{
  features: packageCard[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}> = ({ features, currentSlide, setCurrentSlide }) => {
  const { isUa } = useLocalization();
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
        <AnimatedLine activeIndex={currentSlide} slidesLength={features.length} />
      </View>
      {isUa && (
        <View style={styles.additionalContainer}>
          <Text style={styles.additionalText}>
            Для клієнтів з України діють спеціальні ціни та акції на сайтах Prom.ua,OLX
          </Text>
        </View>
      )}
    </>
  );
};

export default Slider;
