import * as axios from 'axios';

export const authApi = {
  login({ userName, password }) {
    return axios
      .post('https://localhost:8081/api/Authorization', { userName, password });
  },
};

export default authApi;
