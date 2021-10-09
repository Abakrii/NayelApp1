import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import styles from './styels';
import {Content} from '../../core/components';
const PreSubmition = () => {
  const {
    mainView,
    textView,
    checkboxContainer,
    checkbox,
    checkboxLabel,
    pickerView,
    descriptionStyle,
    buttonView,
  } = styles || {};
  const [email, onChangeMail] = useState('');
  const [isJoke, setIsJokeCheckBox] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [description, setDescription] = useState('');
  return (
    <View style={mainView}>
      <Content>
        <View style={textView}>
          <TextInput
            multiline
            onChangeText={text => onChangeMail(text)}
            value={email}
            placeholder={'please enter your email address'}
          />
        </View>
        <View style={checkboxContainer}>
          <CheckBox
            disabled={false}
            value={isJoke}
            onValueChange={newValue => setIsJokeCheckBox(newValue)}
            style={checkbox}
          />
          <Text style={checkboxLabel}>Is Joke?</Text>
        </View>

        <Picker
          selectedValue={selectedValue}
          style={pickerView}
          onValueChange={itemValue => setSelectedValue(itemValue)}>
          <Picker.Item label="Teacher" value="Teacher" />
          <Picker.Item label="Blogger" value="Blogger" />
        </Picker>
        <View style={textView}>
          <TextInput
            multiline
            numberOfLines={4}
            onChangeText={text => setDescription(text)}
            value={description}
            style={descriptionStyle}
            placeholder={'please enter your description'}
          />
        </View>
        <View style={buttonView}>
          <Button
            disabled={false}
            onPress={() => console.log('test the button')}
            title={'Submit the form'}
            color="coral"
          />
        </View>
      </Content>
    </View>
  );
};

export default PreSubmition;
