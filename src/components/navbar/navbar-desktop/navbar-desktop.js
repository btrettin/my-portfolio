import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import styles from './navbar-desktop.module.css';
import RegisterModal from '../../../containers/connected-register';
import LoginModal from '../../../containers/connected-login';

export const NavbarDesktop = () => (
  <AppBar position="static" className={styles.Menu}>
    <div className={styles.leftMenuDiv}>
      <Link to="/HomePage" className={styles.button}>
        <Button className={styles.homeButton}>LawnNanny</Button>
      </Link>
    </div>
    <div className={styles.rightMenuDiv}>
      <div className={styles.loginDiv}>
        <LoginModal />
      </div>
      <div className={styles.registerDiv}>
        <RegisterModal />
      </div>
    </div>
  </AppBar>
);

export default NavbarDesktop;
