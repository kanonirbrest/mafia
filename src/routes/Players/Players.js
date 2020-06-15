import React from 'react';

import PlayersTable from "./PlayersTable";
import styles from "./PlayersTable/PlayersTable.module.scss";

const PlayersPage = () => {
  return (
    <div className={styles.tableWrapper}>
      <h3>Players Page</h3>
      <PlayersTable />
    </div>
  );
};

export default PlayersPage;
