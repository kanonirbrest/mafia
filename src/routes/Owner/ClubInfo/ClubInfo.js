import React from 'react';

import styles from './ClubInfo.module.scss';
import AddClubPage from '../../Admin/AddClub';

const ClubInfo = ({ club }) => (
  <div className={styles.clubInfoWrapper}>
    <AddClubPage title="club info" defaultValues={club} />
  </div>
);

export default ClubInfo;
