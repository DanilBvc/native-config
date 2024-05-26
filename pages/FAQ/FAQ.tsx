import React, { useState } from 'react';
import { Image, Text, View, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import BurgerList from '../../components/burgerList/burgerList';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import { styles } from './FAQ.style';
import { familyLogoUrl } from '../../static/urls';
import LineWithCircle from '../../components/lineWithCircle/lineWithCircle';
import { ArrowDownIcon } from '../../assets/icons/faq';

const Agreement = [
  {
    title: 'Website Use Terms',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    title: 'User Content',
    sections: [
      {
        subTitle: '1. Responsibility for Content',
        text: "Users are fully responsible for any content (text, images, videos, etc.) they post on the site. Such content must not violate the site's acceptable use policy.",
      },
      {
        subTitle: '2. Rights and Licenses',
        text: 'By submitting content to the site, the user grants the Organization an irrevocable, non-exclusive, royalty-free right to use it, including reproduction, distribution, public display, creation of derivative works, and integration into other works on a global level. The user also waives any claims to moral rights.',
      },

    ],
  },
  {
    title: 'Acceptable Use Policy',
    subtitle:
      'This policy outlines acceptable and unacceptable uses of the website and its content.',
  },
];

const FAQ = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const width = useWindowDimensions().width;

  const handlePress = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      <EmptyLayout
        additionalControl={
          <View
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
          >
            <LocalizationSwitcher />
            <View style={{ marginLeft: 20 }}>
              <BurgerMenu
                isBurgerMenuVisible={isBurgerMenuVisible}
                setBurgerMenuVisible={setBurgerMenuVisible}
              />
            </View>
          </View>
        }
        footerControl={<BottomNavigation />}
      >
        <ScrollView>
          <View>
            <View style={styles.container}>
              <Image
                source={{
                  uri: familyLogoUrl,
                }}
                style={styles.imageSize}
              />
            </View>
          </View>
          <Text style={styles.faqText}>Public Offer Agreement</Text>
          <View>
            {Agreement.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    handlePress(index);
                  }}
                >
                  <Text style={styles.accordionTitle}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <LineWithCircle lineWidth={width - 100} />
                    {expanded === index
                      ? (
                        <View style={{ transform: [{ rotate: '180deg' }] }}>
                           <ArrowDownIcon />
                        </View>

                        )
                      : (
                      <ArrowDownIcon />
                        )}
                  </View>
                </TouchableOpacity>
                {expanded === index && (
                  <View >
                    {item.subtitle && <Text style={styles.sectionText}>{item.subtitle}</Text>}
                    {item.sections?.map((section, secIndex) => (
                      <View key={secIndex}>
                        {section.subTitle && (
                          <Text style={styles.subTitle}>{section.subTitle}</Text>
                        )}
                        {section.text && <Text style={styles.sectionText}>{section.text}</Text>}

                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </EmptyLayout>
      <BurgerList isVisible={isBurgerMenuVisible} />
    </>
  );
};

export default FAQ;
