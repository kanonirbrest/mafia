import * as axios from 'axios';
import { BASE_URL } from '../utils/constants/ApiConstants';

export const clubsApi = {
  getAll() {
    // return axios.get(`${BASE_URL}/Clubs`);
    return Promise.resolve({clubs: []});
  },
  create(data) {
    // return axios.post(`${BASE_URL}/Clubs`, data);
    return Promise.resolve({status: '200'});
  },
};

export default clubsApi;
