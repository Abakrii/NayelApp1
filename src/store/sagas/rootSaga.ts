import {fork} from 'redux-saga/effects';
import {watchSendPreSubmitionDataRequest} from './preSubmitionSaga';

import {watchGetAfterSubmitionDataRequest} from './afterSubmitionSaga';
function* rootSaga() {
  yield fork(watchSendPreSubmitionDataRequest);
  yield fork(watchGetAfterSubmitionDataRequest);
}

export default rootSaga;
