import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styles from './navbar-desktop.module.css';
import RegisterModal from '../../../containers/connected-register';
import LoginModal from '../../../containers/connected-login';

export const NavbarDesktop = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <AppBar position="static" className={styles.Menu}>
      <div className={styles.leftMenuDiv}>
        <Link to="/HomePage" className={styles.button}>
          <Button className={styles.homeButton}>LawnNanny</Button>
        </Link>
      </div>
      <div className={styles.rightMenuDiv}>
        {props.isLoggedIn ? (
          <div>
            <IconButton onClick={handleClick} className={styles.accountButton}>
              <AccountIcon className={styles.accountIcon} />
            </IconButton>
            <Menu
              className={styles.menu}
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem className={styles.menuItem} onClick={handleClose}>
                Account
              </MenuItem>
              <MenuItem className={styles.menuItem} onClick={handleClose}>
                My Requests
              </MenuItem>
              <MenuItem className={styles.menuItem} onClick={handleClose}>
                About
              </MenuItem>
              <MenuItem className={styles.menuItem} onClick={handleClose}>
                Help
              </MenuItem>
              <MenuItem className={styles.menuItem} onClick={handleClose}>
                Invite Friends
              </MenuItem>
              <MenuItem className={styles.menuItem} onClick={handleClose}>
                Learn More
              </MenuItem>
              <MenuItem className={styles.buttonMenuItem}>
                <Button
                  className={styles.itemButton}
                  onClick={() => {
                    handleClose();
                    props.setLoggedIn(false);
                    props.setUser(null);
                  }}
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <React.Fragment>
            <div className={styles.loginDiv}>
              <LoginModal />
            </div>
            <div className={styles.registerDiv}>
              <RegisterModal />
            </div>
          </React.Fragment>
        )}
      </div>
    </AppBar>
  );
};

NavbarDesktop.propTypes = {
  isLoggedIn: PropTypes.func,
  setLoggedIn: PropTypes.func,
  setUser: PropTypes.func,
};
NavbarDesktop.defaultProps = {
  isLoggedIn: PropTypes.func,
  setLoggedIn: PropTypes.func,
  setUser: PropTypes.func,
};
export default NavbarDesktop;
