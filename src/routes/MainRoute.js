import React from 'react';
import {
    Route, Redirect, Switch,
} from 'react-router-dom';

import {
    ROUTES,
} from 'utils/constants';
import styles from './MainRoute.module.scss';

import HomePage from './Home';
import GamePage from './Game';
import Header from "../components/Header";

const MainRoute = () => {
    return (
        <div className={styles.container}>
            <Header className={styles.header}/>
            <div className={styles.content}>
                <Switch>

                    <Route path={ROUTES.root} exact>
                        <HomePage/>
                    </Route>
                    <Route path={ROUTES.game} exact>
                        <GamePage/>
                    </Route>

                    <Redirect to={ROUTES.root} from="*"/>
                </Switch>
            </div>
        </div>
    );
};

export default MainRoute;