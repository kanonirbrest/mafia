import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { usersApi } from 'api/UsersApi';
import {
  Skeleton, Card, Avatar,
} from 'antd';

const { Meta } = Card;

const PlayerInfo = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const response = await usersApi.getAll();
      setPlayer(response.data.players.find((p) => id === p.id));
    };

    getPlayers(); /* todo remove request */
  }, [id]);
  const getDescription = (item) => (
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
