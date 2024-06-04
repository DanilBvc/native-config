import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Picker from 'react-native-date-picker';
import { FormatDate } from '../../../utils/formatDate';
import { styles } from './dataPicker.style';
import { type DataPickerProps } from './dataPicker.type';

const DatePicker = ({ date, setDate, additionalStyles }: DataPickerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.dataPicker, additionalStyles]}
      onPress={() => {
        setOpen(true);
      }}
    >
      <Text style={styles.date}>{date !== null ? FormatDate(date) : 'DD/MM/YYYY'}</Text>
      <Picker
        modal
        mode="date"
        minimumDate={new Date(1900, 0, 1)}
        maximumDate={new Date()}
        open={open}
        date={date ?? new Date()}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </TouchableOpacity>
  );
};

export default DatePicker;
