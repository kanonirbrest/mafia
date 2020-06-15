import * as axios from 'axios';
import { BASE_URL } from '../utils/constants/ApiConstants';

export const authApi = {
  login(userName, password) {
    // return axios.post(`${BASE_URL}/Authorization`, { userName, password });
    return Promise.resolve({token: 'admin'})
  },
};

export default authApi;
