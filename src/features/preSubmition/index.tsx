import React, {useState, useEffect, FC} from 'react';
import {View} from 'react-native';
import styles from './styels';
import {Content, Loader} from '../../core/components';
import {useDispatch} from 'react-redux';
import {sendPreSumbitionData} from './store/actions';
import {preSubmitSelector} from './store/selectores';
import {POST_SUBMITION} from '../../navigations/config';
import {
  EmailAddress,
  IsJokeCheckBox,
  PublisherTypePicker,
  Description,
  SubmitButton,
} from './components';
import {PublisherTypes} from './components/publisherTypePicker/interfaces';
import {emailAddressValidation} from './utils/validations';
import {useNavigation} from '@react-navigation/native';
import {postSubmitSelector} from '../postSubmition/store/selectors';
import {getPostSubmitionData} from '../postSubmition/store/actions';
const PreSubmition: FC = (): JSX.Element => {
  const {navigate} = useNavigation();
  const {mainView} = styles || {};
  const {TEACHER} = PublisherTypes;
  const [email, onChangeMail] = useState('');
  const [isJoke, setIsJokeCheckBox] = useState(false);
  const [publisherType, setPublisherType] = useState(TEACHER);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const onClickSubmit = () => {
    let data = {email, isJoke, publisherType, description};
    dispatch(sendPreSumbitionData({...data}));
  };
  const {
    preSubmitionRequestIsLoading = false,
    navigateToPostSubmitionScreen = false,
  } = preSubmitSelector();

  const {postSumbitionRequestIsLoading = false, holeData = []} =
    postSubmitSelector();

  useEffect(() => {
    if (navigateToPostSubmitionScreen) {
      dispatch(getPostSubmitionData());
    }
  }, [navigateToPostSubmitionScreen]);

  useEffect(() => {
    if (holeData.length > 0) {
      navigate(POST_SUBMITION as never);
    }
  }, [holeData]);

  const isNextButtonDisabled = () => {
    return !email || !description || !isCorrectEmailAddress;
  };

  const onChangeDescription = (value: string) => {
    let desc = value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    setDescription(desc);
  };

  const isCorrectEmailAddress = emailAddressValidation(email);
  const isLoading = () => {
    return preSubmitionRequestIsLoading || postSumbitionRequestIsLoading;
  };
  let showLoader = isLoading();

  const disableNextButton = isNextButtonDisabled();
  return showLoader ? (
    <Loader />
  ) : (
    <View style={mainView}>
      <Content>
        <EmailAddress
          email={email}
          onChangeMail={onChangeMail}
          isCorrectEmailAddress={isCorrectEmailAddress}
        />
        <IsJokeCheckBox isJoke={isJoke} setIsJokeCheckBox={setIsJokeCheckBox} />
        <PublisherTypePicker
          publisherType={publisherType}
          setPublisherType={setPublisherType}
        />
        <Description
          description={description}
          setDescription={onChangeDescription}
        />
        <SubmitButton
          disableNextButton={disableNextButton}
          onClickSubmit={onClickSubmit}
        />
      </Content>
    </View>
  );
};

export default PreSubmition;
