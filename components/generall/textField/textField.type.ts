export interface textFieldProps {
  value: string;
  name: string;
  onChange: (name: string, value: string) => void;
  placeholder: string;
  validation: RegExp;
  error: boolean;
  errorMessage: string;
  additionalStyles?: Record<string, number>;
  placeholderColor?: string;
}
