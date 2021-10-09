import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from '../../styels';
import {EmailAddressProps} from './interfaces';
const EmailAddress = ({
  email,
  onChangeMail,
  isCorrectEmailAddress,
}: EmailAddressProps) => {
  const {textView, textError} = styles;
  return (
    <View style={textView}>
      <TextInput
        multiline
        onChangeText={onChangeMail}
        value={email}
        placeholder={'please enter your email address'}
      />
      {!isCorrectEmailAddress && (
        <Text style={textError}>Please Enter a valid email adderss</Text>
      )}
    </View>
  );
};
export default EmailAddress;
