import React from 'react';
import { Descriptions, Badge } from 'antd';

import { Redirect } from 'react-router-dom';
import { ROUTES } from 'utils/constants';
import styles from './Profile.module.scss';

const ProfilePage = ({ auth }) => {
  if (!auth.isAuthenticated) {
    return <Redirect to={ROUTES.login} />;
  }

  return (
    <div className={styles.statisticWrapper}>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Name" span={3}>
          <Badge status="success" text="" />
          {auth.user.unique_name}
        </Descriptions.Item>
        <Descriptions.Item label="Role" span={3}>{auth.user.role}</Descriptions.Item>
        <Descriptions.Item label="Id" span={3}>{auth.user.playerId}</Descriptions.Item>
        <Descriptions.Item label="Club" span={3}>{auth.club}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ProfilePage;
