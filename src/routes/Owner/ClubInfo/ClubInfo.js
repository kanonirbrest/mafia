import React from 'react';

import styles from "./ClubInfo.module.scss";
import AddClubPage from "../../Admin/AddClub";

const ClubInfo = ({club}) => {

  return (
    <div className={styles.clubInfoWrapper}>
      <h3>club Info Wrapper</h3>

      <AddClubPage title="club info" defaultValues={club}/>
    </div>
  );
};

export default ClubInfo;
