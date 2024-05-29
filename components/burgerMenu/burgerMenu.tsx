import React, { type FC } from 'react';
import { TouchableOpacity, type TouchableOpacityProps, type ViewStyle } from 'react-native';
import { CloseIcon, DropDownIcon } from '../../assets/icons/drop-down';

interface Props {
  isBurgerMenuVisible: boolean;
  setBurgerMenuVisible: (value: boolean) => void;
  style?: ViewStyle;
}

const BurgerMenu: FC<Props> = ({ isBurgerMenuVisible, setBurgerMenuVisible, style }) => {
  const handlePress = () => {
    setBurgerMenuVisible(!isBurgerMenuVisible);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style as TouchableOpacityProps['style']}>
      {isBurgerMenuVisible ? <CloseIcon /> : <DropDownIcon />}
    </TouchableOpacity>
  );
};

export default BurgerMenu;
