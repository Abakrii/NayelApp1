import {takeLatest, put} from 'redux-saga/effects';
import {
  GET_AFTER_SUBMITION_DATA_REQUEST,
  GET_AFTER_SUBMITION_DATA_REQUEST_SUCCESS,
  GET_AFTER_SUBMITION_DATA_REQUEST_FAILURE,
  GET_AFTER_SUBMITION_DATA_REQUEST_AUTH_FAILED,
} from '../actions/actionTypes';
import {successResponse, failedResponse} from '../../network/responseStatus';
import {getAfterSumbitDataRequest} from '../../network/Apis';

function* getAfterSubmitData() {
  try {
    let result = yield getAfterSumbitDataRequest();
    const {status, data} = result;
    if (successResponse.includes(status)) {
      yield put({
        type: GET_AFTER_SUBMITION_DATA_REQUEST_SUCCESS,
        holeData: data,
      });
    } else if (failedResponse.includes(status)) {
      yield put({
        type: GET_AFTER_SUBMITION_DATA_REQUEST_FAILURE,
      });
    }
  } catch (error) {
    yield put({type: GET_AFTER_SUBMITION_DATA_REQUEST_AUTH_FAILED});
  }
}
export function* watchGetAfterSubmitionDataRequest() {
  yield takeLatest(GET_AFTER_SUBMITION_DATA_REQUEST, getAfterSubmitData);
}
