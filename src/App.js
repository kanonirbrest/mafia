import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom';

import MainRoute from './routes';

import './App.scss';
import 'antd/dist/antd.css';
import LoginPage from './routes/Login';
import { getUserByToken } from './utils/auth';
import { clubsApi } from './api/ClubsApi';
import { login, reducer, setClub } from './reducer/appReducer';

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  club: null,
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(async () => {
    const token = window.localStorage.getItem('mafiaToken');
    const user = getUserByToken(token);
    if (user && user.role === 'CLUBOWNER') {
      const club = await clubsApi.own().data;
      dispatch(setClub(club));
    }
    if (token) {
      login({
        token,
        user,
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
