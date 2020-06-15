import * as axios from 'axios';
import { BASE_URL } from '../utils/constants/ApiConstants';

export const gamesApi = {
  // getAll() {
  //   // return axios.get(`${BASE_URL}/Games`);
  //   return Promise.from({games: []});
  // },
  create(data) {
    // return axios.post(`${BASE_URL}/Games`, data);
    return Promise.resolve({status: '200'});
  },
};

export default gamesApi;
