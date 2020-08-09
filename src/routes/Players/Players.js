import React, { useEffect, useState } from 'react';

import { usersApi } from 'api/UsersApi';
import PlayersTable from './PlayersTable';
import styles from './PlayersTable/PlayersTable.module.scss';

const PlayersPage = () => {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    const response = await usersApi
      .getAll();
    setPlayers(response.data.players || []);
  };
  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className={styles.tableWrapper}>
      <h3>Players Page</h3>
      <PlayersTable players={players} />
    </div>
  );
};

export default PlayersPage;
