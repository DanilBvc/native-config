import React, { type FC, type ReactNode } from 'react';
import { Modal } from 'react-native';

const CustomModal: FC<{ open: boolean, close: () => void, children: ReactNode }> = ({ close, open, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {}}>
     {children}
    </Modal>
  );
}

export default CustomModal;
