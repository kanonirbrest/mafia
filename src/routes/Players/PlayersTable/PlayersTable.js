import React from 'react';
import { Table } from 'antd';

import { useHistory } from 'react-router-dom';
import { COLUMNS } from './constants';

// import styles from './PlayersTable.module.scss';

const PlayersTable = ({ players }) => {
  const history = useHistory();

  return (
    <div>
      <Table
        onRow={(record, rowIndex) => ({
          onClick: () => {
            history.push(`/players/${players[rowIndex].id}`);
          },
        })}
        dataSource={players}
        columns={COLUMNS}
      />
    </div>
  );
};

export default PlayersTable;
