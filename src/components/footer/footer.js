import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Fb from './fb.png';
import Insta from './insta.png';
import Twitter from './twitter.png';
import Yt from './yt.png';
import Pin from './pin.png';
import styles from './footer.module.css';

const HomePage = () => (
  <Grid container className={styles.footerContainer}>
    <Grid item xl={8} lg={9} md={11} className={styles.gridItem}>
      <div className={styles.footerTop}>
        <div className={styles.menus}>
          <MenuList>
            <MenuItem className={styles.menuItemTop}>LawnNanny</MenuItem>

            <MenuItem className={styles.menuItem}>Help</MenuItem>
            <MenuItem className={styles.menuItem}>Policies</MenuItem>
            <MenuItem className={styles.menuItem}>Careers</MenuItem>
            <MenuItem className={styles.menuItem}>Accessibility</MenuItem>
            <MenuItem className={styles.menuItem}>News</MenuItem>
            <MenuItem className={styles.menuItem}>History</MenuItem>
            <MenuItem className={styles.menuItem}>Support</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem className={styles.menuItemTop}>Learn More</MenuItem>

            <MenuItem className={styles.menuItem}>How Lawn Nanny Works</MenuItem>
            <MenuItem className={styles.menuItem}>Becoming a Mower</MenuItem>
            <MenuItem className={styles.menuItem}>Trust and Safety</MenuItem>
            <MenuItem className={styles.menuItem}>Forums</MenuItem>
            <MenuItem className={styles.menuItem}>Work with Us</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem className={styles.menuItemTop}>Locations</MenuItem>

            <MenuItem className={styles.menuItem}>Des Moines, IA</MenuItem>
            <MenuItem className={styles.menuItem}>Iowa City, IA</MenuItem>
            <MenuItem className={styles.menuItem}>Minneapolis, MN</MenuItem>
            <MenuItem className={styles.menuItem}>Kansas City, MO</MenuItem>
            <MenuItem className={styles.menuItem}>Omaha, NE</MenuItem>
            <MenuItem className={styles.menuItem}>Chicago, IL</MenuItem>
            <MenuItem className={styles.menuItem}>St Louis, MO</MenuItem>
            <MenuItem className={styles.menuItem}>Lincoln, NE</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem className={styles.menuItemTop}>More Locations</MenuItem>

            <MenuItem className={styles.menuItem}>Des Moines, IA</MenuItem>
            <MenuItem className={styles.menuItem}>Iowa City, IA</MenuItem>
            <MenuItem className={styles.menuItem}>Minneapolis, MN</MenuItem>
            <MenuItem className={styles.menuItem}>Kansas City, MO</MenuItem>
            <MenuItem className={styles.menuItem}>Omaha, NE</MenuItem>
            <MenuItem className={styles.menuItem}>Chicago, IL</MenuItem>
            <MenuItem className={styles.menuItem}>St Louis, MO</MenuItem>
            <MenuItem className={styles.menuItem}>Lincoln, NE</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem className={styles.menuItemTop}>Terms of Service</MenuItem>
            <MenuItem className={styles.menuItemTop}>Map</MenuItem>
            <MenuItem className={styles.menuItemTop}>Privacy</MenuItem>
            <MenuItem className={styles.menuItemTop}>FAQ</MenuItem>
          </MenuList>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div>
          <h1 className={styles.copyright}>Copyright @2019 LawnNanny. All Rights Reserved.</h1>
        </div>
        <div className={styles.connectDiv}>
          <h1 className={styles.connectHeader}> Connect </h1>
          <IconButton className={styles.fb}>
            <Avatar src={Fb} />
          </IconButton>
          <IconButton className={styles.insta}>
            <Avatar src={Insta} />
          </IconButton>
          <IconButton className={styles.tw}>
            <Avatar src={Twitter} />
          </IconButton>
          <IconButton className={styles.yt}>
            <Avatar src={Yt} />
          </IconButton>
          <IconButton className={styles.pin}>
            <Avatar src={Pin} />
          </IconButton>
        </div>
      </div>
    </Grid>
  </Grid>
);

HomePage.propTypes = {};
HomePage.defaultProps = {};
export default HomePage;
