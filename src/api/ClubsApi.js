import { BASE_URL } from '../utils/constants/ApiConstants';
import http from './httpService';

export const clubsApi = {
  getAll() {
    return http.get(`${BASE_URL}/Clubs`);
  },
  create(data) {
    return http.post(`${BASE_URL}/Clubs`, data);
  },
  own(data) {
    return http.get(`${BASE_URL}/Clubs/own`, data);
  },
};
export default clubsApi;
