import {takeLatest, put} from 'redux-saga/effects';
import {
  GET_POST_SUBMITION_DATA_REQUEST,
  GET_POST_SUBMITION_DATA_REQUEST_SUCCESS,
  GET_POST_SUBMITION_DATA_REQUEST_FAILURE,
  GET_POST_SUBMITION_DATA_REQUEST_AUTH_FAILED,
} from './actionTypes';
import {successResponse, failedResponse} from '../../../network/responseStatus';
import {getPostSumbitDataRequest} from '../network/Apis';
import {ResponseGenerator} from '../../../network/interfaces';

function* getPostSubmitData() {
  try {
    let result: ResponseGenerator = yield getPostSumbitDataRequest();
    const {status, data} = result;
    if (successResponse.includes(status)) {
      yield put({
        type: GET_POST_SUBMITION_DATA_REQUEST_SUCCESS,
        holeData: data,
      });
    } else if (failedResponse.includes(status)) {
      yield put({
        type: GET_POST_SUBMITION_DATA_REQUEST_FAILURE,
      });
    }
  } catch (error) {
    yield put({type: GET_POST_SUBMITION_DATA_REQUEST_AUTH_FAILED});
  }
}
export function* watchGetPostSubmitionDataRequest() {
  yield takeLatest(GET_POST_SUBMITION_DATA_REQUEST, getPostSubmitData);
}
