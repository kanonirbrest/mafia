import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Skeleton, Card, Avatar,
} from 'antd';

import { usersApi } from 'api/UsersApi';
import clubsApi from 'api/ClubsApi';

const { Meta } = Card;

const PlayerInfo = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [player, setPlayer] = useState([]);
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    const getСlubs = async () => {
      const response = await clubsApi
        .users(window.location.pathname.split('/')[2]);
      setClubs(response.data.clubs);
    };
    const getPlayers = async () => {
      const response = await usersApi.getAll();
      setPlayer(response.data.players.find((p) => id === p.id));
    };

    getPlayers(); /* todo remove request */
    getСlubs();
  }, [id]);
  const getDescription = () => (
    <div>
      <div>
        name:
        {' '}
        {player.fullName}
      </div>
      <div>
        nickname:
        {' '}
        {player.nickname}
      </div>
      <div>
        city:
        {' '}
        {player.city}
      </div>
      <div>
        clubs:
        {' '}
        {clubs.join(', ')}
      </div>
      <div>
        inst: www.instagram.com
      </div>
    </div>
  );

  return (
    <div>
      <Card
        style={{ width: 300, marginTop: 16 }}
      >
        <Skeleton avatar active loading={false}>
          <Meta
            avatar={(
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            )}
            title="Player card"
            description={getDescription()}
          />
        </Skeleton>
      </Card>
    </div>
  );
};

export default PlayerInfo;
