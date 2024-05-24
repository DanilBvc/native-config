export interface DataPickerProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
  additionalStyles?: Record<string, number>;
}
