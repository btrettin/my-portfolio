import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import styles from './navbar.module.css';

export const Navbar = () => (
  <AppBar position="static" className={styles.Menu}>
    <div className={styles.leftMenuDiv}>
      <Link to="/HomePage">
        <Button className={styles.button}>Home</Button>
      </Link>
      <Button className={styles.button}>About Me</Button>
      <Button className={styles.button}>Projects</Button>
      <Button className={styles.button}>Contact</Button>
    </div>
    <div className={styles.rightMenuDiv} />
  </AppBar>
);

export default Navbar;
