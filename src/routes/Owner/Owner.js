import React, { useEffect, useState } from 'react';

import clubsApi from 'api/ClubsApi';
import ClubInfo from './ClubInfo';
import AddPlayer from './AddPlayer';
import { usersApi } from '../../api/UsersApi';
import { createNotification } from '../../utils/notificationUtils';

import styles from './Owner.module.scss';

const mockClub = {
  city: 'Brest',
  name: 'Nichego Lichnogo',
  location: 'Moskovskaya 12',
};

const OwnerPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [clubs, setClubs] = useState([]);

  const getClubs = async () => {
    const response = await clubsApi
      .getAll();
    setClubs(response.data.clubs || []);
  };

  useEffect(() => {
    getClubs();
  }, []);

  const onAddPlayers = (values) => {
    const players = values.players.map((item) => usersApi.create({
      nickname: item,
      fullName: item,
      club: mockClub.name,
      city: mockClub.city,
    }));
    Promise.all(players)
      .then(() => {
        values.players.forEach((player) => {
          createNotification(
            `player ${player} created`,
            'This is the content of the notification.',
          );
        });
      }, (err) => {
        console.log('err', { err });
      });
  };

  return (
    <div className={styles.ownerWrapper}>
      <h3>Owner Panel</h3>
      <ClubInfo club={mockClub} />
      <AddPlayer club={mockClub} onAddPlayers={onAddPlayers} />
    </div>
  );
};

export default OwnerPage;
