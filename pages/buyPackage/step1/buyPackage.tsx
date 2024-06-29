import { Link, useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { HomeSvg } from '../../../assets/icons/qr-code';
import Button from '../../../components/generall/button/button';
import Checkbox from '../../../components/generall/checkbox/checkbox';
import DatePicker from '../../../components/generall/datePicker/datePicker';
import TextField from '../../../components/generall/textField/textField';
import LineWithCircle from '../../../components/lineWithCircle/lineWithCircle';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { colors } from '../../../static/colors';
import { passwordRegex } from '../../../static/regex';
import { styles } from './buyPackage.style';
import TextArea from '../../../components/generall/textArea/textArea';
import BackgroundEmblem from '../../../static/backgroundEmblem';
import useOrderStore from '../../../store/order/store';
import { type Order } from '../../../static/types/orderTypes/types';

const BuyPackageCard = ({ route }: { route: { params: { card: string } } }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { card } = route.params;

  const order = useOrderStore((state) => state.order)
  const {
    dob, dod, hearAbout, accountName
  } = order
  const updateOrderData = useOrderStore((state) => state.updateOrderData);
  const onChange = (name: string, value: string) => {
    updateOrderData({ [name]: value })
  };
  const options = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const standardOptions: Array<{ component: any; props: { order: Order, updateOrderData?: (orderData: Partial<Order>) => void, onChange?: (name: string, value: string) => void }; label: string }> = [
      {
        component: OrderForSomeoneElse,
        props: {
          order,
          updateOrderData,
        },
        label: t('payload.gift'),
      },
    ];

    if (card === 'MEDIUM' || card === 'MAX') {
      standardOptions.unshift({
        component: SetQrCodePassword,
        props: {
          order,
          onChange,
        },
        label: t('payload.passwordQR'),
      });
    }

    if (card === 'MAX') {
      standardOptions.push({
        component: SpecialWishes,
        props: {
          order,
          onChange,
        },
        label: t('payload.specialWishes'),
      });
    }

    return standardOptions;
  }, [order]);

  const [openOptions, setOpenOptions] = useState<Record<number, boolean>>({});

  const handleNext = () => {
    navigation.navigate('BuyPackage2' as never);
  };

  const toggleOption = (index: number) => {
    setOpenOptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    updateOrderData({ selectedPackage: card })
  }, [card])

  return (
    <>
      <EmptyLayout
        additionalControl={
          <Link to={{ screen: 'Welcome' }}>
            <HomeSvg />
          </Link>
        }
        footerControl={
          <View style={styles.footerBtnWrapper}>
            <Button
              additionalStyles={{ borderRadius: 12, marginTop: 20, width: '50%' }}
              onPress={handleNext}
              text={t('payload.next')}
              disabled={!accountName}
            />
          </View>
        }
        contentMarginBottom={70}
      >
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.form}>
              <View>
                <Text style={styles.orderTitle}>{t('payload.userStep')}</Text>
                <LineWithCircle lineWidth={'80%'} />
                <Text style={styles.cardName}>{card}</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>{t('payload.accountName')}</Text>
                <TextField
                  name={'accountName'}
                  value={accountName}
                  onChange={onChange}
                  placeholder={t('payload.PIB')}
                  additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                  placeholderColor={colors.amberwood_Brown}
                />
              </View>
              <View style={styles.dateInputs}>
                <View style={styles.dateInput}>
                  <Text style={{ ...styles.inputTitle, marginBottom: 10 }}>{t('Dob')}</Text>
                  <LineWithCircle lineWidth={'80%'} />
                  <DatePicker
                    additionalStyles={{ marginTop: 30 }}
                    date={dob}
                    setDate={(date: Date | null) => {
                      if (date) {
                        updateOrderData({ dob: date })
                      }
                    }}
                  />
                </View>
                <View style={styles.dateInput}>
                  <Text style={{ ...styles.inputTitle, textAlign: 'right', marginBottom: 10 }}>
                    {t('Dod')}
                  </Text>
                  <LineWithCircle rotate="180deg" lineWidth={'80%'} />
                  <DatePicker
                    additionalStyles={{ marginTop: 30 }}
                    date={dod}
                    setDate={(date: Date | null) => {
                      if (date) {
                        updateOrderData({ dod: date })
                      }
                    }}
                  />
                </View>
              </View>
              <View style={styles.optionList}>
                {options.map((item, index) => {
                  const Component = item.component;
                  return (
                    <View key={index}>
                      <Checkbox
                        label={item.label}
                        checked={!!openOptions[index]}
                        setChecked={() => {
                          toggleOption(index);
                        }}
                      />
                      {openOptions[index] && (
                        <View style={styles.option}>
                          <Component {...item.props} />
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
              <View>
                <Text style={styles.inputTitle}>{t('payload.hearAbout')}</Text>
                <TextField
                  name={'hearAbout'}
                  value={hearAbout}
                  onChange={onChange}
                  placeholder={t('payload.hearAbout')}
                  errorMessage={'Not valid input'}
                  additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                  placeholderColor={colors.amberwood_Brown}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </EmptyLayout>
      <BackgroundEmblem />
    </>
  );
};

export default BuyPackageCard;

const SetQrCodePassword = ({
  order,
  onChange,
}: {
  order: Order;
  onChange: (name: string, value: string) => void;
}) => {
  const { t } = useTranslation();
  return (
    <TextField
      name={'password'}
      value={order.password}
      onChange={onChange}
      placeholder={t('payload.PlaceholderQR')}
      errorMessage={'Not valid input'}
      validation={passwordRegex}
      additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
      placeholderColor={colors.amberwood_Brown}
    />
  );
};

const OrderForSomeoneElse = ({
  order,
  updateOrderData,
}: {
  order: Order;
  updateOrderData: (orderData: Partial<Order>) => void;
}) => {
  const { t } = useTranslation();
  return (
    <View style={{ ...styles.form, paddingBottom: 0 }}>
      <View style={styles.dateInputs}>
        <View style={styles.dateInput}>
          <Text style={{ ...styles.inputTitle, marginBottom: 10 }}>{t('Dob')}</Text>
          <LineWithCircle lineWidth={'80%'} />
          <DatePicker
            additionalStyles={{ marginTop: 30 }}
            date={order.dob}
            setDate={(date: Date | null) => {
              if (date) {
                updateOrderData({ dob: date })
              }
            }}
          />
        </View>
        <View style={styles.dateInput}>
          <Text style={{ ...styles.inputTitle, textAlign: 'right', marginBottom: 10 }}>
            {t('Dod')}
          </Text>
          <LineWithCircle rotate="180deg" lineWidth={'80%'} />
          <DatePicker
            additionalStyles={{ marginTop: 30 }}
            date={order.dod}
            setDate={(date: Date | null) => {
              if (date) {
                updateOrderData({ dod: date });
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

const SpecialWishes = ({
  order,
  onChange,
}: {
  order: Order;
  onChange: (name: string, value: string) => void;
}) => {
  const { t } = useTranslation();
  return (
    <TextArea
      name={'specialWishes'}
      value={order.specialWishes}
      onChange={onChange}
      placeholder={t('payload.specialWishes')}
    ></TextArea>
  );
};
