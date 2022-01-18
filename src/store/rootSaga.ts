import {fork} from 'redux-saga/effects';
import {watchSendPreSubmitionDataRequest} from '../features/preSubmition/store/sagas';
import {watchGetPostSubmitionDataRequest} from '../features/postSubmition/store/sagas';

function* rootSaga() {
  yield fork(watchSendPreSubmitionDataRequest);
  yield fork(watchGetPostSubmitionDataRequest);
}

export default rootSaga;
