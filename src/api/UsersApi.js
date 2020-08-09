import { BASE_URL } from '../utils/constants/ApiConstants';
import http from './httpService';

export const usersApi = {
  create(data) {
    return http.post(`${BASE_URL}/Users/player`, data);
  },
  createClubOwner(data) {
    return http.post(`${BASE_URL}/Users/club-owner`, data);
  },
  getAll() {
    return http.get(`${BASE_URL}/Users`);
  },
};

export default usersApi;
