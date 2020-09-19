import jwt from 'jsonwebtoken';

export const DEFAULT_USER_AUTH = { id: 0, email: '' };

export const getStoredUserAuth = () => {
  const auth = window.localStorage.getItem('UserAuth');
  if (auth) {
    return JSON.parse(auth);
  }

  return DEFAULT_USER_AUTH;
};

export const getUserByToken = (token) => {
  const accessToken = token || window.localStorage.getItem('UserAuth');

  if (accessToken) {
    return jwt.decode(accessToken);
  }

  return null;
};

export const logOut = () => {
  window.localStorage.setItem('UserAuth', null);
  window.localStorage.setItem('mafiaToken', null);
};
