import * as axios from 'axios';

export const authApi = {
  // eslint-disable-next-line no-unused-vars
  login(userName, password) {
    return axios
      .post('https://localhost:8081/api/Authorization?userName=tOwner1&password=tOwner1');
  },
};

export default authApi;
