import * as axios from 'axios';

export const authApi = {
  // eslint-disable-next-line no-unused-vars
  login(userName, password) {
    return axios
      .post('https://localhost:8081/api/Authorization?userName=admin&password=mfadmin1234');
  },
};

export default authApi;
