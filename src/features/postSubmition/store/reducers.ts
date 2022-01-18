import {
  GET_POST_SUBMITION_DATA_REQUEST,
  GET_POST_SUBMITION_DATA_REQUEST_SUCCESS,
  GET_POST_SUBMITION_DATA_REQUEST_FAILURE,
  GET_POST_SUBMITION_DATA_REQUEST_AUTH_FAILED,
} from './actionTypes';

const initialState = {
  postSumbitionRequestIsLoading: false,
  holeData: [],
};

export const postSubmitionReducer = (
  state = initialState,
  action: {type: string; holeData: any},
) => {
  const {holeData} = action;
  switch (action.type) {
    case GET_POST_SUBMITION_DATA_REQUEST:
      return {
        ...state,
        postSumbitionRequestIsLoading: true,
      };
    case GET_POST_SUBMITION_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        postSumbitionRequestIsLoading: false,
        holeData,
      };
    case GET_POST_SUBMITION_DATA_REQUEST_FAILURE:
      return {
        ...state,
        postSumbitionRequestIsLoading: false,
      };
    case GET_POST_SUBMITION_DATA_REQUEST_AUTH_FAILED:
      return {
        ...state,
        postSumbitionRequestIsLoading: false,
      };
    default:
      return state;
  }
};
