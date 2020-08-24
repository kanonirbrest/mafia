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
import Header from '../components/Header';
import ClubsPage from './Clubs';
import AdminPage from './Admin';
import OwnerPage from './Owner';
import StatisticPage from './Statistic';
import ProfilePage from './Profile';
import CalendarPage from './Calendar';
import PlayerInfo from './Players/PlayersTable/PlayerInfo';
import ClubInfo from './Clubs/ClubInfo';

const MainRoute = ({ auth, dispatch }) => {
  if (!auth.isAuthenticated) {
    return <Redirect to={ROUTES.login} />;
  }

  return (
    <div className={styles.container}>
      <Header className={styles.header} auth={auth} dispatch={dispatch} />
      <div className={styles.content}>
        <Switch>

          <Route path={ROUTES.root} exact>
            <HomePage auth={auth} />
          </Route>
          <Route path={ROUTES.game} exact>
            <GamePage />
          </Route>
          <Route path={ROUTES.players} exact>
            <PlayersPage />
          </Route>
          <Route path={ROUTES.playerInfo} exact>
            <PlayerInfo />
          </Route>
          <Route path={ROUTES.clubInfo} exact>
            <ClubInfo />
          </Route>
          <Route path={ROUTES.clubs} exact>
            <ClubsPage />
          </Route>
          <Route path={ROUTES.admin} exact>
            <AdminPage />
          </Route>
          <Route path={ROUTES.owner} exact>
            <OwnerPage auth={auth} />
          </Route>
          <Route path={ROUTES.statistics} exact>
            <StatisticPage />
          </Route>
          <Route path={ROUTES.profile} exact>
            <ProfilePage auth={auth} />
          </Route>
          <Route path={ROUTES.calendar} exact>
            <CalendarPage />
          </Route>
          <Redirect to={ROUTES.root} from="*" />
        </Switch>
      </div>
    </div>
  );
};

export default MainRoute;
