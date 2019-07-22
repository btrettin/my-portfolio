import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from './user-menu.module.css';

const AccountPage = () => (
  <MenuList className={styles.menu}>
    <MenuItem className={styles.menuItemTop}>Edit Profile</MenuItem>
    <MenuItem className={styles.menuItem}>Payment Methods</MenuItem>
    <MenuItem className={styles.menuItem}>Notifications</MenuItem>
    <MenuItem className={styles.menuItem}>My Requests</MenuItem>
    <MenuItem className={styles.menuItem}>Privacy</MenuItem>
  </MenuList>
);
export default AccountPage;
