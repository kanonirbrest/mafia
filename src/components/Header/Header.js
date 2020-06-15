import React from 'react';
import { useHistory } from 'react-router-dom';
// import LogoIcon from '../../assets/svg/Logo.jsx';

import styles from './Header.module.scss';

const Header = () => {
  const history = useHistory();
  console.log(history);

  const onBack = () => {
    history.goBack();
  };

  return (
      <header className={styles.header}>
        <div className={styles.title}>
          Mafia Game
          {/*<LogoIcon />*/}
        </div>
        <div>
          {history.location.pathname !== '/' &&
          <button className={styles.backButton} onClick={onBack}>back</button>}
        </div>
      </header>
  );
};

export default Header;
