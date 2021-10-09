import React from 'react';

import {View, Button} from 'react-native';
import styles from '../../styels';
import {SubmitButtonProps} from './interfaces';
const SubmitButton = ({
  disableNextButton,
  onClickSubmit,
}: SubmitButtonProps) => {
  const {buttonView} = styles || {};
  return (
    <View style={buttonView}>
      <Button
        disabled={disableNextButton}
        title={'Submit the form'}
        color="coral"
        onPress={onClickSubmit}
      />
    </View>
  );
};

export default SubmitButton;
