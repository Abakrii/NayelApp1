import {takeLatest, put} from 'redux-saga/effects';
import {
  SEND_PRE_SUBMITION_DATA_REQUEST,
  SEND_PRE_SUBMITION_DATA_REQUEST_SUCCESS,
  SEND_PRE_SUBMITION_DATA_REQUEST_FAILURE,
  SEND_PRE_SUBMITION_DATA_REQUEST_AUTH_FAILURE,
} from './actionTypes';
import {successResponse, failedResponse} from '../../../network/responseStatus';
import {sendPreSubmitDataRequest} from '../network/Apis';
import {getDBConnection, saveFormItems} from '../../../network/db-service';
import {ResponseGenerator} from '../../../network/interfaces';

const addItemsToDb = async ({payloadItems}: any) => {
  try {
    const db = await getDBConnection();
    await saveFormItems(db, payloadItems);
  } catch (error) {
    return error;
  }
};
function* sendPreSubmitData(action: any) {
  const {payload = {}} = action;
  try {
    let result: ResponseGenerator = yield sendPreSubmitDataRequest(payload);
    const {status} = result;
    if (successResponse.includes(status)) {
      addItemsToDb({payloadItems: payload});
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
