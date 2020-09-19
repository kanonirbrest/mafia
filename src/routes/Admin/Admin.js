import React, { useState, useEffect } from 'react';

import clubsApi from 'api/ClubsApi';
import styles from './Admin.module.scss';
import AddClubPage from './AddClub';
import AddClubOwnerPage from './AddClubOnwer/AddClubOnwer';

const AdminPage = () => {
  const [clubs, setClubs] = useState([]);

  const getClubs = async () => {
    const response = await clubsApi
      .getAll();
    setClubs(response.data.clubs || []);
  };

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <div className={styles.addClubWrapper}>
      <h3>Admin Panel</h3>
      <AddClubPage getClubs={getClubs} title="Add club" />
      {clubs.length > 0 && <AddClubOwnerPage clubs={clubs} title="Add club owner" />}
    </div>
  );
};

export default AdminPage;
