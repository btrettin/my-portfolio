import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Media from 'react-media';
import NavbarDesktop from './navbar-desktop';
import NavbarMobileComponent from './navbar-mobile/navbar-mobile';
import Device from '../devices';

export const Navbar = props => (
  <Media query={Device.tablet}>
    {matches =>
      (matches ? (
        <NavbarDesktopWithRouter
          user={props.user}
          isLoggedIn={props.isLoggedIn}
          setLoggedIn={props.setLoggedIn}
          setUser={props.setUser}
        />
      ) : (
        <NavbarMobileWithRouter user={props.user} isLoggedIn={props.isLoggedIn} />
      ))
    }
  </Media>
);

const NavbarDesktopWithRouter = withRouter(NavbarDesktop);
const NavbarMobileWithRouter = withRouter(NavbarMobileComponent);

Navbar.propTypes = {
  user: PropTypes.func,
  isLoggedIn: PropTypes.func,
  setLoggedIn: PropTypes.func,
  setUser: PropTypes.func,
};
Navbar.defaultProps = {
  user: PropTypes.func,
  isLoggedIn: PropTypes.func,
  setLoggedIn: PropTypes.func,
  setUser: PropTypes.func,
};
export default Navbar;
