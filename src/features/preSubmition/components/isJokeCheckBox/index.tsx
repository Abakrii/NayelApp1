import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {IsJokeCheckBoxProps} from './interfaces';
const IsJokeCheckBox = ({isJoke, setIsJokeCheckBox}: IsJokeCheckBoxProps) => {
  const {checkboxContainer, checkbox, checkboxLabel} = styles || {};
  return (
    <View style={checkboxContainer}>
      <CheckBox
        disabled={false}
        value={isJoke}
        onValueChange={setIsJokeCheckBox}
        style={checkbox}
      />
      <Text style={checkboxLabel}>Is Joke?</Text>
    </View>
  );
};
export default IsJokeCheckBox;
