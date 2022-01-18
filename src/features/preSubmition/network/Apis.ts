import axios from 'axios';
import {JSON_PLACEHOLDER_ENDPOINT} from '../../../network/Endpoints';

export const sendPreSubmitDataRequest = (payload: any) => {
  return axios.post(JSON_PLACEHOLDER_ENDPOINT, payload);
};
