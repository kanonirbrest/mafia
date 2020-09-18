import { BASE_URL } from 'utils/constants/ApiConstants';
import http from './httpService';

const clubsApi = {
  getAll() {
    return http.get(`${BASE_URL}/Clubs`);
  },
  create(data) {
    return http.post(`${BASE_URL}/Clubs`, data);
  },
  own(data) {
    return http.get(`${BASE_URL}/Clubs/own`, data);
  },
  users(id) {
    return http
      .get(`${BASE_URL}/Clubs/user/${id}`);
  },
};

export default clubsApi;
