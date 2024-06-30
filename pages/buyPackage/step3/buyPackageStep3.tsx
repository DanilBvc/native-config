import React, { useRef } from 'react';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { Link } from '@react-navigation/native';
import { HomeSvg } from '../../../assets/icons/qr-code';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Button from '../../../components/generall/button/button';
import { styles } from './buyPackageStep3.style';
import { useTranslation } from 'react-i18next';
import LineWithCircle from '../../../components/lineWithCircle/lineWithCircle';
import TextField from '../../../components/generall/textField/textField';
import { emailRegex, nameRegex } from '../../../static/regex';
import { colors } from '../../../static/colors';
import PhoneInput from 'react-native-phone-number-input';
import Checkbox from '../../../components/generall/checkbox/checkbox';
import { useTypedNavigation } from '../../../hooks/useTypedNavigation';
import BackgroundEmblem from '../../../static/backgroundEmblem';
import useOrderStore from '../../../store/order/store';

const BuyPackageStep3 = () => {
  const order = useOrderStore((state) => state.order);
  const updateOrderData = useOrderStore((state) => state.updateOrderData);
  const phoneInput = useRef<PhoneInput>(null);
  const navigation = useTypedNavigation();
  const { t } = useTranslation();

  const onChange = (name: string, value: string) => {
    updateOrderData({ [name]: value });
  };

  const setValue = (value: string) => {
    updateOrderData({ phoneNumber: value });
  };

  const setFormattedValue = (value: string) => {
    updateOrderData({ phoneNumber: value });
  };

  const handleNext = () => {
    navigation.navigate('BuyPackage4');
  };

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
              disabled={!order.fullName || !order.phoneNumber || !order.email || !order.middleName}
            />
          </View>
        }
        contentMarginBottom={170}
      >
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.layout}>
              <View style={{ marginBottom: 52 }}>
                <Text style={styles.orderTitle}>{t('payload.orderStep')}</Text>
                <LineWithCircle lineWidth={'80%'} />
              </View>
              <View>
                <Text style={styles.inputTitle}>{t('payload.fullName')}</Text>
                <TextField
                  name={'fullName'}
                  value={order.fullName}
                  onChange={onChange}
                  placeholder={t('payload.PlaceholderAllName')}
                  additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                  placeholderColor={colors.amberwood_Brown}
                />
              </View>
              <View>
                <Text style={styles.inputTitle}>{t('payload.middleName')}</Text>
                <TextField
                  name={'middleName'}
                  value={order.middleName}
                  onChange={onChange}
                  placeholder={t('payload.PlaceholderMiddleName')}
                  additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                  placeholderColor={colors.amberwood_Brown}
                />
              </View>
              <View>
                <Text style={styles.inputTitle}>{t('payload.phoneNumber')}</Text>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={order.phoneNumber}
                  defaultCode="UA"
                  layout="first"
                  onChangeText={(text) => {
                    setValue(text);
                  }}
                  onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                  }}
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
                  name={'email'}
                  value={order.email}
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
                  checked={order.gift}
                  setChecked={() => {
                    updateOrderData({ gift: !order.gift })
                  }}
                />
                {order.gift && (
                  <>
                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.inputTitle}>{t('payload.fullName')}</Text>
                      <TextField
                        name={'giftFullName'}
                        value={order.giftFullName}
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
                        name={'giftMiddleName'}
                        value={order.giftMiddleName}
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
      <BackgroundEmblem />
    </>
  );
};

export default BuyPackageStep3;
