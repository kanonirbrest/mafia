import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom';

import MainRoute from './routes';

import './App.scss';
import 'antd/dist/antd.css';
import LoginPage from './routes/Login';
import { getUserByToken } from './utils/auth';

export const AuthContext = React.createContext(); // added this
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('mafiaUser', JSON.stringify(action.payload.user));
      localStorage.setItem('mafiaToken', action.payload.token);

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.clear();

      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const token = window.localStorage.getItem('mafiaToken');
    const user = getUserByToken(token);

    if (token) {
      dispatch({
        type: 'LOGIN',
        payload: {
          token,
          user,
        },
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      state,
      dispatch,
    }}
    >
      <Router>
        <Switch>
          {!state.isAuthenticated ? <LoginPage auth={state} dispatch={dispatch} />
            : <MainRoute auth={state} dispatch={dispatch} />}
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
