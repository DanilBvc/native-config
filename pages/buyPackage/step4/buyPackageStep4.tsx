import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { Link } from '@react-navigation/native';
import { HomeSvg } from '../../../assets/icons/qr-code';
import { styles } from './buyPackageStep4.style';
import Button from '../../../components/generall/button/button';
import LineWithCircle from '../../../components/lineWithCircle/lineWithCircle';
import { useTranslation } from 'react-i18next';
import Checkbox from '../../../components/generall/checkbox/checkbox';
import TextField from '../../../components/generall/textField/textField';
import { colors } from '../../../static/colors';
import TextArea from '../../../components/generall/textArea/textArea';
import BackgroundEmblem from '../../../static/backgroundEmblem';

const BuyPackageStep4 = () => {
  const { t } = useTranslation();
  const handleNext = () => {};

  const [formData, setFormData] = useState({
    method: 'fedex',
    address: '',
    zip: '',
    deliveryInstruction: false,
    deliveryText: '',
    acceptTermsStart: false,
  });

  const onChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
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
              text={t('payload.buy')}
            />
          </View>
        }
        contentMarginBottom={170}
      >
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.layout}>
              <View style={{ marginBottom: 52 }}>
                <Text style={styles.orderTitle}>{t('payload.methodDelivery')}</Text>
                <LineWithCircle lineWidth={'80%'} />
              </View>
              <View style={styles.spaceBetween}>
                <View style={{ width: '46%' }}>
                  <Checkbox
                    label="FedEx"
                    additionalStyles={{ width: '60%' }}
                    checked={formData.method === 'fedex'}
                    setChecked={() => {
                      setFormData((prev) => {
                        return { ...prev, method: 'fedex' };
                      });
                    }}
                  />
                </View>
                <View style={{ width: '46%' }}>
                  <Checkbox
                    label="USPS"
                    additionalStyles={{ width: '60%' }}
                    checked={formData.method === 'usps'}
                    setChecked={() => {
                      setFormData((prev) => {
                        return { ...prev, method: 'usps' };
                      });
                    }}
                  />
                </View>
              </View>
              <View style={styles.spaceBetween}>
                <View style={{ width: '46%' }}>
                  <Text style={styles.inputTitle}>{t('payload.address')}</Text>
                  <TextField
                    name={'address'}
                    value={formData.address}
                    onChange={onChange}
                    placeholder={t('payload.addressPlaceholder')}
                    additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                    placeholderColor={colors.amberwood_Brown}
                  />
                </View>
                <View style={{ width: '46%' }}>
                  <Text style={styles.inputTitle}>{t('payload.addressIndex')}</Text>
                  <TextField
                    name={'addressIndex'}
                    value={formData.zip}
                    onChange={onChange}
                    placeholder={t('payload.addressIndex')}
                    additionalStyles={{ borderRadius: 12, paddingLeft: 10 }}
                    placeholderColor={colors.amberwood_Brown}
                  />
                </View>
              </View>
              <View>
                <Checkbox
                  label={t('payload.instructionsDelivery')}
                  checked={formData.deliveryInstruction}
                  setChecked={() => {
                    setFormData((prev) => {
                      return { ...prev, deliveryInstruction: !prev.deliveryInstruction };
                    });
                  }}
                  additionalStyles={{ width: '58%' }}
                />
                {formData.deliveryInstruction && (
                  <TextArea
                    additionalStyles={{ marginTop: 20 }}
                    name="deliveryText"
                    value={formData.deliveryText}
                    onChange={onChange}
                    placeholder={t('payload.instructionsDeliveryPlaceholder')}
                  />
                )}
              </View>
              <Checkbox
                label={t('payload.acceptTermsStart')}
                checked={formData.acceptTermsStart}
                setChecked={() => {
                  setFormData((prev) => {
                    return { ...prev, acceptTermsStart: !prev.acceptTermsStart };
                  });
                }}
              />
              <Text style={styles.textTerms}>{t('payload.acceptTerms')}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </EmptyLayout>
      <BackgroundEmblem />
    </>
  );
};

export default BuyPackageStep4;
