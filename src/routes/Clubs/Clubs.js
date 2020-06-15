import React from 'react';

import styles from "./Clubs.module.scss";

import {mock} from "./mock";

const ClubsPage = () => {
  return (
    <div className={styles.clubsWrapper}>
      <h3>Clubs Gallery</h3>
      <div className={styles.grid}>
        {
          mock.map((club) => {
            return  <figure className={styles.effectOscar}>
              <img src="https://i.ytimg.com/vi/GknRcni9rRM/maxresdefault.jpg" alt="img09"/>
              <figcaption>
                <h2 className={styles.city}>{club.city} <span className={styles.name}>{club.name}</span></h2>
                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
          })
        }
      </div>
    </div>
  );
};

export default ClubsPage;
