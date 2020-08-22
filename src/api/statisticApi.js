import { BASE_URL } from '../utils/constants/ApiConstants';
import http from './httpService';

export const statisticApi = {
  // eslint-disable-next-line no-unused-vars
  get(from, to, clubId) {
    return http.get(`${BASE_URL}/Statistic`);
  },
};

export default statisticApi;
