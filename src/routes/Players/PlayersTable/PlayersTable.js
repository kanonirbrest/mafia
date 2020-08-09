import React from 'react';
import { Table } from 'antd';

import { COLUMNS } from './constants';

// import styles from './PlayersTable.module.scss';

const PlayersTable = ({ players }) => (
  <div>
    <Table dataSource={players} columns={COLUMNS} />
    ;
  </div>
);

export default PlayersTable;
