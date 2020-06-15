import React from 'react';

import styles from "./Admin.module.scss";
import AddClubPage from "./AddClub";

const AdminPage = () => {
  return (
    <div className={styles.addClubWrapper}>
      <h3>Admin Panel</h3>
      <AddClubPage title="add club"/>
    </div>
  );
};

export default AdminPage;
