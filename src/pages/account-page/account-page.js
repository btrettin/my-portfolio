import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import UserMenu from './user-menu';
import Lbj from './steph.webp';
import styles from './account-page.module.css';

const AccountPage = () => (
  <Grid container className={styles.container}>
    <Grid item xl={11} lg={11} md={12} sm={12} xs={12} className={styles.gridItem}>
      <div className={styles.leftDiv}>
        <div className={styles.userImageDiv}>
          <Avatar className={styles.imageIcon} alt="Remy Sharp" src={Lbj} />
          <h1 className={styles.userHeader}>Stephen Curry </h1>
        </div>
        <div className={styles.tabsDiv}>
          <UserMenu />
        </div>
      </div>
      <div className={styles.contentDiv} />
    </Grid>
  </Grid>
);
export default AccountPage;
