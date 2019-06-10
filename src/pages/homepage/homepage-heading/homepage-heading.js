import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import styles from './homepage-heading.module.css';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;

const HomePageHeading = props => (
  <Grid container sm={12} spacing={24} className={styles.homepageHeadingContainer}>
    <Grid container sm={12} spacing={24} className={styles.headingShadowContainer}>
      <Grid item sm={12} className={styles.headingHeader}>
        <h1 className={styles.header}>Lawn Nanny</h1>
      </Grid>
      <Grid item sm={12} className={styles.buttonContainer}>
        <ButtonDiv className={styles.buttonDiv}>
          <Button className={styles.requestButton} onClick={() => props.history.push('/pipeline')}>
            Make a Request
          </Button>
        </ButtonDiv>
      </Grid>
    </Grid>
  </Grid>
);

HomePageHeading.contextTypes = {
  history: PropTypes.func,
};
HomePageHeading.propTypes = {
  history: PropTypes.func,
};

HomePageHeading.defaultProps = {
  history: PropTypes.func,
};
export default HomePageHeading;
