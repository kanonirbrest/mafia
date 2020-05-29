import React from 'react';

import styles from './Menu.module.scss';

const menuItemsData = [
    {name: '1'},
    {name: '1'},
    {name: '1'},
    {name: '1'},
]
const MenuPage = () => {
    const menuItems = menuItemsData.map((item) => {
        return (
            <div className={styles.menuItem}>
                menuItem
            </div>
        )
    })
    return (
        <div className={styles.menuWrapper}>
            {menuItems}
        </div>
    );
};

export default MenuPage;
