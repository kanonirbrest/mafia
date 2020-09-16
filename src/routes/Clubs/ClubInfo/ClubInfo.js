import React, { useEffect } from 'react';
import { Carousel } from 'antd';

import PlayersTable from '../../Players/PlayersTable';

import styles from './ClubInfo.module.scss';
import { clubsApi } from '../../../api/ClubsApi';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const ClubInfo = () => {
  console.log('props.match', window.location.pathname.split('/')[2]);
  const getPlayers = async () => {
    const response = await clubsApi
      .users(window.location.pathname.split('/')[2]);
    console.log(response, 'resp');
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      Players:
      <PlayersTable players={[]} />
    </div>
  );
};

export default ClubInfo;
