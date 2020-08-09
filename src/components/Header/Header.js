import React from 'react';
import { useHistory } from 'react-router-dom';
// import LogoIcon from '../../assets/svg/Logo.jsx';

import { Button } from 'antd';
import styles from './Header.module.scss';

const Header = ({ auth, dispatch }) => {
  const history = useHistory();

  const onBack = () => {
    history.goBack();
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        Mafia Game
        {/* <LogoIcon /> */}
      </div>
      <div>
        {auth.isAuthenticated
          && <Button className={styles.logoutButton} onClick={logout}>logout</Button>}
        {history.location.pathname !== '/'
          && <Button className={styles.backButton} onClick={onBack}>back</Button>}
      </div>
    </header>
  );
};

export default Header;
