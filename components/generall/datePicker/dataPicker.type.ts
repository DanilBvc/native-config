import { type StyleProp, type ViewStyle } from 'react-native';

export interface DataPickerProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
  additionalStyles: StyleProp<ViewStyle>;
}
