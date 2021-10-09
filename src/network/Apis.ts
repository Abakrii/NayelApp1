import axios from 'axios';
import {JSON_PLACEHOLDER_ENDPOINT} from './Endpoints';
export const sendPreSubmitDataRequest = (payload: any) => {
  return axios.post(JSON_PLACEHOLDER_ENDPOINT, payload);
};

export const getAfterSumbitDataRequest = () => {
  return axios.get(JSON_PLACEHOLDER_ENDPOINT);
};
