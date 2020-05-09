import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ROUTES} from './utils/constants';
import MainRoute from './routes';
import store from './redux';
import './App.scss';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={ROUTES.root} component={MainRoute}/>
                </Switch>
                <div id="modal-root"/>
            </Router>
        </Provider>
    );
}

export default App;
