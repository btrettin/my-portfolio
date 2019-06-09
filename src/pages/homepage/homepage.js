import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import styles from './homepage.module.css';
import HomePageHeading from './homepage-heading';

const HomePage = () => (
  <Grid container spacing={24} className={styles.homepageContainer}>
    <HomePageHeadingWithRouter />
  </Grid>
);

const HomePageHeadingWithRouter = withRouter(HomePageHeading);

HomePageHeading.propTypes = {
  history: PropTypes.func,
};

HomePageHeading.defaultProps = {
  history: PropTypes.func,
};
export default HomePage;
