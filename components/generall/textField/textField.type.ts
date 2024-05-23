export interface textFieldProps {
  value: string;
  name: string;
  onChange: (name: string, value: string) => void;
  placeholder: string;
  validation: RegExp;
  error: boolean;
}
