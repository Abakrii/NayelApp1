import axios from 'axios';
import {PLACEHOLDER_ENDPOINT} from '../../../network/Endpoints';

export const getPostSumbitDataRequest = () => {
  return axios.get(PLACEHOLDER_ENDPOINT);
};
