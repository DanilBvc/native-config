import { Link, useNavigation } from '@react-navigation/native';
import React, { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
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
import { nameRegex, passwordRegex } from '../../../static/regex';
import { styles } from './buyPackage.style';

interface FormData {
  full_name: string;
  date_of_birth: Date | null;
  date_of_death: Date | null;
  qr_code_password: string;
  special_wishes: string;
  how_did_you_hear_about_us: string;

  order_full_name: string;
  order_date_of_birth: Date | null;
  order_date_of_death: Date | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BuyPackageCard = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { card } = route.params;
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    date_of_birth: null,
    date_of_death: null,
    qr_code_password: '',
    special_wishes: '',
    how_did_you_hear_about_us: '',

    order_date_of_birth: null,
    order_date_of_death: null,
    order_full_name: '',
  });

  const options = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const standardOptions: Array<{ component: any; props: Record<string, any>; label: string }> = [
      {
        component: OrderForSomeoneElse,
        props: {
          formData,
          setFormData,
        },
        label: 'Order for someone else',
      },
    ];

    if (card === 'MEDIUM' || card === 'MAX') {
      standardOptions.unshift({
        component: SetQrCodePassword,
        props: {
          formData,
          onChange,
        },
        label: 'Set a password for the QR code',
      });
    }

    if (card === 'MAX') {
      standardOptions.push({
        component: SpecialWishes,
        props: {
          formData,
          onChange,
        },
        label: 'Special Wishes',
      });
    }

    return standardOptions;
  }, [formData]);

  const [openOptions, setOpenOptions] = useState<Record<number, boolean>>({});

  function onChange (name: string, value: string) {
    setFormData({ ...formData, [name]: value });
  }

  const handleNext = () => {
    navigation.navigate('BuyPackage2' as never);
  };

  const toggleOption = (index: number) => {
    setOpenOptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <EmptyLayout
      additionalControl={
        <Link to={{ screen: 'Welcome' }}>
          <HomeSvg />
        </Link>
      }
      footerControl={
        <View style={styles.footerBtnWrapper}>
          <Button
            additionalStyles={{ borderRadius: 12, marginTop: 20 }}
            onPress={handleNext}
            text={'Next'}
          />
        </View>
      }
      contentMarginBottom={70}
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <View>
              <Text style={styles.orderTitle}>Enter data to create a new user</Text>
              <LineWithCircle lineWidth={'80%'} />
              <Text style={styles.cardName}>{card}</Text>
            </View>
            <View>
              <Text style={styles.inputTitle}>Account Name</Text>
              <TextField
                name={'full_name'}
                value={formData.full_name}
                onChange={onChange}
                placeholder={t('auth.email')}
                errorMessage={'Invalid email'}
                validation={nameRegex}
                additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                placeholderColor={colors.amberwood_Brown}
              />
            </View>
            <View style={styles.dateInputs}>
              <View style={styles.dateInput}>
                <Text style={{ ...styles.inputTitle, marginBottom: 10 }}>Date of birth</Text>
                <LineWithCircle lineWidth={'80%'} />
                <DatePicker
                  additionalStyles={{ marginTop: 30 }}
                  date={formData.date_of_birth}
                  setDate={(date: Date | null) => {
                    setFormData({ ...formData, date_of_birth: date });
                  }}
                />
              </View>
              <View style={styles.dateInput}>
                <Text style={{ ...styles.inputTitle, textAlign: 'right', marginBottom: 10 }}>
                  Date of death
                </Text>
                <LineWithCircle rotate="180deg" lineWidth={'80%'} />
                <DatePicker
                  additionalStyles={{ marginTop: 30 }}
                  date={formData.date_of_death}
                  setDate={(date: Date | null) => {
                    setFormData({ ...formData, date_of_death: date });
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
                      setChecked={() => { toggleOption(index); }}
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
              <Text style={styles.inputTitle}>How did you hear about us ?</Text>
              <TextField
                name={'how_did_you_hear_about_us'}
                value={formData.how_did_you_hear_about_us}
                onChange={onChange}
                placeholder={'Write here...'}
                errorMessage={'Not valid input'}
                validation={/.{1,}/}
                additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                placeholderColor={colors.amberwood_Brown}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </EmptyLayout>
  );
};

export default BuyPackageCard;

const SetQrCodePassword = ({
  formData,
  onChange,
}: {
  formData: FormData;
  onChange: (name: string, value: string) => void;
}) => {
  return (
    <TextField
      name={'qr_code_password'}
      value={formData.qr_code_password}
      onChange={onChange}
      placeholder={'Enter password for QR code'}
      errorMessage={'Not valid input'}
      validation={passwordRegex}
      additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
      placeholderColor={colors.amberwood_Brown}
    />
  );
};

const OrderForSomeoneElse = ({
  formData,
  setFormData,
}: {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}) => {
  return (
    <View style={{ ...styles.form, paddingBottom: 0 }}>
      <View style={styles.dateInputs}>
        <View style={styles.dateInput}>
          <Text style={{ ...styles.inputTitle, marginBottom: 10 }}>Date of birth</Text>
          <LineWithCircle lineWidth={'80%'} />
          <DatePicker
            additionalStyles={{ marginTop: 30 }}
            date={formData.order_date_of_birth}
            setDate={(date: Date | null) => {
              setFormData((prev) => {
                return {
                  ...prev,
                  order_date_of_birth: date,
                };
              });
            }}
          />
        </View>
        <View style={styles.dateInput}>
          <Text style={{ ...styles.inputTitle, textAlign: 'right', marginBottom: 10 }}>
            Date of death
          </Text>
          <LineWithCircle rotate="180deg" lineWidth={'80%'} />
          <DatePicker
            additionalStyles={{ marginTop: 30 }}
            date={formData.order_date_of_death}
            setDate={(date: Date | null) => {
              setFormData((prev) => {
                return {
                  ...prev,
                  order_date_of_death: date,
                };
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const SpecialWishes = ({
  formData,
  onChange,
}: {
  formData: FormData;
  onChange: (name: string, value: string) => void;
}) => {
  return (
    <TextField
      name={'special_wishes'}
      value={formData.special_wishes}
      onChange={onChange}
      placeholder={'Enter password for QR code'}
      errorMessage={'Not valid input'}
      validation={passwordRegex}
      additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
      placeholderColor={colors.amberwood_Brown}
    />
  );
};
