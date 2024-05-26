import React, { type FC } from 'react';
import { ShareSvg } from '../../../assets/icons/share';
import { Clipboard, Pressable } from 'react-native';
import { baseUrl } from '../../../utils/network';

const ShareButton: FC<{ id: string }> = ({ id }) => {
  const copyToClipboard = () => {
    Clipboard.setString(`${baseUrl}/customer/tree/public/${id}`);
  };
  return (
    <Pressable onPress={copyToClipboard}>
      <ShareSvg />
    </Pressable>
  );
};

export default ShareButton;
