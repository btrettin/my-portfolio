import React from 'react';
import { withRouter } from 'react-router';
import Media from 'react-media';
import NavbarDesktop from './navbar-desktop';
import NavbarMobileComponent from './navbar-mobile/navbar-mobile';
import Device from '../devices';

export const Navbar = () => (
  <Media query={Device.tablet}>
    {matches => (matches ? <NavbarDesktopWithRouter /> : <NavbarMobileWithRouter />)}
  </Media>
);

const NavbarDesktopWithRouter = withRouter(NavbarDesktop);
const NavbarMobileWithRouter = withRouter(NavbarMobileComponent);

export default Navbar;
