import {fork} from 'redux-saga/effects';
import {watchSendPreSubmitionDataRequest} from '../features/preSubmition/store/sagas';
import {watchGetAfterSubmitionDataRequest} from '../features/afterSubmition/store/sagas';

function* rootSaga() {
  yield fork(watchSendPreSubmitionDataRequest);
  yield fork(watchGetAfterSubmitionDataRequest);
}

export default rootSaga;
