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
import PlayersPage from './Players';
import Header from "../components/Header";
import ClubsPage from "./Clubs";
import LoginPage from "./Login";
import { authContext } from "../contexts/AuthContext";
import AdminPage from "./Admin";
import OwnerPage from "./Owner";

const MainRoute = () => {
    const { auth } = React.useContext(authContext);
    console.log(auth, 'auth');

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
                    <Route path={ROUTES.players} exact>
                        <PlayersPage/>
                    </Route>
                    <Route path={ROUTES.clubs} exact>
                        <ClubsPage/>
                    </Route>
                    <Route path={ROUTES.login} exact>
                        <LoginPage/>
                    </Route>
                    <Route path={ROUTES.admin} exact>
                        <AdminPage/>
                    </Route>
                    <Route path={ROUTES.owner}  exact>
                        <OwnerPage auth={auth}/>
                    </Route>

                    <Redirect to={ROUTES.root} from="*"/>
                </Switch>
            </div>
        </div>
    );
};

export default MainRoute;