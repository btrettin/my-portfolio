import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from './request-page.module.css';

const RequestPage = () => (
  <Grid container className={styles.container}>
    <Grid item xl={6} lg={8} md={10} sm={11} xs={12} className={styles.gridItem}>
      <Paper className={styles.paper}>sleep</Paper>
    </Grid>
  </Grid>
);
export default RequestPage;
