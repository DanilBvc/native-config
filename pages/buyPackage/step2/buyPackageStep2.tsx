import { Link } from '@react-navigation/native';
import React, { Fragment, useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { HomeSvg } from '../../../assets/icons/qr-code';
import LineWithCircle from '../../../components/lineWithCircle/lineWithCircle';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { colors } from '../../../static/colors';
import FamilyEmblem from '../../../static/familyEmblem';
import { style } from './buyPackageStep2.style';
import { useTranslation } from 'react-i18next';
import Checkbox from '../../../components/generall/checkbox/checkbox';
import TextField from '../../../components/generall/textField/textField';
import { nameRegex } from '../../../static/regex';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/generall/button/button';
import { useTypedNavigation } from '../../../hooks/useTypedNavigation';

interface FormData {
  orderEngraving: string;
  additionalService: boolean;
}

interface OrderEngravingProps {
  formData: FormData;
  onChange: (name: string, value: string) => void;
}

const OrderEngraving: React.FC<OrderEngravingProps> = ({ formData, onChange }) => {
  const { t } = useTranslation();
  return (
    <TextField
      name={'orderEngraving'}
      value={formData.orderEngraving}
      onChange={onChange}
      placeholder={t('payload.engravingBoxes')}
      errorMessage={'Not valid input'}
      validation={nameRegex}
      additionalStyles={style.inputTitle}
      placeholderColor={colors.amberwood_Brown}
    />
  );
};

interface OrderEngravingOption {
  component: React.ComponentType<OrderEngravingProps>;
  props: OrderEngravingProps;
  label: string;
}

interface GeneralOption {
  component: React.ExoticComponent<{ children?: React.ReactNode }>;
  props: null;
  label: string;
}

type Option = OrderEngravingOption | GeneralOption;

const BuyPackageStep2: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useTypedNavigation();
  const defaultCasket = t('payload.defaultCasket');
  const premiumCasket = t('payload.premiumCasket');

  const [formData, setFormData] = useState<FormData>({
    orderEngraving: '',
    additionalService: false,
  });

  const onChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const [selectedOption, setSelectedOption] = useState(defaultCasket);

  const [openOptions, setOpenOptions] = useState<Record<number, boolean>>({});

  const toggleOption = (index: number) => {
    setOpenOptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const options: Option[] = useMemo(
    () => [
      {
        component: OrderEngraving,
        props: {
          formData,
          onChange,
        },
        label: t('payload.engravingBoxes'),
      },
      {
        component: Fragment,
        props: null,
        label: t('payload.isCasketWithImage'),
      },
    ],
    [formData, onChange]
  );

  const handleNext = () => {
    navigation.navigate('BuyPackage3');
  };

  return (
    <EmptyLayout
      additionalControl={
        <Link to={{ screen: 'Welcome' }}>
          <HomeSvg />
        </Link>
      }
      footerControl={
        <View style={style.footerBtnWrapper}>
          <Button
            additionalStyles={{ borderRadius: 12, marginTop: 20, width: '50%' }}
            onPress={handleNext}
            text={t('payload.next')}
          />
        </View>
      }
      contentMarginBottom={170}
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.layout}>
            <View style={{ marginBottom: 52 }}>
              <Text style={style.orderTitle}>{t('payload.boxStep')}</Text>
              <LineWithCircle lineWidth={'80%'} />
              <FamilyEmblem width={140} height={140} additionalStyle={style.imageSize} />
            </View>
            <View style={style.spaceBetween}>
              <Pressable
                onPress={() => {
                  setSelectedOption(defaultCasket);
                }}
                style={style.spaceBetweenItem}
              >
                <Text
                  style={{
                    ...style.title,
                    color:
                      selectedOption !== defaultCasket
                        ? colors.amberwood_Brown
                        : colors.earthy_Brown,
                    marginRight: 10,
                  }}
                >
                  {defaultCasket}
                </Text>
                <LineWithCircle
                  backgroundColor={
                    selectedOption !== defaultCasket ? colors.amberwood_Brown : colors.earthy_Brown
                  }
                  lineWidth={'80%'}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedOption(premiumCasket);
                }}
                style={style.spaceBetweenItem}
              >
                <Text
                  style={{
                    ...style.title,
                    textAlign: 'right',
                    marginLeft: 10,
                    color:
                      selectedOption !== premiumCasket
                        ? colors.amberwood_Brown
                        : colors.earthy_Brown,
                  }}
                >
                  {premiumCasket}
                </Text>
                <LineWithCircle
                  backgroundColor={
                    selectedOption !== premiumCasket ? colors.amberwood_Brown : colors.earthy_Brown
                  }
                  rotate="180deg"
                  lineWidth={'80%'}
                />
              </Pressable>
            </View>
            <Image
              source={
                selectedOption === premiumCasket
                  ? require('../../../assets/icons/premiumBox.png')
                  : require('../../../assets/icons/defaultBox.png')
              }
              style={style.boxImage}
            />
            <View>
              {options.map((item, index) => {
                const Component = item.component;
                return (
                  <View key={index} style={{ marginTop: 12 }}>
                    <Checkbox
                      label={item.label}
                      checked={!!openOptions[index]}
                      setChecked={() => {
                        toggleOption(index);
                      }}
                    />
                    {openOptions[index] && item.props && (
                      <View style={style.option}>
                        <Component {...item.props} />
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </EmptyLayout>
  );
};

export default BuyPackageStep2;
