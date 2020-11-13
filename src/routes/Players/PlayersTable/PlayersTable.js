import React from 'react';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';

import { columns } from './constants';

// import styles from './PlayersTable.module.scss';

const PlayersTable = ({ players }) => {
  const history = useHistory();
  const onRowCLick = (rowIndex) => {
    history.push(`/players/${players[rowIndex].id}`);
  };

  return (
    <div>
      <Table
        onRow={(record, rowIndex) => ({
          onClick: () => onRowCLick(rowIndex),
        })}
        dataSource={players}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default PlayersTable;
