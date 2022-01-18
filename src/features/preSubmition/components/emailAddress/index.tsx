import React from 'react';
import {TextInput, Text} from 'react-native';
import {ViewWrapper} from '../../../../core/components';
import styles from './styles';
import {EmailAddressProps} from './interfaces';
const EmailAddress = ({
  email,
  onChangeMail,
  isCorrectEmailAddress,
}: EmailAddressProps) => {
  const {textError} = styles;
  return (
    <ViewWrapper>
      <TextInput
        multiline
        onChangeText={onChangeMail}
        value={email}
        placeholder={'please enter your email address'}
      />
      {!!email && !isCorrectEmailAddress && (
        <Text style={textError}>Please Enter a valid email adderss</Text>
      )}
    </ViewWrapper>
  );
};
export default EmailAddress;
