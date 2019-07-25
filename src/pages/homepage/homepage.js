import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from './homepage.module.css';

const HomePage = props => (
  <Grid container spacing={24} className={styles.homepageContainer}>
    <div className={styles.headerDiv}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}> Lawncare controlled at the comfort of your home </h1>
        <div className={styles.content}>
          <Button onClick={() => props.history.push('/RequestPage')} className={styles.startButton}>
            Request a Service
          </Button>
        </div>
      </div>
    </div>
  </Grid>
);
HomePage.propTypes = {
  history: PropTypes.func,
};
HomePage.defaultProps = {
  history: PropTypes.func,
};
export default HomePage;
