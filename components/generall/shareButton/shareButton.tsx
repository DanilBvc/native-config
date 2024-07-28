import React, { type FC } from 'react';
import { ShareSvg } from '../../../assets/icons/share';
import { Clipboard, Pressable, Share, Alert } from 'react-native';
import { baseFrontUrl } from '../../../utils/network';
import i18next from 'i18next';

const ShareButton: FC<{ id: string, color: string }> = ({ id, color }) => {
  const currentLang = i18next.language;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${baseFrontUrl}/${currentLang}/customer/tree/public/${id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: { message: string; }) {
      Alert.alert(error.message);
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(`${baseFrontUrl}/${currentLang}/customer/tree/public/${id}`);
    Alert.alert(i18next.t('Link copied to clipboard!'));
  };

  return (
    <Pressable onPress={onShare} onLongPress={copyToClipboard}>
      <ShareSvg fill={color} />
    </Pressable>
  );
};

export default ShareButton;
