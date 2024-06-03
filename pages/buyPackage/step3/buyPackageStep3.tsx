import React, { useRef, useState } from 'react';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { Link } from '@react-navigation/native';
import { HomeSvg } from '../../../assets/icons/qr-code';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Button from '../../../components/generall/button/button';
import { styles } from './buyPackageStep3.style';
import { useTranslation } from 'react-i18next';
import LineWithCircle from '../../../components/lineWithCircle/lineWithCircle';
import { familyLogoUrl } from '../../../static/urls';
import TextField from '../../../components/generall/textField/textField';
import { emailRegex, nameRegex } from '../../../static/regex';
import { colors } from '../../../static/colors';
import PhoneInput from 'react-native-phone-number-input';
import Checkbox from '../../../components/generall/checkbox/checkbox';

interface FormData {
  fullName: string;
  middleName: string;
  phoneNumber: string;
  email: string;
  someoneElse: boolean;
}

const BuyPackageStep3 = () => {
  const phoneInput = useRef<PhoneInput>(null);
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    middleName: '',
    phoneNumber: '',
    email: '',
    someoneElse: false,
  });

  const onChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const setValue = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const setFormattedValue = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleNext = () => {
    // Handle the next step logic
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
      contentMarginBottom={170}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.layout}>
            <View style={{ marginBottom: 52 }}>
              <Text style={styles.orderTitle}>{t('payload.orderStep')}</Text>
              <LineWithCircle lineWidth={'80%'} />
              <Image
                source={{
                  uri: familyLogoUrl,
                }}
                style={styles.imageSize}
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>{t('payload.fullName')}</Text>
              <TextField
                name={'fullName'}
                value={formData.fullName}
                onChange={onChange}
                placeholder={t('payload.PlaceholderAllName')}
                errorMessage={'Invalid email'}
                validation={nameRegex}
                additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                placeholderColor={colors.amberwood_Brown}
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>{t('payload.middleName')}</Text>
              <TextField
                name={'middleName'}
                value={formData.middleName}
                onChange={onChange}
                placeholder={t('payload.PlaceholderMiddleName')}
                errorMessage={'Invalid email'}
                validation={nameRegex}
                additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                placeholderColor={colors.amberwood_Brown}
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>{t('payload.phoneNumber')}</Text>
              <PhoneInput
                ref={phoneInput}
                defaultValue={formData.phoneNumber}
                defaultCode="UA"
                layout="first"
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                autoFocus
                containerStyle={{
                  width: '100%',
                  height: 60,
                  backgroundColor: 'transparent',
                }}
                flagButtonStyle={{
                  borderRadius: 12,
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: colors.earthy_Brown,
                }}
                textContainerStyle={{
                  borderRadius: 12,
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: colors.earthy_Brown,
                  marginLeft: 5,
                }}
                textInputProps={{
                  placeholderTextColor: colors.amberwood_Brown,
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  fontSize: 15,
                }}
                codeTextStyle={{
                  fontSize: 15,
                }}
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>{t('auth.email')}</Text>
              <TextField
                name={'middleName'}
                value={formData.middleName}
                onChange={onChange}
                placeholder={t('payload.PlaceholderEmail')}
                errorMessage={'Invalid email'}
                validation={emailRegex}
                additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                placeholderColor={colors.amberwood_Brown}
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <Checkbox
                label={t('payload.gift')}
                checked={formData.someoneElse}
                setChecked={() => {
                  setFormData((prev) => {
                    return { ...prev, someoneElse: !formData.someoneElse };
                  });
                }}
              />
              {formData.someoneElse && (
                <>
                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.inputTitle}>{t('payload.fullName')}</Text>
                    <TextField
                      name={'fullName'}
                      value={formData.fullName}
                      onChange={onChange}
                      placeholder={t('payload.PlaceholderAllName')}
                      errorMessage={'Invalid email'}
                      validation={nameRegex}
                      additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                      placeholderColor={colors.amberwood_Brown}
                    />
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.inputTitle}>{t('payload.middleName')}</Text>
                    <TextField
                      name={'middleName'}
                      value={formData.middleName}
                      onChange={onChange}
                      placeholder={t('payload.PlaceholderMiddleName')}
                      errorMessage={'Invalid email'}
                      validation={nameRegex}
                      additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                      placeholderColor={colors.amberwood_Brown}
                    />
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </EmptyLayout>
  );
};

export default BuyPackageStep3;