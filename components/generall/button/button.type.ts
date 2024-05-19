import { type StyleProp, type ViewStyle } from 'react-native';

export interface buttonType {
  onPress: () => void;
  text: string;
  additionalStyles?: StyleProp<ViewStyle>;
}
