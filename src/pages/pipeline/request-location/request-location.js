import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import styles from './request-location.module.css';
import BreadcrumbComponent from '../../../components/breadcrumb';

export const RequestLocation = (props) => {
  if (props.pageInProgress < 2) {
    return <Redirect to="/pipeline/requestInformation" />;
  }
  return (
    <Grid
      md={9}
      lg={8}
      xl={7}
      alignItems="center"
      alignContent="center"
      justify="center"
      container
      spacing={24}
      className={styles.grid}
      verticalAlign="middle"
    >
      <Grid item sm={12} className={styles.breadRow}>
        <BreadcrumbComponent selection={props.pageInProgress} current={2} />
      </Grid>
      <Grid item sm={12} className={styles.locationRow}>
        {'insert form here'}
      </Grid>
    </Grid>
  );
};
RequestLocation.propTypes = {
  pageInProgress: PropTypes.number,
};

RequestLocation.defaultProps = {
  pageInProgress: 0,
  requestInProgress: 0,
  history: PropTypes.func,
};
export default RequestLocation;
