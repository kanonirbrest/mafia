import * as axios from 'axios';

// import { isExpired } from 'utils/common';
// import { storage } from 'utils/storageService';
// import {
//   TOKEN_SELECTOR,
//   REFRESH_TOKEN_SELECTOR,
//   ROUTES,
// } from 'utils/constants';
import { BASE_URL } from '../utils/constants/ApiConstants';

// import { NOTIFICATION_TYPE } from 'utils/constants/notificationConstants';
// import logOut from 'redux/api/auth-reducer/logOut';
// import {
//   setAuthData,
// } from 'redux/api/auth-reducer/actions';
// import { addNotification } from 'redux/ui/notificationList-reducer';
// import storeRegistry from 'storeRegistry';
// importort {
//   getUserByToken,
// } from '../utils/auth';

const instance = axios.create({
  baseURL: BASE_URL,
});

// const updateUserFromJWT = (isPersistUpdate = false) => {
//   const user = getUserByToken();
//   // const {
//   //   api: {
//   //     auth: {
//   //       user: prevUser,
//   //     },
//   //   },
//   // } = storeRegistry.Store.getState();
// };

/* eslint no-param-reassign: "error" */
instance.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem('mafiaToken');

  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

const http = {
  get(url, options = {}) {
    return instance.get(url, options);
  },

  post(url, body, config) {
    return instance.post(url, body, config);
  },

  put(url, body, config) {
    return instance.put(url, body, config);
  },

  delete(url, body, config) {
    return instance.delete(url, body, config);
  },
};

export default http;
