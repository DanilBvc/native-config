import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { familyLogoUrl } from '../../static/urls';
import { styles } from './contactUs.style';
import EmptyLayout from '../../layouts/emptyLayout/emptyLayout';
import { useTranslation } from 'react-i18next';
import LineWithCircle from '../../components/lineWithCircle/lineWithCircle';
import { colors } from '../../static/colors';
import TextField from '../../components/generall/textField/textField';
import { emailRegex, nameRegex } from '../../static/regex';
import Button from '../../components/generall/button/button';
import Captcha from '../../components/captcha/Captcha';
import BottomNavigation from '../../components/generall/bottomNavigation/bottomNavigation';
import LocalizationSwitcher from '../../components/generall/localizationSwitcher/localizationSwitcher';
import { ArrowBack } from '../../assets/icons/arrow-back';
import { useNavigation } from '@react-navigation/native';
import { send } from '@emailjs/react-native';
interface TContactForm {
  category: 'technical' | 'business';
  email: string;
  message: string;
}

const ContactUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigation();

  const [contactForm, setContactFrom] = useState<TContactForm>({
    category: 'technical',
    email: '',
    message: '',
  });

  const [verify, setVerify] = useState<boolean>(false);

  const handleChange = (name: string, value: string) => {
    setContactFrom({ ...contactForm, [name]: value });
  };

  const sendEmail = async () => {
    const serviceId = 'service_dl2ql54';
    const templateId = 'template_486l9u9';
    const publicKey = 'KJZhgzb1gXkKCy5C_';

    if (!contactForm.email || !contactForm.message || !verify) return;

    try {
      await send(
        serviceId,
        templateId,
        {
          contactForm,
        },
        {
          publicKey,
        }
      );
    } catch (err) {}
  };

  const width = Dimensions.get('window').width / 2 - 40;
  return (
    <EmptyLayout
      additionalControl={
        <View style={styles.header}>
          <LocalizationSwitcher />
          <TouchableOpacity style={{ marginLeft: 5 }} onPress={navigate.goBack}>
            <ArrowBack />
          </TouchableOpacity>
        </View>
      }
      footerControl={<BottomNavigation />}
      contentMarginBottom={170}
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              source={{
                uri: familyLogoUrl,
              }}
              style={styles.imageSize}
            />
          </View>
          <Text style={styles.title}>{t('contactUs.contact')}</Text>
          <Text style={styles.description}>{t('contactUs.firstText')}</Text>
          <View style={styles.technicalContainer}>
            <TouchableOpacity
              onPress={() => {
                handleChange('category', 'technical');
              }}
            >
              <Text
                style={[
                  styles.category,
                  contactForm.category === 'technical' && styles.categoryActive,
                ]}
              >
                {t('contactUs.technical')}
              </Text>
              <LineWithCircle
                lineWidth={width}
                backgroundColor={
                  contactForm.category === 'technical' ? colors.earthy_Brown : 'rgba(0, 0, 0, 0.5)'
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleChange('category', 'business');
              }}
            >
              <Text
                style={[
                  styles.category,
                  styles.businessText,
                  contactForm.category === 'business' && styles.categoryActive,
                ]}
              >
                {t('contactUs.business')}
              </Text>
              <LineWithCircle
                lineWidth={width}
                rotate="180deg"
                backgroundColor={
                  contactForm.category === 'business' ? colors.earthy_Brown : 'rgba(0, 0, 0, 0.5)'
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <TextField
              additionalStyles={{ borderRadius: 12, paddingLeft: 14, height: 50 }}
              placeholderColor={colors.amberwood_Brown}
              value={contactForm.email}
              name="email"
              onChange={handleChange}
              placeholder="Please enter your email"
              validation={emailRegex}
            />
            <TextField
              additionalStyles={{ borderRadius: 12, paddingLeft: 14, height: 109, marginTop: 20 }}
              placeholderColor={colors.amberwood_Brown}
              value={contactForm.message}
              name="message"
              onChange={handleChange}
              placeholder="Please enter your message"
              validation={nameRegex}
            />
            {verify && (
              <Button
                text={t('contactUs.send')}
                onPress={sendEmail}
                additionalStyles={{ width: 158, marginTop: 20, borderRadius: 12 }}
              />
            )}
            {!verify && <Captcha onVerify={setVerify} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </EmptyLayout>
  );
};

export default ContactUs;
