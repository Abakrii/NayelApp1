import React from 'react';
import {TextInput} from 'react-native';
import {ViewWrapper} from '../../../../core/components';
import styles from './styles';
import {DescriptionProps} from './interfaces';
const Description = ({description, setDescription}: DescriptionProps) => {
  const {descriptionStyle} = styles || {};
  return (
    <ViewWrapper>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={setDescription}
        value={description}
        style={descriptionStyle}
        placeholder={'please enter your description'}
      />
    </ViewWrapper>
  );
};

export default Description;
