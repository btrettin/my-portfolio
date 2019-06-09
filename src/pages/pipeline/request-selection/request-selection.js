import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import RequestOptionComponent from './request-option';
import BreadcrumbComponent from '../../../components/breadcrumb';
import styles from './request-selection.module.css';
import mower from './mower.png';

export const RequestSelection = props => (
  <Grid
    md={9}
    lg={8}
    xl={7}
    alignItems="center"
    alignContent="center"
    justify="center"
    className={styles.grid}
    verticalAlign="middle"
  >
    <Grid item className={styles.pipelineSegment}>
      <BreadcrumbComponent selection={props.pageInProgress} current={0} />
    </Grid>
    <Grid item className={styles.headerSegment}>
      <h1 className={styles.header}>Choose Your Service</h1>
      <h3 className={styles.subHeader}>Choose a Service for someone to perform</h3>
    </Grid>

    <Grid item className={styles.buttonSegment}>
      <RequestOptionComponent
        className={styles.buttonComponent}
        imageURL={mower}
        title="Lawn Mowing"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Lawn Mowing');
        }}
      />
    </Grid>
  </Grid>
);

RequestSelection.propTypes = {
  pageInProgress: PropTypes.number,
  setTypeOfRequest: PropTypes.func,
  requestInProgress: PropTypes.number,
};

RequestSelection.defaultProps = {
  pageInProgress: 0,
  setTypeOfRequest: PropTypes.func,
  requestInProgress: 0,
};

export default RequestSelection;
