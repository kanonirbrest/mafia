import React from 'react';

import styles from './ClubInfo.module.scss';
import AddClubPage from '../../Admin/AddClub';

const ClubInfo = ({ club }) => {
  // add true here for isReadMode
  return (
    <div className={styles.clubInfoWrapper}>
      <AddClubPage title="Club info" defaultValues={club} />
    </div>
  );
};

export default ClubInfo;
