import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from './user-menu.module.css';

const AccountPage = props => (
  <MenuList className={styles.menu}>
    <MenuItem className={styles.menuItemTop} onClick={() => props.setForm('Edit Profile')}>
      Edit Profile
    </MenuItem>
    <MenuItem className={styles.menuItem} onClick={() => props.setForm('Payment Methods')}>
      Payment Methods
    </MenuItem>
    <MenuItem className={styles.menuItem} onClick={() => props.setForm('Notifications')}>
      Notifications
    </MenuItem>
    <MenuItem className={styles.menuItem} onClick={() => props.setForm('My Requests')}>
      My Requests
    </MenuItem>
    <MenuItem className={styles.menuItem} onClick={() => props.setForm('Privacy')}>
      Privacy
    </MenuItem>
    <MenuItem className={styles.menuItem} onClick={() => props.setForm('Privacy')}>
      Security
    </MenuItem>
    <MenuItem className={styles.menuItem} onClick={() => props.setForm('Privacy')}>
      Support
    </MenuItem>
    <MenuItem className={styles.menuItemMower} onClick={() => props.setForm('Privacy')}>
      Become a Mower
    </MenuItem>
  </MenuList>
);
AccountPage.propTypes = {
  setForm: PropTypes.func,
};
AccountPage.defaultProps = {
  setForm: PropTypes.func,
};
export default AccountPage;
