import React from 'react';
import { Table } from 'antd';

import { DATA_SOURCE, COLUMNS } from './constants';

import styles from './PlayersTable.module.scss';

const PlayersTable = () => {
  return (
    <div>
      <Table dataSource={DATA_SOURCE} columns={COLUMNS} />;
    </div>
  );
};

export default PlayersTable;
