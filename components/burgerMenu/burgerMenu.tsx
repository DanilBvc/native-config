import React, { type FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { CloseIcon, DropDownIcon } from '../../assets/icons/drop-down';

interface Props {
  isBurgerMenuVisible: boolean;
  setBurgerMenuVisible: (value: boolean) => void;
}

const BurgerMenu: FC<Props> = ({ isBurgerMenuVisible, setBurgerMenuVisible }) => {
  return (
    <>
      {isBurgerMenuVisible
        ? (
        <TouchableOpacity
          onPress={() => {
            setBurgerMenuVisible(false);
          }}
        >
          <CloseIcon />
        </TouchableOpacity>
          )
        : (
        <TouchableOpacity
          onPress={() => {
            setBurgerMenuVisible(true);
          }}
        >
          <DropDownIcon />
        </TouchableOpacity>
          )}
    </>
  );
};

export default BurgerMenu;
