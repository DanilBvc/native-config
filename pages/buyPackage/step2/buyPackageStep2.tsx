/* eslint-disable react/prop-types */
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
import useOrderStore from '../../../store/order/store';
import { TypeOfCasket, type Order } from '../../../static/types/orderTypes/types';

interface OrderEngravingProps {
  order: Order;
  onChange: (name: string, value: string | boolean) => void;
}

const OrderEngraving: React.FC<OrderEngravingProps> = ({ order, onChange }) => {
  const { t } = useTranslation();
  return (
    <TextField
      name={'engravingBoxes'}
      value={order.engravingBoxes}
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
  component: React.ComponentType<OrderEngravingProps> | typeof Fragment;
  props: OrderEngravingProps;
  label: string;
}

const BuyPackageStep2: React.FC = () => {
  const order = useOrderStore((state) => state.order);
  const updateOrderData = useOrderStore((state) => state.updateOrderData);
  const { typeOfCasket } = order;
  const { t } = useTranslation();
  const navigation = useTypedNavigation();
  const defaultCasket = t('payload.defaultCasket');
  const premiumCasket = t('payload.premiumCasket');

  const onChange = (name: string, value: string | boolean) => {
    updateOrderData({ [name]: value });
  };

  const [openOptions, setOpenOptions] = useState<Record<number, boolean>>({});

  const toggleOption = (index: number) => {
    setOpenOptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const options: OrderEngravingOption[] = useMemo(
    () => [
      {
        component: OrderEngraving,
        props: {
          order,
          onChange,
        },
        label: t('payload.engravingBoxes'),
      },
      {
        component: Fragment,
        props: {
          order,
          onChange,
        },
        label: t('payload.isCasketWithImage'),
      },
    ],
    [order, onChange]
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
                  updateOrderData({ typeOfCasket: TypeOfCasket.default });
                }}
                style={style.spaceBetweenItem}
              >
                <Text
                  style={{
                    ...style.title,
                    color:
                    typeOfCasket !== TypeOfCasket.default
                      ? colors.amberwood_Brown
                      : colors.earthy_Brown,
                    marginRight: 10,
                  }}
                >
                  {defaultCasket}
                </Text>
                <LineWithCircle
                  backgroundColor={
                    typeOfCasket !== TypeOfCasket.default ? colors.amberwood_Brown : colors.earthy_Brown
                  }
                  lineWidth={'80%'}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  updateOrderData({ typeOfCasket: TypeOfCasket.premium });
                }}
                style={style.spaceBetweenItem}
              >
                <Text
                  style={{
                    ...style.title,
                    textAlign: 'right',
                    marginLeft: 10,
                    color:
                    typeOfCasket !== TypeOfCasket.premium
                      ? colors.amberwood_Brown
                      : colors.earthy_Brown,
                  }}
                >
                  {premiumCasket}
                </Text>
                <LineWithCircle
                  backgroundColor={
                    typeOfCasket !== TypeOfCasket.premium ? colors.amberwood_Brown : colors.earthy_Brown
                  }
                  rotate="180deg"
                  lineWidth={'80%'}
                />
              </Pressable>
            </View>
            <Image
              source={
                typeOfCasket === TypeOfCasket.premium
                  ? require('../../../assets/icons/premiumBox.png')
                  : require('../../../assets/icons/defaultBox.png')
              }
              style={style.boxImage}
            />
            <View>
              {options.map((item, index) => {
                const Component = item.component;
                const props = item.props
                return (
                  <View key={index} style={{ marginTop: 12 }}>
                    <Checkbox
                      label={item.label}
                      checked={item.label === t('payload.isCasketWithImage') ? props.order.isCasketWithImage : !!openOptions[index]}
                      setChecked={() => {
                        if (item.label === t('payload.isCasketWithImage')) {
                          if (props) {
                            onChange('isCasketWithImage', !props.order.isCasketWithImage);
                          }
                        } else {
                          toggleOption(index);
                        }
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
