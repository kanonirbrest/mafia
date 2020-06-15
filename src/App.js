import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ROUTES} from './utils/constants';
import MainRoute from './routes';
import store from './redux';
import AuthContextProvider from "./contexts/AuthContext";

import './App.scss';
import 'antd/dist/antd.css';

function App() {
    return (
      <AuthContextProvider>
        {/*<Provider store={store}>*/}
          <Router>
            <Switch>
              <Route path={ROUTES.root} component={MainRoute}/>
            </Switch>
            <div id="modal-root"/>
          </Router>
        {/*</Provider>*/}
      </AuthContextProvider>
    );
}

export default App;
