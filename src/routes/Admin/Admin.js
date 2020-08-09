import React, { useState, useEffect } from 'react';

import styles from './Admin.module.scss';
import AddClubPage from './AddClub';
import AddClubOwnerPage from './AddClubOnwer/AddClubOnwer';
import { clubsApi } from '../../api/ClubsApi';

const AdminPage = () => {
  const [clubs, setClubs] = useState([]);

  const getClubs = async () => {
    const response = await clubsApi
      .getAll();
    setClubs(response.data.clubs || []);
  };

  useEffect(() => {
    console.log('useeff');
    getClubs();
  }, []);

  console.log(clubs, 'clubs');

  return (
    <div className={styles.addClubWrapper}>
      <h3>Admin Panel</h3>
      <AddClubPage getClubs={getClubs} title="add club" />
      {clubs.length > 0 && <AddClubOwnerPage clubs={clubs} title="add club owner" />}
    </div>
  );
};

export default AdminPage;
