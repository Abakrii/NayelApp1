import React from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import {PublisherTypePickerProps} from './interfaces';
import {publisherTypeElements} from './utils';
const PublisherTypePicker = ({
  publisherType,
  setPublisherType,
}: PublisherTypePickerProps) => {
  const publisherTypeArr = publisherTypeElements();
  const {pickerView} = styles || {};
  return (
    <Picker
      selectedValue={publisherType}
      style={pickerView}
      onValueChange={setPublisherType}>
      {publisherTypeArr.map(item => {
        const {id, label, value} = item;
        return <Picker.Item key={id} label={label} value={value} />;
      })}
    </Picker>
  );
};

export default PublisherTypePicker;
