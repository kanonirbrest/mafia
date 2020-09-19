import * as axios from 'axios';

import { BASE_URL } from 'utils/constants/ApiConstants';

const gamesApi = {
  // getAll() {
  //   // return axios.get(`${BASE_URL}/Games`);
  //   return Promise.from({games: []});
  // },
  create(data) {
    return axios.post(`${BASE_URL}/Games`, data);
  },
};

export default gamesApi;
