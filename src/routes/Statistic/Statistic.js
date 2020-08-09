import React from 'react';

import { Table } from 'antd';

import styles from './Statistic.module.scss';
import { columns, data } from './mock';

const StatisticPage = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className={styles.statisticWrapper}>
      <h3>Statistic Page</h3>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default StatisticPage;
