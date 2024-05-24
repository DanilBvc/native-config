import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { HomeSvg } from '../../../assets/icons/qr-code';
import Button from '../../../components/generall/button/button';
import DatePicker from '../../../components/generall/datePicker/datePicker';
import TextField from '../../../components/generall/textField/textField';
import LineWithCircle from '../../../components/lineWithCircle/lineWithCircle';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { colors } from '../../../static/colors';
import { nameRegex } from '../../../static/regex';
import { styles } from './buyPackage.style';

interface FormData {
  full_name: string;
  date_of_birth: Date | null;
  date_of_death: Date | null;

  how_did_you_hear_about_us: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BuyPackageCard = ({ route }: { route: any }) => {
  const { t } = useTranslation();
  const { card } = route.params;

  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    date_of_birth: null,
    date_of_death: null,
    how_did_you_hear_about_us: '',
  });

  const onChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {};

  return (
    <EmptyLayout
      additionalControl={
        <Link to={{ screen: 'Welcome' }}>
          <HomeSvg />
        </Link>
      }
    >
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
          <Button
            additionalStyles={{ borderRadius: 12, marginTop: 20 }}
            onPress={handleNext}
            text={'Next'}
          />
        </View>
      </View>
    </EmptyLayout>
  );
};

export default BuyPackageCard;
