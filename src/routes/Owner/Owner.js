import React, { useEffect } from 'react';

import ClubInfo from "./ClubInfo";

import styles from "./Owner.module.scss";
import clubsApi from "api/ClubsApi";
import AddPlayer from "./AddPlayer";

const mockClub = {
  city: 'Brest',
  name: 'Nichego Lichnogo',
  location: 'Moskovskaya 12'
};

const OwnerPage = ({auth}) => {
  console.log(auth, 'OwnerPage');
  useEffect(() => {
    const response = clubsApi.getAll();
  }, []);

  const onAddPlayers = (values) => {
    const players = values.players.map((item) => {
      return {
        name: item,
        club: mockClub.name
      }
    });
    console.log(players, 'players')
  };

  return (
    <div className={styles.addClubWrapper}>
      <h3>Owner Panel</h3>
      <ClubInfo club={mockClub}/>
      <AddPlayer club={mockClub} onAddPlayers={onAddPlayers}/>
    </div>
  );
};

export default OwnerPage;
