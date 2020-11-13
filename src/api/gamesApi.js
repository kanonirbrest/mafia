import { BASE_URL } from 'utils/constants/ApiConstants';
import http from './httpService';

const gamesApi = {
  create(data) {
    return http.post(`${BASE_URL}/Games`, data);
  },
};

export default gamesApi;
