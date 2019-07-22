import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import AccountIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Auth } from 'aws-amplify';
import styles from './navbar-desktop.module.css';
import Lbj from './Lbj2.jpg';
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
  function handleAccount() {
    handleClose();
    props.history.push('/AccountPage');
  }
  function handleLogout() {
    try {
      Auth.signOut();
      handleClose();
      props.setLoggedIn(false);
      props.setUser(null);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AppBar
      position="static"
      className={props.location.pathname === '/HomePage' ? styles.menuHomepage : styles.menu}
    >
      <div className={styles.leftMenuDiv}>
        <Link to="/HomePage" className={styles.button}>
          <Button
            className={
              props.location.pathname === '/HomePage' ? styles.homeButton : styles.greenHomeButton
            }
          >
            LawnNanny
          </Button>
        </Link>
      </div>
      <div className={styles.rightMenuDiv}>
        {props.isLoggedIn ? (
          <div>
            <IconButton onClick={handleClick} className={styles.accountButton}>
              <img src={Lbj} alt="Avatar" className={styles.imageIcon} />
              {/* A JSX comment   // <AccountIcon className={styles.accountIcon} /> */}
            </IconButton>
            <Menu
              className={styles.userMenu}
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
              <MenuItem className={styles.menuItem} onClick={handleAccount}>
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
                <Button className={styles.itemButton} onClick={() => handleLogout()}>
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <React.Fragment>
            <div className={styles.loginDiv}>
              <LoginWithRouter />
            </div>
            <div className={styles.registerDiv}>
              <RegisterWithRouter />
            </div>
          </React.Fragment>
        )}
      </div>
    </AppBar>
  );
};

const LoginWithRouter = withRouter(LoginModal);
const RegisterWithRouter = withRouter(RegisterModal);

NavbarDesktop.propTypes = {
  history: PropTypes.func,
  location: PropTypes.func,
  isLoggedIn: PropTypes.func,
  setLoggedIn: PropTypes.func,
  setUser: PropTypes.func,
};
NavbarDesktop.defaultProps = {
  history: PropTypes.func,
  location: PropTypes.func,
  isLoggedIn: PropTypes.func,
  setLoggedIn: PropTypes.func,
  setUser: PropTypes.func,
};
export default NavbarDesktop;
