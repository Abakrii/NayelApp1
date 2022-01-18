import {
  GET_AFTER_SUBMITION_DATA_REQUEST,
  GET_AFTER_SUBMITION_DATA_REQUEST_SUCCESS,
  GET_AFTER_SUBMITION_DATA_REQUEST_FAILURE,
  GET_AFTER_SUBMITION_DATA_REQUEST_AUTH_FAILED,
} from './actionTypes';

const initialState = {
  afterSumbitionRequestIsLoading: false,
  holeData: [],
};

export const afterSubmitionReducer = (
  state = initialState,
  action: {type: string; holeData: any},
) => {
  const {holeData} = action;
  switch (action.type) {
    case GET_AFTER_SUBMITION_DATA_REQUEST:
      return {
        ...state,
        afterSumbitionRequestIsLoading: true,
      };
    case GET_AFTER_SUBMITION_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        afterSumbitionRequestIsLoading: false,
        holeData,
      };
    case GET_AFTER_SUBMITION_DATA_REQUEST_FAILURE:
      return {
        ...state,
        afterSumbitionRequestIsLoading: false,
      };
    case GET_AFTER_SUBMITION_DATA_REQUEST_AUTH_FAILED:
      return {
        ...state,
        afterSumbitionRequestIsLoading: false,
      };
    default:
      return state;
  }
};
