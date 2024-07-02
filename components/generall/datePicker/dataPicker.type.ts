import { type StyleProp, type ViewStyle } from 'react-native';

export interface DataPickerProps {
  date: Date | null;
  setDate: (date: string | null) => void;
  additionalStyles: StyleProp<ViewStyle>;
}
