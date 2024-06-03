import { type StyleProp, type ViewStyle } from 'react-native';

export interface CheckBoxProps {
  label: string;
  checked: boolean;
  setChecked: () => void;
  additionalStyles?: StyleProp<ViewStyle>;
}
