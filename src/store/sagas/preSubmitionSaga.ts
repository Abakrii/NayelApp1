import {takeLatest, put} from 'redux-saga/effects';
import {
  SEND_PRE_SUBMITION_DATA_REQUEST,
  SEND_PRE_SUBMITION_DATA_REQUEST_SUCCESS,
  SEND_PRE_SUBMITION_DATA_REQUEST_FAILURE,
  SEND_PRE_SUBMITION_DATA_REQUEST_AUTH_FAILURE,
} from '../actions/actionTypes';
import {successResponse, failedResponse} from '../../network/responseStatus';
import {sendPreSubmitDataRequest} from '../../network/Apis';

function* sendPreSubmitData(action: any) {
  const {payload = {}} = action;
  try {
    let result = yield sendPreSubmitDataRequest(payload);
    const {status} = result;
    if (successResponse.includes(status)) {
      yield put({
        type: SEND_PRE_SUBMITION_DATA_REQUEST_SUCCESS,
      });
    } else if (failedResponse.includes(status)) {
      yield put({
        type: SEND_PRE_SUBMITION_DATA_REQUEST_FAILURE,
      });
    }
  } catch (error) {
    yield put({type: SEND_PRE_SUBMITION_DATA_REQUEST_AUTH_FAILURE});
  }
}
export function* watchSendPreSubmitionDataRequest() {
  yield takeLatest(SEND_PRE_SUBMITION_DATA_REQUEST, sendPreSubmitData);
}
