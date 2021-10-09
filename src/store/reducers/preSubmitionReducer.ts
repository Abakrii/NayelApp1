import {
  SEND_PRE_SUBMITION_DATA_REQUEST,
  SEND_PRE_SUBMITION_DATA_REQUEST_SUCCESS,
  SEND_PRE_SUBMITION_DATA_REQUEST_FAILURE,
  SEND_PRE_SUBMITION_DATA_REQUEST_AUTH_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  preSubmitionRequestIsLoading: false,
  navigateToAfterSubmitionScreen: false,
};

export const preSubmitionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_PRE_SUBMITION_DATA_REQUEST:
      return {
        ...state,
        preSubmitionRequestIsLoading: true,
      };

    case SEND_PRE_SUBMITION_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        preSubmitionRequestIsLoading: false,
        navigateToAfterSubmitionScreen: true,
      };

    case SEND_PRE_SUBMITION_DATA_REQUEST_FAILURE:
      return {
        ...state,
        preSubmitionRequestIsLoading: false,
      };

    case SEND_PRE_SUBMITION_DATA_REQUEST_AUTH_FAILURE:
      return {
        ...state,
        preSubmitionRequestIsLoading: false,
      };

    default:
      return state;
  }
};
