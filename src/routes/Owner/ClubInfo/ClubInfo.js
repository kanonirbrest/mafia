import React from 'react';

import styles from './ClubInfo.module.scss';
import AddClubPage from '../../Admin/AddClub';

// add true here for isReadMode
const ClubInfo = ({ club }) => (
  <div className={styles.clubInfoWrapper}>
    <AddClubPage title="Club info" defaultValues={club} />
  </div>
);
export default ClubInfo;
