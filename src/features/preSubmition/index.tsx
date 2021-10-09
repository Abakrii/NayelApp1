import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './styels';
import {Content, Loader} from '../../core/components';
import {useDispatch} from 'react-redux';
import {sendPreSumbitionData} from '../../store/actions/preSubmitionActions';
import {preSubmitSelector} from '../../store/selectors/preSubmitSelector';
import {afterSubmitSelector} from '../../store/selectors/afterSubmitSelector';
import {POST_SUBMITION} from '../../navigations/config';
import {getAfterSubmitionData} from '../../store/actions/afterSubmitionActions';
import {
  EmailAddress,
  IsJokeCheckBox,
  PublisherTypePicker,
  Description,
  SubmitButton,
} from './components';
import {PublisherTypes} from './components/publisherTypePicker/interfaces';
const PreSubmition = ({navigation}: any) => {
  const {mainView} = styles || {};
  const {TEACHER} = PublisherTypes;
  const [email, onChangeMail]: any = useState('');
  const [isJoke, setIsJokeCheckBox]: any = useState(false);
  const [publisherType, setPublisherType]: any = useState(TEACHER);
  const [description, setDescription]: any = useState('');
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

  const isNextButtonDisabled = () => {
    return !email || !description || !isCorrectEmailAddress;
  };

  const emailAddressValidation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const onChangeDescription = (value: any) => {
    let desc = value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    setDescription(desc);
  };

  const isCorrectEmailAddress = emailAddressValidation();

  const disableNextButton = isNextButtonDisabled();
  return preSubmitionRequestIsLoading || afterSumbitionRequestIsLoading ? (
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
