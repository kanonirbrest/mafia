import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom';
import 'antd/dist/antd.css';

import clubsApi from 'api/ClubsApi';
import MainRoute from './routes';
import './App.scss';
import LoginPage from './routes/Login';
import { getUserByToken } from './utils/auth';
import {
  initialState, login, reducer, setClub,
} from './reducer/appReducer';

export const AuthContext = React.createContext();

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const getOwnDate = async () => {
      const club = await clubsApi.own().data;
      dispatch(setClub(club));
    };

    const token = window.localStorage.getItem('mafiaToken');
    const user = getUserByToken(token);
    if (user && user.role === 'CLUBOWNER') {
      getOwnDate();
    }
    if (token) {
      dispatch(login({
        token,
        user,
      }));
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
