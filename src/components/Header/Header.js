import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button, Menu, Dropdown, Badge,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './Header.module.scss';

const Header = ({ auth, dispatch }) => {
  const history = useHistory();

  const onBack = () => {
    history.goBack();
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const onProfileClick = () => {
    history.push('/profile');
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={onProfileClick}> Profile </Menu.Item>
      <Menu.Item onClick={logout}> Logout </Menu.Item>
    </Menu>
  );

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        Mafia Game
      </div>
      <div className={styles.userPanel}>
        {history.location.pathname !== '/'
      && <Button className={styles.backButton} onClick={onBack}>back</Button>}

        {auth.isAuthenticated && (
          <>
            {/* <div className={styles.info}> */}
            {/*  Hello, */}
            {/*  {auth.user.unique_name} */}
            {/*  ! */}
            {/*  You are */}
            {/*  {auth.user.role} */}
            {/* </div> */}
            {/* <Button className={styles.logoutButton} onClick={logout}>logout</Button> */}
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Badge status="success" text="" />
                Hello,
                {auth.user.unique_name}
                <DownOutlined />
              </a>
            </Dropdown>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
