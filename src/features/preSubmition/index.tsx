import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import styles from './styels';
import {Content, Loader} from '../../core/components';
import {useDispatch} from 'react-redux';
import {sendPreSumbitionData} from '../../store/actions/preSubmitionActions';
import {preSubmitSelector} from '../../store/selectors/preSubmitSelector';
import {afterSubmitSelector} from '../../store/selectors/afterSubmitSelector';
import {POST_SUBMITION} from '../../navigations/config';
import {getAfterSubmitionData} from '../../store/actions/afterSubmitionActions';
const PreSubmition = ({navigation}: any) => {
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
  const [publisherType, setPublisherType] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const onClickSubmit = () => {
    let data = {email, isJoke, publisherType, description};
    dispatch(sendPreSumbitionData({...data}));
  };
  const {
    preSubmitionRequestIsLoading = false,
    navigateToAfterSubmitionScreen = false,
  } = preSubmitSelector();

  const {
    afterSumbitionRequestIsLoading = false,
    holeData = [],
  } = afterSubmitSelector();

  useEffect(() => {
    if (navigateToAfterSubmitionScreen) {
      dispatch(getAfterSubmitionData());
    }
  }, [navigateToAfterSubmitionScreen]);

  useEffect(() => {
    if (holeData.length > 0) {
      navigation.navigate(POST_SUBMITION);
    }
  }, [holeData]);

  return preSubmitionRequestIsLoading || afterSumbitionRequestIsLoading ? (
    <Loader />
  ) : (
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
          selectedValue={publisherType}
          style={pickerView}
          onValueChange={itemValue => setPublisherType(itemValue)}>
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
            title={'Submit the form'}
            color="coral"
            onPress={onClickSubmit}
          />
        </View>
      </Content>
    </View>
  );
};

export default PreSubmition;
