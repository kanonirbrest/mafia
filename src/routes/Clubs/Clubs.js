import React, { useEffect, useState } from 'react';

import { clubsApi } from 'api/ClubsApi';
import styles from './Clubs.module.scss';

const ClubsPage = () => {
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
    <div className={styles.clubsWrapper}>
      <h3>Clubs Gallery</h3>
      <div className={styles.grid}>
        {
          clubs.map((club) => (
            <figure className={styles.effectOscar}>
              <img
                src="https://i.ytimg.com/vi/GknRcni9rRM/maxresdefault.jpg"
                alt="img09"
              />
              <figcaption>
                <h2 className={styles.city}>
                  {club.address.city}
                  {' '}
                  <span className={styles.name}>{club.name}</span>
                </h2>
                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">View more</a>
              </figcaption>
            </figure>
          ))
      }
      </div>
    </div>
  );
};

export default ClubsPage;
