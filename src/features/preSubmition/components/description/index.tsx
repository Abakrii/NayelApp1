import React from 'react';

import {View, TextInput} from 'react-native';
import styles from '../../styels';
import {DescriptionProps} from './interfaces';
const Description = ({description, setDescription}: DescriptionProps) => {
  const {textView, descriptionStyle} = styles || {};
  return (
    <View style={textView}>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={setDescription}
        value={description}
        style={descriptionStyle}
        placeholder={'please enter your description'}
      />
    </View>
  );
};

export default Description;
