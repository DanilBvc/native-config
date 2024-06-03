import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { Link } from '@react-navigation/native';
import { HomeSvg } from '../../../assets/icons/qr-code';
import { styles } from './buyPackageStep4.style';
import Button from '../../../components/generall/button/button';
import LineWithCircle from '../../../components/lineWithCircle/lineWithCircle';
import { familyLogoUrl } from '../../../static/urls';
import { useTranslation } from 'react-i18next';
import Checkbox from '../../../components/generall/checkbox/checkbox';

const BuyPackageStep4 = () => {
  const { t } = useTranslation();
  const handleNext = () => {};

  const [formData, setFormData] = useState({
    method: 'fedex',
  });

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
              <Text style={styles.orderTitle}>{t('payload.methodDelivery')}</Text>
              <LineWithCircle lineWidth={'80%'} />
              <Image
                source={{
                  uri: familyLogoUrl,
                }}
                style={styles.imageSize}
              />
            </View>
            <View style={styles.spaceBetween}>
              <Checkbox
                label="FedEx"
                additionalStyles={{ width: '30%' }}
                checked={formData.method === 'fedex'}
                setChecked={() => {
                  setFormData((prev) => {
                    return { ...prev, method: 'fedex' };
                  });
                }}
              />
              <Checkbox
                label="USPS"
                additionalStyles={{ width: '30%' }}
                checked={formData.method === 'usps'}
                setChecked={() => {
                  setFormData((prev) => {
                    return { ...prev, method: 'usps' };
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </EmptyLayout>
  );
};

export default BuyPackageStep4;
