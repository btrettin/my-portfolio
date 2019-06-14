import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './navbar.module.css';

const HomeIcon = props => (
  <SvgIcon {...props} className={styles.homeIcon}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

export const Navbar = () => (
  <AppBar position="static" className={styles.Menu}>
    <div className={styles.leftMenuDiv}>
      <Link to="/HomePage">
        <IconButton color="inherit" aria-label="Menu">
          <HomeIcon />
        </IconButton>
      </Link>
    </div>
  </AppBar>
);

export default Navbar;
