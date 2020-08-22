/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { ROUTES } from 'utils/constants';
import GunIcon from 'assets/svg/gun.svg';

// import styles from './Points.module.scss';
import styles from './Menu.module.scss';

const menuItemsData = [
  {
    name: '1',
    url: 'https://novosib-room.ru/uploads/novosib/2014/08/mafiya-kartinki-smeshnye-kartinki-fotoprikoly_404033222.jpg',
    title: 'Create Game',
    route: ROUTES.game,
  },
  {
    name: '2',
    url: 'https://cs8.pikabu.ru/post_img/big/2016/08/16/0/147129782529531119.jpg',
    title: 'Players',
    route: ROUTES.players,
  },
  {
    name: '3',
    url: 'https://cs4.pikabu.ru/post_img/big/2016/08/16/1/147129875426523427.jpg',
    title: 'Maf clubs',
    route: ROUTES.clubs,
  },
  {
    name: '4',
    url: 'data:image/jpeg;base64,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',
    title: 'Calendar',
    route: ROUTES.players,
  },
  {
    name: 'auth',
    url: 'https://novosib-room.ru/uploads/novosib/2014/08/mafiya-kartinki-smeshnye-kartinki-fotoprikoly_404033222.jpg',
    title: 'Sign Up',
    route: ROUTES.login,
  },
  {
    name: '6',
    url: 'https://cs8.pikabu.ru/post_img/big/2016/08/16/0/147129782529531119.jpg',
    title: 'Admin Panel',
    route: ROUTES.admin,
    roles: ['ADMIN'],
    // roles: ['admin', 'clubOwner'],
  },
  {
    name: '7',
    url: 'https://cs8.pikabu.ru/post_img/big/2016/08/16/0/147129782529531119.jpg',
    title: 'Club Owner Panel',
    route: ROUTES.owner,
    roles: ['CLUBOWNER'],
  },
  {
    name: '8',
    url: 'https://cs8.pikabu.ru/post_img/big/2016/08/16/0/147129782529531119.jpg',
    title: 'Statistics',
    route: ROUTES.statistics,
  },
];
const MenuPage = ({ auth: { auth } }) => {
  let [angle, setAngle] = useState(-90);
  const [checkBoxValue, setCheckboxValue] = useState(false);

  const resizeHandler = (e) => {
    const box = document.getElementById('body');

    const boxCenter = [box.offsetLeft + box.offsetWidth / 2, box.offsetTop + box.offsetHeight / 2];
    angle = Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) * (180 / Math.PI) - 90;
    setAngle(angle);
  };
  useEffect(() => {
    window.addEventListener('mousemove', resizeHandler);

    return () => {
      window.removeEventListener('mousemove', resizeHandler);
    };
  }, []);

  const menuItems = menuItemsData.map((item) => {
    if (item.name === 'auth' && auth && auth.user) {
      return null;
    }

    if (!item.roles?.length || (item.roles.includes(auth.user?.role))) {
      return (
        <Link
          to={item.route}
          style={{ textDecoration: 'none', color: 'inherit' }}
          key={item.name}
        >
          <div
            className={styles.menuItem}
            style={{
              backgroundImage: `url(${item.url})`,
            }}
          >
            <div className={styles.title}>
              {item.title}
            </div>
          </div>
        </Link>
      );
    }

    return null;
  });

  const handleChange = (e) => {
    setCheckboxValue(e.target.checked);
  };

  return (
    <div className={styles.menuWrapper}>
      {
        true
          ? menuItems : (
            <nav className={styles.menu}>
              <input
                type="checkbox"
                href="#"
                className={styles.menuOpen}
                name="menu-open"
                id="menu-open"
                value={checkBoxValue}
                onChange={handleChange}
              />
              <label className={styles.menuOpenButton} htmlFor="menu-open">
                <img src={GunIcon} alt="React Logo" className={styles.gunIcon} style={{ transform: `rotate(${checkBoxValue ? angle : -90}deg)` }} />
              </label>

              <a href="#" className={cn(styles.menuItem, styles.blue)}>
                <i className="fa fa-anchor" />
              </a>
              <a href="#" className={cn(styles.menuItem, styles.green)}>
                <i className="fa fa-coffee" />
              </a>
              <a href="#" className={cn(styles.menuItem, styles.red)}>
                <i className="fa fa-heart" />
              </a>
              <a href="#" className={cn(styles.menuItem, styles.purple)}>
                <i className="fa fa-microphone" />
              </a>
              <a href="#" className={cn(styles.menuItem, styles.orange)}>
                <i className="fa fa-star" />
              </a>
              <a href="#" className={cn(styles.menuItem, styles.orange)}>
                <i className="fa fa-diamond" />
              </a>
            </nav>
          )
      }

    </div>
  );
};

export default MenuPage;
