import {SEND_PRE_SUBMITION_DATA_REQUEST} from './actionTypes';

export const sendPreSumbitionData = (data: any) => {
  return {
    type: SEND_PRE_SUBMITION_DATA_REQUEST,
    payload: data,
  };
};
