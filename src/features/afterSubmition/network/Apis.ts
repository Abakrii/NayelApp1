import axios from 'axios';
import {JSON_PLACEHOLDER_ENDPOINT} from '../../../network/Endpoints';

export const getAfterSumbitDataRequest = () => {
  return axios.get(JSON_PLACEHOLDER_ENDPOINT);
};
