import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import BurgerMenu from '../../components/burgerMenu/burgerMenu';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import { styles } from './FAQ.style';
import FamilyEmblem from '../../static/familyEmblem';
import LineWithCircle from '../../components/lineWithCircle/lineWithCircle';
import { ArrowDownIcon } from '../../assets/icons/faq';
import { useTranslation } from 'react-i18next';
import { colors } from '../../static/colors';
import { type AgreementItem } from './FAQ.type';
import BurgerList from '../../components/burgerList/burgerList';

const FAQ: React.FC = () => {
  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const width = useWindowDimensions().width;

  const { t } = useTranslation();

  const handlePress = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const Agreement: AgreementItem[] = [
    {
      title: t('termsPage.blockOne.header'),
      sections: [
        {
          subTitle: t('termsPage.blockOne.pointOne.header'),
          text: t('termsPage.blockOne.pointOne.text'),
        },
        {
          subTitle: t('termsPage.blockOne.pointTwo.header'),
          text: t('termsPage.blockOne.pointTwo.text'),
        },
        {
          subTitle: t('termsPage.blockOne.pointThree.header'),
          text: t('termsPage.blockOne.pointThree.text'),
        },
        {
          subTitle: t('termsPage.blockOne.pointFour.header'),
          text: t('termsPage.blockOne.pointFour.text'),
        },
        {
          subTitle: t('termsPage.blockOne.pointFive.header'),
          text: t('termsPage.blockOne.pointFive.text'),
        },
      ],
    },
    {
      title: t('termsPage.blockTwo.header'),
      sections: [
        {
          subTitle: t('termsPage.blockTwo.pointOne.header'),
          text: t('termsPage.blockTwo.pointOne.text'),
        },
        {
          subTitle: t('termsPage.blockTwo.pointTwo.header'),
          text: t('termsPage.blockTwo.pointTwo.text'),
        },
      ],
    },
    {
      title: t('termsPage.blockThree.header'),
      sections: [
        {
          subTitle: t('termsPage.blockThree.pointOne.header'),
          text: t('termsPage.blockThree.pointOne.content.subHeader'),
          subSections: [
            { title: t('termsPage.blockThree.pointOne.content.subPointOne') },
            { title: t('termsPage.blockThree.pointOne.content.subPointTwo') },
            { title: t('termsPage.blockThree.pointOne.content.subPointThree') },
          ],
        },
        {
          subTitle: t('termsPage.blockThree.pointTwo.header'),
          text: t('termsPage.blockThree.pointTwo.content.subHeader'),
          subSections: [
            { title: t('termsPage.blockThree.pointTwo.content.subPointOne') },
            { title: t('termsPage.blockThree.pointTwo.content.subPointTwo') },
            { title: t('termsPage.blockThree.pointTwo.content.subPointThree') },
          ],
        },
        {
          subTitle: t('termsPage.blockThree.pointThree.header'),
          text: t('termsPage.blockThree.pointThree.text'),
        },
        {
          subTitle: t('termsPage.blockThree.pointFour.header'),
          text: t('termsPage.blockThree.pointFour.text'),
        },
        {
          subTitle: t('termsPage.blockThree.pointFive.header'),
          text: t('termsPage.blockThree.pointFive.text'),
        },
        {
          subTitle: t('termsPage.blockThree.pointSix.header'),
          text: t('termsPage.blockThree.pointSix.text'),
        },
      ],
    },
    {
      title: t('termsPage.blockFour.header'),
      sections: [
        {
          subTitle: t('termsPage.blockFour.pointOne.header'),
          subSections: [
            { title: t('termsPage.blockFour.pointOne.content.subPointOne') },
            { title: t('termsPage.blockFour.pointOne.content.subPointTwo') },
            { title: t('termsPage.blockFour.pointOne.content.subPointThree') },
          ],
        },
        {
          subTitle: t('termsPage.blockFour.pointTwo.header'),
          subSections: [
            { title: t('termsPage.blockFour.pointTwo.content.subPointOne') },
            { title: t('termsPage.blockFour.pointTwo.content.subPointTwo') },
          ],
        },
        {
          subTitle: t('termsPage.blockFour.pointThree.header'),
          subSections: [
            { title: t('termsPage.blockFour.pointThree.content.subPointOne') },
            { title: t('termsPage.blockFour.pointThree.content.subPointTwo') },
            { title: t('termsPage.blockFour.pointThree.content.subPointThree') },
          ],
          dTexts: [t('termsPage.blockFour.text')],
        },
      ],
    },
    {
      title: t('termsPage.blockFive.header'),
      sections: [
        {
          subTitle: t('termsPage.blockFive.pointOne.header'),
          text: t('termsPage.blockFive.pointOne.text'),
        },
        {
          subTitle: t('termsPage.blockFive.pointTwo.header'),
          text: t('termsPage.blockFive.pointTwo.text'),
        },
        {
          subTitle: t('termsPage.blockFive.pointThree.header'),
          text: t('termsPage.blockFive.pointThree.text'),
        },
        {
          subTitle: t('termsPage.blockFive.pointFour.header'),
          text: t('termsPage.blockFive.pointFour.text'),
        },
        {
          subTitle: t('termsPage.blockFive.pointFive.header'),
          text: t('termsPage.blockFive.pointFive.text'),
        },
        {
          subTitle: t('termsPage.blockFive.pointSix.header'),
          text: t('termsPage.blockFive.pointSix.text1'),
        },
      ],
    },
    {
      title: t('termsPage.blockSeven.header'),
      sections: [
        {
          subTitle: t('termsPage.blockSeven.pointOne.header'),
          text: t('termsPage.blockSeven.pointOne.text'),
        },
        {
          subTitle: t('termsPage.blockSeven.pointTwo.header'),
          text: t('termsPage.blockSeven.pointTwo.text'),
        },
        {
          subTitle: t('termsPage.blockSeven.pointThree.header'),
          text: t('termsPage.blockSeven.pointThree.text'),
        },
        {
          subTitle: t('termsPage.blockSeven.pointFour.header'),
          text: t('termsPage.blockSeven.pointFour.text'),
        },
      ],
    },
    {
      title: t('termsPage.blockEight.header'),
      sections: [
        {
          tText: [t('termsPage.blockEight.subHeader')],
          subSections: [
            { title: t('termsPage.blockEight.subPointOne') },
            { title: t('termsPage.blockEight.subPointTwo') },
            { title: t('termsPage.blockEight.subPointThree') },
            { title: t('termsPage.blockEight.subPointFour') },
            { title: t('termsPage.blockEight.subPointFive') },
            { title: t('termsPage.blockEight.subPointSix') },
            { title: t('termsPage.blockEight.subPointSeven') },
          ],
          dTexts: [t('termsPage.blockEight.subText')],
        },
        {
          subTitle: t('termsPage.blockEight.pointTwo.header'),
          text: t('termsPage.blockEight.pointTwo.text'),
        },
        {
          subTitle: t('termsPage.blockEight.pointThree.header'),
          text: t('termsPage.blockEight.pointThree.text'),
        },
        {
          subTitle: t('termsPage.blockEight.pointFour.header'),
          text: t('termsPage.blockEight.pointFour.text'),
        },
        {
          subTitle: t('termsPage.blockEight.pointFive.header'),
          text: t('termsPage.blockEight.pointFive.text'),
        },
        {
          subTitle: t('termsPage.blockEight.pointSix.header'),
          text: t('termsPage.blockEight.pointSix.text'),
        },
        {
          subTitle: t('termsPage.blockEight.pointSeven.header'),
          text: t('termsPage.blockEight.pointSeven.text'),
        },
        {
          subTitle: t('termsPage.blockEight.pointEight.header'),
          text: t('termsPage.blockEight.pointEight.text'),
        },
        {
          subTitle: t('termsPage.blockEight.pointNine.header'),
          text: t('termsPage.blockEight.pointNine.text'),
        },
        {
          subTitle: t('termsPage.blockEight.pointTen.header'),
          text: t('termsPage.blockEight.pointTen.text'),
        },
        {
          dTexts: [
            t('termsPage.blockEight.p1'),
            t('termsPage.blockEight.p2'),
            t('termsPage.blockEight.p3'),
          ],
        },
      ],
    },
    {
      title: t('termsPage.blockNine.header'),
      sections: [
        {
          tText: [t('termsPage.blockNine.text'), t('termsPage.blockNine.subHeader')],
          subSections: [
            { title: t('termsPage.blockNine.a') },
            { title: t('termsPage.blockNine.b') },
          ],
        },
      ],
    },
  ];

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
        contentMarginBottom={170}
        burgerList={
          <BurgerList isVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />
        }
      >
        <ScrollView>
          <View>
            <View style={styles.container}>
              <FamilyEmblem height={140} width={140} />
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
                  <Text
                    style={[
                      styles.accordionTitle,
                      expanded === index && { color: colors.earthy_Brown },
                    ]}
                  >
                    {item.title}
                  </Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <LineWithCircle lineWidth={width - 100} />
                    {expanded === index ? (
                      <View style={{ transform: [{ rotate: '180deg' }] }}>
                        <ArrowDownIcon />
                      </View>
                    ) : (
                      <ArrowDownIcon />
                    )}
                  </View>
                </TouchableOpacity>
                {expanded === index && (
                  <View>
                    {item.sections?.map((section, secIndex) => (
                      <View key={secIndex}>
                        {section.subTitle && (
                          <Text
                            style={styles.subTitle}
                          >{`${secIndex + 1}. ${section.subTitle}`}</Text>
                        )}
                        {section.text && <Text style={[styles.sectionText]}>{section.text}</Text>}
                        {section.subSections && (
                          <View>
                            {section.tText?.map((tText, tTextIndex) => (
                              <Text key={tTextIndex} style={styles.tText}>
                                {tText}
                              </Text>
                            ))}
                            {section.subSections.map((subSection, subSecIndex) => (
                              <Text
                                key={subSecIndex}
                                style={styles.text}
                              >{`- ${subSection.title}`}</Text>
                            ))}
                          </View>
                        )}
                        {section.dTexts?.map((dText, dTextIndex) => (
                          <Text key={dTextIndex} style={styles.dText}>
                            {dText}
                          </Text>
                        ))}
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </EmptyLayout>
    </>
  );
};

export default FAQ;
