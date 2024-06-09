import React, { type FC } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import EmptyLayout from '../../../layouts/emptyLayout/emptyLayout';
import { Link, useNavigation } from '@react-navigation/native';
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
import useOrderStore from '../../../store/order/store';
import { type Order, TypeOfMail } from '../../../static/types/orderTypes/types';
import { PaymentService } from '../../../services/paymentService/paymentService';
import { TreeService } from '../../../services/treeService/treeService';
import i18next from '../../../services/i18nextjs';

const Delivery: FC<{ order: Order, updateOrderData: (orderData: Partial<Order>) => void }> = ({ order, updateOrderData }) => {
  const options = {
    en: [
      { label: 'FedEx', type: TypeOfMail.FedEx },
      { label: 'USPS', type: TypeOfMail.USPS }
    ],
    pl: [
      { label: 'InPost', type: TypeOfMail.InPost },
      { label: 'Poczta Polska', type: TypeOfMail['Poczta Polska'] }
    ],
    ua: [
      { label: 'Nova Poshta', type: TypeOfMail['Nova Poshta'] },
      { label: 'Ukr Poshta', type: TypeOfMail['Ukr Poshta'] }
    ]
  };

  const langOptions = options[i18next.language as keyof typeof options];
  if (!langOptions) return null;

  return (
    <>
      {langOptions.map(option => (
        <View key={option.type} style={{ width: '46%' }}>
          <Checkbox
            label={option.label}
            additionalStyles={{ width: '60%' }}
            checked={order.typeOfMail === option.type}
            setChecked={() => { updateOrderData({ typeOfMail: option.type }); }}
          />
        </View>
      ))}
    </>
  );
};

const BuyPackageStep4 = () => {
  const { t } = useTranslation();
  const order = useOrderStore((state) => state.order);
  const navigation = useNavigation();
  const handleNext = async () => {
    try {
      const trees = await TreeService.getTypesTrees()
      const typeId = trees.find((type) => type.name.toLowerCase() === order.selectedPackage.toLowerCase())?.id
      if (!typeId) throw new Error('Type not found')
      const response = await PaymentService.createPayload({ ...order, type_id: typeId, language: i18next.language });
      const route = {
        name: 'WebView',
        params: { url: response.url }
      }
      navigation.navigate(route as never)
    } catch (Err) {
    }
  };
  const updateOrderData = useOrderStore((state) => state.updateOrderData);
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [delivery, setDelivery] = React.useState(false);
  const onChange = (name: string, value: string) => {
    updateOrderData({ [name]: value });
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
              disabled={!order.address || !order.addressIndex || !acceptTerms}
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
               <Delivery order={order} updateOrderData={updateOrderData } />
              </View>
              <View style={styles.spaceBetween}>
                <View style={{ width: '46%' }}>
                  <Text style={styles.inputTitle}>{t('payload.address')}</Text>
                  <TextField
                    name={'address'}
                    value={order.address}
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
                    value={order.addressIndex}
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
                  checked={delivery}
                  setChecked={() => {
                    setDelivery(!delivery);
                  }}
                  additionalStyles={{ width: '58%' }}
                />
                {delivery && (
                  <TextArea
                    additionalStyles={{ marginTop: 20 }}
                    name="instructionsDelivery"
                    value={order.instructionsDelivery}
                    onChange={onChange}
                    placeholder={t('payload.instructionsDeliveryPlaceholder')}
                  />
                )}
              </View>
              <Checkbox
                label={t('payload.acceptTermsStart')}
                checked={acceptTerms}
                setChecked={() => {
                  setAcceptTerms(!acceptTerms);
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
