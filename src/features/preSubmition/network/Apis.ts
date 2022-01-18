import axios from 'axios';
import {PLACEHOLDER_ENDPOINT} from '../../../network/Endpoints';

export const sendPreSubmitDataRequest = (payload: any) => {
  return axios.post(PLACEHOLDER_ENDPOINT, payload);
};
